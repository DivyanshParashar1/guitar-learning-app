import { useState, useEffect, useRef, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mic, MicOff, Volume2, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface TunerNote {
  note: string;
  frequency: number;
  octave: number;
}

const standardGuitarNotes: TunerNote[] = [
  { note: "E", frequency: 82.41, octave: 2 },   // 6th string
  { note: "A", frequency: 110.00, octave: 2 },  // 5th string
  { note: "D", frequency: 146.83, octave: 3 },  // 4th string
  { note: "G", frequency: 196.00, octave: 3 },  // 3rd string
  { note: "B", frequency: 246.94, octave: 3 },  // 2nd string
  { note: "E", frequency: 329.63, octave: 4 },  // 1st string
];

const noteFrequencies: { [key: string]: number } = {
  "C": 16.35, "C#": 17.32, "D": 18.35, "D#": 19.45, "E": 20.60, "F": 21.83,
  "F#": 23.12, "G": 24.50, "G#": 25.96, "A": 27.50, "A#": 29.14, "B": 30.87
};

const GuitarTuner = () => {
  const [isListening, setIsListening] = useState(false);
  const [detectedNote, setDetectedNote] = useState<string>("");
  const [detectedFrequency, setDetectedFrequency] = useState<number>(0);
  const [cents, setCents] = useState<number>(0);
  const [error, setError] = useState<string>("");
  const [isInTune, setIsInTune] = useState(false);
  
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const microphoneRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const animationRef = useRef<number>();

  // Autocorrelation function for pitch detection
  const autocorrelate = useCallback((buffer: Float32Array, sampleRate: number): number => {
    const SIZE = buffer.length;
    const MAX_SAMPLES = Math.floor(SIZE / 2);
    let bestOffset = -1;
    let bestCorrelation = 0;
    let rms = 0;
    let foundGoodCorrelation = false;
    const correlations = new Array(MAX_SAMPLES);

    // Calculate RMS
    for (let i = 0; i < SIZE; i++) {
      const val = buffer[i];
      rms += val * val;
    }
    rms = Math.sqrt(rms / SIZE);
    
    // Not enough signal
    if (rms < 0.01) return -1;

    // Calculate autocorrelation
    let lastCorrelation = 1;
    for (let offset = 0; offset < MAX_SAMPLES; offset++) {
      let correlation = 0;

      for (let i = 0; i < MAX_SAMPLES; i++) {
        correlation += Math.abs((buffer[i]) - (buffer[i + offset]));
      }
      correlation = 1 - (correlation / MAX_SAMPLES);
      correlations[offset] = correlation;

      if (correlation > 0.9 && correlation > lastCorrelation) {
        foundGoodCorrelation = true;
        if (correlation > bestCorrelation) {
          bestCorrelation = correlation;
          bestOffset = offset;
        }
      } else if (foundGoodCorrelation) {
        const shift = (correlations[bestOffset + 1] - correlations[bestOffset - 1]) / correlations[bestOffset];
        return sampleRate / (bestOffset + (8 * shift));
      }
      lastCorrelation = correlation;
    }
    
    if (bestCorrelation > 0.01) {
      return sampleRate / bestOffset;
    }
    return -1;
  }, []);

  // Convert frequency to note name
  const frequencyToNote = useCallback((frequency: number): { note: string; octave: number; cents: number } => {
    const A4 = 440;
    const C0 = A4 * Math.pow(2, -4.75);
    
    if (frequency > 0) {
      const h = Math.round(12 * Math.log2(frequency / C0));
      const octave = Math.floor(h / 12);
      const n = h % 12;
      const noteNames = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
      const note = noteNames[n];
      
      const targetFreq = C0 * Math.pow(2, h / 12);
      const cents = Math.round(1200 * Math.log2(frequency / targetFreq));
      
      return { note, octave, cents };
    }
    return { note: "", octave: 0, cents: 0 };
  }, []);

  // Audio processing function
  const updatePitch = useCallback(() => {
    if (!analyserRef.current) return;

    const bufferLength = analyserRef.current.fftSize;
    const buffer = new Float32Array(bufferLength);
    analyserRef.current.getFloatTimeDomainData(buffer);

    const frequency = autocorrelate(buffer, audioContextRef.current!.sampleRate);
    
    if (frequency > 0) {
      const noteInfo = frequencyToNote(frequency);
      setDetectedFrequency(Math.round(frequency * 100) / 100);
      setDetectedNote(`${noteInfo.note}${noteInfo.octave}`);
      setCents(noteInfo.cents);
      
      // Check if in tune (within 10 cents)
      setIsInTune(Math.abs(noteInfo.cents) <= 10);
    }

    if (isListening) {
      animationRef.current = requestAnimationFrame(updatePitch);
    }
  }, [autocorrelate, frequencyToNote, isListening]);

  // Start microphone
  const startListening = async () => {
    try {
      setError("");
      
      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: {
          echoCancellation: false,
          autoGainControl: false,
          noiseSuppression: false
        } 
      });
      
      streamRef.current = stream;
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      analyserRef.current = audioContextRef.current.createAnalyser();
      microphoneRef.current = audioContextRef.current.createMediaStreamSource(stream);
      
      analyserRef.current.fftSize = 2048;
      analyserRef.current.minDecibels = -100;
      analyserRef.current.maxDecibels = -10;
      analyserRef.current.smoothingTimeConstant = 0.85;
      
      microphoneRef.current.connect(analyserRef.current);
      
      setIsListening(true);
    } catch (err) {
      setError("Microphone access denied. Please allow microphone access to use the tuner.");
      console.error("Error accessing microphone:", err);
    }
  };

  // Stop microphone
  const stopListening = () => {
    setIsListening(false);
    
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
    }
    
    if (audioContextRef.current) {
      audioContextRef.current.close();
    }
    
    audioContextRef.current = null;
    analyserRef.current = null;
    microphoneRef.current = null;
    streamRef.current = null;
    
    setDetectedNote("");
    setDetectedFrequency(0);
    setCents(0);
    setIsInTune(false);
  };

  // Start pitch detection when listening starts
  useEffect(() => {
    if (isListening && analyserRef.current) {
      updatePitch();
    }
  }, [isListening, updatePitch]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopListening();
    };
  }, []);

  // Get tuning status color and message
  const getTuningStatus = () => {
    if (!detectedNote) return { color: "text-muted-foreground", message: "Play a note..." };
    
    if (isInTune) {
      return { color: "text-green-400", message: "In Tune!" };
    } else if (cents > 0) {
      return { color: "text-yellow-400", message: `${Math.abs(cents)} cents sharp` };
    } else {
      return { color: "text-yellow-400", message: `${Math.abs(cents)} cents flat` };
    }
  };

  const tuningStatus = getTuningStatus();

  return (
    <section className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
          Real-Time Guitar Tuner
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Use your device's microphone to tune your guitar in real-time with accurate pitch detection.
        </p>
      </div>

      {error && (
        <Alert className="border-red-500/20 bg-red-500/10">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription className="text-red-400">
            {error}
          </AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Main Tuner Display */}
        <Card className="bg-gradient-card border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Live Tuner</span>
              <Button
                variant={isListening ? "destructive" : "hero"}
                onClick={isListening ? stopListening : startListening}
                size="sm"
              >
                {isListening ? (
                  <>
                    <MicOff className="w-4 h-4" />
                    Stop
                  </>
                ) : (
                  <>
                    <Mic className="w-4 h-4" />
                    Start
                  </>
                )}
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Tuner Display */}
            <div className="text-center space-y-4">
              <div className="text-6xl font-bold">
                {detectedNote || "---"}
              </div>
              
              <div className="text-2xl text-muted-foreground">
                {detectedFrequency > 0 ? `${detectedFrequency} Hz` : "---"}
              </div>
              
              <div className={`text-lg font-medium ${tuningStatus.color}`}>
                {tuningStatus.message}
              </div>
            </div>

            {/* Tuning Meter */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Flat</span>
                <span>Perfect</span>
                <span>Sharp</span>
              </div>
              
              <div className="relative h-4 bg-background rounded-full border border-border/30">
                {/* Center line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-green-400 transform -translate-x-0.5"></div>
                
                {/* Tuning indicator */}
                {detectedNote && (
                  <div
                    className={`absolute top-1 bottom-1 w-2 rounded-full transform -translate-x-1/2 transition-all duration-150 ${
                      isInTune ? 'bg-green-400' : 'bg-yellow-400'
                    }`}
                    style={{
                      left: `${50 + (cents / 50) * 25}%`,
                    }}
                  ></div>
                )}
              </div>
              
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>-50¢</span>
                <span>0¢</span>
                <span>+50¢</span>
              </div>
            </div>

            {isListening && (
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                Listening...
              </div>
            )}
          </CardContent>
        </Card>

        {/* Guitar String Reference */}
        <Card className="bg-gradient-card border-border/50">
          <CardHeader>
            <CardTitle>Standard Tuning Reference</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {standardGuitarNotes.map((string, index) => {
              const stringNumber = 6 - index;
              const isCurrentNote = detectedNote === `${string.note}${string.octave}`;
              
              return (
                <div
                  key={index}
                  className={`flex items-center justify-between p-4 rounded-lg border transition-all ${
                    isCurrentNote 
                      ? 'bg-primary/20 border-primary/50' 
                      : 'bg-background/50 border-border/30'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${
                      stringNumber === 1 ? 'bg-red-500' :
                      stringNumber === 2 ? 'bg-orange-500' :
                      stringNumber === 3 ? 'bg-yellow-500' :
                      stringNumber === 4 ? 'bg-green-500' :
                      stringNumber === 5 ? 'bg-blue-500' : 'bg-purple-500'
                    }`}>
                      {stringNumber}
                    </div>
                    <div>
                      <div className="font-semibold text-lg">
                        {string.note}{string.octave}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {string.frequency} Hz
                      </div>
                    </div>
                  </div>
                  
                  {isCurrentNote && isInTune && (
                    <Badge variant="outline" className="bg-green-500/20 text-green-400 border-green-500/30">
                      In Tune
                    </Badge>
                  )}
                  
                  {isCurrentNote && !isInTune && (
                    <Badge variant="outline" className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                      {cents > 0 ? 'Sharp' : 'Flat'}
                    </Badge>
                  )}
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>

      {/* Instructions */}
      <Card className="bg-gradient-card border-border/50">
        <CardHeader>
          <CardTitle>How to Use</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="space-y-2">
              <div className="font-medium">1. Grant Microphone Access</div>
              <p className="text-muted-foreground">
                Click "Start" and allow your browser to access your microphone.
              </p>
            </div>
            <div className="space-y-2">
              <div className="font-medium">2. Play Single Notes</div>
              <p className="text-muted-foreground">
                Pluck one string at a time for the most accurate readings.
              </p>
            </div>
            <div className="space-y-2">
              <div className="font-medium">3. Tune Your Guitar</div>
              <p className="text-muted-foreground">
                Adjust your tuning pegs until the meter shows green and "In Tune!"
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default GuitarTuner;