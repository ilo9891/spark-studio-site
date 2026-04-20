import React, { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { TriangleAlert } from 'lucide-react';
import './ScrollSequence.css';

const TimelineBadge = ({ text, progress, start, className, rotationStart }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Track scroll in BOTH directions — show on forward scroll, hide on reverse
  useMotionValueEvent(progress, "change", (latest) => {
    setIsVisible(latest >= start);
  });

  return (
    <motion.div 
      className={`timeline-badge ${className}`}
      initial={{ opacity: 0, y: 150, rotate: rotationStart }}
      animate={
        isVisible
          ? { opacity: 1, y: 0, rotate: 0 }
          : { opacity: 0, y: 150, rotate: rotationStart }
      }
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
    >
      <div className="warning-icon-bg">
        <TriangleAlert size={20} color="#f59e0b" strokeWidth={2.5} />
      </div>
      <span className="timeline-text-content">{text}</span>
    </motion.div>
  );
};

const ScrollSequence = () => {
  const containerRef = useRef(null);
  const [centerVisible, setCenterVisible] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setCenterVisible(latest > 0.01);
  });

  return (
    <section ref={containerRef} className="scroll-sequence-section">
      <div className="sticky-container">
        
        <motion.h2 
          className="main-center-text"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={centerVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          დააინტეგრირე AI <br/> შენს ბიზნესში
        </motion.h2>
        
        {/* Badges animate in on scroll-down, reverse on scroll-up */}
        <TimelineBadge 
          text="ბიზნესის ზრდა არ არის შემთხვევითი."
          progress={scrollYProgress}
          start={0.05}
          className="badge-pos-1"
          rotationStart={-12}
        />

        <TimelineBadge 
          text="პრობლემა სისტემაშია."
          progress={scrollYProgress}
          start={0.25}
          className="badge-pos-2"
          rotationStart={15}
        />

        <TimelineBadge 
          text="მარკეტინგი. ტექნოლოგია. ავტომატიზაცია."
          progress={scrollYProgress}
          start={0.45}
          className="badge-pos-3"
          rotationStart={-10}
        />

        <TimelineBadge 
          text="ერთად — ქმნის შედეგს."
          progress={scrollYProgress}
          start={0.65}
          className="badge-pos-4"
          rotationStart={12}
        />
        
      </div>
    </section>
  );
};

export default ScrollSequence;
