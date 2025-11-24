import React, { useState, useEffect } from 'react';
import { ReadingResult, TarotCard as TarotCardType } from '../types';
import TarotCard from './TarotCard';
import { motion } from 'framer-motion';
import { RefreshCw, Sparkles, Loader2, ArrowLeft } from 'lucide-react';

interface ReadingScreenProps {
  cards: TarotCardType[];
  reading: ReadingResult | null;
  onShuffleAgain: () => void;
  onAskAgain: () => void;
  isLoading: boolean;
}

const ReadingScreen: React.FC<ReadingScreenProps> = ({ cards, reading, onShuffleAgain, onAskAgain, isLoading }) => {
  const [revealedCards, setRevealedCards] = useState<number[]>([]);

  const handleCardClick = (index: number) => {
    if (!revealedCards.includes(index)) {
      setRevealedCards([...revealedCards, index]);
    }
  };

  const allRevealed = revealedCards.length === 3;

  return (
    <div className="flex flex-col items-center min-h-screen py-12 px-4 z-10 relative max-w-6xl mx-auto">
      
      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 perspective-1000 w-full max-w-4xl justify-items-center">
        {cards.map((card, index) => {
          const isRevealed = revealedCards.includes(index);
          const readingPart = index === 0 ? reading?.card1 : index === 1 ? reading?.card2 : reading?.card3;

          return (
            <div key={card.id} className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="mb-6 relative group"
              >
                  <TarotCard
                    isFlipped={isRevealed}
                    name={card.name}
                    image={card.image}
                    cardNumber={card.id}
                    onClick={() => handleCardClick(index)}
                    className="shadow-[0_0_30px_rgba(45,212,191,0.1)] group-hover:shadow-[0_0_40px_rgba(45,212,191,0.3)] transition-shadow duration-500"
                  />
                  {!isRevealed && (
                    <motion.div 
                      className="absolute -bottom-8 left-0 right-0 text-center text-sm text-mystic-accent uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      Tap to Reveal
                    </motion.div>
                  )}
              </motion.div>
              
              {/* Individual Interpretation */}
              {isRevealed && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="bg-slate-900/40 backdrop-blur-sm border-t border-mystic-accent/30 p-4 rounded-b-xl w-full max-w-[250px] text-center"
                >
                    {isLoading && !reading ? (
                         <div className="flex justify-center p-2"><Loader2 className="animate-spin text-mystic-accent" /></div>
                    ) : (
                        <>
                            <h3 className="font-serif text-teal-200 text-lg mb-2">{readingPart?.name}</h3>
                            <p className="text-slate-300 text-sm leading-relaxed">{readingPart?.explanation}</p>
                        </>
                    )}
                </motion.div>
              )}
            </div>
          );
        })}
      </div>

      {/* Summary Section */}
      {allRevealed && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-3xl bg-slate-900/80 backdrop-blur-md border border-mystic-accent/30 rounded-2xl p-8 mb-12 shadow-2xl"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="text-mystic-accent" />
            <h2 className="text-2xl font-serif text-white">The Final Reading</h2>
            <Sparkles className="text-mystic-accent" />
          </div>
          {isLoading && !reading ? (
            <div className="flex flex-col items-center justify-center py-8 text-slate-400">
               <Loader2 className="w-8 h-8 animate-spin mb-2 text-mystic-accent" />
               <p>Consulting the spirits...</p>
            </div>
          ) : (
            <div className="text-center">
                 <p className="text-lg text-slate-200 leading-relaxed font-light">{reading?.summary}</p>
            </div>
          )}
        </motion.div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row items-center gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onAskAgain}
          className="flex items-center justify-center gap-2 px-8 py-3 bg-slate-800 border border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white rounded-full font-bold uppercase tracking-widest transition-all duration-300 shadow-lg"
        >
          <ArrowLeft className="w-5 h-5" />
          Ask Another Question
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onShuffleAgain}
          className="flex items-center justify-center gap-2 px-8 py-3 bg-mystic-accent/10 border border-mystic-accent text-mystic-accent hover:bg-mystic-accent hover:text-slate-900 rounded-full font-bold uppercase tracking-widest transition-all duration-300 shadow-[0_0_15px_rgba(45,212,191,0.2)]"
        >
          <RefreshCw className="w-5 h-5" />
          Shuffle Again
        </motion.button>
      </div>
    </div>
  );
};

export default ReadingScreen;