import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="container testimonials-container">
        
        <motion.div 
          className="testimonials-eyebrow"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          / შეფასებები
        </motion.div>

        <div className="testimonial-content-wrapper">
          <motion.div 
            className="quote-icon-container"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
             <Quote size={80} fill="currentColor" className="quote-icon-svg" />
          </motion.div>

          <motion.h2 
            className="testimonial-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            "Zoomex Auto Express-ისთვის შექმნილი პირადი კაბინეტი და პროცესების ავტომატიზაცია ნამდვილი გარდატეხა აღმოჩნდა. Spark Studio-მ შეძლო ჩვენი ხედვა რეალობად ექცია, რამაც საგრძნობლად აამაღლა გუნდის პროდუქტიულობა და მომსახურების ხარისხი."
          </motion.h2>

          <div className="testimonial-footer">
            <motion.div 
              className="testimonial-author-box"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="author-avatar">
                {/* Visual placeholder for avatar */}
                <div className="avatar-placeholder">LB</div>
              </div>
              <div className="author-info">
                <h4 className="author-name">ლაშა ბეროზაშვილი</h4>
                <p className="author-title">დირექტორი, ZOOMEX AUTO EXPRESS</p>
              </div>
            </motion.div>

            <motion.div 
              className="testimonial-nav"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <button className="testimonial-nav-btn"><ChevronLeft size={20} /></button>
              <button className="testimonial-nav-btn"><ChevronRight size={20} /></button>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
