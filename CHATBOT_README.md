# 🎸 Guitar Learning App - AI Chatbot Integration

## 🚀 Features

### Core Functionality
- **Floating AI Chatbot**: A sleek, minimalistic floating button that expands into a full chat interface
- **Voice Input**: Built-in Web Speech API integration for hands-free interaction
- **Text-to-Speech**: AI responses can be spoken aloud using the browser's Speech Synthesis API
- **Context-Aware**: Automatically understands what tutorial or topic you're currently viewing
- **Draggable Interface**: Move the chat window anywhere on screen for optimal placement
- **Minimizable**: Compact the chat window when not actively using it

### AI Integration
- **Google Gemini 1.5 Flash**: Powered by Google's latest AI model for intelligent guitar learning assistance
- **Client-Side Only**: No backend required - everything runs in your browser
- **Smart Context**: When viewing tutorials, the AI automatically knows the topic and can provide specific guidance
- **Guitar-Focused**: Specialized system prompt ensures responses are always relevant to guitar learning

## 🛠️ Setup Instructions

### 1. Install Dependencies
The required package is already installed:
```bash
npm install @google/generative-ai
```

### 2. Get Your Free Gemini API Key
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy your API key

### 3. Configure Environment Variables
Create or update your `.env` file in the project root:
```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

⚠️ **Important**: 
- Use `VITE_` prefix for Vite projects (not `NEXT_PUBLIC_`)
- Never commit your API key to version control
- Add `.env` to your `.gitignore` file

### 4. Deploy to Vercel
The chatbot works seamlessly with Vercel deployment:

1. Add your API key to Vercel environment variables:
   ```bash
   vercel env add VITE_GEMINI_API_KEY
   ```

2. Or through the Vercel dashboard:
   - Go to your project settings
   - Navigate to "Environment Variables"
   - Add `VITE_GEMINI_API_KEY` with your API key value

## 🎯 How to Use

### Basic Chat
1. Click the floating purple/blue gradient button in the bottom-right corner
2. Type your guitar-related questions in the text input
3. Press Enter or click the Send button
4. The AI will respond with helpful guitar learning advice

### Voice Interaction
1. Click the microphone button 🎤 to start voice recognition
2. Speak your question clearly
3. The speech will be converted to text automatically
4. Send the message as normal

### Context-Aware Learning
1. Open any tutorial video or notes in the app
2. The chatbot automatically knows what you're learning about
3. Ask questions like:
   - "How do I improve my chord transitions for this song?"
   - "What are some practice tips for this technique?"
   - "Can you explain this concept in simpler terms?"

### Text-to-Speech
- Click the speaker icon 🔊 next to any AI response to hear it spoken aloud
- Perfect for hands-free learning while practicing guitar

### Interface Controls
- **Minimize/Maximize**: Click the minimize button to compact the chat
- **Drag**: Click and drag the header to move the chat window
- **Close**: Click the X button to close the chat entirely

## 🔧 Technical Implementation

### File Structure
```
src/
├── components/
│   └── FloatingChatbot.tsx          # Main chatbot component
├── contexts/
│   └── ChatbotContext.tsx           # Context for sharing topic information
└── App.tsx                          # Updated to include chatbot
```

### Key Features Implemented

#### 1. Speech Recognition
```typescript
// Uses the Web Speech API with fallback support
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
```

#### 2. Context Integration
```typescript
// Automatically passed when viewing tutorials
const context = {
  title: "Basic Chord Progressions",
  description: "Learn fundamental chord progressions...",
  notes: "Complete tutorial notes...",
  currentVideo: "YouTube video URL"
};
```

#### 3. Gemini AI Integration
```typescript
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
```

### Integration with Existing Components
The chatbot automatically integrates with:
- **GuitarTutorials**: Provides context when videos/notes are opened
- **Navigation**: Maintains context across different sections
- **VideoPlayer**: Context is active while video is playing

## 🎵 Example Interactions

### General Guitar Questions
- "How do I tune my guitar?"
- "What's the difference between major and minor chords?"
- "How should I hold the pick?"

### Context-Aware Questions (when viewing tutorials)
- "I'm struggling with the chord changes in this tutorial, any tips?"
- "Can you break down the strumming pattern shown in this video?"
- "What songs can I practice using these chords?"

### Voice Commands
Just click the mic and say:
- "How do I play a G major chord?"
- "Explain music theory basics"
- "What's the best way to practice scales?"

## 🚀 Deployment Notes

### Vercel Deployment
1. The app is optimized for Vercel deployment
2. All client-side processing means no serverless functions needed
3. Environment variables are properly configured for Vite
4. No additional build configuration required

### Performance Considerations
- Chat history is stored in component state (resets on page refresh)
- Speech APIs only work over HTTPS (perfect for Vercel)
- Gemini API calls are optimized for minimal token usage
- Context is automatically cleared when switching topics

## 🔒 Security & Privacy

- **API Key**: Securely stored in environment variables
- **Client-Side**: No chat data is stored on any server
- **Privacy**: Conversations are not persisted between sessions
- **HTTPS**: Required for speech features (automatically provided by Vercel)

## 🎯 Future Enhancements

Potential features for future development:
- Chat history persistence with local storage
- Multi-language support for international users
- Integration with music theory diagrams
- Voice-controlled guitar tuner integration
- Personalized learning path recommendations

## 🆘 Troubleshooting

### Common Issues

**Chatbot doesn't respond:**
- Check if `VITE_GEMINI_API_KEY` is set correctly
- Verify your API key is valid at Google AI Studio
- Check browser console for error messages

**Voice input not working:**
- Ensure you're using HTTPS (required for microphone access)
- Grant microphone permissions when prompted
- Try using Chrome or Edge (best Speech API support)

**Context not working:**
- Context is only available when viewing tutorials or notes
- Make sure you opened a tutorial before asking context-specific questions

### API Limits
- Gemini 1.5 Flash has generous free tier limits
- Monitor your usage at Google AI Studio
- Consider implementing rate limiting for production use

---

**Ready to start learning? 🎸**
1. Set up your API key
2. Click the floating chat button
3. Ask your first guitar question!

The AI chatbot is designed to be your personal guitar learning companion, ready to help with everything from basic chords to advanced techniques. Happy learning! 🎵