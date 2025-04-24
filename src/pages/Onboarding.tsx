
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { quizQuestions } from '@/data/quizQuestions';
import { useUser } from '@/context/UserContext';
import logo from "../components/mindful circle.png";

enum OnboardingStep {
  WELCOME,
  PET_SELECTION,
  QUIZ,
}

const Onboarding = () => {
  const navigate = useNavigate();
  const { createPet, completeQuiz } = useUser();
  const [currentStep, setCurrentStep] = useState<OnboardingStep>(OnboardingStep.WELCOME);
  const [petName, setPetName] = useState('');
  const [petType, setPetType] = useState('cat');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const handlePetCreation = () => {
    if (petName.trim()) {
      createPet(petName, petType);
      setCurrentStep(OnboardingStep.QUIZ);
    }
  };

  const handleAnswerSelect = (value: string) => {
    const questionId = quizQuestions[currentQuestionIndex].id;
    const answerIndex = parseInt(value);
    
    setAnswers({
      ...answers,
      [questionId]: answerIndex
    });

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      completeQuiz(answers);
      navigate('/dashboard');
    }
  };

  const renderWelcome = () => (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Welcome to Mindful Companion</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-muted-foreground">Let's start your journey to feeling more in control.</p>
          <div className="py-6">
            <div className="w-100 h-100 20 rounded-full flex items-center justify-center mx-auto">
            <img src={logo} alt="Logo" className="w-100 h-150 object-contain" />
            </div>
            <div className="bg-green-100 text-purple-700 rounded-md p-4 mt-4">
             <p>Begin your wellness journey with a personal pet companion who will help you track and improve your mental wellbeing.</p>
           </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={() => setCurrentStep(OnboardingStep.PET_SELECTION)} className="w-full">
            Get Started
          </Button>
        </CardFooter>
      </Card>
    </div>
  );

  const renderPetSelection = () => (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-xl text-center">Choose your companion</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Label htmlFor="pet-name">Name your companion</Label>
            <Input
              id="pet-name"
              value={petName}
              onChange={(e) => setPetName(e.target.value)}
              className="mt-1"
              placeholder="Enter a name"
            />
          </div>
          <div>
            <Label>Choose a pet type</Label>
            <RadioGroup 
              defaultValue="cat" 
              className="grid grid-cols-2 gap-4 mt-2"
              onValueChange={setPetType}
            >
              <div>
                <RadioGroupItem value="cat" id="cat" className="peer sr-only" />
                <Label
                  htmlFor="cat"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                <span className="text-4xl">🐱</span>

                  <span className="mt-2 font-normal">Cat</span>
                </Label>
              </div>
              <div>
                <RadioGroupItem value="dog" id="dog" className="peer sr-only" />
                <Label
                  htmlFor="dog"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <span className="text-4xl">🐶</span>
                  <span className="mt-2 font-normal">Dog</span>
                </Label>

              </div>
              <div>
                <RadioGroupItem value="bunny" id="bunny" className="peer sr-only" />
                <Label
                  htmlFor="bunny"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <span className="text-4xl">🐰</span>
                  <span className="mt-2 font-normal">Bunny</span>
                </Label>
              </div>
              <div>
                <RadioGroupItem value="fox" id="fox" className="peer sr-only" />
                <Label
                  htmlFor="fox"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <span className="text-4xl">🦊</span>
                  <span className="mt-2 font-normal">Fox</span>
                </Label>
              </div>
              <div>
                <RadioGroupItem value="snake" id="snake" className="peer sr-only" />
                <Label
                  htmlFor="fox"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <span className="text-4xl">🐍</span>
                  <span className="mt-2 font-normal">Snake</span>
                </Label>
              </div>
              <div>
                <RadioGroupItem value="fish" id="fish" className="peer sr-only" />
                <Label
                  htmlFor="fox"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <span className="text-4xl">🐠</span>
                  <span className="mt-2 font-normal">Fish</span>
                </Label>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            onClick={handlePetCreation} 
            className="w-full"
            disabled={!petName.trim()}
          >
            Continue
          </Button>
        </CardFooter>
      </Card>
    </div>
  );

  const renderQuiz = () => {
    const question = quizQuestions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;

    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh] p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <div className="w-full bg-muted h-2 rounded-full mb-6">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <CardTitle className="text-xl">
              Question {currentQuestionIndex + 1} of {quizQuestions.length}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="font-medium">{question.text}</p>
            <RadioGroup 
              className="space-y-3"
              onValueChange={handleAnswerSelect}
            >
              {question.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem value={index.toString()} id={`q${question.id}-option-${index}`} />
                  <Label htmlFor={`q${question.id}-option-${index}`}>{option}</Label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
          <CardFooter className="text-xs text-muted-foreground text-center">
            <p className="mx-auto">
              This helps us personalize your experience.
            </p>
          </CardFooter>
        </Card>
      </div>
    );
  };

  switch (currentStep) {
    case OnboardingStep.WELCOME:
      return renderWelcome();
    case OnboardingStep.PET_SELECTION:
      return renderPetSelection();
    case OnboardingStep.QUIZ:
      return renderQuiz();
  }
};

export default Onboarding;
