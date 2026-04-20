import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container footer-container">
        
        {/* UPPER PART: CTA */}
        <div className="footer-cta-wrapper">
          <div className="footer-cta-left">
            <h2 className="footer-cta-title">
              მზად ხართ დანერგოთ AI თქვენს ბიზნესში?
            </h2>
            <button className="footer-cta-btn">
              <span>უფასო კონსულტაცია</span>
              <div className="footer-btn-icon">
                <ArrowUpRight size={20} />
              </div>
            </button>
          </div>
          
          <div className="footer-cta-right">
            {/* White variant of Logo */}
            <div className="footer-logo-visual">
              <span className="spark-star-footer">✦</span>
              <span className="spark-text-footer" style={{ color: "#fff" }}>Spark Studio</span>
            </div>
          </div>
        </div>

        {/* LOWER PART: Links */}
        <div className="footer-links-grid">
          
          <div className="footer-col footer-contact-col">
            <div className="footer-sub-col"><span className="footer-label">/ მისამართი</span><p className="footer-address">ე. ხელაძის 27, თბილისი</p></div><div className="footer-sub-col">
              <span className="footer-label">/ EMAIL</span>
              <a href="mailto:info@sparkstudio.ge" className="footer-large-link">info@sparkstudio.ge</a>
            </div>
            <div className="footer-sub-col"><span className="footer-label">/ მისამართი</span><p className="footer-address">ე. ხელაძის 27, თბილისი</p></div><div className="footer-sub-col">
              <span className="footer-label">/ PHONE</span>
              <a href="tel:+995555000000" className="footer-large-link">598 60 85 60</a>
            </div>
          </div>

          <div className="footer-col">
            <span className="footer-label">/ NAVIGATION</span>
            <ul className="footer-list">
              <li><a href="#">მთავარი</a></li>
              <li><a href="#services">სერვისები</a></li>
              <li><a href="#works">ნამუშევრები</a></li>
              <li><a href="#blog">ბლოგი</a></li>
              <li><a href="#faq">კითხვა-პასუხი</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <span className="footer-label">/ COMPANY</span>
            <ul className="footer-list">
              <li><a href="#">ჩვენს შესახებ</a></li>
              
              <li><a href="#">კონტაქტი</a></li>
            </ul>
            <div className="footer-legal-box">
              <span className="footer-label">/ LEGAL</span>
              <ul className="footer-list">
                <li><a href="#">წესები და პირობები</a></li>
                <li><a href="#">კონფიდენციალურობა</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-col">
            <span className="footer-label">/ FOLLOW US</span>
            <ul className="footer-list">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Telegram</a></li>
              <li><a href="#">YouTube</a></li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Spark Studio. ყველა უფლება დაცულია.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
