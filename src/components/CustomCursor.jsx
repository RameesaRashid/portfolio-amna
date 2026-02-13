import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      // Logic to detect if we are over a clickable element
      if (e.target.closest('a, button, input, [role="button"], .cursor-pointer')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', () => setIsClicking(true));
    window.addEventListener('mouseup', () => setIsClicking(false));

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', () => setIsClicking(true));
      window.removeEventListener('mouseup', () => setIsClicking(false));
    };
  }, []);

  return (
    <div className="hidden md:block">
      {/* Dot */}
      <div 
        className="fixed top-0 left-0 w-2 h-2 bg-[#b15579] rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{ 
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      />

      {/* Expanding Ring */}
      <div 
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 border border-[#b15579]/50 transition-all duration-300 ease-out ${
          isHovering ? 'w-12 h-12 bg-[#3ba18e]/10 border-[#b4ebfc]' : 'w-9 h-9 bg-transparent'
        } ${isClicking ? 'scale-85' : 'scale-100'}`}
        style={{ 
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      />
    </div>
  );
};

export default CustomCursor;