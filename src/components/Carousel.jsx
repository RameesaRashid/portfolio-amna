import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import img1 from "../assets/001.jpeg";
import img2 from "../assets/002.jpeg";
import img3 from "../assets/003.jpeg";
import img4 from "../assets/004.jpeg";

const slides = [
  { id: 1, img: img1 },
  { id: 2, img: img2 },
  { id: 3, img: img3 },
  { id: 4, img: img4 },
];

const AboutSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <section id="about" className="bg-slate-950 py-24 px-6 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-[#3ba18e]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center">
        
        {/* LEFT SIDE: THE CAROUSEL */}
        <div className="relative flex flex-col items-center lg:items-start">
          <div className="relative w-full max-w-[340px] z-10">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl group bg-black">
              {/* Slides */}
              {slides.map((slide, index) => (
                <img
                  key={slide.id}
                  src={slide.img}
                  alt={slide.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                    index === currentIndex
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-110"
                  }`}
                />
              ))}

              {/* Controls */}
              <div className="absolute inset-0 flex items-center justify-between px-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-full bg-black/50 backdrop-blur border border-white/10 text-white hover:bg-[#3ba18e] transition-colors"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-full bg-black/50 backdrop-blur border border-white/10 text-white hover:bg-[#3ba18e] transition-colors"
                >
                  <ChevronRight size={16} />
                </button>
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                <h3 className="text-white text-sm font-bold italic">
                  {slides[currentIndex].title}
                </h3>
                <p className="text-[#3ba18e] text-[9px] uppercase tracking-widest font-mono">
                  {slides[currentIndex].desc}
                </p>
              </div>
            </div>

            {/* Progress Dots */}
            <div className="flex justify-center lg:justify-start gap-2 mt-6 px-4">
              {slides.map((_, i) => (
                <span
                  key={i}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    i === currentIndex ? "w-8 bg-[#3ba18e]" : "w-2 bg-white/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: ABOUT ME CONTENT */}
        <div className="text-left space-y-6 relative z-10">
          <div>
            <h2 className="text-[#09637E] font-mono text-[10px] tracking-[0.4em] uppercase mb-3">About Me</h2>
            <h3 className="text-white text-xl md:text-2xl font-black italic tracking-tighter leading-tight">
              Design that speaks, <br />
              <span className="text-zinc-500 not-italic">Code that works.</span>
            </h3>
          </div>

          <div className="space-y-6 text-zinc-400 text-sm leading-relaxed max-w-xl">
            <p>
              I am <span className="text-white font-medium">Amna Afzal</span>, a multi-disciplinary creator specialized in high-end brand identities and Android development. 
            </p>
            <p>
              By combining the precision of an <span className="text-[#088395] italic">Android Developer</span> with the soul of a <span className="text-[#088395] italic">Graphic Designer</span>, I build digital experiences that are as functional as they are beautiful.
            </p>
          </div>

          {/* Quick Experience Info */}
          <div className="flex gap-10 py-6 border-t border-white/5">
            <div>
              <p className="text-white font-bold text-xl">Freelance</p>
              <p className="text-zinc-500 text-xs uppercase tracking-widest mt-1">Available Now</p>
            </div>
            <div>
              <p className="text-white font-bold text-xl">Stack</p>
              <p className="text-zinc-500 text-xs uppercase tracking-widest mt-1">Java - XML - Firebase - Flutter</p>
            </div>
          </div>

          <div className="pt-4">
             <a href="#contact" className="inline-flex items-center gap-3 text-white font-bold hover:text-[#3ba18e] transition-colors group">
               Start a conversation 
               <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
             </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;