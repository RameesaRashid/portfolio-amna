import React, { useState } from 'react';

export const ComparisonSlider = ({ before, after }) => {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPos(x);
  };

  return (
    <div 
      className="relative w-full h-[500px] overflow-hidden rounded-2xl cursor-ew-resize select-none"
      onMouseMove={handleMove}
    >
      
      <img src={after} className="absolute inset-0 w-full h-full object-cover" alt="After" />
      
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden border-r-2 border-white z-10"
        style={{ width: `${sliderPos}%` }}
      >
        <img src={before} className="absolute inset-0 w-full h-[500px] object-cover" alt="Before" style={{ width: '100vw' }} />
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white text-xs uppercase tracking-widest">
        Drag to Compare
      </div>
    </div>
  );
};