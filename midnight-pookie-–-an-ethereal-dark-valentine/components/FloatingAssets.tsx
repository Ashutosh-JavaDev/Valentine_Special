
import React from 'react';
import { motion } from 'framer-motion';

export const TeddyIcon = ({ size = 100, color = "#FB7185" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_15px_rgba(251,113,133,0.4)]">
    <path d="M7 6C7 4.34315 8.34315 3 10 3C11.6569 3 13 4.34315 13 6V7H11V6C11 5.44772 10.5523 5 10 5C9.44772 5 9 5.44772 9 6V7H7V6Z" fill={color}/>
    <path d="M17 6C17 4.34315 18.3431 3 20 3C21.6569 3 23 4.34315 23 6V7H21V6C21 5.44772 20.5523 5 20 5C19.4477 5 19 5.44772 19 6V7H17V6Z" fill={color}/>
    <path d="M4 10C4 8.34315 5.34315 7 7 7H17C18.6569 7 20 8.34315 20 10V18C20 20.2091 18.2091 22 16 22H8C5.79086 22 4 20.2091 4 18V10Z" fill={color}/>
    <circle cx="9" cy="12" r="1.5" fill="#020617"/>
    <circle cx="15" cy="12" r="1.5" fill="#020617"/>
    <path d="M12 16C13.1046 16 14 15.1046 14 14C14 13.8954 13.1046 14 12 14C10.8954 14 10 13.8954 10 14C10 15.1046 10.8954 16 12 16Z" fill="#020617"/>
  </svg>
);

export const ChocolateBoxIcon = ({ size = 100, color = "#FDE047" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_15px_rgba(253,224,71,0.4)]">
    <rect x="3" y="6" width="18" height="12" rx="2" fill={color}/>
    <path d="M3 12H21" stroke="#4C0519" strokeWidth="2"/>
    <path d="M12 6V18" stroke="#4C0519" strokeWidth="2"/>
    <circle cx="7.5" cy="9" r="1.5" fill="#4C0519"/>
    <circle cx="16.5" cy="9" r="1.5" fill="#4C0519"/>
    <circle cx="7.5" cy="15" r="1.5" fill="#4C0519"/>
    <circle cx="16.5" cy="15" r="1.5" fill="#4C0519"/>
  </svg>
);

const FloatingAssets: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: `${Math.random() * 100}%`, 
            y: `${Math.random() * 100}%`,
            opacity: 0.2
          }}
          animate={{ 
            y: ["-20%", "20%"],
            rotate: [-10, 10],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 8 + Math.random() * 5, 
            repeat: Infinity, 
            repeatType: 'reverse',
            delay: i * 2
          }}
          className="absolute"
        >
          {i % 2 === 0 ? <TeddyIcon size={80 + Math.random() * 50} /> : <ChocolateBoxIcon size={60 + Math.random() * 40} />}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingAssets;
