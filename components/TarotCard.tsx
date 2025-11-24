import React from 'react';
import { motion } from 'framer-motion';

interface TarotCardProps {
  isFlipped: boolean;
  name?: string;
  image?: string;
  cardNumber?: number;
  onClick?: () => void;
  className?: string;
}

const toRoman = (num?: number): string => {
  if (num === undefined) return "";
  if (num === 0) return "LE MAT"; 
  const lookup: [number, string][] = [[10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']];
  let roman = "";
  let n = num;
  for (const [val, sym] of lookup) {
    while (n >= val) {
      roman += sym;
      n -= val;
    }
  }
  return roman;
};

const TarotCard: React.FC<TarotCardProps> = ({ isFlipped, name, image, cardNumber, onClick, className }) => {
  return (
    <div 
      className={`relative w-52 h-96 cursor-pointer perspective-1000 ${className}`} 
      onClick={onClick}
    >
      <motion.div
        className="w-full h-full relative preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Card Back - Marseille Style */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-lg shadow-xl overflow-hidden bg-[#eaddcf] border-4 border-[#2c3e50]">
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
        </div>

        {/* Card Front - Marseille Style */}
        <div 
          className="absolute inset-0 w-full h-full backface-hidden rounded-lg shadow-2xl overflow-hidden bg-[#f4e4bc] border-[6px] border-[#2c3e50]"
          style={{ transform: 'rotateY(180deg)' }}
        >
            {/* Top Label */}
            <div className="absolute top-4 left-0 right-0 flex justify-center z-20">
                <div className="bg-white/90 border-2 border-[#2c3e50] px-3 py-0.5 min-w-[60px] text-center shadow-sm">
                   <span className="font-serif font-bold text-[#2c3e50] text-lg tracking-widest">{toRoman(cardNumber)}</span>
                </div>
            </div>

            {/* Image Container */}
            <div className="absolute top-14 bottom-16 left-4 right-4 border-2 border-[#2c3e50] bg-white overflow-hidden">
                {image && (
                    <img 
                        src={image} 
                        alt={name} 
                        className="w-full h-full object-cover filter sepia-[0.6] contrast-[1.2] brightness-90 saturate-[0.8]" 
                    />
                )}
            </div>

            {/* Bottom Label */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center z-20">
                 <div className="bg-white/90 border-2 border-[#2c3e50] px-2 py-1 shadow-sm w-4/5 text-center">
                    <span className="font-serif font-bold text-[#2c3e50] text-xs sm:text-sm tracking-wider uppercase leading-none block">{name}</span>
                 </div>
            </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TarotCard;