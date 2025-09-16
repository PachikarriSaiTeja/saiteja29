import { useState, useRef, useEffect } from 'react';
import { X, Send, Trash2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Message } from './Message';
import { useChatbot } from '@/hooks/useChatbot';

interface ChatWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

const QUICK_QUESTIONS = [
  "Tell me about SaiTeja's skills",
  "What projects has he worked on?",
  "What's his educational background?",
  "What technologies does he use?"
];

export const ChatWindow = ({ isOpen, onClose }: ChatWindowProps) => {
  const [inputValue, setInputValue] = useState('');
  const { messages, isLoading, sendMessage, clearChat } = useChatbot();
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;
    
    await sendMessage(inputValue);
    setInputValue('');
  };

  const handleQuickQuestion = async (question: string) => {
    await sendMessage(question);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-20 right-4 w-80 h-96 bg-background/95 backdrop-blur-md border border-border rounded-lg shadow-xl z-50 flex flex-col animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
            <Sparkles size={16} className="text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-sm">SaiTeja's AI Assistant</h3>
            <p className="text-xs text-muted-foreground">Powered by Gemini</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={clearChat}
            className="h-8 w-8"
          >
            <Trash2 size={14} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-8 w-8"
          >
            <X size={14} />
          </Button>
        </div>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
        
        {isLoading && (
          <div className="flex gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center animate-pulse">
              <Sparkles size={16} className="text-white" />
            </div>
            <div className="bg-muted rounded-lg px-3 py-2">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}

        {/* Quick Questions (only show if no messages from user yet) */}
        {messages.length === 1 && (
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground mb-2">Quick questions:</p>
            {QUICK_QUESTIONS.map((question, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="w-full text-left justify-start text-xs h-auto py-2 px-3 whitespace-normal"
                onClick={() => handleQuickQuestion(question)}
                disabled={isLoading}
              >
                {question}
              </Button>
            ))}
          </div>
        )}
      </ScrollArea>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-4 border-t border-border">
        <div className="flex gap-2">
          <Input
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask about SaiTeja's work..."
            disabled={isLoading}
            className="flex-1 text-sm"
          />
          <Button
            type="submit"
            size="icon"
            disabled={!inputValue.trim() || isLoading}
            className="h-10 w-10"
          >
            <Send size={16} />
          </Button>
        </div>
      </form>
    </div>
  );
};