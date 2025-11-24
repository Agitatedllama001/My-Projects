import React, { useState, useEffect, useCallback } from 'react';
import AstralBackground from './components/AstralBackground';
import LandingScreen from './components/LandingScreen';
import ShufflingScreen from './components/ShufflingScreen';
import ReadingScreen from './components/ReadingScreen';
import { UserContext, ReadingResult, TarotCard } from './types';
import { MAJOR_ARCANA } from './constants';
import { getGeminiReading } from './services/geminiService';

type Step = 'landing' | 'shuffling' | 'reading';

const App: React.FC = () => {
  const [step, setStep] = useState<Step>('landing');
  const [userContext, setUserContext] = useState<UserContext>({ question: '', mood: null });
  const [selectedCards, setSelectedCards] = useState<TarotCard[]>([]);
  const [readingResult, setReadingResult] = useState<ReadingResult | null>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);

  // Function to pick random cards
  const pickCards = useCallback(() => {
    const shuffled = [...MAJOR_ARCANA].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  }, []);

  // Handler for moving from Landing -> Shuffling
  const handleContinue = () => {
    setStep('shuffling');
    // Prepare data while shuffling happens
    const cards = pickCards();
    setSelectedCards(cards);
    setReadingResult(null);
    setIsAiLoading(true);

    // Fetch AI reading immediately so it's ready or loading by the time animation finishes
    if (userContext.mood && userContext.question) {
        getGeminiReading(userContext.question, userContext.mood, cards.map(c => c.name))
        .then(result => {
            setReadingResult(result);
        })
        .catch(err => {
            console.error(err);
        })
        .finally(() => {
            setIsAiLoading(false);
        });
    }
  };

  // Handler for finishing shuffle animation
  const handleShuffleFinish = () => {
    setStep('reading');
  };

  // Handler for 'Shuffle Again' - takes user to screen 2 (shuffling)
  const handleShuffleAgain = () => {
     handleContinue(); // This sets step to shuffling, picks new cards, triggers AI
  };

  // Handler for 'Ask Another Question' - takes user to screen 1 (landing) and clears context
  const handleRestart = () => {
    setUserContext({ question: '', mood: null });
    setStep('landing');
  };

  return (
    <div className="relative min-h-screen font-sans text-slate-100 overflow-x-hidden">
      <AstralBackground />
      
      {step === 'landing' && (
        <LandingScreen 
          userContext={userContext}
          onContextChange={setUserContext}
          onContinue={handleContinue}
        />
      )}

      {step === 'shuffling' && (
        <ShufflingScreen onFinish={handleShuffleFinish} />
      )}

      {step === 'reading' && (
        <ReadingScreen 
          cards={selectedCards}
          reading={readingResult}
          onShuffleAgain={handleShuffleAgain}
          onAskAgain={handleRestart}
          isLoading={isAiLoading}
        />
      )}
    </div>
  );
};

export default App;