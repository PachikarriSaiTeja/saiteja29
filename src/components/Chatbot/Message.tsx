import { type ChatMessage } from '@/services/geminiApi';
import { Bot, User } from 'lucide-react';

interface MessageProps {
  message: ChatMessage;
}

export const Message = ({ message }: MessageProps) => {
  const isUser = message.role === 'user';
  
  return (
    <div className={`flex gap-2 mb-4 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
        isUser 
          ? 'bg-primary text-primary-foreground' 
          : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
      }`}>
        {isUser ? <User size={16} /> : <Bot size={16} />}
      </div>
      
      <div className={`max-w-[80%] rounded-lg px-3 py-2 ${
        isUser
          ? 'bg-primary text-primary-foreground ml-2'
          : 'bg-muted text-foreground mr-2'
      }`}>
        <p className="text-sm leading-relaxed whitespace-pre-wrap">
          {message.content}
        </p>
        <p className={`text-xs mt-1 opacity-70 ${
          isUser ? 'text-primary-foreground/70' : 'text-muted-foreground'
        }`}>
          {message.timestamp.toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </p>
      </div>
    </div>
  );
};