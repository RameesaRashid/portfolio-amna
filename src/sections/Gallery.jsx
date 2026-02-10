import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react'; // Make sure to: npm install lucide-react
import img1 from '../assets/01.jpeg';
import img2 from '../assets/02.jpeg';
import img3 from '../assets/03.jpeg';
import img4 from '../assets/04.jpeg';
import img5 from '../assets/05.jpeg';
import img6 from '../assets/06.jpeg';
import img7 from '../assets/07.jpeg';

const projects = [
  { id: 1, title: "Editorial Layout", category: "Print", img: img1 },
  { id: 2, title: "Brand Identity", category: "Logo", img: img2 },
  { id: 3, title: "Abstract Poster", category: "Digital", img: img3 },
  { id: 4, title: "Package Design", category: "Product", img: img4 },
  { id: 5, title: "Motion Graphics", category: "Digital", img: img5 },
  { id: 6, title: "Web Design", category: "UI/UX", img: img6 },
  { id: 7, title: "Brand Guidelines", category: "Branding", img: img7 },
];

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    const items = document.querySelectorAll('.reveal-item');
    items.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="work" className="bg-slate-950 px-6 py-20 relative border-b border-white/10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-[#088395] font-mono text-[10px] tracking-[0.4em] uppercase mb-1">Portfolio</h2>
            <h3 className="text-white text-3xl md:text-4xl font-black tracking-tighter italic">Selected Works</h3>
          </div>
          <p className="text-zinc-500 text-xs uppercase tracking-widest italic">
            Click to expand
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {projects.map((project, index) => {
            const isWide = index === 2 || index === 5; 
            const gridSpan = isWide ? 'md:col-span-6' : 'md:col-span-4';

            return (
              <div 
                key={project.id}
                onClick={() => setSelectedImg(project.img)}
                style={{ transitionDelay: `${index * 50}ms` }}
                className={`reveal-item opacity-0 translate-y-10 transition-all duration-700 ease-out 
                  relative group overflow-hidden rounded-[1.5rem] bg-zinc-900 border border-white/5 
                  ${gridSpan} h-[300px] md:h-[350px] cursor-zoom-in`}
              >
                {/* Visual Overlays */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                
                <div className="absolute bottom-0 inset-x-0 p-5 z-30 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-4 rounded-2xl flex justify-between items-center text-white">
                    <p className="font-bold text-sm">{project.title}</p>
                    <span className="text-[#3ba18e] text-[9px] uppercase tracking-widest">{project.category}</span>
                  </div>
                </div>
                
                <img 
                  src={project.img} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* --- LIGHTBOX MODAL --- */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 backdrop-blur-sm p-4 md:p-10"
          onClick={() => setSelectedImg(null)}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
            onClick={() => setSelectedImg(null)}
          >
            <X size={32} />
          </button>

          {/* Full Image */}
          <img 
            src={selectedImg} 
            alt="Full view" 
            className="max-w-full max-h-full rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking the image itself
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;