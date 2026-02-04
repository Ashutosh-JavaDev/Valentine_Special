
import React from 'react';
import { motion } from 'framer-motion';
import { TeddyIcon, ChocolateBoxIcon } from './FloatingAssets';

interface RomanticDividerProps {
  text: string;
  assetType: 'teddy' | 'chocolate';
}

const RomanticDivider: React.FC<RomanticDividerProps> = ({ text, assetType }) => {
  return (
    <section className="h-screen flex items-center justify-center relative bg-[#020617] overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {assetType === 'teddy' ? <TeddyIcon size={400} /> : <ChocolateBoxIcon size={400} />}
        </motion.div>
      </div>
      
      <motion.div
        initial={{ filter: "blur(20px)", opacity: 0 }}
        whileInView={{ filter: "blur(0px)", opacity: 1 }}
        viewport={{ amount: 0.8 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="z-10 text-center px-6 max-w-4xl"
      >
        <h3 className="font-playfair text-4xl md:text-6xl italic leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#FDE047] via-[#FB7185] to-[#FDE047] animate-gradient-x">
          {text}
        </h3>
      </motion.div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]" />
    </section>
  );
};

export default RomanticDivider;
