import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { MoodState, PetType } from '@/types';
interface PetMessageProps {
  petName: string;
  petType: PetType;
  mood: MoodState;
  className?: string;
}
const PetMessage: React.FC<PetMessageProps> = ({
  petName,
  petType,
  mood,
  className
}) => {
  const getMessage = () => {
    if (mood === 'tired') {
      return `I'm feeling a bit low today... Have you been getting enough rest?`;
    } else if (mood === 'neutral') {
      return `Hey there! How are you feeling today?`;
    } else {
      return `I'm feeling great today! Let's make it even better!`;
    }
  };
  const getBubbleColor = () => {
    if (mood === 'tired') {
      return 'bg-blue-50';
    } else if (mood === 'neutral') {
      return 'bg-purple-50';
    } else {
      return 'bg-amber-50';
    }
  };
  return <div className={cn("w-full max-w-md mx-auto", className)}>
      <Card className={cn("shadow-sm border-none", getBubbleColor())}>
        <CardContent className="pt-4 my-[70px]">
          <div className="flex items-start gap-2">
            <div className="flex flex-col">
              <p className="text-sm"><strong>{petName}</strong></p>
              <p className="text-sm text-muted-foreground">{getMessage()}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>;
};
export default PetMessage;