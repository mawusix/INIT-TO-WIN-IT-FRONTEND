
import React, { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { MoodValue } from '@/types';
import { cn } from '@/lib/utils';

interface MoodSliderProps {
  onMoodSelect: (mood: MoodValue) => void;
}

const MoodSlider: React.FC<MoodSliderProps> = ({ onMoodSelect }) => {
  const [sliderValue, setSliderValue] = useState<number[]>([3]);
  
  const handleValueChange = (value: number[]) => {
    setSliderValue(value);
    onMoodSelect(value[0] as MoodValue);
  };
  
  const getMoodEmoji = () => {
    switch (sliderValue[0]) {
      case 1: return '😔';
      case 2: return '😕';
      case 3: return '😐';
      case 4: return '🙂';
      case 5: return '😄';
      default: return '😐';
    }
  };
  
  const getMoodText = () => {
    switch (sliderValue[0]) {
      case 1: return 'Very Low';
      case 2: return 'Low';
      case 3: return 'Neutral';
      case 4: return 'Good';
      case 5: return 'Very Good';
      default: return 'Neutral';
    }
  };
  
  const getMoodColor = () => {
    switch (sliderValue[0]) {
      case 1: return 'text-blue-500';
      case 2: return 'text-indigo-500';
      case 3: return 'text-purple-500';
      case 4: return 'text-violet-500';
      case 5: return 'text-fuchsia-500';
      default: return 'text-purple-500';
    }
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      <div className="text-center">
        <p className="text-6xl mb-2">{getMoodEmoji()}</p>
        <h3 className={cn("text-2xl font-medium", getMoodColor())}>{getMoodText()}</h3>
      </div>
      
      <Slider 
        defaultValue={[3]}
        max={5}
        min={1}
        step={1}
        value={sliderValue} 
        onValueChange={handleValueChange}
        className="py-4" 
      />

      <div className="flex justify-between px-2 text-xs text-muted-foreground">
        <span>Very Low</span>
        <span>Very Good</span>
      </div>
    </div>
  );
};

export default MoodSlider;
