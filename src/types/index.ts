export type PetType = 'cat' | 'dog' | 'bunny' | 'fox';
export type MoodState = 'tired' | 'neutral' | 'happy';
export type CategoryType = 'sleep' | 'movement' | 'finance' | 'personal' | 'social';
export type MoodValue = 1 | 2 | 3 | 4 | 5;

export interface QuizQuestion {
  id: number;
  text: string;
  category: CategoryType;
  options: string[];
}

export interface Pet {
  name: string;
  type: PetType;
  mood: MoodState;
  xp: number;
  level: number;
}

export interface PendingAction {
  id: string;
  category: CategoryType;
  title: string;
  description: string;
  duration: string;
  xpReward: number;
}

export interface UserState {
  completedOnboarding: boolean;
  pet: Pet | null;
  quizAnswers: Record<number, number>;
  moodHistory: Array<{date: string, value: MoodValue}>;
  completedActions: Array<{date: string, category: CategoryType}>;
  pendingAction: PendingAction | null;
}
