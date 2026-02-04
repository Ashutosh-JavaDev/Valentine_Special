
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'https://cdn.skypack.dev/canvas-confetti';
import { Gift } from 'lucide-react';

const Finale: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isYes, setIsYes] = useState(false);
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const [noScale, setNoScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleYes = () => {
    setIsYes(true);
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FB7185', '#FDE047', '#4C0519']
    });
  };

  const handleNoHover = () => {
    if (window.innerWidth > 768) {
        const x = Math.random() * 200 - 100;
        const y = Math.random() * 200 - 100;
        setNoButtonPos({ x, y });
    } else {
        setNoScale(prev => Math.max(0.2, prev - 0.2));
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-t from-[#4C0519] to-[#020617] relative px-4 overflow-hidden">
      <div className="max-w-2xl w-full text-center relative z-10" ref={containerRef}>
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="box"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="flex flex-col items-center"
            >
              <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="cursor-pointer group relative"
                onClick={() => setIsOpen(true)}
              >
                <div className="absolute inset-0 bg-[#FDE047] blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="bg-[#4C0519] p-8 rounded-2xl border-4 border-[#FDE047] shadow-[0_0_50px_rgba(253,224,71,0.3)]">
                   <Gift size={120} className="text-[#FDE047]" />
                </div>
                <p className="mt-8 font-dancing text-2xl text-[#FDE047] animate-pulse">Click to open your surprise...</p>
              </motion.div>
            </motion.div>
          ) : isYes ? (
            <motion.div
              key="yes"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <h2 className="font-dancing text-6xl md:text-8xl text-[#FDE047] mb-6">Yay! ❤️</h2>
              <p className="font-playfair text-2xl md:text-3xl text-white italic">
                You've made me the happiest person in the universe. <br />
                I love you, Pookie!
              </p>
              <div className="mt-12 flex justify-center gap-4">
                 {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{ y: [0, -20, 0], opacity: [0, 1, 0] }}
                        transition={{ delay: i * 0.2, repeat: Infinity, duration: 2 }}
                        className="text-rose-400 text-4xl"
                    >
                        ❤️
                    </motion.div>
                 ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="question"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-black/40 backdrop-blur-xl p-12 rounded-3xl border border-white/10 shadow-2xl"
            >
              <h2 className="font-playfair text-4xl md:text-6xl text-white mb-12">
                Will you be my <br />
                <span className="text-[#FB7185]">Valentine?</span>
              </h2>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleYes}
                  className="px-12 py-4 bg-gradient-to-r from-[#FB7185] to-[#4C0519] rounded-full font-inter font-bold text-lg tracking-widest shadow-[0_0_30px_rgba(251,113,133,0.4)] transition-all hover:shadow-[0_0_50px_rgba(251,113,133,0.6)]"
                >
                  YES, ALWAYS
                </motion.button>

                <motion.button
                  animate={{ x: noButtonPos.x, y: noButtonPos.y, scale: noScale }}
                  onMouseEnter={handleNoHover}
                  onClick={handleNoHover}
                  className="px-8 py-4 bg-white/5 border border-white/20 rounded-full font-inter text-slate-400 text-lg hover:bg-white/10 transition-colors"
                >
                  No...
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Decorative stars */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: Math.random() }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ repeat: Infinity, duration: 2 + Math.random() * 3, delay: Math.random() * 5 }}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Finale;
