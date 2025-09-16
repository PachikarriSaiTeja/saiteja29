import { User, UserX } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface ProfileToggleProps {
  onToggle: (show: boolean) => void;
}

export const ProfileToggle = ({ onToggle }: ProfileToggleProps) => {
  const [showProfile, setShowProfile] = useState(true);

  const toggleProfile = () => {
    const newState = !showProfile;
    setShowProfile(newState);
    onToggle(newState);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleProfile}
      className="fixed top-4 right-20 z-50 glass-card hover:glass-card-hover transition-all duration-300"
      aria-label="Toggle profile picture"
    >
      {showProfile ? (
        <User className="h-5 w-5 transition-transform duration-300" />
      ) : (
        <UserX className="h-5 w-5 transition-transform duration-300" />
      )}
    </Button>
  );
};