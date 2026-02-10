import React, { useState, useEffect } from 'react';

const Splash = ({ onComplete }) => {
  const [isExpanding, setIsExpanding] = useState(false);

  useEffect(() => {
    // Phase 1: Small delay before the "portal" opens
    const timer = setTimeout(() => {
      setIsExpanding(true);
    }, 1800);

    // Phase 2: Call completion after animation ends
    const endTimer = setTimeout(onComplete, 2600);

    return () => {
      clearTimeout(timer);
      clearTimeout(endTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-slate-950 overflow-hidden">
      
      {/* 1. The Minimal Icon (A simple teal dot or square) */}
      <div 
        className={`w-1 h-1 bg-[#FFE4EF] rounded-full transition-all duration-[1200ms] ease-[cubic-bezier(0.85,0,0.15,1)] ${
          isExpanding ? 'scale-[2000]' : 'scale-100 animate-ping'
        }`}
      />

      {/* 2. Secondary Floating Text (Optional - very faint) */}
      <div className={`absolute bottom-12 transition-opacity duration-1000 ${isExpanding ? 'opacity-0' : 'opacity-100'}`}>
        <p className="text-zinc-600 font-mono text-[9px] uppercase tracking-[0.6em]">
          Studio — Initializing
        </p>
      </div>

      {/* 3. The "Flash" Overlay (Makes the transition to the site seamless) */}
      <div className={`absolute inset-0 bg-white transition-opacity duration-700 pointer-events-none ${
        isExpanding ? 'opacity-0' : 'opacity-0'
      }`} />
    </div>
  );
};

export default Splash;