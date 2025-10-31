import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { MessageCircle, X, Mic, MicOff, Send, Volume2, VolumeX, Minimize2, Maximize2, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';

// TypeScript declarations for Speech Recognition API
interface ISpeechRecognition {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start(): void;
  stop(): void;
  onresult: (event: any) => void;
  onerror: (event: any) => void;
  onend: () => void;
}

declare global {
  interface Window {
    SpeechRecognition: new () => ISpeechRecognition;
    webkitSpeechRecognition: new () => ISpeechRecognition;
  }
}

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface TopicContext {
  title?: string;
  notes?: string;
  description?: string;
  currentVideo?: string;
}

interface FloatingChatbotProps {
  topicContext?: TopicContext | null;
}

const FloatingChatbot: React.FC<FloatingChatbotProps> = ({ topicContext }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 24, y: 24 }); // Distance from bottom-right

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<ISpeechRecognition | null>(null);
  const synthesisRef = useRef<SpeechSynthesis | null>(null);
  const chatWindowRef = useRef<HTMLDivElement>(null);
  const genAIRef = useRef<GoogleGenerativeAI | null>(null);
  const modelRef = useRef<any>(null);

  // Initialize Gemini AI
  useEffect(() => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    
    if (apiKey && apiKey !== 'your_gemini_api_key_here') {
      try {
        genAIRef.current = new GoogleGenerativeAI(apiKey);
        modelRef.current = genAIRef.current.getGenerativeModel({ model: 'gemini-1.5-flash' });
      } catch (error) {
        console.error('Error initializing Gemini AI:', error);
      }
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initialize position based on screen size
  useEffect(() => {
    const updatePosition = () => {
      const isMobile = window.innerWidth < 640; // sm breakpoint
      const chatWidth = isMobile ? 320 : 384;
      const chatHeight = isMobile ? 384 : 420;
      
      // Position with enough margin from edges
      const marginX = Math.max(16, (window.innerWidth - chatWidth) / 4);
      const marginY = Math.max(16, (window.innerHeight - chatHeight) / 4);
      
      setPosition({ 
        x: Math.min(marginX, 40), 
        y: Math.min(marginY, 40) 
      });
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, []);

  // Initialize Speech Recognition
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInputText(transcript);
        setIsListening(false);
      };

      recognitionRef.current.onerror = () => {
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }

    // Initialize Speech Synthesis
    if ('speechSynthesis' in window) {
      synthesisRef.current = window.speechSynthesis;
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      if (synthesisRef.current) {
        synthesisRef.current.cancel();
      }
    };
  }, []);

  const startListening = () => {
    if (recognitionRef.current && !isListening) {
      setIsListening(true);
      recognitionRef.current.start();
    }
  };

  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  const speakText = (text: string) => {
    if (synthesisRef.current && !isSpeaking) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.8;
      utterance.pitch = 1;
      utterance.volume = 0.8;
      
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      
      synthesisRef.current.speak(utterance);
    }
  };

  const stopSpeaking = () => {
    if (synthesisRef.current && isSpeaking) {
      synthesisRef.current.cancel();
      setIsSpeaking(false);
    }
  };

  const resetPosition = () => {
    const isMobile = window.innerWidth < 640;
    const chatWidth = isMobile ? 320 : 384;
    const chatHeight = isMobile ? 384 : 420;
    
    // Center the chatbot with some offset from edges
    const marginX = Math.max(20, (window.innerWidth - chatWidth) / 3);
    const marginY = Math.max(20, (window.innerHeight - chatHeight) / 3);
    
    setPosition({ 
      x: Math.min(marginX, 60), 
      y: Math.min(marginY, 60) 
    });
  };

  const generateSystemPrompt = () => {
    let systemPrompt = `You are a helpful guitar learning assistant who answers questions about guitar theory, chords, tuning, scales, techniques, and general music concepts. You provide clear, beginner-friendly explanations and practical advice for guitar players of all levels.`;
    
    if (topicContext) {
      systemPrompt += `\n\nCurrent Context:`;
      if (topicContext.title) {
        systemPrompt += `\nUser is currently learning about: ${topicContext.title}`;
      }
      if (topicContext.description) {
        systemPrompt += `\nTopic description: ${topicContext.description}`;
      }
      if (topicContext.notes) {
        systemPrompt += `\nRelevant notes: ${topicContext.notes}`;
      }
      if (topicContext.currentVideo) {
        systemPrompt += `\nCurrent video: ${topicContext.currentVideo}`;
      }
      systemPrompt += `\n\nPlease consider this context when answering the user's question and provide relevant, specific guidance.`;
    }
    
    return systemPrompt;
  };

  const sendMessage = async () => {
    if (!inputText.trim() || isLoading) return;

    // Check if API key is configured
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey || apiKey === 'your_gemini_api_key_here') {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Please configure your Gemini API key in the .env file. Get your free key from https://makersuite.google.com/app/apikey and add it as VITE_GEMINI_API_KEY=your_key_here',
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
      return;
    }

    // Check if model is initialized
    if (!modelRef.current) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'AI model is not initialized. Please refresh the page and try again.',
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText.trim(),
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputText.trim();
    setInputText('');
    setIsLoading(true);

    try {
      const systemPrompt = generateSystemPrompt();
      const prompt = `${systemPrompt}\n\nUser question: ${currentInput}`;
      
      const result = await modelRef.current.generateContent(prompt);
      const response = await result.response;
      const aiText = response.text();

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiText,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      
      let errorText = 'Sorry, I encountered an error. ';
      if (error instanceof Error) {
        if (error.message.includes('API_KEY_INVALID')) {
          errorText += 'Your API key appears to be invalid. Please check your Gemini API key in the .env file.';
        } else if (error.message.includes('QUOTA_EXCEEDED')) {
          errorText += 'API quota exceeded. Please check your Gemini API usage limits.';
        } else {
          errorText += 'Please make sure your Gemini API key is configured correctly and try again.';
        }
      } else {
        errorText += 'Please check your internet connection and try again.';
      }
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: errorText,
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Dragging functionality
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!chatWindowRef.current) return;
    
    setIsDragging(true);
    const rect = chatWindowRef.current.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.right,
      y: e.clientY - rect.bottom
    });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      
      const newX = window.innerWidth - e.clientX - dragOffset.x;
      const newY = window.innerHeight - e.clientY - dragOffset.y;
      
      // Ensure the chat window stays within viewport bounds
      const chatWidth = isMinimized ? 320 : 384; // w-80 = 320px, w-96 = 384px
      const chatHeight = isMinimized ? 64 : 420; // h-16 = 64px, h-96/h-[420px]
      
      setPosition({
        x: Math.max(16, Math.min(newX, window.innerWidth - chatWidth - 16)),
        y: Math.max(16, Math.min(newY, window.innerHeight - chatHeight - 16))
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed z-50 w-14 h-14 rounded-full shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-110 border-2 border-white/20"
        style={{
          bottom: `${Math.max(position.y, 24)}px`,
          right: `${Math.max(position.x, 24)}px`,
        }}
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </Button>
    );
  }

  return (
    <Card
      ref={chatWindowRef}
      className={`fixed z-50 shadow-2xl transition-all duration-300 border-2 border-primary/20 ${
        isMinimized 
          ? 'w-80 h-16' 
          : 'w-80 h-96 sm:w-96 sm:h-[420px]'
      }`}
      style={{
        bottom: `${Math.min(position.y, window.innerHeight - (isMinimized ? 80 : 450))}px`,
        right: `${Math.min(position.x, window.innerWidth - (isMinimized ? 320 : 384) - 16)}px`,
      }}
    >
      <CardHeader 
        className="flex flex-row items-center justify-between space-y-0 pb-2 cursor-move bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-lg"
        onMouseDown={handleMouseDown}
      >
        <div className="flex items-center space-x-2">
          <MessageCircle className="w-5 h-5" />
          <span className="font-semibold">Guitar AI Assistant</span>
          {topicContext?.title && (
            <Badge variant="secondary" className="text-xs">
              {topicContext.title}
            </Badge>
          )}
        </div>
        <div className="flex space-x-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={resetPosition}
            className="text-white hover:bg-white/20 h-8 w-8 p-0"
            title="Reset position"
          >
            <RotateCcw className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMinimized(!isMinimized)}
            className="text-white hover:bg-white/20 h-8 w-8 p-0"
          >
            {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(false)}
            className="text-white hover:bg-white/20 h-8 w-8 p-0"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>

      {!isMinimized && (
        <CardContent className="flex flex-col h-full p-0">
          <ScrollArea className="flex-1 p-3 max-h-[280px] sm:max-h-[300px]">
            <div className="space-y-3">
              {messages.length === 0 && (
                <div className="text-center text-gray-500 mt-2">
                  <MessageCircle className="w-10 h-10 mx-auto mb-3 text-gray-300" />
                  <p className="text-sm font-medium">Hi! I'm your guitar learning assistant. 🎸</p>
                  <p className="text-xs mt-1">Ask me anything about guitar theory, chords, or techniques!</p>
                  
                  {topicContext?.title && (
                    <div className="mt-2 p-2 bg-blue-50 rounded-lg">
                      <p className="text-xs text-blue-600">
                        📖 I can see you're learning about: <strong>{topicContext.title}</strong>
                      </p>
                      <p className="text-xs text-blue-500 mt-1">
                        Feel free to ask me questions about this topic!
                      </p>
                    </div>
                  )}
                </div>
              )}
              
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-2 rounded-lg text-sm ${
                      message.isUser
                        ? 'bg-blue-500 text-white rounded-br-none'
                        : 'bg-gray-100 text-gray-800 rounded-bl-none'
                    }`}
                  >
                    <p className="text-xs whitespace-pre-wrap">{message.text}</p>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-xs opacity-70">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                      {!message.isUser && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => isSpeaking ? stopSpeaking() : speakText(message.text)}
                          className="h-5 w-5 p-0 ml-1"
                        >
                          {isSpeaking ? (
                            <VolumeX className="w-3 h-3" />
                          ) : (
                            <Volume2 className="w-3 h-3" />
                          )}
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 p-3 rounded-lg rounded-bl-none">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          <div className="p-3 border-t bg-gray-50 mt-auto">
            <div className="flex space-x-2 mb-2">
              <Input
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about guitar theory, chords, techniques..."
                className="flex-1 text-sm"
                disabled={isLoading}
              />
              <Button
                variant="outline"
                size="sm"
                onClick={isListening ? stopListening : startListening}
                disabled={isLoading}
                className={`${isListening ? 'bg-red-100 border-red-300' : ''} shrink-0`}
                title={isListening ? "Stop listening" : "Voice input"}
              >
                {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
              </Button>
              <Button 
                onClick={sendMessage} 
                disabled={!inputText.trim() || isLoading}
                size="sm"
                className="shrink-0"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            {isListening && (
              <p className="text-xs text-red-600 text-center animate-pulse">
                🎤 Listening... Speak now
              </p>
            )}
          </div>
        </CardContent>
      )}
    </Card>
  );
};

export default FloatingChatbot;