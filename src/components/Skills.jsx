export const SkillMarquee = () => {
  const skills = [
    "Photoshop", "Illustrator", "Figma", "Android Studio", 
    "Kotlin", "Java", "Tailwind CSS", "React JS", "UI/UX Design"
  ];

  return (
    <div className="w-full py-6 overflow-hidden mb-8 select-none relative group">
     
      <div className="relative flex max-w-[100vw] overflow-hidden">
        
        <div className="flex w-max animate-scroll group-hover:[animation-play-state:paused]">
         
          {[...skills, ...skills, ...skills].map((skill, index) => (
            <div key={index} className="flex items-center">
              <span className="text-zinc-500 mx-8 text-[10px] md:text-xs uppercase tracking-[0.5em] font-light hover:text-[#266493] transition-colors duration-300">
                {skill}
              </span>
              <span className="w-1 h-1 bg-[#256cab] rounded-full opacity-30" />
            </div>
          ))}
        </div>


        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-950 via-slate-950/50 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-950 via-slate-950/50 to-transparent z-10 pointer-events-none" />
      </div>
    </div>
  );
};