import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Clock, Zap } from "lucide-react";
import { useState } from "react";
import VideoPlayer from "@/components/VideoPlayer";

const pedalTutorials = [
  {
    id: 1,
    title: "Distortion & Overdrive",
    description: "Understanding the difference and how to use these essential effects",
    duration: "12 min",
    type: "Drive",
    difficulty: "Beginner",
    thumbnail: "🔥",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
  },
  {
    id: 2,
    title: "Delay & Echo Effects",
    description: "Create atmospheric soundscapes with delay and echo pedals",
    duration: "18 min",
    type: "Time-based",
    difficulty: "Intermediate",
    thumbnail: "🌊",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
  },
  {
    id: 3,
    title: "Reverb Fundamentals",
    description: "From subtle room reverb to massive cathedral sounds",
    duration: "16 min",
    type: "Ambient",
    difficulty: "Beginner",
    thumbnail: "⛪",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
  },
  {
    id: 4,
    title: "Modulation Magic",
    description: "Chorus, phaser, and flanger effects for dynamic sounds",
    duration: "25 min",
    type: "Modulation",
    difficulty: "Intermediate",
    thumbnail: "🌀",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
  },
  {
    id: 5,
    title: "Wah & Filter Pedals",
    description: "Expressive tone shaping with wah and filter effects",
    duration: "14 min",
    type: "Filter",
    difficulty: "Beginner",
    thumbnail: "🎭",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4"
  },
  {
    id: 6,
    title: "Stacking Pedals",
    description: "Advanced techniques for combining multiple effects pedals",
    duration: "28 min",
    type: "Advanced",
    difficulty: "Advanced",
    thumbnail: "🎛️",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
  }
];

const getTypeColor = (type: string) => {
  switch (type) {
    case "Drive": return "bg-red-500/20 text-red-400 border-red-500/30";
    case "Time-based": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
    case "Ambient": return "bg-purple-500/20 text-purple-400 border-purple-500/30";
    case "Modulation": return "bg-green-500/20 text-green-400 border-green-500/30";
    case "Filter": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
    case "Advanced": return "bg-guitar-amber/20 text-guitar-amber border-guitar-amber/30";
    default: return "bg-muted text-muted-foreground";
  }
};

const PedalTutorials = () => {
  const [selectedVideo, setSelectedVideo] = useState<{ url: string; title: string } | null>(null);

  return (
    <>
      <VideoPlayer
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        videoUrl={selectedVideo?.url || ""}
        title={selectedVideo?.title || ""}
      />
    <section className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
          Pedal Tutorials
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover the world of guitar effects pedals and learn how to craft your signature sound.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pedalTutorials.map((tutorial) => (
          <Card key={tutorial.id} className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300 group">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between mb-2">
                <div className="text-3xl mb-2">{tutorial.thumbnail}</div>
                <Badge variant="outline" className={getTypeColor(tutorial.type)}>
                  {tutorial.type}
                </Badge>
              </div>
              <CardTitle className="group-hover:text-primary transition-colors duration-300 text-lg">
                {tutorial.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-sm">
                {tutorial.description}
              </p>
              
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {tutorial.duration}
                </div>
                <div className="flex items-center gap-1">
                  <Zap className="w-4 h-4" />
                  {tutorial.difficulty}
                </div>
              </div>

              <Button 
                variant="musical" 
                size="sm" 
                className="w-full group-hover:scale-105 transition-transform duration-300"
                onClick={() => setSelectedVideo({ url: tutorial.videoUrl, title: tutorial.title })}
              >
                <Play className="w-4 h-4" />
                Watch Tutorial
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
    </>
  );
};

export default PedalTutorials;