import React from 'react';
import { motion } from 'framer-motion';
import { Sparkle } from 'lucide-react';
import './Marquee.css';

const Marquee = () => {
  const items = [
    "სოციალური მედიის მართვა", "ვებგვერდები", "აპლიკაციები", 
    "CRM სისტემები", "AI ჩატბოტები", "ავტომატიზაცია", "აუდიო ბრენდინგი"
  ];

  // Duplicate items to ensure seamless endless scrolling
  const marqueeItems = [...items, ...items, ...items];

  return (
    <div className="marquee-container">
      <div className="marquee-wrapper">
        <motion.div 
          className="marquee-track"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30 // adjust speed
          }}
        >
          {marqueeItems.map((item, idx) => (
            <div key={idx} className="marquee-item">
              <span className="marquee-text font-mono">{item}</span>
              <Sparkle className="text-neon" size={20} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
