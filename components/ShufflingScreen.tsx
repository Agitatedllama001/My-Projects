import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface ShufflingScreenProps {
  onFinish: () => void;
}

const ShufflingScreen: React.FC<ShufflingScreenProps> = ({ onFinish }) => {
  useEffect(() => {
    // Screen 2: Animation of tarot cards being shuffled for 5 sec.
    const timer = setTimeout(() => {
      onFinish();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen z-10 relative overflow-hidden">
      <div className="relative w-52 h-96">
        {[0, 1, 2, 3, 4].map((index) => (
          <motion.div
            key={index}
            className="absolute inset-0 bg-[#eaddcf] border-4 border-[#2c3e50] rounded-lg shadow-xl overflow-hidden"
            initial={{ x: 0, y: 0, rotate: 0 }}
            animate={{
              x: [0, -50, 50, -30, 30, 0],
              y: [0, -10, 10, -5, 5, 0],
              rotate: [0, -5, 5, -2, 2, 0],
              zIndex: [index, index + 5, index],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 2.5,
              repeat: 1, // Runs twice to cover approx 5 seconds
              ease: "easeInOut",
              delay: index * 0.1
            }}
          >
             {/* Geometric Pattern */}
             <div className="w-full h-full opacity-80" style={{
                 backgroundImage: `repeating-linear-gradient(45deg, #2c3e50 0, #2c3e50 2px, transparent 0, transparent 20px),
                                   repeating-linear-gradient(-45deg, #2c3e50 0, #2c3e50 2px, transparent 0, transparent 20px)`
             }}></div>
             {/* Center Emblem */}
             <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-24 h-40 bg-[#2c3e50] rounded-full flex items-center justify-center border-4 border-[#eaddcf] shadow-lg">
                  <div className="w-16 h-32 border-2 border-[#eaddcf] rounded-full opacity-50"></div>
               </div>
             </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-12 text-center"
      >
        <h2 className="text-2xl font-serif text-white mb-2">Shuffling Destiny...</h2>
        <p className="text-mystic-accent animate-pulse text-sm uppercase tracking-widest">Focus on your question</p>
      </motion.div>
    </div>
  );
};

export default ShufflingScreen;