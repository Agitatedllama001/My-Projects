import React from 'react';

const AstralBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none astral-bg">
      <svg className="absolute w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="stars" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#2dd4bf" />
            <circle cx="50" cy="50" r="1.5" fill="#2dd4bf" />
            <circle cx="80" cy="20" r="0.5" fill="#2dd4bf" />
          </pattern>
          <pattern id="geometry" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
             <path d="M100 0 L200 100 L100 200 L0 100 Z" fill="none" stroke="#2dd4bf" strokeWidth="0.5" />
             <circle cx="100" cy="100" r="40" fill="none" stroke="#2dd4bf" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#stars)" />
        <rect width="100%" height="100%" fill="url(#geometry)" className="opacity-30" />
      </svg>
      {/* Decorative Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900 rounded-full blur-[128px] opacity-40"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-teal-900 rounded-full blur-[128px] opacity-30"></div>
    </div>
  );
};

export default AstralBackground;
