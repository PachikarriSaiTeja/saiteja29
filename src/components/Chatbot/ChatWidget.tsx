import { MessageCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ChatWidgetProps {
  onClick: () => void;
  isOpen: boolean;
}

export const ChatWidget = ({ onClick, isOpen }: ChatWidgetProps) => {
  return (
    <Button
      onClick={onClick}
      className={`fixed bottom-4 right-4 h-14 w-14 rounded-full shadow-lg z-40 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 transition-all duration-300 ${
        isOpen ? 'scale-90 opacity-80' : 'scale-100 hover:scale-105'
      }`}
      size="icon"
    >
      <div className="relative">
        {isOpen ? (
          <Sparkles size={24} className="animate-pulse" />
        ) : (
          <MessageCircle size={24} />
        )}
        
        {/* Notification dot */}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
        )}
        
        {/* Ripple effect */}
        <div className="absolute inset-0 rounded-full bg-white/20 animate-ping" style={{ animationDuration: '2s' }} />
      </div>
    </Button>
  );
};