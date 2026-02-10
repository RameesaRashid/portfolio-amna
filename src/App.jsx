import { useState } from 'react';
import Navbar from './components/Navbar';
import Gallery from './sections/Gallery';
import Contact from './sections/Contact';
import Hero from './sections/Hero';
import AboutSection from './components/Carousel';
// --- ADD THIS LINE BELOW ---
import Splash from './components/Splash'; 

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="bg-slate-950 min-h-screen">
      {showSplash ? (
        // Now 'Splash' is defined because of the import above
        <Splash onComplete={() => setShowSplash(false)} />
      ) : (
        <div className="animate-in fade-in duration-1000">
          <Navbar />
          <div id="home"><Hero /></div>
          <div id="work"><Gallery /></div>
          <div id="about"><AboutSection /></div>
          <div id="contact"><Contact /></div>
        </div>
      )}
    </div>
  );
}

export default App;