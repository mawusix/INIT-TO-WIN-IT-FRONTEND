
import { CategoryType } from "@/types";

interface SuggestedAction {
  id: string;
  category: CategoryType;
  title: string;
  description: string;
  duration: string;
  xpReward: number;
}

export const suggestedActions: SuggestedAction[] = [
  // Sleep
  {
    id: "sleep-1",
    category: 'sleep',
    title: "10-Minute Bedtime Meditation",
    description: "Try this quick guided meditation to calm your mind before sleep.",
    duration: "10 minutes",
    xpReward: 20,
  },
  {
    id: "sleep-2",
    category: 'sleep',
    title: "Evening Screen Detox",
    description: "Put away all screens at least 30 minutes before bedtime tonight.",
    duration: "30+ minutes",
    xpReward: 25,
  },
  {
    id: "sleep-3",
    category: 'sleep',
    title: "Sleep Environment Upgrade",
    description: "Make one small change to your bedroom to improve sleep quality (like reducing light or noise).",
    duration: "5 minutes",
    xpReward: 15,
  },
  
  // Movement
  {
    id: "movement-1",
    category: 'movement',
    title: "Quick Walking Break",
    description: "Step outside for a 10-minute walk to refresh your body and mind.",
    duration: "10 minutes",
    xpReward: 20,
  },
  {
    id: "movement-2",
    category: 'movement',
    title: "5-Minute Stretch Routine",
    description: "Follow along with this simple full-body stretch to release tension.",
    duration: "5 minutes",
    xpReward: 15,
  },
  {
    id: "movement-3",
    category: 'movement',
    title: "Dance Break",
    description: "Put on your favorite upbeat song and dance freely for one song.",
    duration: "3-5 minutes",
    xpReward: 15,
  },
  
  // Finance
  {
    id: "finance-1",
    category: 'finance',
    title: "Quick Expense Check",
    description: "Take 5 minutes to review your recent expenses and identify one small saving opportunity.",
    duration: "5 minutes",
    xpReward: 20,
  },
  {
    id: "finance-2",
    category: 'finance',
    title: "Financial Goal Visualization",
    description: "Write down one specific financial goal and the first step toward achieving it.",
    duration: "10 minutes",
    xpReward: 25,
  },
  {
    id: "finance-3",
    category: 'finance',
    title: "Subscription Audit",
    description: "Check for any unused subscriptions you could cancel to save money.",
    duration: "15 minutes",
    xpReward: 30,
  },
  
  // Personal Development
  {
    id: "personal-1",
    category: 'personal',
    title: "2-Minute Mindful Breathing",
    description: "Take 6 slow, deep breaths, focusing only on your breathing.",
    duration: "2 minutes",
    xpReward: 10,
  },
  {
    id: "personal-2",
    category: 'personal',
    title: "Gratitude Practice",
    description: "Write down three specific things you're grateful for right now.",
    duration: "5 minutes",
    xpReward: 15,
  },
  {
    id: "personal-3",
    category: 'personal',
    title: "Learn Something New",
    description: "Spend 15 minutes reading an article or watching a video about a topic that interests you.",
    duration: "15 minutes",
    xpReward: 30,
  },
  
  // Social
  {
    id: "social-1",
    category: 'social',
    title: "Reach Out",
    description: "Send a message to someone you haven't spoken to in a while to check in on them.",
    duration: "5 minutes",
    xpReward: 20,
  },
  {
    id: "social-2",
    category: 'social',
    title: "Express Appreciation",
    description: "Tell someone specific why you appreciate them or what you admire about them.",
    duration: "5 minutes",
    xpReward: 15,
  },
  {
    id: "social-3",
    category: 'social',
    title: "Social Media Detox",
    description: "Take a 30-minute break from all social media and notice how you feel.",
    duration: "30 minutes",
    xpReward: 25,
  }
];

export const getSuggestedAction = (category: CategoryType) => {
  const categoryActions = suggestedActions.filter(action => action.category === category);
  const randomIndex = Math.floor(Math.random() * categoryActions.length);
  return categoryActions[randomIndex];
};

export const getRandomAction = () => {
  const randomIndex = Math.floor(Math.random() * suggestedActions.length);
  return suggestedActions[randomIndex];
};
