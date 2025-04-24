
import React from 'react';
import { MoodState, PetType } from '../types';
import { cn } from '@/lib/utils';

interface PetAvatarProps {
  type: PetType;
  mood: MoodState;
  name: string;
  size?: 'sm' | 'md' | 'lg';
  animate?: boolean;
}

const PetAvatar: React.FC<PetAvatarProps> = ({ type, mood, name, size = 'md', animate = true }) => {
  const sizeClasses = {
    sm: 'w-24 h-24',
    md: 'w-40 h-40',
    lg: 'w-52 h-52',
  };

  const getEmoji = () => {
    if (type === 'cat') {
      return mood === 'tired' ? '😿' : mood === 'neutral' ? '😺' : '😸';
    } else if (type === 'dog') {
      return mood === 'tired' ? '🐶' : mood === 'neutral' ? '🐕' : '🐶';
    } else if (type === 'bunny') {
      return mood === 'tired' ? '🐰' : mood === 'neutral' ? '🐇' : '🐰';
    } else {
      return mood === 'tired' ? '🦊' : mood === 'neutral' ? '🦊' : '🦊';
    }
  };

  const getMoodColor = () => {
    return mood === 'tired' ? 'bg-blue-100' : 
           mood === 'neutral' ? 'bg-purple-100' : 
           'bg-yellow-100';
  };

  return (
    <div className="pet-container">
      <div className="pet-shadow"></div>
      <div className={cn(
        "flex items-center justify-center rounded-full overflow-hidden",
        getMoodColor(),
        sizeClasses[size],
        animate && "breathing"
      )}>
        <span className="text-6xl">{getEmoji()}</span>
      </div>
      <p className="text-center mt-2 font-medium">{name}</p>
    </div>
  );
};

export default PetAvatar;
