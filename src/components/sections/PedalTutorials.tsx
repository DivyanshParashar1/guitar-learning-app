import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Clock, Zap, FileText } from "lucide-react";
import { useState } from "react";
import VideoPlayer from "@/components/VideoPlayer";
import NotesViewer from "@/components/NotesViewer";

const pedalTutorials = [
  {
    id: 1,
    title: "Dynamic Equalizer | Week 7",
    description: "Understanding the difference and how to use these essential effects",
    duration: "12 min",
    type: "Drive",
    difficulty: "Beginner",
    thumbnail: "🔥",
    videoUrl: "https://youtu.be/5shycYmNasc", // Distortion vs Overdrive
    notes: `# Dynamic Equalizer | Week 7

## What is a Dynamic Equalizer?

A dynamic equalizer (often called distortion or overdrive) is one of the most essential guitar effects. It shapes your tone by adding harmonic content and saturation to your signal.

## Types of Drive Pedals

### Overdrive
- **Characteristics**: Warm, tube-like saturation
- **Best for**: Blues, classic rock, country
- **Famous examples**: Ibanez Tube Screamer, Boss Blues Driver

### Distortion
- **Characteristics**: More aggressive, compressed signal
- **Best for**: Hard rock, metal, punk
- **Famous examples**: Boss DS-1, Pro Co RAT

### Fuzz
- **Characteristics**: Heavily saturated, vintage tone
- **Best for**: Psychedelic, garage rock, doom metal
- **Famous examples**: Big Muff Pi, Fuzz Face

## Key Controls

### Gain/Drive
Controls the amount of distortion:
- **Low settings**: Light overdrive, preserves dynamics
- **High settings**: Heavy saturation, sustained notes

### Tone/EQ
Shapes the frequency response:
- **Treble**: Adds brightness and clarity
- **Bass**: Adds warmth and thickness
- **Mid**: Controls presence and cut

### Volume/Level
Sets the output level:
- **Unity gain**: Same volume as bypass
- **Boost**: Louder than bypass for solos

## Signal Chain Placement

### Early in Chain (Recommended)
\`\`\`
Guitar → Drive → Modulation → Delay → Reverb → Amp
\`\`\`

Benefits:
- More natural interaction with other effects
- Better note definition
- Cleaner modulation effects

## Settings Guide

### Blues Overdrive
- **Gain**: 25-40%
- **Tone**: 60-70%
- **Volume**: Unity or slightly boosted

### Rock Distortion
- **Gain**: 50-70%
- **Tone**: 50-60%
- **Volume**: Unity gain

### Metal Distortion
- **Gain**: 70-90%
- **Tone**: 40-50% (darker for chunk)
- **Volume**: Unity or boost for solos

## Pro Tips

> **Amp Interaction**: Drive pedals react differently with clean vs. dirty amps. Experiment with both!

### Stacking Drives
Combine multiple drive pedals for complex tones:
1. **First pedal**: Light overdrive (always on)
2. **Second pedal**: Higher gain boost (for solos)

### EQ Considerations
- **Bright amp**: Use darker drive settings
- **Dark amp**: Use brighter drive settings
- **Cut through mix**: Boost mids slightly

## Common Mistakes
- ❌ Too much gain (loses note definition)
- ❌ Scooped mids (gets lost in the mix)
- ❌ Volume too high (hurts bandmates' ears!)
- ❌ Not considering the amp's character

## Practice Exercises
1. **Dynamic playing**: Practice controlling drive with pick attack
2. **Clean blending**: Find the sweet spot between clean and driven
3. **Genre switching**: Practice different settings for various styles

![Guitar Pedal Setup](https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80)
*Professional pedalboard setup with drive section*
`
  },
  {
    id: 2,
    title: "Delay & Echo Effects",
    description: "Create atmospheric soundscapes with delay and echo pedals",
    duration: "18 min",
    type: "Time-based",
    difficulty: "Intermediate",
    thumbnail: "🌊",
    videoUrl: "https://www.youtube.com/watch?v=CeJzKQvAzLE", // Delay pedal tutorial
    notes: `# Delay & Echo Effects

## Understanding Delay

Delay creates echoes of your original signal, adding depth, space, and rhythmic interest to your playing.

## Types of Delay

### Digital Delay
- **Sound**: Clean, precise repeats
- **Best for**: Modern music, precise timing
- **Controls**: Time, feedback, mix

### Analog Delay
- **Sound**: Warm, slightly degraded repeats
- **Best for**: Vintage tones, musical warmth
- **Famous**: Boss DM-2, MXR Carbon Copy

### Tape Echo
- **Sound**: Warm, modulated, vintage character
- **Best for**: Classic rock, ambient music
- **Famous**: Echoplex, Space Echo

## Essential Controls

### Time/Delay
Sets the gap between repeats:
- **Short (20-100ms)**: Slap-back echo
- **Medium (100-400ms)**: Rhythmic repeats
- **Long (400ms+)**: Ambient washes

### Feedback/Repeats
Controls how many echoes you hear:
- **Low (1-3 repeats)**: Subtle enhancement
- **Medium (4-8 repeats)**: Musical repeats
- **High (9+ repeats)**: Self-oscillation

### Mix/Level
Balances dry and wet signal:
- **10-20%**: Subtle thickening
- **30-50%**: Noticeable repeats
- **50%+**: Obvious effect

## Musical Applications

### Rhythmic Delay
Match delay time to song tempo:

#### Quarter Note Delays
\`\`\`
BPM    Time (ms)
60     1000
120    500
140    428
\`\`\`

#### Dotted Eighth Notes
Popular in modern music:
\`\`\`
BPM    Time (ms)
120    750
140    643
\`\`\`

### Ambient Delay
Long, reverberant delays for atmosphere:
- **Time**: 600ms - 2 seconds
- **Feedback**: High (but not self-oscillating)
- **Mix**: 40-60%

## Advanced Techniques

### Ping-Pong Delay
Alternates between left and right channels:
- Creates wide stereo image
- Great for headphones/studio
- Adds movement to static parts

### Reverse Delay
Plays echoes backwards:
- Psychedelic effect
- Great for atmospheric passages
- Often combined with reverb

### Modulated Delay
Adds chorus/vibrato to repeats:
- **Rate**: How fast the modulation
- **Depth**: How much pitch variation
- **Creates**: Vintage tape echo feel

## Signal Chain Placement

### Standard Position
\`\`\`
Guitar → Drive → Modulation → Delay → Reverb → Amp
\`\`\`

### Effects Loop
\`\`\`
Guitar → Drive → Amp Input
Amp Send → Delay → Reverb → Amp Return
\`\`\`

## Famous Delay Users
- **The Edge** (U2): Dotted eighth note delays
- **David Gilmour** (Pink Floyd): Long ambient delays
- **Eddie Van Halen**: Short slap-back delay
- **Alex Lifeson** (Rush): Complex delay patterns

## Delay Tips

### Timing Practice
1. Set delay to quarter notes
2. Play simple melodies
3. Let delay create harmony
4. Practice playing with the repeats

### Feedback Control
> **Warning**: High feedback can create runaway oscillation. Practice controlling this effect!

### Creative Uses
- **Layering**: Build complex soundscapes
- **Rhythmic patterns**: Create polyrhythms
- **Solo enhancement**: Add space between phrases

## Common Settings

### Classic Rock Slap-back
- **Time**: 80-120ms
- **Feedback**: 1-2 repeats
- **Mix**: 15-25%

### Modern Ambient
- **Time**: 500-800ms
- **Feedback**: 60-70%
- **Mix**: 40-50%

### Country/Rockabilly
- **Time**: 120-150ms
- **Feedback**: 1 repeat
- **Mix**: 20-30%

Remember: Delay is about space and rhythm. Use it to enhance your playing, not overwhelm it!
`
  },
  {
    id: 3,
    title: "Reverb Fundamentals",
    description: "From subtle room reverb to massive cathedral sounds",
    duration: "16 min",
    type: "Ambient",
    difficulty: "Beginner",
    thumbnail: "⛪",
    videoUrl: "https://www.youtube.com/watch?v=1cCuJbnPEco", // Reverb pedal basics
    notes: `# Reverb Fundamentals

## What is Reverb?

Reverb simulates the natural reflections of sound in physical spaces, from small rooms to massive cathedrals.

## Types of Reverb

### Spring Reverb
- **Source**: Metal springs in amplifiers
- **Sound**: Bright, metallic, vintage
- **Best for**: Surf music, classic rock
- **Character**: "Boing" sound when hit

### Plate Reverb
- **Source**: Large metal plates in studios
- **Sound**: Smooth, dense, musical
- **Best for**: Vocals, any instrument
- **Character**: No early reflections

### Hall Reverb
- **Source**: Concert halls and large spaces
- **Sound**: Natural, spacious, gradual decay
- **Best for**: Ballads, ambient music
- **Character**: Long, smooth tail

### Room Reverb
- **Source**: Small to medium rooms
- **Sound**: Intimate, natural, controlled
- **Best for**: Adding subtle space
- **Character**: Quick decay, natural

### Digital/Algorithmic
- **Source**: Computer algorithms
- **Sound**: Various simulations and creative spaces
- **Best for**: Flexibility and unique sounds
- **Character**: Depends on algorithm

## Essential Controls

### Decay Time
How long the reverb lasts:
- **Short (0.5-1.5s)**: Room reverb
- **Medium (1.5-3s)**: Hall reverb
- **Long (3s+)**: Cathedral/ambient

### Pre-delay
Gap between dry signal and reverb:
- **0-20ms**: Intimate, close sound
- **20-50ms**: Natural room feel
- **50ms+**: Obvious separation

### Mix/Level
Balance of dry and wet signal:
- **10-20%**: Subtle enhancement
- **30-40%**: Noticeable space
- **50%+**: Obvious effect

### Tone/EQ
Shapes the reverb frequency response:
- **Dark**: Warm, vintage character
- **Bright**: Modern, airy feel
- **Filtered**: Removes harsh frequencies

## Musical Applications

### Subtle Enhancement
Add space without being obvious:
- **Type**: Room or small hall
- **Decay**: 1-2 seconds
- **Mix**: 15-25%
- **Pre-delay**: 10-30ms

### Ballad Reverb
Lush, emotional space:
- **Type**: Hall or plate
- **Decay**: 2-4 seconds
- **Mix**: 30-50%
- **Pre-delay**: 30-50ms

### Ambient Soundscapes
Massive, ethereal spaces:
- **Type**: Hall or shimmer
- **Decay**: 5+ seconds
- **Mix**: 40-80%
- **Pre-delay**: Various

## Advanced Reverb Types

### Shimmer Reverb
Adds octave-up harmonies:
- Creates "angelic" sound
- Great for ambient music
- Often combined with delay

### Reverse Reverb
Builds up before the note:
- Psychedelic effect
- Creates anticipation
- Often used on drums/vocals

### Gated Reverb
Cuts off abruptly:
- 80s drum sound
- Punchy, controlled
- Great for rhythmic parts

### Modulated Reverb
Adds chorus/vibrato to the tail:
- Vintage character
- Movement and life
- Prevents static sound

## Signal Chain Placement

### Standard Position (Recommended)
\`\`\`
Guitar → Drive → Modulation → Delay → Reverb → Amp
\`\`\`

### Effects Loop
\`\`\`
Guitar → Drive → Amp Input
Amp Send → Delay → Reverb → Amp Return
\`\`\`

Benefits of effects loop:
- Cleaner reverb signal
- Better interaction with amp
- More control over wet/dry mix

## Reverb Etiquette

### Live Performance
- **Don't overdo it**: Less is often more
- **Consider the venue**: Some rooms are naturally reverberant
- **Genre appropriate**: Match reverb to musical style

### Recording
- **Track dry**: Add reverb during mixing
- **Use sends**: Share reverb between instruments
- **EQ the reverb**: Cut muddy frequencies

## Common Reverb Settings

### Clean Guitar - Subtle
- **Type**: Room
- **Decay**: 1.2s
- **Mix**: 20%
- **Tone**: Neutral

### Lead Guitar - Spacious
- **Type**: Hall
- **Decay**: 2.5s
- **Mix**: 35%
- **Tone**: Slightly dark

### Ambient - Ethereal
- **Type**: Shimmer Hall
- **Decay**: 6s
- **Mix**: 60%
- **Tone**: Bright

## Famous Reverb Users
- **Dick Dale**: Spring reverb surf sound
- **David Gilmour**: Long hall reverbs
- **The Edge**: Combination of delay and reverb
- **Jonny Greenwood**: Creative reverb textures

## Pro Tips

> **Less is More**: Start with subtle settings and add more as needed.

### Reverb and Delay
When using both:
1. Set delay first
2. Add reverb to taste
3. Reverb should complement, not compete

### EQ Your Reverb
- **High-pass filter**: Remove muddy low end
- **Low-pass filter**: Tame harsh highs
- **Mid-cut**: Prevent frequency buildup

### Creative Techniques
- **Reverb into drive**: Unusual but interesting
- **Reverse reverb swells**: Build tension
- **Gated reverb on rhythm**: Add punch

Remember: Reverb is about creating the illusion of space. Use it to place your guitar in the sonic landscape!

![Cathedral Interior](https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&q=80)
*Natural reverb in a cathedral space*
`
  },
  {
    id: 4,
    title: "Modulation Magic",
    description: "Chorus, phaser, and flanger effects for dynamic sounds",
    duration: "25 min",
    type: "Modulation",
    difficulty: "Intermediate",
    thumbnail: "🌀",
    videoUrl: "https://www.youtube.com/watch?v=2qp1YRe1N5w", // Modulation effects
    notes: `# Modulation Magic

## Understanding Modulation

Modulation effects add movement and texture to your guitar tone by varying parameters over time, creating everything from subtle shimmer to dramatic sweeps.

## Types of Modulation

### Chorus
Creates the illusion of multiple instruments:
- **How it works**: Slight delay + pitch modulation
- **Sound**: Thick, shimmering, wide
- **Famous**: Boss CE-1, TC Electronic Corona

### Flanger
Creates a sweeping, "jet plane" effect:
- **How it works**: Very short delay + modulation
- **Sound**: Metallic, sweeping, dramatic
- **Famous**: MXR M117, Boss BF-2

### Phaser
Creates a smooth, sweeping filter effect:
- **How it works**: Phase-shifted signal mixed with dry
- **Sound**: Smooth, vocal-like, organic
- **Famous**: Phase 90, Small Stone

### Tremolo
Rhythmic volume modulation:
- **How it works**: Amplitude modulation
- **Sound**: Choppy, rhythmic, surf-like
- **Famous**: Built into many Fender amps

### Vibrato
Pitch modulation for warbling effect:
- **How it works**: Frequency modulation
- **Sound**: Warbling, seasick, vintage
- **Usage**: Subtle to extreme

## Essential Controls

### Rate/Speed
How fast the modulation cycles:
- **Slow**: Gentle, breathing effect
- **Medium**: Musical, noticeable
- **Fast**: Dramatic, obvious

### Depth/Intensity
How much modulation is applied:
- **Low**: Subtle enhancement
- **Medium**: Noticeable but musical
- **High**: Obvious, special effect

### Mix/Blend (Chorus/Flanger)
Balance between dry and processed signal:
- **50/50**: Classic sound
- **Wet heavy**: More obvious effect
- **Dry heavy**: Subtle enhancement

## Chorus Deep Dive

### Types of Chorus
#### Analog Chorus
- **Character**: Warm, vintage, slightly noisy
- **Best for**: Classic rock, jazz, clean tones
- **Examples**: Boss CE-2, MXR Chorus

#### Digital Chorus
- **Character**: Clean, precise, versatile
- **Best for**: Modern music, complex settings
- **Examples**: TC Electronic Corona, Strymon Ola

### Chorus Settings Guide

#### Subtle Enhancement
- **Rate**: Slow (0.5 Hz)
- **Depth**: Low (20%)
- **Mix**: 30-40%

#### Classic 80s Sound
- **Rate**: Medium (2 Hz)
- **Depth**: Medium (50%)
- **Mix**: 50%

#### Dramatic Effect
- **Rate**: Fast (4+ Hz)
- **Depth**: High (80%)
- **Mix**: 60-70%

## Phaser Exploration

### Phaser Parameters
#### Stages
Number of phase-shift stages:
- **4-stage**: Subtle, musical
- **6-stage**: More pronounced
- **8+ stage**: Very dramatic

#### Resonance/Feedback
Emphasizes the sweep:
- **Low**: Gentle sweep
- **Medium**: Pronounced peaks
- **High**: Dramatic, can self-oscillate

### Famous Phaser Sounds
- **Eddie Van Halen**: Phase 90 on "Eruption"
- **David Gilmour**: Smooth, musical sweeps
- **Funk guitar**: Rhythmic phaser patterns

## Flanger Techniques

### Flanger vs. Chorus
#### Similarities
- Both use delay and modulation
- Both create movement

#### Differences
| Aspect | Chorus | Flanger |
|--------|--------|---------|
| Delay time | 15-35ms | 0.5-15ms |
| Sound | Thick, wide | Metallic, sweep |
| Feedback | Minimal | Often used |

### Classic Flanger Settings
#### Jet Plane Effect
- **Rate**: Medium-slow
- **Depth**: High
- **Feedback**: High
- **Manual/Start**: Swept during performance

#### Subtle Flange
- **Rate**: Slow
- **Depth**: Low-medium
- **Feedback**: Low
- **Mix**: 30-40%

## Signal Chain Placement

### Standard Position
\`\`\`
Guitar → Drive → Modulation → Delay → Reverb → Amp
\`\`\`

### Alternative: Pre-Drive
\`\`\`
Guitar → Modulation → Drive → Delay → Reverb → Amp
\`\`\`

Benefits of pre-drive:
- Modulation gets driven/compressed
- Different character, often smoother
- Vintage approach

## Musical Applications

### Chorus Applications
- **Clean rhythm**: Adds width and shimmer
- **Arpeggios**: Beautiful, floating quality
- **Solos**: Smooth, liquid leads

### Phaser Applications
- **Funk rhythm**: Percussive, rhythmic
- **Solos**: Smooth, vocal-like quality
- **Ambient**: Slow, breathing textures

### Flanger Applications
- **Dramatic sweeps**: Build tension
- **Rhythm accents**: Highlight certain beats
- **Special effects**: Sci-fi, dramatic moments

## Advanced Techniques

### Modulation Stacking
Combining multiple modulation effects:
1. **Chorus + Reverb**: Classic clean combo
2. **Phaser + Delay**: Spacey, ambient
3. **Tremolo + Reverb**: Surf/vintage vibe

### Expression Control
Many modulation pedals accept expression pedals:
- **Rate control**: Speed up/slow down in real-time
- **Depth control**: Fade effect in/out
- **Mix control**: Blend effect during performance

### Rhythmic Modulation
Sync modulation to song tempo:
- **Quarter notes**: Obvious, rhythmic
- **Eighth notes**: Faster, more active
- **Triplets**: Polyrhythmic feel

## Genre-Specific Applications

### 80s New Wave
- **Heavy chorus**: Wide, atmospheric
- **Gated reverb**: Punchy, controlled
- **Bright, clean tones**

### Surf Music
- **Tremolo**: Rhythmic, choppy
- **Spring reverb**: Bright, metallic
- **Clean, bright amps**

### Progressive Rock
- **Phaser**: Smooth, musical sweeps
- **Complex modulation**: Multiple effects
- **Creative, experimental use**

### Modern Ambient
- **Slow, deep modulation**: Breathing quality
- **Long reverbs**: Spacious feel
- **Layered effects**: Complex textures

## Pro Tips

> **Subtlety is Key**: Modulation should enhance, not dominate your tone.

### Common Mistakes
- ❌ Too much depth (becomes seasick)
- ❌ Wrong placement in chain
- ❌ Not matching rate to song tempo
- ❌ Using modulation on everything

### Creative Ideas
- **Modulate the modulation**: Use expression pedals
- **Rhythmic patterns**: Match to drums
- **Automation**: Program changes during songs
- **Stereo effects**: Use stereo chorus/phaser

Remember: Modulation effects are about adding life and movement to your sound. Use them to create interest and texture, but always serve the music first!
`
  },
  {
    id: 5,
    title: "Wah & Filter Pedals",
    description: "Expressive tone shaping with wah and filter effects",
    duration: "14 min",
    type: "Filter",
    difficulty: "Beginner",
    thumbnail: "🎭",
    videoUrl: "https://www.youtube.com/watch?v=jZqJXFMhP4s", // Wah pedal tutorial
    notes: `# Wah & Filter Pedals

## Understanding Wah Pedals

The wah pedal is one of the most expressive effects in guitar playing, allowing real-time control over your tone's frequency response.

## How Wah Pedals Work

### Basic Principle
- **Filter sweep**: Emphasizes different frequencies
- **Foot control**: Real-time expression
- **Vocal quality**: Mimics human vocal formants

### Frequency Range
- **Heel down**: Emphasizes bass frequencies
- **Toe down**: Emphasizes treble frequencies
- **Middle position**: Balanced, often parked for fixed EQ

## Types of Wah Pedals

### Vintage-Style Wah
- **Sound**: Vocal, organic, slightly dark
- **Famous**: Original Cry Baby, Vox V847
- **Best for**: Classic rock, blues, vintage tones

### Modern Wah
- **Sound**: Wider sweep, more extreme range
- **Features**: Often have multiple modes
- **Best for**: Modern rock, metal, experimental

### Specific Models
#### Dunlop Cry Baby
- **Most popular**: Industry standard
- **Variations**: GCB95, 535Q (adjustable)
- **Sound**: Classic, reliable, familiar

#### Vox V847
- **Vintage spec**: Based on original Italian design
- **Sound**: Slightly different sweep than Cry Baby
- **Character**: Smoother, less aggressive

## Wah Techniques

### Basic Techniques

#### Full Sweep
- **Motion**: Heel to toe
- **Sound**: Classic "wah" vocal sound
- **Usage**: Emphasis, expression

#### Parked Wah
- **Position**: Fixed at specific point
- **Sound**: EQ boost at chosen frequency
- **Usage**: Lead tones, fixed filter effect

#### Slow Sweep
- **Motion**: Gradual heel-to-toe movement
- **Sound**: Smooth filter sweep
- **Usage**: Atmospheric, building tension

### Advanced Techniques

#### Rhythmic Wah
Match wah movement to song rhythm:
- **On the beat**: Emphasize strong beats
- **Off-beat**: Syncopated, funky feel
- **Double-time**: Fast rhythmic patterns

#### Percussive Wah
Quick, sharp movements:
- **Heel stomp**: Emphasis on low frequencies
- **Toe tap**: Bright, cutting sound
- **Combination**: Rhythmic patterns

#### Wah + Picking
Coordinate with picking technique:
- **Attack + wah**: Emphasize note attacks
- **Sustained + sweep**: Long notes with movement
- **Muted + rhythmic**: Percussive combinations

## Signal Chain Placement

### Traditional Position
\`\`\`
Guitar → Wah → Drive → Modulation → Delay → Reverb → Amp
\`\`\`

Benefits:
- Most natural, responsive feel
- Best interaction with guitar signal
- Traditional sound most people expect

### After Drive (Alternative)
\`\`\`
Guitar → Drive → Wah → Modulation → Delay → Reverb → Amp
\`\`\`

Benefits:
- Smoother, less aggressive sweep
- Different tonal character
- Some players prefer this sound

## Musical Applications

### Funk Guitar
Essential for classic funk:
- **Technique**: Rhythmic, percussive
- **Pattern**: Match to drum patterns
- **Examples**: "Shaft" theme, Parliament-Funkadelic

### Classic Rock Solos
Expressive lead guitar:
- **Technique**: Melodic sweeps
- **Usage**: Emphasize important notes
- **Examples**: Hendrix, Clapton, Page

### Blues Expression
Vocal-like phrasing:
- **Technique**: Slow, melodic movements
- **Usage**: Bend notes while sweeping
- **Goal**: Mimic human voice inflections

### Modern Metal
Aggressive, precise movements:
- **Technique**: Fast, rhythmic patterns
- **Usage**: Accent rhythmic patterns
- **Examples**: Kirk Hammett, Tom Morello

## Famous Wah Players

### Jimi Hendrix
- **Pioneer**: Popularized wah pedal use
- **Technique**: Full sweeps, rhythmic patterns
- **Songs**: "Voodoo Child," "White Room"

### Kirk Hammett (Metallica)
- **Style**: Fast, aggressive, rhythmic
- **Technique**: Precise, controlled movements
- **Songs**: "Enter Sandman," "One"

### David Gilmour (Pink Floyd)
- **Style**: Melodic, atmospheric
- **Technique**: Slow, musical sweeps
- **Songs**: "Money," "Time"

## Wah Settings and Modifications

### Internal Adjustments
Many wahs have internal controls:
- **Vocal control**: Adjusts sweep range
- **Bias control**: Changes center frequency
- **Volume control**: Matches bypass level

### Common Modifications
#### True Bypass
- **Benefit**: Better signal when off
- **Install**: Professional modification
- **Result**: Cleaner overall signal

#### LED Indicator
- **Benefit**: Shows when effect is on
- **Install**: Simple modification
- **Useful**: Dark stages, pedalboard setups

## Filter Pedals (Related Effects)

### Auto-Wah/Envelope Filter
Automatic wah response to playing dynamics:
- **Control**: Pick attack triggers filter
- **Sound**: Funky, responsive
- **Famous**: Mutron III, Boss AW-3

### Talk Box
Articulates words through guitar:
- **How it works**: Speaker drives tube to mouth
- **Sound**: Robot/vocoder effect
- **Famous**: Peter Frampton, Roger Troutman

### Vocal Formant Filter
Creates vowel sounds:
- **Control**: Often expression pedal
- **Sound**: "Oooh" to "Ahhh" vocal sounds
- **Usage**: Special effects, experimental

## Practice Exercises

### Basic Coordination
1. **Simple riffs**: Play easy patterns while wah sweeping
2. **Chord progressions**: Practice rhythm guitar + wah
3. **Scale runs**: Combine scales with wah movement

### Rhythmic Training
1. **Match metronome**: Wah movement on beat
2. **Subdivision practice**: Quarter, eighth, sixteenth notes
3. **Polyrhythms**: Wah in different time signatures

### Expression Development
1. **Dynamic control**: Vary sweep speed and intensity
2. **Musical phrasing**: Make wah movement melodic
3. **Song application**: Add wah to favorite songs

## Common Problems and Solutions

### Issues
- **Volume drop**: When wah is engaged
- **Scratchy pot**: Dirty volume control
- **Inconsistent sweep**: Worn gear mechanism

### Solutions
- **Volume matching**: Internal adjustment or modification
- **Cleaning**: Contact cleaner on potentiometer
- **Maintenance**: Regular cleaning and lubrication

## Pro Tips

> **Less is More**: Don't use wah on every song. Save it for maximum impact.

### Musical Guidelines
- **Serve the song**: Use wah musically, not just for effect
- **Practice timing**: Coordinate with rhythm section
- **Volume control**: Make sure levels match bypass
- **Genre appropriate**: Consider style and context

### Creative Ideas
- **Backwards wah**: Record and reverse for unique sounds
- **Multiple wahs**: Different voices for different parts
- **Expression pedal**: Control other parameters via MIDI
- **Wah + pitch**: Combine with pitch bending for extreme effects

Remember: The wah pedal is an instrument itself. Master its expressive capabilities to add a new dimension to your guitar playing!

![Wah Pedal in Action](https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=800&q=80)
*Classic wah pedal setup on a professional pedalboard*
`
  },
  {
    id: 6,
    title: "Stacking Pedals",
    description: "Advanced techniques for combining multiple effects pedals",
    duration: "28 min",
    type: "Advanced",
    difficulty: "Advanced",
    thumbnail: "🎛️",
    videoUrl: "https://www.youtube.com/watch?v=HNsQ3ckLt3k", // Pedal stacking guide
    notes: `# Stacking Pedals

## The Art of Pedal Stacking

Pedal stacking is the practice of combining multiple effects to create complex, unique tones that single pedals cannot achieve alone.

## Signal Chain Fundamentals

### Basic Signal Flow
Understanding signal path is crucial for effective stacking:

\`\`\`
Guitar → Effects Chain → Amplifier → Speaker
\`\`\`

### Standard Pedal Order
\`\`\`
Guitar → Tuner → Wah → Compression → Drive/Distortion → 
EQ → Modulation → Delay → Reverb → Amp
\`\`\`

### Why Order Matters
Each pedal affects the signal feeding into the next:
- **Early effects**: Shape the core tone
- **Later effects**: Add texture and space
- **Wrong order**: Can create unwanted noise or poor interaction

## Drive Pedal Stacking

### Classic Combinations

#### Light Overdrive + Heavy Distortion
\`\`\`
Guitar → Light OD (always on) → Heavy Distortion (solo boost) → Amp
\`\`\`

**Benefits:**
- Consistent light overdrive for rhythm
- Heavy distortion for solos
- Smoother transition between clean and dirty

#### Tube Screamer + Amp Distortion
\`\`\`
Guitar → Tube Screamer → Already-driven amp
\`\`\`

**Purpose:**
- Tightens low end
- Boosts mids for cut
- Adds compression and sustain

### Advanced Drive Stacking

#### Three-Tiered Approach
\`\`\`
Guitar → Clean Boost → Light OD → Heavy Distortion → Amp
\`\`\`

**Usage:**
1. **Clean boost**: Always on, slight enhancement
2. **Light OD**: Rhythm sections
3. **Heavy distortion**: Lead solos

#### Fuzz + Overdrive
\`\`\`
Guitar → Fuzz → Overdrive → Amp
\`\`\`

**Result:**
- Overdrive smooths harsh fuzz edges
- Maintains fuzz character with more control
- Popular in psych/garage rock

## Modulation Stacking

### Time-Based Effects
Multiple delays and reverbs for complex textures:

#### Dual Delay Setup
\`\`\`
Guitar → Short Delay (120ms) → Long Delay (400ms) → Reverb → Amp
\`\`\`

**Effect:**
- Short delay: Rhythmic enhancement
- Long delay: Atmospheric wash
- Reverb: Final spatial enhancement

#### Ping-Pong + Hall Reverb
\`\`\`
Guitar → Ping-Pong Delay → Hall Reverb → Amp
\`\`\`

**Result:**
- Wide stereo image from ping-pong
- Natural space from reverb
- Complex, three-dimensional sound

### Modulation Combinations

#### Chorus + Delay + Reverb
The classic clean guitar stack:
\`\`\`
Guitar → Chorus → Delay → Reverb → Amp
\`\`\`

**Character:**
- Chorus: Width and shimmer
- Delay: Rhythmic interest
- Reverb: Spatial depth

## Creative Stacking Ideas

### Unconventional Orders

#### Reverb Before Drive
\`\`\`
Guitar → Reverb → Overdrive → Amp
\`\`\`

**Effect:**
- Drives the reverb signal
- Creates compressed, sustained ambience
- Unique, atmospheric character

#### Delay Before Drive
\`\`\`
Guitar → Delay → Distortion → Amp
\`\`\`

**Result:**
- Distorts the delayed signal
- Creates rhythmic, aggressive textures
- Popular in industrial/experimental music

### Parallel Processing
Running effects in parallel rather than series:

#### Wet/Dry Setup
\`\`\`
Guitar → Splitter → Path A (Clean) → Mixer → Amp
                  → Path B (Effects) →
\`\`\`

**Benefits:**
- Maintains note clarity
- Adds effects without muddying core tone
- Professional studio technique

## Effects Loop Usage

### Amp Effects Loop
\`\`\`
Guitar → Drive → Amp Input
Amp Send → Modulation → Delay → Reverb → Amp Return
\`\`\`

**Advantages:**
- Time-based effects stay clean
- Better interaction with preamp distortion
- More control over wet/dry balance

### When to Use Effects Loop
- **Use loop for**: Delay, reverb, some modulation
- **Use front for**: Drive, wah, compression, some modulation
- **Experiment**: Every amp and player is different

## Advanced Stacking Techniques

### Switching Systems

#### Loop Switchers
Control multiple pedal chains:
- **A/B switching**: Choose between different effect chains
- **Blending**: Mix multiple chains together
- **Programmable**: Store preset combinations

#### MIDI Control
Synchronize multiple effects:
- **Tempo sync**: All delays match song tempo
- **Program changes**: Switch entire effect setups
- **Expression control**: Control multiple parameters

### Gain Staging
Managing levels throughout the signal chain:

#### Proper Level Management
- **Unity gain**: Each pedal outputs same level as input
- **Strategic boosts**: Use clean boosts for solos
- **Avoid clipping**: Don't overload later stages

#### Troubleshooting Levels
- **Too quiet**: Add clean boost or check pedal levels
- **Too loud**: Reduce pedal outputs or use attenuator
- **Distorted**: Check for clipping in signal chain

## Genre-Specific Stacking

### Ambient/Post-Rock
\`\`\`
Guitar → Volume Pedal → Reverb → Delay → Shimmer Reverb → Amp
\`\`\`

**Character:**
- Swelling, atmospheric textures
- Long, complex reverb tails
- Ethereal, floating quality

### Classic Rock
\`\`\`
Guitar → Wah → Overdrive → Delay → Reverb → Amp
\`\`\`

**Character:**
- Expressive wah tones
- Warm overdrive
- Musical delay and reverb

### Modern Metal
\`\`\`
Guitar → Noise Gate → Tube Screamer → High-Gain Amp → Gate → Delay
\`\`\`

**Character:**
- Tight, controlled distortion
- No unwanted noise
- Precise, rhythmic delays

## Common Stacking Mistakes

### Problems to Avoid
- **Too many effects**: Muddy, undefined sound
- **Wrong order**: Poor interaction between pedals
- **Level mismatches**: Some pedals too loud/quiet
- **Ignoring amp**: Not considering amp's contribution

### Solutions
- **Start simple**: Add one effect at a time
- **Listen critically**: Does each addition improve the sound?
- **Match levels**: Use unity gain as starting point
- **Consider context**: Will this work in a band mix?

## Building Your Pedal Chain

### Step-by-Step Approach
1. **Start with basics**: Tuner, one drive pedal
2. **Add modulation**: Chorus or phaser
3. **Include time effects**: Delay and/or reverb
4. **Expand gradually**: Add specialty effects as needed
5. **Optimize order**: Experiment with different arrangements

### Budget Considerations
- **Core effects first**: Drive, delay, reverb
- **Quality over quantity**: Better to have fewer good pedals
- **Used market**: Many excellent pedals available used
- **Multi-effects**: Consider for starting out or backup

## Pro Tips for Pedal Stacking

> **Serve the Music**: Every effect should enhance the song, not just sound cool.

### Best Practices
- **A/B test**: Compare with and without each effect
- **Record yourself**: Sounds different in the room vs. recorded
- **Band context**: How does it sit in the full mix?
- **Venue considerations**: Some effects work better in certain spaces

### Maintenance Tips
- **Cable quality**: Use good cables throughout chain
- **Power supply**: Isolated power prevents noise
- **Regular cleaning**: Keep jacks and switches clean
- **Backup plan**: Know how to bypass problematic pedals

### Creative Exploration
- **Break rules**: Try unconventional pedal orders
- **Expression pedals**: Add real-time control
- **Automation**: Use MIDI or switching systems
- **Collaborate**: Learn from other players' setups

Remember: Pedal stacking is about creating YOUR unique voice. Use these guidelines as starting points, but trust your ears and musical instincts above all!

![Professional Pedalboard](https://images.unsplash.com/photo-1598986646512-9d24ccbe3a40?w=800&q=80)
*Professional pedalboard showcasing advanced pedal stacking techniques*
`
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

              <div className="flex gap-2">
                <Button 
                  variant="musical" 
                  size="sm" 
                  className="flex-1 group-hover:scale-105 transition-transform duration-300"
                  onClick={() => setSelectedVideo({ url: tutorial.videoUrl, title: tutorial.title })}
                >
                  <Play className="w-4 h-4" />
                  Watch Tutorial
                </Button>
                
                <Button 
                  variant="outline" 
                  size="sm" 
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

export default PedalTutorials;