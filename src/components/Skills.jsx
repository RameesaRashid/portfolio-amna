export const SkillMarquee = () => {
  const skills = [
    "Photoshop", "Illustrator", "Figma", "Android Studio", 
    "Kotlin", "Java", "Tailwind CSS", "React JS", "UI/UX Design"
  ];

  return (
    <div className="w-full py-4 overflow-hidden mb-8 select-none">
      <div className="relative flex max-w-[100vw] overflow-hidden">
        {/* The Scrolling Track */}
        <div className="flex w-max animate-scroll">
          {/* We duplicate the array to ensure a seamless infinite loop */}
          {[...skills, ...skills].map((skill, index) => (
            <div key={index} className="flex items-center">
              <span className="text-zinc-500 mx-4 text-xs uppercase tracking-[0.4em] font-light">
                {skill}
              </span>
              {/* Decorative separator dot */}
              <span className="w-1 h-1 bg-[#3ba18e] rounded-full opacity-50"></span>
            </div>
          ))}
        </div>

        {/* Gradient Fades for the edges to make it look "pro" */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-950 to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-950 to-transparent z-10"></div>
      </div>
    </div>
  );
};