import { useState, useCallback } from 'react';
import { geminiApi, type ChatMessage } from '@/services/geminiApi';
import { getPortfolioContext } from '@/data/portfolioContext';

export const useChatbot = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content: "Hi! I'm SaiTeja's AI assistant. I can help you learn about his skills, projects, experience, and background. What would you like to know?",
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      role: 'user',
      content: content.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await geminiApi.sendMessage(content, getPortfolioContext());
      
      const assistantMessage: ChatMessage = {
        role: 'assistant',
        content: response,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage: ChatMessage = {
        role: 'assistant',
        content: "I apologize, but I'm having trouble connecting right now. Please try again or feel free to contact SaiTeja directly at his email.",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading]);

  const clearChat = useCallback(() => {
    setMessages([
      {
        role: 'assistant',
        content: "Hi! I'm SaiTeja's AI assistant. I can help you learn about his skills, projects, experience, and background. What would you like to know?",
        timestamp: new Date()
      }
    ]);
  }, []);

  const toggleChat = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return {
    messages,
    isLoading,
    isOpen,
    sendMessage,
    clearChat,
    toggleChat
  };
};