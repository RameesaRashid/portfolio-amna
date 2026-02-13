import { useState } from 'react';
import Navbar from './components/Navbar';
import Gallery from './sections/Gallery';
import Contact from './sections/Contact';
import Hero from './sections/Hero';
import AboutSection from './components/Carousel';
import Splash from './components/Splash'; 
import CustomCursor from './components/CustomCursor';
import Footer from './sections/Footer';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="bg-slate-950 min-h-screen cursor-none">
      {showSplash ? (
        // Now 'Splash' is defined because of the import above
        <Splash onComplete={() => setShowSplash(false)} />
      ) : (
        <div className="animate-in fade-in duration-1000">
          <CustomCursor />
          <Navbar />
          <div id="home"><Hero /></div>
          <div id="work"><Gallery /></div>
          <div id="about"><AboutSection /></div>
          <div id="contact"><Contact /></div>
          <div id="footer"><Footer /></div>
        </div>
      )}
    </div>
  );
}

export default App;