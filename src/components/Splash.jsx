import React, { useState, useEffect } from 'react';

const Splash = ({ onComplete }) => {
  const [isExpanding, setIsExpanding] = useState(false);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setIsExpanding(true);
    }, 1800);

    const endTimer = setTimeout(onComplete, 2600);

    return () => {
      clearTimeout(timer);
      clearTimeout(endTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-slate-950 overflow-hidden">
      
      <div 
        className={`w-1 h-1 bg-[#09637E] rounded-full transition-all duration-[1200ms] ease-[cubic-bezier(0.85,0,0.15,1)] ${
          isExpanding ? 'scale-[2000]' : 'scale-100 animate-ping'
        }`}
      />

      <div className={`absolute bottom-12 transition-opacity duration-1000 ${isExpanding ? 'opacity-0' : 'opacity-100'}`}>
        <p className="text-zinc-600 font-mono text-[9px] uppercase tracking-[0.6em]">
          Studio — Initializing
        </p>
      </div>

      <div className={`absolute inset-0 bg-white transition-opacity duration-700 pointer-events-none ${
        isExpanding ? 'opacity-0' : 'opacity-0'
      }`} />
    </div>
  );
};

export default Splash;