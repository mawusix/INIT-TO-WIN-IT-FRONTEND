
import { QuizQuestion } from '@/types';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    text: "How would you rate your sleep quality over the past week?",
    category: 'sleep',
    options: [
      "Very poor - I've had trouble falling or staying asleep most nights",
      "Poor - I've had some difficulty sleeping",
      "Average - I sleep okay but not great",
      "Good - I typically sleep well",
      "Excellent - I sleep soundly almost every night"
    ]
  },
  {
    id: 2,
    text: "How often do you feel stressed or overwhelmed?",
    category: 'personal',
    options: [
      "Almost constantly",
      "Frequently throughout the day",
      "Sometimes, but it's manageable",
      "Occasionally, but not often",
      "Rarely feel stressed"
    ]
  },
  {
    id: 3,
    text: "How would you describe your energy levels on most days?",
    category: 'movement',
    options: [
      "Very low - I often feel exhausted",
      "Low - I have to push myself to complete daily tasks",
      "Moderate - I have enough energy for basics",
      "Good - I generally feel energetic",
      "Very high - I feel energized and vibrant most days"
    ]
  },
  {
    id: 4,
    text: "How confident do you feel in your abilities right now?",
    category: 'personal',
    options: [
      "Not at all confident",
      "Slightly confident",
      "Moderately confident",
      "Quite confident",
      "Very confident"
    ]
  },
  {
    id: 5,
    text: "How often do you worry about finances?",
    category: 'finance',
    options: [
      "Constantly - it's my primary worry",
      "Often - several times a day",
      "Sometimes - a few times a week",
      "Occasionally - every now and then",
      "Rarely - I feel financially secure"
    ]
  },
  {
    id: 6,
    text: "How connected do you feel to others in your life?",
    category: 'social',
    options: [
      "Very disconnected and isolated",
      "Somewhat disconnected",
      "Neutral",
      "Fairly connected with others",
      "Very connected and supported"
    ]
  },
  {
    id: 7,
    text: "How often do you engage in physical movement or exercise?",
    category: 'movement',
    options: [
      "Almost never",
      "Rarely (once a week or less)",
      "Sometimes (2-3 times a week)",
      "Often (4-6 times a week)",
      "Daily"
    ]
  },
  {
    id: 8,
    text: "How well do you feel you're making progress toward your goals?",
    category: 'personal',
    options: [
      "Not making any progress",
      "Making very little progress",
      "Making some progress but it's slow",
      "Making good, steady progress",
      "Making excellent progress"
    ]
  },
  {
    id: 9,
    text: "How would you rate your ability to manage your finances?",
    category: 'finance',
    options: [
      "Very poor - I often don't know where my money goes",
      "Poor - I struggle to keep track",
      "Average - I manage but could improve",
      "Good - I generally know where I stand financially",
      "Excellent - I have a clear budget and plan"
    ]
  },
  {
    id: 10,
    text: "How restful do your weekends or days off feel?",
    category: 'sleep',
    options: [
      "Not at all restful - I feel exhausted after",
      "Slightly restful but not enough",
      "Moderately restful",
      "Quite restful - I feel somewhat recharged",
      "Very restful - I feel fully recharged"
    ]
  }
];
