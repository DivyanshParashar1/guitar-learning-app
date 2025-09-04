import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Volume2, VolumeX, RotateCcw } from "lucide-react";

const standardTuning = [
  { string: 1, note: "E", frequency: "329.63 Hz", color: "bg-red-500" },
  { string: 2, note: "B", frequency: "246.94 Hz", color: "bg-orange-500" },
  { string: 3, note: "G", frequency: "196.00 Hz", color: "bg-yellow-500" },
  { string: 4, note: "D", frequency: "146.83 Hz", color: "bg-green-500" },
  { string: 5, note: "A", frequency: "110.00 Hz", color: "bg-blue-500" },
  { string: 6, note: "E", frequency: "82.41 Hz", color: "bg-purple-500" },
];

const alternateTunings = [
  { name: "Drop D", tuning: "DADGBE", description: "Popular for rock and metal" },
  { name: "DADGAD", tuning: "DADGAD", description: "Celtic and folk music" },
  { name: "Open G", tuning: "DGDGBD", description: "Blues and slide guitar" },
  { name: "Open E", tuning: "EBEG#BE", description: "Blues and bottleneck" },
];

const GuitarTuning = () => {
  const [isPlaying, setIsPlaying] = useState<number | null>(null);
  const [selectedTuning, setSelectedTuning] = useState("Standard");

  const playNote = (stringNumber: number) => {
    setIsPlaying(stringNumber);
    // Simulate audio playback
    setTimeout(() => setIsPlaying(null), 2000);
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
              <Button variant="outline" size="sm">
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
                  variant={isPlaying === string.string ? "hero" : "musical"}
                  size="sm"
                  onClick={() => playNote(string.string)}
                  disabled={isPlaying === string.string}
                >
                  {isPlaying === string.string ? (
                    <>
                      <Volume2 className="w-4 h-4 animate-pulse" />
                      Playing...
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
            
            <Button variant="hero" className="w-full mt-6">
              <Volume2 className="w-4 h-4" />
              Play All Strings
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