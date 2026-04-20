import React, { useState, useEffect } from 'react';
import './PixelButton.css';
import { ArrowUpRight } from "lucide-react";

const PixelButton = ({ text, className = '' }) => {
  const [blocks, setBlocks] = useState([]);
  
  // Dense 6x2 grid for lightning fast premium block wiping
  const COLS = 6;
  const ROWS = 2;

  useEffect(() => {
    const newBlocks = Array.from({ length: COLS * ROWS }).map((_, i) => ({
      id: i,
      x: (i % COLS) * (100 / COLS),
      y: Math.floor(i / COLS) * (100 / ROWS),
      width: 100 / COLS,
      height: 100 / ROWS,
      // Slowed down mapping explicitly for premium smooth staggered visualization
      delay: Math.random() * 0.25 
    }));
    setBlocks(newBlocks);
  }, []);

  return (
    <button className={`block-btn-wrapper ${className}`}>
      
      {/* Wipe Overlay Grid covering the left text area internally */}
      <div className="hover-wipe-grid">
        {blocks.map((block) => (
          <div
            key={block.id}
            className="wipe-cell"
            style={{
              left: `${block.x}%`,
              top: `${block.y}%`,
              width: `${block.width}%`,
              height: `${block.height}%`,
              transitionDelay: `${block.delay}s`
            }}
          />
        ))}
      </div>

      <div className="btn-text-content">
        <span>{text}</span>
      </div>
      <div className="btn-arrow-box">
        <ArrowUpRight size={16} strokeWidth={1.5} />
      </div>
    </button>
  );
};

export default PixelButton;
