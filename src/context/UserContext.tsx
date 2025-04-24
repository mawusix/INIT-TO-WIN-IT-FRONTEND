import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserState, Pet, MoodValue, CategoryType, PendingAction } from '../types';

interface UserContextType {
  user: UserState;
  createPet: (name: string, type: string) => void;
  completeQuiz: (answers: Record<number, number>) => void;
  recordMood: (value: MoodValue) => void;
  completeAction: (category: CategoryType) => void;
  resetOnboarding: () => void;
  addXp: (amount: number) => void;
  setPendingAction: (action: PendingAction | null) => void;
}

const initialUserState: UserState = {
  completedOnboarding: false,
  pet: null,
  quizAnswers: {},
  moodHistory: [],
  completedActions: [],
  pendingAction: null,
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserState>(() => {
    const savedUser = localStorage.getItem('mindfulCompanionUser');
    return savedUser ? JSON.parse(savedUser) : initialUserState;
  });

  useEffect(() => {
    localStorage.setItem('mindfulCompanionUser', JSON.stringify(user));
  }, [user]);

  const createPet = (name: string, type: string) => {
    setUser(prev => ({
      ...prev,
      pet: {
        name,
        type: type as any,
        mood: 'neutral',
        xp: 0,
        level: 1,
      },
    }));
  };

  const completeQuiz = (answers: Record<number, number>) => {
    setUser(prev => ({
      ...prev,
      completedOnboarding: true,
      quizAnswers: answers,
    }));
  };

  const recordMood = (value: MoodValue) => {
    const today = new Date().toISOString().split('T')[0];
    
    // Update pet mood based on mood value
    const newMood = value <= 2 ? 'tired' : value >= 4 ? 'happy' : 'neutral';
    
    setUser(prev => ({
      ...prev,
      moodHistory: [...prev.moodHistory, { date: today, value }],
      pet: prev.pet ? {
        ...prev.pet,
        mood: newMood as any,
      } : null,
    }));
  };

  const completeAction = (category: CategoryType) => {
    const today = new Date().toISOString().split('T')[0];
    
    setUser(prev => ({
      ...prev,
      completedActions: [...prev.completedActions, { date: today, category }],
    }));
  };

  const resetOnboarding = () => {
    setUser(initialUserState);
  };

  const addXp = (amount: number) => {
    if (!user.pet) return;
    
    const newXp = user.pet.xp + amount;
    const xpNeededForNextLevel = user.pet.level * 100;
    let newLevel = user.pet.level;
    
    if (newXp >= xpNeededForNextLevel) {
      newLevel += 1;
    }
    
    setUser(prev => ({
      ...prev,
      pet: prev.pet ? {
        ...prev.pet,
        xp: newXp,
        level: newLevel,
        mood: 'happy',
      } : null,
    }));
  };

  const setPendingAction = (action: PendingAction | null) => {
    setUser(prev => ({
      ...prev,
      pendingAction: action,
    }));
  };

  return (
    <UserContext.Provider value={{ 
      user, 
      createPet, 
      completeQuiz,
      recordMood,
      completeAction,
      resetOnboarding,
      addXp,
      setPendingAction
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
