
import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-black via-[#020617] to-[#4C0519]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-center z-10"
      >
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-dancing text-4xl md:text-5xl text-[#FDE047] mb-4"
        >
          Hi Pookie...
        </motion.h2>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="font-playfair text-5xl md:text-8xl font-bold tracking-tight text-white mb-8"
        >
          Our Story in the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FB7185] to-[#4C0519]">Shadows & Stars</span>
          </motion.h1>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-12 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-[#FDE047] text-xs uppercase tracking-[0.4em] font-semibold opacity-60">Begin the Journey</span>
        <Heart className="text-[#FDE047] fill-[#FDE047]" size={24} />
      </motion.div>

      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rose-900/10 via-transparent to-transparent opacity-50" />
    </section>
  );
};

export default Hero;
