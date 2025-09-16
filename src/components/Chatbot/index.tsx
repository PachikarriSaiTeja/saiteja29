import { useChatbot } from '@/hooks/useChatbot';
import { ChatWidget } from './ChatWidget';
import { ChatWindow } from './ChatWindow';

export const Chatbot = () => {
  const { isOpen, toggleChat } = useChatbot();

  return (
    <>
      <ChatWidget onClick={toggleChat} isOpen={isOpen} />
      <ChatWindow isOpen={isOpen} onClose={toggleChat} />
    </>
  );
};