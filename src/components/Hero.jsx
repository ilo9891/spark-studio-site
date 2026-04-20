import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import PixelButton from './PixelButton';
import './Hero.css';

const PARTNERS = [
  { name: "AeroTech", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 22l10-4 10 4L12 2z"/></svg> },
  { name: "Nexus", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/></svg> },
  { name: "Vanguard", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg> },
  { name: "Quantum AI", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="12" cy="12" r="3"/></svg> },
  { name: "Nova", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> }
];

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        
        {/* TOP LEFT */}
        <motion.div 
          className="hero-title-area"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">
            ჩვენ ვაშენებთ ციფრულ <br/>
            მომავალს შენი ბიზნესისთვის.
          </h1>
        </motion.div>

        {/* TOP RIGHT */}
        <motion.div 
          className="hero-showreel-area"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="showreel-card">
            <span className="font-mono showreel-badge">/ SHOWREEL</span>
            <div className="showreel-bg-text">Spark</div>
            <div className="play-button">
              <Play size={20} fill="currentColor" />
            </div>
            {/* The neon cursor from the screenshot */}
            <motion.div 
              initial={{ x: 15, y: 15 }}
              animate={{ x: -5, y: -5 }}
              transition={{ repeat: Infinity, repeatType: "reverse", duration: 2 }}
              style={{ position: 'absolute', bottom: '15%', right: '25%', pointerEvents: 'none', zIndex: 10 }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4FF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ fill: "#D4FF00", filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.3))", transform: "rotate(-15deg)" }}><path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="m13 13 6 6"></path></svg>
            </motion.div>
          </div>
        </motion.div>

        {/* BOTTOM LEFT: Spark Studio Logo with entrance animation */}
        <motion.div
          className="hero-3d-visual"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="spark-logo-container">
            <motion.img
              src="/logo.png"
              alt="Spark Studio"
              className="hero-logo-img"
              animate={{ y: [0, -18, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>

        {/* BOTTOM RIGHT */}
        <motion.div 
          className="hero-actions-area"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="hero-subtitle">
            Spark Studio დაგეხმარებათ შექმნათ მორგებული პლატფორმები და AI ასისტენტები პროდუქტიულობის გასაზრდელად და ახალი ზრდის განსაბლოკად თქვენს გუნდში.
          </p>
          
          <div className="action-row">
            <div className="input-btn-group">
              <PixelButton className="pixel-primary" text="რეგისტრაცია" />
              <PixelButton className="pixel-secondary" text="ჩვენი პროექტები" />
            </div>
          </div>

          <div className="trusted-area">
            <div className="trusted-badge">ჩვენი პარტნიორები</div>
            
            <div className="marquee-wrapper">
              <div className="marquee-track">
                {/* Double the array length strictly for seamless infinite scrolling loop */}
                {[...PARTNERS, ...PARTNERS].map((partner, idx) => (
                  <div key={idx} className="partner-logo">
                    {partner.icon}
                    <span className="partner-name">{partner.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
