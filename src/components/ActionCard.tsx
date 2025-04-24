
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CategoryType } from '@/types';
import { Calendar, Dumbbell, PiggyBank, Book, Users } from 'lucide-react';

interface ActionCardProps {
  category: CategoryType;
  title: string;
  description: string;
  duration: string;
  onComplete: () => void;
}

const ActionCard: React.FC<ActionCardProps> = ({ 
  category, 
  title, 
  description, 
  duration,
  onComplete
}) => {
  const getCategoryIcon = () => {
    switch(category) {
      case 'sleep': return <Calendar className="h-5 w-5 text-blue-500" />;
      case 'movement': return <Dumbbell className="h-5 w-5 text-green-500" />;
      case 'finance': return <PiggyBank className="h-5 w-5 text-yellow-500" />;
      case 'personal': return <Book className="h-5 w-5 text-purple-500" />;
      case 'social': return <Users className="h-5 w-5 text-pink-500" />;
    }
  };
  
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            {getCategoryIcon()}
            <span className="text-sm text-muted-foreground capitalize">{category}</span>
          </div>
          <span className="text-xs text-muted-foreground px-2 py-1 bg-muted rounded-full">
            {duration}
          </span>
        </div>
        <CardTitle className="text-xl mt-2">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Button onClick={onComplete} className="w-full">
          I did it!
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ActionCard;
