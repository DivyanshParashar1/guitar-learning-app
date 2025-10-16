import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Clock, Star, FileText } from "lucide-react";
import { useState } from "react";
import VideoPlayer from "@/components/VideoPlayer";
import NotesViewer from "@/components/NotesViewer";

const tutorials = [
  {
    id: 1,
    title: "Basic Chord Progressions",
    description: "Learn the most common chord progressions used in popular music",
    duration: "15 min",
    difficulty: "Beginner",
    rating: 4.8,
    thumbnail: "🎸",
    videoUrl: "https://youtu.be/gi9iY8ocLH4?list=RDgi9iY8ocLH4", // Khairiyat Piano Cover by Nakshatra Joshi
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
    title: "Fingerpicking Techniques",
    description: "Master fingerpicking patterns for folk and classical guitar",
    duration: "22 min",
    difficulty: "Intermediate",
    rating: 4.9,
    thumbnail: "🎵",
    videoUrl: "https://www.youtube.com/watch?v=jdGhHt1SDwg", // Guitar fingerpicking tutorial
    notes: `# Fingerpicking Techniques

## Introduction
Fingerpicking opens up a world of musical expression, allowing you to play melody, harmony, and rhythm simultaneously.

## Basic Hand Position
- **Thumb (p)**: Bass strings (E, A, D)
- **Index (i)**: G string (3rd)
- **Middle (m)**: B string (2nd)
- **Ring (a)**: High E string (1st)

## Fundamental Patterns

### Pattern 1: p-i-m-a
\`\`\`
T: 1   2   3   4
p   i   m   a
\`\`\`

### Pattern 2: Travis Picking
\`\`\`
T: 1   &   2   &   3   &   4   &
p       i   p   m       i   p   m
\`\`\`

## Practice Exercises

### Exercise 1: Chord Arpeggios
Practice these patterns on:
- C major
- A minor
- F major
- G major

### Exercise 2: Alternating Bass
Combine bass notes with melody:
1. Play bass note with thumb
2. Add melody notes with fingers
3. Maintain steady rhythm

## Common Mistakes to Avoid
- ❌ Using fingernails that are too long
- ❌ Tensing up the picking hand
- ❌ Neglecting proper thumb technique
- ❌ Playing too fast initially

## Famous Fingerpicking Songs
- "Dust in the Wind" - Kansas
- "Blackbird" - The Beatles
- "The Sound of Silence" - Simon & Garfunkel
- "Tears in Heaven" - Eric Clapton

![Fingerpicking Hand Position](https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80)
*Proper fingerpicking hand position*
`
  },
  {
    id: 3,
    title: "Power Chords & Rock Riffs",
    description: "Essential power chords and iconic rock riffs for electric guitar",
    duration: "18 min",
    difficulty: "Beginner",
    rating: 4.7,
    thumbnail: "⚡",
    videoUrl: "https://www.youtube.com/watch?v=BlHBKuZsxsM", // Power chords tutorial
    notes: `# Power Chords & Rock Riffs

## What are Power Chords?
Power chords are two-note chords consisting of the **root** and **fifth** of a scale. They're the foundation of rock, punk, and metal music.

## Basic Power Chord Shapes

### Root on 6th String (Low E)
\`\`\`
E |---
B |---
G |---
D |---
A |-3-
E |-1-
\`\`\`

### Root on 5th String (A)
\`\`\`
E |---
B |---
G |---
D |-3-
A |-1-
E |---
\`\`\`

## Essential Power Chord Progressions

### Classic Rock Progression
- E5 - A5 - D5 - A5
- G5 - C5 - D5 - G5

### Punk Rock Pattern
- A5 - D5 - E5 - D5

## Iconic Rock Riffs to Learn

### "Smoke on the Water" - Deep Purple
One of the most recognizable riffs in rock history:
\`\`\`
e|------------------------
B|------------------------
G|------------------------
D|---0-3-5---0-3--6-5-----
A|------------------------
E|------------------------
\`\`\`

### "Come As You Are" - Nirvana
\`\`\`
e|------------------------
B|------------------------
G|------------------------
D|------------------------
A|---0-0-2-2-0-0----------
E|---------------3-3-2-2--
\`\`\`

## Playing Tips
1. **Palm Muting**: Rest your picking hand on the strings near the bridge
2. **Down Picking**: Use downstrokes for a heavier sound
3. **Distortion**: Power chords sound best with overdrive or distortion
4. **Rhythm**: Focus on tight, precise timing

## Gear Recommendations
- **Amplifier**: Marshall or Fender with overdrive
- **Effects**: Distortion/Overdrive pedal
- **Guitar**: Solid body electric (Les Paul or Stratocaster style)

> **Remember**: Power chords are moveable! Learn the shapes and slide them around the fretboard.

## Next Level Techniques
- **Octave doubling**: Add the octave for fuller sound
- **Suspended chords**: Add sus2 or sus4 for variation
- **Chromatic movement**: Use passing tones between chords
`
  },
  {
    id: 4,
    title: "Advanced Soloing",
    description: "Scales, bending, and expressive techniques for lead guitar",
    duration: "35 min",
    difficulty: "Advanced",
    rating: 4.9,
    thumbnail: "🎶",
    videoUrl: "https://www.youtube.com/watch?v=r8hUfM5KhGQ", // Guitar solo techniques
    notes: `# Advanced Soloing Techniques

## Essential Scales for Soloing

### Pentatonic Scales
The backbone of rock and blues soloing:

#### A Minor Pentatonic (Box 1)
\`\`\`
e|---5---8---
B|---5---8---
G|---5---7---
D|---5---7---
A|---5---7---
E|---5---8---
\`\`\`

### Blues Scale
Add the b5 to the minor pentatonic:
- Root - b3 - 4 - b5 - 5 - b7

### Major Scale Modes
- **Ionian** (Major): Happy, bright
- **Dorian**: Minor with natural 6
- **Mixolydian**: Major with b7
- **Aeolian** (Natural Minor): Dark, sad

## Advanced Techniques

### String Bending
1. **Half-step bends**: Most common in blues
2. **Whole-step bends**: Dramatic effect
3. **Pre-bends**: Bend then release
4. **Bend and release**: Smooth transition

#### Bending Tips:
- Use multiple fingers for support
- Bend with your wrist, not just fingers
- Practice pitch accuracy
- Listen to the target note

### Vibrato
Add life to sustained notes:
- **Finger vibrato**: Quick finger movements
- **Wrist vibrato**: Wrist rotation
- **Arm vibrato**: Slower, wider oscillation

### Legato Techniques
#### Hammer-ons and Pull-offs
\`\`\`
Hammer-on:  5h7 (pick 5th fret, hammer to 7th)
Pull-off:   7p5 (pick 7th fret, pull off to 5th)
\`\`\`

#### Slides
- **Legato slides**: Smooth connection
- **Shift slides**: Position changes
- **Into slides**: Slide into the target note

### Tapping
Advanced two-hand technique:
1. Tap with pick-hand finger
2. Pull off to fret-hand finger
3. Continue the pattern

## Phrasing and Expression

### Call and Response
Structure your solos like a conversation:
- **Phrase 1**: Musical "question"
- **Phrase 2**: Musical "answer"

### Dynamic Control
- **Volume swells**: Use volume knob or pedal
- **Pick attack**: Vary your picking intensity
- **Note spacing**: Use rests effectively

### Melodic Development
1. Start with simple motifs
2. Develop through:
   - Repetition
   - Sequence
   - Variation
   - Contrast

## Practice Strategies

### Daily Routine
1. **Warm-up**: Scales and arpeggios (10 min)
2. **Technique focus**: Bending, vibrato (15 min)
3. **Improvisation**: Play over backing tracks (20 min)
4. **Transcription**: Learn solos by ear (15 min)

### Backing Track Practice
Practice over different styles:
- 12-bar blues in various keys
- Rock progressions
- Jazz standards
- Modal vamps

## Recommended Listening
Study these master soloists:
- **David Gilmour** (Pink Floyd): Melodic phrasing
- **B.B. King**: Vibrato and bending
- **John Mayer**: Modern blues approach
- **Joe Satriani**: Technical mastery
- **Gary Moore**: Emotional expression

![Guitar Solo Position](https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&q=80)
*Lead guitar positioning for optimal technique*

## Final Tips
> **Quality over quantity**: Play fewer notes with more expression rather than fast runs without feeling.

Remember: The best solos tell a story. Focus on musical communication, not just technical display.
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

  return (
    <>
      <VideoPlayer
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        videoUrl={selectedVideo?.url || ""}
        title={selectedVideo?.title || ""}
      />
      
      <NotesViewer
        isOpen={!!selectedNotes}
        onClose={() => setSelectedNotes(null)}
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
                  onClick={() => setSelectedVideo({ url: tutorial.videoUrl, title: tutorial.title })}
                >
                  <Play className="w-4 h-4" />
                  Start Tutorial
                </Button>
                
                <Button 
                  variant="outline" 
                  className="flex-1 group-hover:scale-105 transition-transform duration-300"
                  onClick={() => setSelectedNotes({ 
                    title: tutorial.title, 
                    difficulty: tutorial.difficulty, 
                    notes: tutorial.notes 
                  })}
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