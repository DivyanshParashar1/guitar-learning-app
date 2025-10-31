import React, { createContext, useContext, useState, ReactNode } from 'react';

interface TopicContext {
  title?: string;
  notes?: string;
  description?: string;
  currentVideo?: string;
}

interface ChatbotContextType {
  topicContext: TopicContext | null;
  setTopicContext: (context: TopicContext | null) => void;
}

const ChatbotContext = createContext<ChatbotContextType | undefined>(undefined);

export const useChatbotContext = () => {
  const context = useContext(ChatbotContext);
  if (context === undefined) {
    throw new Error('useChatbotContext must be used within a ChatbotContextProvider');
  }
  return context;
};

interface ChatbotContextProviderProps {
  children: ReactNode;
}

export const ChatbotContextProvider: React.FC<ChatbotContextProviderProps> = ({ children }) => {
  const [topicContext, setTopicContext] = useState<TopicContext | null>(null);

  return (
    <ChatbotContext.Provider value={{ topicContext, setTopicContext }}>
      {children}
    </ChatbotContext.Provider>
  );
};