import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import './Comparison.css';

const Comparison = () => {
  const sparkItems = [
    "ინდივიდუალურად მორგებული ციფრული სტრატეგია",
    "პრემიუმ ვებსაიტებისა და აპლიკაციების შექმნა",
    "ფონური მუსიკის სერვისი ბრენდისთვის",
    "აუდიო ბრენდინგი და sonic identity",
    "სოციალური მედიის პროფესიონალური მართვა",
    "შედეგზე ორიენტირებული შესრულება",
    "გრძელვადიანი მხარდაჭერა და ოპტიმიზაცია"
  ];

  const otherItems = [
    "სტანდარტული და არაგამორჩეული მიდგომები",
    "ხშირად მხოლოდ საბაზისო დიზაინ ან მარკეტინგ სერვისი",
    "ბრენდის აუდიო გამოცდილების გარეშე",
    "იდენტობის სიღრმის ნაკლებობა",
    "ზედაპირული სოციალური მედიის მართვა",
    "ნაკლები სტრატეგიული ხედვა",
    "პროექტის დასრულების შემდეგ სუსტი follow-up"
  ];

  return (
    <section className="comparison-section">
      <div className="container">
        <motion.h2 
          className="comparison-main-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          განსხვავება აშკარაა
        </motion.h2>

        <div className="comparison-grid">
          {/* LEFT CARD: Spark Studio */}
          <motion.div 
            className="comp-card comp-card-spark"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="comp-card-accent"></div>
            <h3 className="comp-card-title">Spark Studio</h3>
            <ul className="comp-list">
              {sparkItems.map((item, idx) => (
                <li key={idx} className="comp-item">
                  <span className="comp-icon check-icon"><Check size={18} strokeWidth={3} /></span>
                  <span className="comp-text">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT CARD: Other Agencies */}
          <motion.div 
            className="comp-card comp-card-others"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="comp-card-title">სხვა სააგენტოები</h3>
            <ul className="comp-list">
              {otherItems.map((item, idx) => (
                <li key={idx} className="comp-item">
                  <span className="comp-icon x-icon"><X size={18} strokeWidth={3} /></span>
                  <span className="comp-text">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
