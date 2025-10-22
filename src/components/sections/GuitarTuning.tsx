import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Volume2, VolumeX, RotateCcw } from "lucide-react";

const standardTuning = [
  { string: 1, note: "E", frequency: "329.63 Hz", color: "bg-red-500", audioFile: "/guitar-strings/E1.mp3" },
  { string: 2, note: "B", frequency: "246.94 Hz", color: "bg-orange-500", audioFile: "/guitar-strings/B.mp3" },
  { string: 3, note: "G", frequency: "196.00 Hz", color: "bg-yellow-500", audioFile: "/guitar-strings/G.mp3" },
  { string: 4, note: "D", frequency: "146.83 Hz", color: "bg-green-500", audioFile: "/guitar-strings/D.mp3" },
  { string: 5, note: "A", frequency: "110.00 Hz", color: "bg-blue-500", audioFile: "/guitar-strings/A.mp3" },
  { string: 6, note: "E", frequency: "82.41 Hz", color: "bg-purple-500", audioFile: "/guitar-strings/E2.mp3" },
];

const alternateTunings = [
  { name: "Drop D", tuning: "DADGBE", description: "Popular for rock and metal" },
  { name: "DADGAD", tuning: "DADGAD", description: "Celtic and folk music" },
  { name: "Open G", tuning: "DGDGBD", description: "Blues and slide guitar" },
  { name: "Open E", tuning: "EBEG#BE", description: "Blues and bottleneck" },
];

