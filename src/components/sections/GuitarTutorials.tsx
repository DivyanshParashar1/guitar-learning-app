import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Clock, Star, FileText } from "lucide-react";
import { useState } from "react";
import VideoPlayer from "@/components/VideoPlayer";
import NotesViewer from "@/components/NotesViewer";
import { useChatbotContext } from "@/contexts/ChatbotContext";

const tutorials = [
  {
    id: 1,
    title: "Basic Chord Progressions",
    description: "Learn the most common chord progressions used in popular music",
    duration: "44 sec",
    difficulty: "Beginner",
    rating: 4.8,
    thumbnail: "🎸",
    videoUrl: "https://youtu.be/0A8Ob8zsWtM?si=gI-CV1Z-xzNUN9DY", // Khairiyat Piano Cover by Nakshatra Joshi
    notes: `# Basic Chord Progressions

## Overview
Learn the fundamental chord progressions that form the backbone of popular music. These progressions are used in countless songs across all genres.

## Key Concepts

### The I-V-vi-IV Progression
This is arguably the most popular chord progression in Western music:
- **I** - Tonic (home chord)
- **V** - Dominant (creates tension)
- **vi** - Relative minor (adds emotion)
- **IV** - Subdominant (provides resolution)

### Common Keys for Guitar
- **Key of C**: C - G - Am - F
- **Key of G**: G - D - Em - C
- **Key of D**: D - A - Bm - G

## Practice Tips
1. Start with simple strumming patterns
2. Focus on clean chord transitions
3. Practice with a metronome
4. Try different rhythmic patterns

> **Pro Tip**: Master these progressions in different keys to unlock hundreds of songs!

## Song Examples
- "Let It Be" - The Beatles
- "Don't Stop Believin'" - Journey
- "Someone Like You" - Adele
- "With or Without You" - U2

## Next Steps
Once comfortable with basic progressions, explore:
- Secondary dominants
- Modal interchange
- Jazz progressions
- Extended chords (7ths, 9ths, etc.)
`
  },
  {
    id: 2,
    title: "Basic Song in Guitar Using Chords and Strings",
    description: "Learn to play complete songs using fundamental chords and string techniques",
    duration: "1 min",
    difficulty: "Beginner",
    rating: 4.9,
    thumbnail: "🎵",
    videoUrl: "https://youtu.be/7Rb2CiXGsR0", // Guitar fingerpicking tutorial
    notes: `# Basic Song in Guitar Using Chords and Strings

## Introduction
Learn how to play complete songs by combining basic chords with simple string techniques. This tutorial focuses on practical application of fundamental guitar skills.

## Essential Chords for Songs
Master these basic open chords:
- **G Major**: Most common and versatile chord
- **C Major**: Smooth transition chord
- **D Major**: Perfect for key changes
- **Em (E minor)**: Adds emotional depth
- **Am (A minor)**: Creates beautiful progressions

## Basic Chord Progression
Most songs use simple progressions like:
\`\`\`
G - C - D - G (Classic country/folk)
C - G - Am - F (Pop progression)
Em - C - G - D (Emotional ballad)
\`\`\`

## String Techniques for Beginners

### Simple Strumming Patterns
1. **Down-Down-Up-Up-Down-Up** (Most versatile)
2. **Down-Down-Down-Down** (For slow songs)
3. **Down-Up-Down-Up** (Medium tempo songs)

### Basic Fingerpicking
- **Thumb**: Bass strings (E, A, D)
- **Fingers**: Melody strings (G, B, E)

## Song Structure Basics
Most songs follow this pattern:
1. **Intro** - Simple chord progression
2. **Verse** - Tell the story
3. **Chorus** - Memorable hook
4. **Bridge** - Musical break
5. **Outro** - Conclusion

## Practice Tips
1. Start with 2-chord songs
2. Master chord transitions slowly
3. Keep steady rhythm with metronome
4. Practice chord changes without strumming first
5. Focus on clean chord sounds

## Easy Songs to Start With
- "Wonderwall" - Oasis (G, C, D, Em)
- "Horse with No Name" - America (Em, D)
- "Eleanor Rigby" - Beatles (Em, C)
- "Bad Moon Rising" - CCR (D, A, G)

## Common Beginner Mistakes
- ❌ Rushing through chord changes
- ❌ Not pressing strings firmly enough
- ❌ Muting adjacent strings accidentally
- ❌ Irregular strumming rhythm

> **Pro Tip**: Master 4-5 basic chords and you can play hundreds of songs!
`
  },
  {
    id: 3,
    title: "Strumming Patterns Tutorial",
    description: "Master essential strumming patterns and rhythm techniques for acoustic guitar",
    duration: "46 sec",
    difficulty: "Beginner",
    rating: 4.7,
    thumbnail: "⚡",
    videoUrl: "https://youtu.be/6HaegfWW-fM", // Power chords tutorial
    notes: `# Strumming Patterns Tutorial

## Introduction
Strumming patterns are the rhythmic foundation of guitar playing. Master these patterns to bring life and groove to your chord progressions.

## Basic Strumming Notation
- **D** = Down strum (towards the floor)
- **U** = Up strum (towards the ceiling)
- **X** = Muted strum (palm touch strings)

## Essential Strumming Patterns

### Pattern 1: Basic Down Strums
\`\`\`
Count: 1   2   3   4
Strum: D   D   D   D
\`\`\`
*Perfect for slow ballads and learning chord changes*

### Pattern 2: Down-Up Pattern
\`\`\`
Count: 1   &   2   &   3   &   4   &
Strum: D   U   D   U   D   U   D   U
\`\`\`
*Most versatile pattern for medium tempo songs*

### Pattern 3: Folk Strum
\`\`\`
Count: 1   &   2   &   3   &   4   &
Strum: D       D   U   D   U   D   U
\`\`\`
*Great for folk, country, and acoustic rock*

### Pattern 4: Pop Rhythm
\`\`\`
Count: 1   &   2   &   3   &   4   &
Strum: D   U   D   U   X   U   D   U
\`\`\`
*Modern pop and contemporary songs*

## Advanced Techniques

### Palm Muting
- Rest the side of your picking hand on the strings near the bridge
- Creates a "chunky" percussive sound
- Perfect for funk and reggae styles

### Accent Strumming
- Strum harder on certain beats for emphasis
- Usually accent beats 1 and 3 in 4/4 time
- Creates dynamic interest in your playing

### Syncopated Rhythms
- Emphasize off-beats (the "&" counts)
- Common in reggae, ska, and Latin music
- Adds groove and complexity

## Practice Tips

### Start Slow
1. Use a metronome at 60 BPM
2. Focus on clean up-strums
3. Keep your wrist relaxed
4. Gradually increase tempo

### Hand Position
- **Picking Hand**: Relaxed wrist, slight angle
- **Fretting Hand**: Keep thumb behind neck
- **Posture**: Sit up straight, guitar at comfortable angle

## Common Mistakes to Avoid
- ❌ Tensing up your strumming arm
- ❌ Hitting only the bottom strings on up-strums
- ❌ Irregular timing between strums
- ❌ Gripping the pick too tightly

## Songs to Practice With
- **"Wonderwall" - Oasis**: D-D-U-D-U pattern
- **"Horse with No Name" - America**: Simple down strums
- **"Brown Eyed Girl" - Van Morrison**: Folk strum pattern
- **"Hey Ya!" - OutKast**: Syncopated pop rhythm

## Rhythm Exercises
1. **Metronome Practice**: Play patterns with different tempos
2. **Chord Progression Practice**: Use patterns with G-C-D progression
3. **Muted Strumming**: Practice patterns without pressing frets
4. **Dynamic Control**: Vary volume within patterns

> **Pro Tip**: Your right hand (strumming) creates the groove - it's just as important as the left hand!

## Next Steps
- Learn to combine multiple patterns in one song
- Practice with different time signatures (3/4, 6/8)
- Experiment with fingerstyle patterns
- Add percussive elements to your strumming
`
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
  const [selectedNotes, setSelectedNotes] = useState<{ title: string; difficulty: string; notes: string } | null>(null);
  const { setTopicContext } = useChatbotContext();

  const handleVideoSelect = (tutorial: typeof tutorials[0]) => {
    setSelectedVideo({ url: tutorial.videoUrl, title: tutorial.title });
    // Set context for the chatbot
    setTopicContext({
      title: tutorial.title,
      description: tutorial.description,
      notes: tutorial.notes,
      currentVideo: tutorial.videoUrl
    });
  };

  const handleNotesSelect = (tutorial: typeof tutorials[0]) => {
    setSelectedNotes({ 
      title: tutorial.title, 
      difficulty: tutorial.difficulty, 
      notes: tutorial.notes 
    });
    // Set context for the chatbot
    setTopicContext({
      title: tutorial.title,
      description: tutorial.description,
      notes: tutorial.notes
    });
  };

  const handleVideoClose = () => {
    setSelectedVideo(null);
    // Clear context when video is closed
    setTopicContext(null);
  };

  const handleNotesClose = () => {
    setSelectedNotes(null);
    // Clear context when notes are closed
    setTopicContext(null);
  };

  return (
    <>
      <VideoPlayer
        isOpen={!!selectedVideo}
        onClose={handleVideoClose}
        videoUrl={selectedVideo?.url || ""}
        title={selectedVideo?.title || ""}
      />
      
      <NotesViewer
        isOpen={!!selectedNotes}
        onClose={handleNotesClose}
        title={selectedNotes?.title || ""}
        difficulty={selectedNotes?.difficulty || ""}
        notes={selectedNotes?.notes || ""}
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

              <div className="flex gap-2">
                <Button 
                  variant="musical" 
                  className="flex-1 group-hover:scale-105 transition-transform duration-300"
                  onClick={() => handleVideoSelect(tutorial)}
                >
                  <Play className="w-4 h-4" />
                  Start Tutorial
                </Button>
                
                <Button 
                  variant="outline" 
                  className="flex-1 group-hover:scale-105 transition-transform duration-300"
                  onClick={() => handleNotesSelect(tutorial)}
                >
                  <FileText className="w-4 h-4" />
                  Notes
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
    </>
  );
};

export default GuitarTutorials;
