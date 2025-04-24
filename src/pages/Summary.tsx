
import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ProgressRing from '@/components/ProgressRing';
import { useUser } from '@/context/UserContext';
import { CategoryType } from '@/types';

const Summary = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  
  // Get data for the current week
  const today = new Date();
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - today.getDay());
  startOfWeek.setHours(0, 0, 0, 0);
  
  const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0];
  };
  
  // Filter actions for current week
  const weeklyActions = useMemo(() => {
    return user.completedActions.filter(action => {
      const actionDate = new Date(action.date);
      return actionDate >= startOfWeek;
    });
  }, [user.completedActions]);
  
  // Group actions by category
  const actionsByCategory = useMemo(() => {
    const categories: Record<CategoryType, number> = {
      'sleep': 0,
      'movement': 0,
      'finance': 0,
      'personal': 0,
      'social': 0
    };
    
    weeklyActions.forEach(action => {
      categories[action.category]++;
    });
    
    return categories;
  }, [weeklyActions]);
  
  // Calculate streak (if there are entries for consecutive days)
  const calculateStreak = () => {
    if (user.moodHistory.length === 0) return 0;
    
    const sortedDates = [...user.moodHistory]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .map(entry => entry.date);
    
    let streak = 1;
    const todayStr = formatDate(today);
    
    // If there's no entry for today, no streak
    if (sortedDates[0] !== todayStr) return 0;
    
    for (let i = 1; i < sortedDates.length; i++) {
      const currentDate = new Date(sortedDates[i-1]);
      const prevDate = new Date(sortedDates[i]);
      
      const diffDays = Math.floor((currentDate.getTime() - prevDate.getTime()) / (1000 * 60 * 60 * 24));
      
      if (diffDays === 1) {
        streak++;
      } else {
        break;
      }
    }
    
    return streak;
  };
  
  const streak = calculateStreak();
  
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container mx-auto max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Weekly Summary</h1>
          <Button variant="ghost" size="sm" onClick={() => navigate('/dashboard')}>
            Back
          </Button>
        </div>
        
        <Card className="mb-6">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Your Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">{weeklyActions.length}</div>
                <div className="text-sm text-muted-foreground">Actions<br />Completed</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">{streak}</div>
                <div className="text-sm text-muted-foreground">Day<br />Streak</div>
              </div>
              
              <ProgressRing progress={Math.min(weeklyActions.length * 10, 100)} size={80}>
                <div className="text-xs text-center">
                  <div className="font-semibold">{Math.min(weeklyActions.length * 10, 100)}%</div>
                  <div className="text-[10px] text-muted-foreground">Weekly<br />Goal</div>
                </div>
              </ProgressRing>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Activity by Category</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {Object.entries(actionsByCategory).map(([category, count]) => (
              <div key={category} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="capitalize">{category}</span>
                  <span>{count} activities</span>
                </div>
                <div className="w-full bg-muted h-2 rounded-full">
                  <div 
                    className="bg-primary h-2 rounded-full" 
                    style={{ width: `${count * 20}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        
        <div className="mt-6 text-center px-6">
          <p className="text-muted-foreground text-sm">
            Remember: Progress isn't linear, but you're showing up — that's huge!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