const GuitarTuning = () => {
  const [isPlaying, setIsPlaying] = useState<number | null>(null);
  const [isPlayingAll, setIsPlayingAll] = useState(false);
  const [selectedTuning, setSelectedTuning] = useState("Standard");
  const audioRefs = useRef<{ [key: number]: HTMLAudioElement }>({});

  // Initialize audio objects
  useEffect(() => {
    standardTuning.forEach((string) => {
      if (!audioRefs.current[string.string]) {
        console.log(`Initializing audio for string ${string.string}: ${string.audioFile}`); // Debug log
        audioRefs.current[string.string] = new Audio(string.audioFile);
        audioRefs.current[string.string].preload = 'auto';
        
        // Add error handling for audio loading
        audioRefs.current[string.string].addEventListener('error', (e) => {
          console.error(`Error loading audio for string ${string.string}:`, e);
        });
        
        audioRefs.current[string.string].addEventListener('canplaythrough', () => {
          console.log(`Audio ready for string ${string.string}`);
        });
      }
    });
  }, []);

  const playNote = async (stringNumber: number) => {
    try {
      // Stop all other audio first to prevent overlapping
      stopAllNotes();
      
      setIsPlaying(stringNumber);
      const audio = audioRefs.current[stringNumber];
      
      // Reset audio to beginning
      audio.currentTime = 0;
      
      await audio.play();
      
      // Listen for audio end to reset playing state
      const handleEnd = () => {
        setIsPlaying(null);
        audio.removeEventListener('ended', handleEnd);
      };
      
      audio.addEventListener('ended', handleEnd);
      
      // Fallback timeout in case audio doesn't fire 'ended' event
      setTimeout(() => {
        if (audio.paused) {
          setIsPlaying(null);
        }
      }, 3000);
    } catch (error) {
      console.error('Error playing audio:', error);
      setIsPlaying(null);
    }
  };

  const stopNote = (stringNumber: number) => {
    const audio = audioRefs.current[stringNumber];
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(null);
    }
  };

  const stopAllNotes = () => {
    standardTuning.forEach((string) => {
      const audio = audioRefs.current[string.string];
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    });
    setIsPlaying(null);
  };

  const handleNoteToggle = (stringNumber: number) => {
    if (isPlaying === stringNumber) {
      stopNote(stringNumber);
    } else {
      playNote(stringNumber);
    }
  };

  const playAllStrings = async () => {
    console.log("Play all strings clicked"); // Debug log
    if (isPlayingAll) return;
    
    setIsPlayingAll(true);
    
    try {
      for (let i = 1; i <= 6; i++) {
        console.log(`Playing string ${i}`); // Debug log
        
        // Stop all other audio first
        stopAllNotes();
        
        // Set current string as playing
        setIsPlaying(i);
        const audio = audioRefs.current[i];
        
        if (audio) {
          audio.currentTime = 0;
          await audio.play();
          
          // Wait for audio to finish or timeout
          await new Promise(resolve => {
            const handleEnd = () => {
              audio.removeEventListener('ended', handleEnd);
              resolve(void 0);
            };
            
            audio.addEventListener('ended', handleEnd);
            
            // Timeout after 3 seconds
            setTimeout(() => {
              audio.removeEventListener('ended', handleEnd);
              resolve(void 0);
            }, 3000);
          });
          
          // Small delay between strings
          await new Promise(resolve => setTimeout(resolve, 500));
        }
      }
    } catch (error) {
      console.error('Error in playAllStrings:', error);
    } finally {
      setIsPlaying(null);
      setIsPlayingAll(false);
    }
  };

  const stopAllStrings = () => {
    stopAllNotes();
    setIsPlayingAll(false);
  };

  const handlePlayAllToggle = () => {
    console.log("handlePlayAllToggle called, isPlayingAll:", isPlayingAll); // Debug log
    if (isPlayingAll) {
      stopAllStrings();
    } else {
      playAllStrings();
    }
  };

  const handleReset = () => {
    // Stop all audio
    stopAllNotes();
    setIsPlayingAll(false);
    
    // Reset tuning selection
    setSelectedTuning("Standard");
    
    // Optional: Show feedback to user
    console.log("Guitar tuner reset - all audio stopped and tuning set to Standard");
  };

  return (
    <section className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
          Guitar Tuning
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Keep your guitar perfectly tuned with our interactive tuning guide and reference tones.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Standard Tuning Display */}
        <Card className="bg-gradient-card border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Standard Tuning (E-A-D-G-B-E)</span>
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleReset}
                className="hover:bg-destructive/10 hover:border-destructive/30 hover:text-destructive transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                Reset
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {standardTuning.map((string) => (
              <div
                key={string.string}
                className="flex items-center justify-between p-4 rounded-lg bg-background/50 border border-border/30 hover:bg-background/70 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-6 h-6 rounded-full ${string.color} flex items-center justify-center text-white text-sm font-bold`}>
                    {string.string}
                  </div>
                  <div>
                    <div className="font-semibold text-lg">{string.note}</div>
                    <div className="text-xs text-muted-foreground">{string.frequency}</div>
                  </div>
                </div>
                
                <Button
                  variant={isPlaying === string.string ? "destructive" : "musical"}
                  size="sm"
                  onClick={() => handleNoteToggle(string.string)}
                  disabled={isPlayingAll}
                >
                  {isPlaying === string.string ? (
                    <>
                      <VolumeX className="w-4 h-4" />
                      Stop
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-4 h-4" />
                      Play
                    </>
                  )}
                </Button>
              </div>
            ))}
            
            <Button 
              variant={isPlayingAll ? "destructive" : "hero"}
              className="w-full mt-6"
              onClick={handlePlayAllToggle}
              disabled={isPlaying !== null && !isPlayingAll}
            >
              {isPlayingAll ? (
                <>
                  <VolumeX className="w-4 h-4" />
                  Stop All Strings
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4" />
                  Play All Strings
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Alternate Tunings */}
        <Card className="bg-gradient-card border-border/50">
          <CardHeader>
            <CardTitle>Alternate Tunings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {alternateTunings.map((tuning) => (
              <div
                key={tuning.name}
                className="p-4 rounded-lg bg-background/50 border border-border/30 hover:bg-background/70 transition-colors cursor-pointer"
                onClick={() => setSelectedTuning(tuning.name)}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">{tuning.name}</h3>
                  <Badge variant="outline" className="text-xs">
                    {tuning.tuning}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{tuning.description}</p>
              </div>
            ))}
            
            <div className="mt-6 p-4 bg-guitar-amber/10 border border-guitar-amber/20 rounded-lg">
              <h4 className="font-semibold text-guitar-amber mb-2">Tuning Tips</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Always tune up to pitch, not down</li>
                <li>• Use a tuner for best accuracy</li>
                <li>• Let strings settle after changing tuning</li>
                <li>• Check tuning regularly while playing</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default GuitarTuning;