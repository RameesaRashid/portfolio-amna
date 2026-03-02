import React, { useState } from 'react';
import { X, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="work" className="bg-slate-950 px-6 py-20 relative border-b border-white/10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-[#088395] font-mono text-[10px] tracking-[0.4em] uppercase mb-1">Portfolio</h2>
            <h3 className="text-white text-3xl md:text-4xl font-black tracking-tighter italic uppercase">
              {isExpanded ? "Selected Works" : "Design Collections"}
            </h3>
          </div>
          <div className="flex items-center gap-4">
            {isExpanded && (
              <button 
                onClick={() => setIsExpanded(false)}
                className="text-zinc-500 text-[10px] uppercase tracking-widest border border-white/10 px-4 py-2 rounded-full hover:bg-white/5 transition-all italic"
              >
                Back to Stack
              </button>
            )}
            <p className="text-zinc-500 text-[10px] uppercase tracking-widest italic">
              {isExpanded ? "Click to zoom" : "Click + to expand"}
            </p>
          </div>
        </div>


        <div className="relative min-h-[450px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {!isExpanded ? (
              
              <motion.div 
                key="stack"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                className="relative w-[280px] h-[350px] md:w-[320px] md:h-[400px]"
              >
                {projects.slice(0, 4).map((project, index) => (
                  <motion.div
                    key={project.id}
                    style={{ zIndex: 10 - index }}
                    animate={{ 
                      x: index * 12, 
                      y: index * -8,
                      rotate: index * 3,
                    }}
                    className="absolute inset-0 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-zinc-900"
                  >
                    <img 
                      src={project.img} 
                      className="w-full h-full object-cover opacity-80" 
                      alt="collection stack" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                  </motion.div>
                ))}


                <motion.button
                  onClick={() => setIsExpanded(true)}
                  whileHover={{ scale: 1.1, backgroundColor: "#fff" }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute -right-12 top-1/2 -translate-y-1/2 z-50 bg-white/90 text-slate-950 p-5 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center justify-center"
                >
                  <Plus size={32} strokeWidth={3} />
                </motion.button>
              </motion.div>
            ) : (
              
              <motion.div 
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
              >
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => setSelectedImg(project.img)}
                    className="relative group h-[300px] rounded-[1.8rem] overflow-hidden bg-zinc-900 border border-white/5 cursor-zoom-in"
                  >
                    <img 
                      src={project.img} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
                      alt={project.title} 
                    />
                    
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 inset-x-0 p-5 z-30 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-4 rounded-2xl flex justify-between items-center text-white">
                        <p className="font-bold text-sm">{project.title}</p>
                        <span className="text-[#088395] text-[9px] uppercase tracking-widest">{project.category}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>


      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 backdrop-blur-md p-6"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors">
              <X size={40} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={selectedImg} 
              className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl border border-white/10" 
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;