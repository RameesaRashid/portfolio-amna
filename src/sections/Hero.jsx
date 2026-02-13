import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react'; 

const SkillMarquee = () => {
  const skills = [
    "Photoshop", "Illustrator", "Figma", "Android Studio", 
    "Kotlin", "Flutter", "Java", "UI/UX Design"
  ];

  return (
    <div className="w-full py-2 overflow-hidden mb-6 md:mb-10 select-none relative">
      {/* Cinematic Gradient Fades */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-slate-950 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-slate-950 to-transparent z-10" />
      
      <div className="flex w-max animate-scroll whitespace-nowrap">
        {[...skills, ...skills].map((skill, index) => (
          <div key={index} className="flex items-center">
            <span className="text-zinc-500 mx-4 md:mx-8 text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.5em] font-light hover:text-[#3ba18e] transition-colors cursor-default">
              {skill}
            </span>
            <span className="w-1 h-1 bg-[#3ba18e] rounded-full opacity-30" />
          </div>
        ))}
      </div>
    </div>
  );
};


const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseMove = (e) => {
    
    if (window.innerWidth > 768) {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    }
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center px-4 md:px-6 pt-16 md:pt-20 overflow-hidden bg-slate-950"
    >
      {/* DYNAMIC BACKGROUND LAYER (Mouse Parallax) */}
      <div 
        className="absolute inset-0 pointer-events-none transition-transform duration-500 ease-out opacity-50 md:opacity-100"
        style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
      >
        <div className="absolute top-[20%] left-[10%] w-48 h-48 md:w-72 md:h-72 bg-[#3ba18e]/10 rounded-full blur-[80px] md:blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[5%] w-64 h-64 md:w-[500px] md:h-[500px] bg-blue-600/10 rounded-full blur-[100px] md:blur-[150px]" />
      </div>

      <div className={`w-full max-w-4xl text-center z-10 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

        {/* Name & Title Section */}
        <div className="relative mb-6 md:mb-8">
          <h1 className="text-2xl md:text-4xl font-black text-[#09637E] tracking-tighter mb-2 md:mb-4 drop-shadow-[0_0_15px_rgba(59,161,142,0.3)]">
            Amna Afzal
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-sm md:text-xl font-medium text-white tracking-tight">
            <span>Graphic Designer</span>
            <span className="hidden md:block h-[1px] w-8 bg-zinc-700"></span>
            <span className="text-zinc-500 italic font-light">Android Developer</span>
          </div>
        </div>

        {/* INFINITE SKILLS MARQUEE */}
        <SkillMarquee />

        {/* Tagline */}
        <div className="relative inline-block mb-4 px-2">
          <h2 className="text-sm md:text-2xl font-bold text-white tracking-tight leading-snug">
            Crafting <span className="text-[#09637E] italic">visual</span> identities that resonate.
          </h2>
        </div>

        <p className="text-zinc-400 text-xs md:text-lg max-w-xl mx-auto mb-10 md:mb-12 leading-relaxed opacity-80 px-4">
          Bridging the gap between aesthetic branding and functional code. 
          Specialized in creating seamless digital experiences.
        </p>

        {/* CTA BUTTONS GROUP */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-4 justify-center items-center">
          {/* Main CTA */}
          <a 
            href="#work" 
            className="w-full sm:w-auto group relative bg-white text-slate-950 px-6 py-3 md:py-4 rounded-full font-bold overflow-hidden transition-all hover:bg-[#1b6e9fda] hover:text-white text-[10px] md:text-xs text-center"
          >
            View My Work
          </a>
          
          {/* Secondary CTA */}
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-8 py-3 md:py-4 rounded-full font-bold text-zinc-400 border border-white/5 hover:bg-white/5 hover:text-white transition-all text-[10px] md:text-xs text-center"
          >
            Let's Talk
          </a>
        </div>
      </div>

    </section>
  );
};

export default Hero;