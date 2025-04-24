
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import MoodSlider from '@/components/MoodSlider';
import { useUser } from '@/context/UserContext';
import { toast } from '@/components/ui/use-toast';
import { MoodValue } from '@/types';

const CheckIn = () => {
  const navigate = useNavigate();
  const { user, recordMood } = useUser();
  const [selectedMood, setSelectedMood] = useState<MoodValue>(3);

  if (!user.pet) {
    navigate('/');
    return null;
  }

  const handleMoodSubmit = () => {
    recordMood(selectedMood);
    
    toast({
      title: "Mood recorded",
      description: "Thank you for checking in today!",
    });
    
    navigate('/action/personal');
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="shadow-md">
          <CardHeader className="text-center pb-3">
            <CardTitle className="text-2xl">How are you feeling?</CardTitle>
          </CardHeader>
          <CardContent className="pt-6 pb-6">
            <MoodSlider onMoodSelect={setSelectedMood} />
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button
              onClick={handleMoodSubmit}
              className="w-full"
            >
              Continue
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default CheckIn;
