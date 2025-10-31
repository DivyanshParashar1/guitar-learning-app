# 🤖 AI Chatbot Demo Guide

## Quick Start

Your floating AI chatbot is now live! Here's how to test it:

### 1. **API Key Setup** (Required)
Add your Gemini API key to the `.env` file:
```env
VITE_GEMINI_API_KEY=your_actual_api_key_here
```

Get your free API key from: https://makersuite.google.com/app/apikey

### 2. **Basic Testing**

1. **Find the Chatbot**: Look for the purple/blue floating button in the bottom-right corner
2. **Click to Open**: The button expands into a full chat interface
3. **Test Basic Chat**: Try typing: "What are the basic guitar chords I should learn first?"

### 3. **Voice Input Testing**

1. Click the microphone button 🎤
2. Grant microphone permissions if prompted
3. Say: "How do I tune my guitar?"
4. Watch it convert speech to text automatically

### 4. **Context-Aware Testing**

1. Navigate to the "Guitar Tutorials" section
2. Click "Start Tutorial" on any tutorial card
3. Now ask the chatbot: "Can you give me tips for this tutorial?"
4. Notice how it knows exactly what tutorial you're watching!

### 5. **Text-to-Speech Testing**

1. Get a response from the AI
2. Click the speaker icon 🔊 next to the response
3. Listen to the AI response being spoken aloud

## 🎯 Test Questions to Try

### General Questions:
- "What's the difference between acoustic and electric guitar?"
- "How should I hold a guitar pick?"
- "What are power chords?"

### When Viewing Tutorials:
- "I'm having trouble with this chord progression, any tips?"
- "Can you suggest practice exercises for this technique?"
- "What songs use these chords?"

### Voice Commands:
- 🎤 "Explain the circle of fifths"
- 🎤 "How do I build finger strength for guitar?"
- 🎤 "What's the best practice routine for beginners?"

## 🛠️ Features to Test

- ✅ **Floating button appearance**
- ✅ **Chat window expansion/minimization**
- ✅ **Dragging functionality** (click and drag the header)
- ✅ **Text input and responses**
- ✅ **Voice recognition** (🎤 button)
- ✅ **Text-to-speech** (🔊 button)
- ✅ **Context awareness** (try opening tutorials)
- ✅ **Responsive design** (test on different screen sizes)

## 🚨 Troubleshooting

### "Sorry, I encountered an error" message:
- Check if your `VITE_GEMINI_API_KEY` is set correctly in `.env`
- Restart the dev server after adding the API key
- Verify the API key is valid at Google AI Studio

### Voice input not working:
- Ensure you're using HTTPS (required for microphone)
- Grant microphone permissions when prompted
- Works best in Chrome/Edge browsers

### Context not being detected:
- Make sure you actually opened a tutorial first
- Context is cleared when you close tutorials

## 🎉 Success Indicators

You'll know it's working when:
1. The floating button appears and is clickable
2. The chat expands smoothly with animations
3. You can type and get intelligent responses about guitar
4. Voice input converts speech to text
5. The AI provides context-specific answers when viewing tutorials

## 📱 Mobile Testing

The chatbot is fully responsive! Test on mobile:
- Floating button adapts to mobile screen
- Chat window is touch-friendly
- Voice input works on mobile browsers
- Dragging works with touch gestures

---

**🎸 Ready to learn guitar with AI assistance!**

Your intelligent guitar learning companion is now ready to help with:
- Chord progressions and theory
- Technique tips and exercises  
- Song recommendations
- Practice routines
- Equipment advice
- And much more!

Just click that floating button and start asking questions! 🎵