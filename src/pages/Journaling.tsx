
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { useUser } from '@/context/UserContext';
import { toast } from '@/components/ui/use-toast';

const Journaling = () => {
  const navigate = useNavigate();
  const { user, completeAction, addXp } = useUser();
  const [reflection, setReflection] = useState('');

  if (!user.pendingAction) {
    navigate('/dashboard');
    return null;
  }

  const handleSubmit = () => {
    completeAction(user.pendingAction!.category);
    addXp(user.pendingAction!.xpReward);
    
    toast({
      title: "Great job!",
      description: "Your reflection has been saved.",
    });
    
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-4">
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold">Reflect on your action</h2>
            <p className="text-muted-foreground">Take a moment to write down your thoughts</p>
          </CardHeader>
          <CardContent>
            <Textarea
              value={reflection}
              onChange={(e) => setReflection(e.target.value)}
              placeholder="How did this activity make you feel?"
              className="min-h-[150px]"
            />
          </CardContent>
          <CardFooter>
            <Button onClick={handleSubmit} className="w-full">
              Complete
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Journaling;
