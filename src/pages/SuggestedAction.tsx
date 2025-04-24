
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useUser } from '@/context/UserContext';
import ActionCard from '@/components/ActionCard';
import { getSuggestedAction } from '@/data/suggestedActions';
import { CategoryType } from '@/types';

const SuggestedAction = () => {
  const navigate = useNavigate();
  const { category } = useParams<{ category: CategoryType }>();
  const { user, setPendingAction } = useUser();
  
  if (!user.pet) {
    navigate('/');
    return null;
  }

  const action = getSuggestedAction(category as CategoryType);
  
  const handleAcceptAction = () => {
    setPendingAction(action);
    navigate('/journaling');
  };

  const handleSkipAction = () => {
    setPendingAction(action);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-4">
        <h1 className="text-2xl font-semibold text-center">Suggested Action</h1>
        
        <ActionCard
          category={action.category}
          title={action.title}
          description={action.description}
          duration={action.duration}
          onComplete={handleAcceptAction}
        />
        
        <div className="flex flex-col gap-2 w-full pt-4">
          <Button onClick={handleAcceptAction} className="w-full">
            Yes, I'll do it
          </Button>
          <Button variant="outline" onClick={handleSkipAction} className="w-full">
            Not right now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SuggestedAction;
