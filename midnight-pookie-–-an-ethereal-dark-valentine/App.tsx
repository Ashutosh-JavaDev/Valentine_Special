import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import ChapterSection from './components/ChapterSection';
import RomanticDivider from './components/RomanticDivider';
import Finale from './components/Finale';
import VibeNoise from './components/VibeNoise';
import FloatingAssets from './components/FloatingAssets';
import { CHAPTERS } from './constants';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return (
      <div className="fixed inset-0 bg-[#020617] flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[#FDE047] font-dancing text-4xl"
        >
          Preparing your story...
        </motion.div>
      </div>
    );
  }

  return (
    <main className="relative bg-[#020617] min-h-screen text-white font-inter selection:bg-[#FB7185] selection:text-white">
      <VibeNoise />
      <FloatingAssets />
      
      {/* Pass your image URL here */}
      <Hero backgroundImage="/bhutkifull_face.jpg" />

      {CHAPTERS.map((chapter, index) => (
        <React.Fragment key={chapter.category}>
          <ChapterSection chapter={chapter} index={index} />
          {index < CHAPTERS.length - 1 && (
            <RomanticDivider 
              text={index === 0 ? "In a sea of people, my eyes will always search for you." : "You are my favorite thought."}
              assetType={index === 0 ? 'teddy' : 'chocolate'}
            />
          )}
        </React.Fragment>
      ))}

      <Finale />
      
      <footer className="py-12 text-center text-slate-500 font-inter text-sm tracking-widest opacity-50">
        MIDNIGHT POOKIE EDITION • MMXXV
      </footer>
    </main>
  );
};

export default App;