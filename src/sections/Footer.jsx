import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          {/* Column 1: The Customer Brand */}
          <div className="space-y-4">
            <h2 className="text-white text-xl font-bold italic tracking-tighter">
              Amna <span className="opacity-40">Afzal</span>
            </h2>
            <p className="text-zinc-500 text-xs leading-relaxed max-w-[220px]">
              Visual identities and native digital experiences tailored for the modern era.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col gap-3">
            <h4 className="text-zinc-600 text-[9px] uppercase tracking-[0.3em] font-bold mb-2">Index</h4>
            <a href="#home" className="text-zinc-400 hover:text-[#088395] text-xs transition-colors w-fit">Home</a>
            <a href="#work" className="text-zinc-400 hover:text-[#088395] text-xs transition-colors w-fit">Work</a>
            <a href="#about" className="text-zinc-400 hover:text-[#088395] text-xs transition-colors w-fit">About</a>
          </div>

          {/* Column 3: Social & Contact */}
          <div className="flex flex-col gap-3">
            <h4 className="text-zinc-600 text-[9px] uppercase tracking-[0.3em] font-bold mb-2">Social</h4>
            <a href="#" className="group text-zinc-400 hover:text-white text-xs transition-colors flex items-center gap-1">
              Instagram <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
            </a>
            <a href="#" className="group text-zinc-400 hover:text-white text-xs transition-colors flex items-center gap-1">
              LinkedIn <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
            </a>
            <a href="mailto:amnaafzalbscs1@gmail.com" className="group text-zinc-400 hover:text-white text-xs transition-colors flex items-center gap-1">
              Contact <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-end pt-8 border-t border-white/5 gap-6">
          <div className="space-y-1">
            <p className="text-zinc-600 text-[9px] uppercase tracking-[0.2em]">
              © 2026 Studio - Amna Afzal
            </p>
          </div>

          <button 
            onClick={scrollToTop}
            className="text-zinc-500 hover:text-white text-[9px] uppercase tracking-[0.3em] transition-colors flex items-center gap-2"
          >
            Scroll to Top <span className="text-lg">↑</span>
          </button>
        </div>


        <div className="mt-16 text-center border-t border-white/[0.02] pt-8">
           <p className="text-zinc-600 text-[9px] tracking-[0.2em] font-normal">
             Designed & Developed by 
             <a 
               href="#" 
               className="text-zinc-500 font-semibold hover:text-[#088395] ml-2 transition-colors duration-300"
             >
               Rameesa Rashid
             </a>
           </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;