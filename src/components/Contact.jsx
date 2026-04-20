import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-page-section" id="contact">
      <div className="container contact-container">
        
        <div className="contact-main-grid">
          <div className="contact-text-side">
            <motion.div 
              className="contact-eyebrow"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              / დაგვიკავშირდი
            </motion.div>
            <motion.h2 
              className="contact-main-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              მომავალი ავტომატიზებულია:<br />მოდი, შევქმნათ შენი
            </motion.h2>
            <motion.p 
              className="contact-main-desc"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              ჩვენ სიამოვნებით მოგისმენთ! გაინტერესებთ AI ავტომატიზაცია, გსურთ პროექტის განხილვა თუ უბრალოდ გაქვთ კითხვები — ჩვენი გუნდი მზადაა დასახმარებლად.
            </motion.p>
          </div>

          <motion.div 
            className="contact-form-side"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <form className="contact-form-box">
              <div className="form-group">
                <label>სრული სახელი</label>
                <input type="text" placeholder="შეიყვანეთ თქვენი სახელი" />
              </div>
              <div className="form-group">
                <label>ელ.ფოსტა</label>
                <input type="email" placeholder="შეიყვანეთ ელ.ფოსტა" />
              </div>
              <div className="form-group">
                <label>ბიუჯეტი</label>
                <select>
                  <option disabled selected>აირჩიეთ ბიუჯეტის დიაპაზონი</option>
                  <option>300₾ - 1,000₾</option>
                  <option>1,000₾ - 5,000₾</option>
                  <option>5,000₾ +</option>
                </select>
              </div>
              <div className="form-group">
                <label>შეტყობინება</label>
                <textarea placeholder="აღწერეთ თქვენი პროექტი"></textarea>
              </div>
              <button type="submit" className="contact-submit-btn">
                <span>გაგზავნა</span>
                <div className="submit-icon-box">
                  <ArrowUpRight size={18} />
                </div>
              </button>
            </form>
          </motion.div>
        </div>

        <div className="contact-bottom-row">
          <motion.div 
            className="contact-book-call-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="book-call-text">
              <h4>გირჩევნიათ საუბარი?</h4>
              <p>დაჯავშნეთ 30-წუთიანი გაცნობითი ზარი</p>
            </div>
            <button className="book-call-btn">
              <span>ზარის დაჯავშნა</span>
              <ArrowUpRight size={16} />
            </button>
          </motion.div>

          <div className="contact-info-block">
            <motion.div 
              className="contact-info-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <span className="info-label">/ ოფისი</span>
              <p className="info-value">ე. ხელაძის 27, თბილისი</p>
            </motion.div>
            <motion.div 
              className="contact-info-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <span className="info-label">/ საათები</span>
              <p className="info-value">ორშ - პარ | 09:00 - 18:00</p>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
