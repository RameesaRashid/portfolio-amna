import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import img1 from "../assets/01.jpeg";
import img2 from "../assets/02.jpeg";
import img3 from "../assets/03.jpeg";

const slides = [
  { id: 1, img: img1, title: "Modern Editorial", desc: "Layout & Typography" },
  { id: 2, img: img2, title: "Brand Identity", desc: "Logo Design System" },
  { id: 3, img: img3, title: "Digital Abstract", desc: "Vector Illustration" },
];

const AboutSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Carousel Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="bg-slate-950 py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/*Left Side */}
        <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
          {/* Decorative Glow behind Carousel */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#3ba18e]/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 w-full max-w-[320px]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl group bg-zinc-900">
              {slides.map((slide, index) => (
                <img
                  key={slide.id}
                  src={slide.img}
                  alt={slide.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                    index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-110"
                  }`}
                />
              ))}

              {/* Minimal Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                <p className="text-[#3ba18e] text-[8px] uppercase tracking-[0.3em] font-mono mb-1">Featured Project</p>
                <h3 className="text-white text-base font-bold italic">{slides[currentIndex].title}</h3>
              </div>
            </div>

            {/* Progress Dots */}
            <div className="flex justify-center gap-1.5 mt-6">
              {slides.map((_, i) => (
                <div key={i} className={`h-1 rounded-full transition-all duration-500 ${i === currentIndex ? "w-8 bg-[#3ba18e]" : "w-2 bg-white/10"}`} />
              ))}
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="order-1 lg:order-2 space-y-8">
          <div>
            <h2 className="text-[#3ba18e] font-mono text-[10px] tracking-[0.4em] uppercase mb-2">About Me</h2>
            <h3 className="text-white text-4xl md:text-5xl font-black italic tracking-tighter leading-tight">
              A designer who <span className="text-zinc-500 not-italic">codes.</span>
            </h3>
          </div>

          <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
            <p>
              I am <span className="text-white font-medium">Amna Afzal</span>, a hybrid creator based in the digital realm. I specialize in weaving visual narratives through graphic design while building robust, native experiences as an Android Developer.
            </p>
            <p>
              My philosophy is simple: <span className="italic">Design shouldn't just look good; it should perform.</span> Whether I'm crafting a brand's editorial layout or architecting a mobile app in Kotlin, I focus on the intersection of human emotion and technical precision.
            </p>
          </div>

          {/* Experience Grid */}
          <div className="grid grid-cols-2 gap-8 pt-4 border-t border-white/5">
            <div>
              <p className="text-white text-2xl font-bold tracking-tighter">Graphic Design</p>
              <p className="text-[#3ba18e] text-[10px] uppercase tracking-widest mt-1">Logo • Print • Branding</p>
            </div>
            <div>
              <p className="text-white text-2xl font-bold tracking-tighter">Android Dev</p>
              <p className="text-[#3ba18e] text-[10px] uppercase tracking-widest mt-1">Kotlin • Java • Flutter</p>
            </div>
          </div>

          <div className="pt-4">
            <a href="#contact" className="inline-flex items-center gap-2 text-white font-bold text-sm group">
              Get in touch 
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform text-[#3ba18e]" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;