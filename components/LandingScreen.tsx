import React from 'react';
import { MOODS } from '../constants';
import { UserContext, Mood } from '../types';
import { Sparkles, ArrowRight } from 'lucide-react';

interface LandingScreenProps {
  userContext: UserContext;
  onContextChange: (ctx: UserContext) => void;
  onContinue: () => void;
}

const LandingScreen: React.FC<LandingScreenProps> = ({ userContext, onContextChange, onContinue }) => {
  const canContinue = userContext.question.length > 3 && userContext.mood !== null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 text-center z-10 relative">
      <div className="mb-8">
        <Sparkles className="w-12 h-12 text-mystic-accent mx-auto mb-4 animate-pulse" />
        <h1 className="text-4xl md:text-6xl font-serif text-white mb-2 tracking-wider drop-shadow-lg">
          Mystic <span className="text-mystic-accent">Tarot</span>
        </h1>
        <p className="text-slate-300 max-w-md mx-auto font-light">
          Unveil the secrets of the cosmos. Ask a question and let the cards guide your path.
        </p>
      </div>

      <div className="w-full max-w-lg bg-slate-900/60 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl">
        <div className="mb-8">
          <label className="block text-left text-mystic-accent text-sm uppercase tracking-wide mb-2 font-bold">
            What is on your mind?
          </label>
          <textarea
            value={userContext.question}
            onChange={(e) => onContextChange({ ...userContext, question: e.target.value })}
            placeholder="e.g., What does this month hold for my career?"
            className="w-full bg-slate-800/50 border border-slate-600 rounded-lg p-4 text-white placeholder-slate-500 focus:outline-none focus:border-mystic-accent focus:ring-1 focus:ring-mystic-accent transition-all resize-none h-32"
          />
        </div>

        <div className="mb-8">
          <label className="block text-left text-mystic-accent text-sm uppercase tracking-wide mb-4 font-bold">
            How are you feeling?
          </label>
          <div className="flex justify-between gap-2">
            {MOODS.map((m) => (
              <button
                key={m.type}
                onClick={() => onContextChange({ ...userContext, mood: m.type })}
                className={`flex flex-col items-center p-3 rounded-lg transition-all duration-300 transform hover:scale-110 ${
                  userContext.mood === m.type
                    ? 'bg-mystic-accent/20 border-mystic-accent shadow-[0_0_15px_rgba(45,212,191,0.3)] border'
                    : 'bg-transparent border border-transparent hover:bg-white/5'
                }`}
              >
                <span className="text-3xl mb-1 filter drop-shadow-md">{m.emoji}</span>
                <span className={`text-[10px] uppercase font-bold tracking-wider ${userContext.mood === m.type ? 'text-mystic-accent' : 'text-slate-400'}`}>
                  {m.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={onContinue}
          disabled={!canContinue}
          className={`w-full py-4 rounded-lg font-serif font-bold text-lg tracking-widest uppercase transition-all flex items-center justify-center gap-2 ${
            canContinue
              ? 'bg-gradient-to-r from-teal-600 to-teal-400 text-slate-900 shadow-lg hover:shadow-teal-500/50 hover:translate-y-[-2px]'
              : 'bg-slate-700 text-slate-400 cursor-not-allowed'
          }`}
        >
          Consult the Cards <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default LandingScreen;
