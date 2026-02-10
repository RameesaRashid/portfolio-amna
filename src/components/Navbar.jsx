const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/50 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <a href="#home" className="text-white font-bold text-xl tracking-tighter">
          PORTFOLIO <span className="text-blue-500">.</span>
        </a>
        
        <ul className="hidden md:flex gap-10 text-sm font-medium uppercase tracking-widest">
          <li><a href="#work" className="hover:text-white text-[#088395] transition">Work</a></li>
          <li><a href="#about" className="hover:text-white text-[#d7d5a5] transition">About</a></li>
          <li><a href="#contact" className="hover:text-white text-[#ec88b0] transition">Contact</a></li>
        </ul>

        <a href="#contact" className="md:hidden text-white border border-white/20 px-4 py-2 rounded-lg text-xs">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;