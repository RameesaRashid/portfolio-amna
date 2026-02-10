export const Lightbox = ({ selectedImg, setSelectedImg }) => {
  if (!selectedImg) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
      onClick={() => setSelectedImg(null)}
    >
      <img 
        src={selectedImg} 
        className="max-w-full max-h-full rounded-lg shadow-2xl" 
        alt="Preview"
      />
      <button className="absolute top-10 right-10 text-white text-4xl">&times;</button>
    </div>
  );
};