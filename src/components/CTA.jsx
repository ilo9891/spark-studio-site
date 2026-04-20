import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <motion.div
          className="cta-inner"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Eyebrow */}
          <span className="cta-eyebrow">/ დაიწყე ახლა</span>

          {/* Headline */}
          <h2 className="cta-title">
            მზად ხარ შენი<br />
            ბიზნესი შემდეგ<br />
            დონეზე ასაყვანად?
          </h2>

          {/* Sub */}
          <p className="cta-sub">
            მოდი ვისაუბროთ. პირველი კონსულტაცია — უფასოდ.
          </p>

          {/* CTA Button */}
          <motion.a
            href="mailto:hello@sparkstudio.ge"
            className="cta-btn"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span>კონსულტაციის დაჯავშნა</span>
            <div className="cta-btn-arrow">
              <ArrowUpRight size={16} strokeWidth={1.5} />
            </div>
          </motion.a>

          {/* Ambient glow blob */}
          <div className="cta-glow" aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
