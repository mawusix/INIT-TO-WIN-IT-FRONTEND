import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import PetAvatar from '@/components/PetAvatar';
import PetMessage from '@/components/PetMessage';
import ProgressRing from '@/components/ProgressRing';
import { useUser } from '@/context/UserContext';
import { RotateCcw } from 'lucide-react';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';;
 import { FileText, Activity, Heart, BookOpen } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, resetOnboarding } = useUser();
  const handleNavigate = (path: string) => {
    navigate(path);
  };
  
  if (!user.pet) {
    navigate('/');
    return null;
  }

  // Calculate XP progress percentage
  const xpNeededForNextLevel = user.pet.level * 100;
  const xpProgress = Math.min(Math.round((user.pet.xp / xpNeededForNextLevel) * 100), 100);

  // Get completed actions count for today
  const today = new Date().toISOString().split('T')[0];
  const todayActions = user.completedActions.filter(action => action.date === today).length;

  const handleReset = () => {
    resetOnboarding();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background px-4 py-8 space-y-6">
      <div className="container max-w-md mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <ProgressRing progress={xpProgress} size={44} strokeWidth={4}>
              <span className="text-xs font-semibold">{user.pet.level}</span>
            </ProgressRing>
            <div className="ml-2">
              <p className="text-sm font-medium">Level {user.pet.level}</p>
              <p className="text-xs text-muted-foreground">{user.pet.xp} / {xpNeededForNextLevel} XP</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium">{todayActions} actions today</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex flex-col items-center space-y-4">
            <PetAvatar
              type={user.pet.type as any}
              mood={user.pet.mood}
              name={user.pet.name}
              size="lg"
            />
            <PetMessage
              petName={user.pet.name}
              petType={user.pet.type as any}
              mood={user.pet.mood}
              className="w-full max-w-md"
            />
          </div>

          <Card className="bg-primary/10 border-none shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm">Today's mood check-in</p>
                {user.moodHistory.some(entry => entry.date === today) ? (
                  <span className="text-xs bg-primary/20 text-primary-foreground px-2 py-0.5 rounded-full">
                    Completed
                  </span>
                ) : (
                  <span className="text-xs bg-secondary/20 text-secondary-foreground px-2 py-0.5 rounded-full">
                    Pending
                  </span>
                )}
              </div>
            </CardContent>
          </Card>

          <Button 
            onClick={() => navigate('/check-in')}
            className="w-full py-6 text-base"
            variant={user.moodHistory.some(entry => entry.date === today) ? "outline" : "default"}
          >
            Check in with how you're feeling
          </Button>

          {user.pendingAction && (
            <Card className="border-dashed">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Pending Action</h3>
                    <p className="text-sm text-muted-foreground">{user.pendingAction.title}</p>
                  </div>
                  <Button variant="secondary" size="sm" onClick={() => navigate('/journaling')}>
                    Complete
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
          <div className="mt-8">
           <Table>
             <TableBody>
               <TableRow>
                 <TableCell className="p-2">
                    <Card 
                      className="p-4 hover:bg-accent cursor-pointer transition-colors text-center"
                      onClick={() => handleNavigate('/summary')}
                    >
                     <FileText className="h-6 w-6 mx-auto mb-2" />
                     <span>Summary</span>
                   </Card>
                 </TableCell>
                 <TableCell className="p-2">
                  <Card 
                      className="p-4 hover:bg-accent cursor-pointer transition-colors text-center"
                      onClick={() => handleNavigate('/progress')}
                    >
                     <Activity className="h-6 w-6 mx-auto mb-2" />
                     <span>Progress</span>
                   </Card>
                 </TableCell>
               </TableRow>
               <TableRow>
                 <TableCell className="p-2">
                  <Card 
                      className="p-4 hover:bg-accent cursor-pointer transition-colors text-center"
                      onClick={() => handleNavigate('/actions')}
                    >
                     <Heart className="h-6 w-6 mx-auto mb-2" />
                     <span>Actions</span>
                   </Card>
                 </TableCell>
                 <TableCell className="p-2">
                  <Card 
                      className="p-4 hover:bg-accent cursor-pointer transition-colors text-center"
                      onClick={() => handleNavigate('/journaling')}
                    >
                     <BookOpen className="h-6 w-6 mx-auto mb-2" />
                     <span>Journal</span>
                   </Card>
                 </TableCell>
               </TableRow>
             </TableBody>
           </Table>
         </div>
        <div className="pt-8">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button 
                variant="ghost" 
                className="w-full text-destructive hover:text-destructive"
              >
                <RotateCcw className="mr-2 h-4 w-4" />
                Reset App
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This will reset all your progress, including your pet, mood history, and completed actions.
                  This action cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleReset} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                  Reset
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

        </div>

        <Button 
          onClick={() => navigate('/Crisis-support')}
          className="w-full py-6 text-base"
        >
          Crisis Support Mode
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
