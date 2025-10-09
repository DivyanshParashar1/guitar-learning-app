import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Clock, Star } from "lucide-react";
import { useState } from "react";
import VideoPlayer from "@/components/VideoPlayer";

const tutorials = [
  {
    id: 1,
    title: "Basic Chord Progressions",
    description: "Learn the most common chord progressions used in popular music",
    duration: "15 min",
    difficulty: "Beginner",
    rating: 4.8,
    thumbnail: "🎸",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  },
  {
    id: 2,
    title: "Fingerpicking Techniques",
    description: "Master fingerpicking patterns for folk and classical guitar",
    duration: "22 min",
    difficulty: "Intermediate",
    rating: 4.9,
    thumbnail: "🎵",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
  },
  {
    id: 3,
    title: "Power Chords & Rock Riffs",
    description: "Essential power chords and iconic rock riffs for electric guitar",
    duration: "18 min",
    difficulty: "Beginner",
    rating: 4.7,
    thumbnail: "⚡",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
  },
  {
    id: 4,
    title: "Advanced Soloing",
    description: "Scales, bending, and expressive techniques for lead guitar",
    duration: "35 min",
    difficulty: "Advanced",
    rating: 4.9,
    thumbnail: "🎶",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
  }
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Beginner": return "bg-green-500/20 text-green-400 border-green-500/30";
    case "Intermediate": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
    case "Advanced": return "bg-red-500/20 text-red-400 border-red-500/30";
    default: return "bg-muted text-muted-foreground";
  }
};

const GuitarTutorials = () => {
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
          Guitar Tutorials
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Master your guitar skills with our comprehensive video tutorials, from basic chords to advanced techniques.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tutorials.map((tutorial) => (
          <Card key={tutorial.id} className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300 group">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between mb-2">
                <div className="text-4xl mb-2">{tutorial.thumbnail}</div>
                <Badge variant="outline" className={getDifficultyColor(tutorial.difficulty)}>
                  {tutorial.difficulty}
                </Badge>
              </div>
              <CardTitle className="group-hover:text-primary transition-colors duration-300">
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
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  {tutorial.rating}
                </div>
              </div>

              <Button 
                variant="musical" 
                className="w-full group-hover:scale-105 transition-transform duration-300"
                onClick={() => setSelectedVideo({ url: tutorial.videoUrl, title: tutorial.title })}
              >
                <Play className="w-4 h-4" />
                Start Tutorial
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
    </>
  );
};

export default GuitarTutorials;