import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container navbar-container">
        <div className="logo">
          <span className="star-icon">✦</span>
          <span className="logo-text">Spark Studio</span>
        </div>

        <nav className="nav-links hide-mobile">
          <a href="#services" className="nav-link">სერვისები</a>
          <a href="#about" className="nav-link">ჩვენ შესახებ</a>
          <a href="#works" className="nav-link">ნამუშევრები</a>
          <a href="#blog" className="nav-link">ბლოგი</a>
        </nav>

        <div className="navbar-right hide-mobile">
          <a href="#contact" className="contact-btn">დაგვიკავშირდი</a>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
