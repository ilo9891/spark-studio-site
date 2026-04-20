import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import './FAQ.css';

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      className="faq-item-wrapper"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <button 
        className={`faq-question-btn ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="faq-question-text">{question}</span>
        <div className="faq-icon-box" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div 
            className="faq-answer-container"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="faq-answer-inner">
              <motion.p 
                className="faq-answer-text"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                {answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "რომელი სექტორის ბიზნესებს შეუძლიათ Spark Studio-ს AI გადაწყვეტილებების გამოყენება?",
      answer: "ჩვენი სერვისები მორგებულია ნებისმიერი ზომის ბიზნესზე — მცირე სტარტაპებიდან მსხვილ კორპორაციებამდე, რომლებსაც სურთ პროცესების გაუმჯობესება და ციფრული ტრანსფორმაცია."
    },
    {
      question: "მჭირდება თუ არა ტექნიკური ცოდნა თქვენი სერვისების გამოსაყენებლად?",
      answer: "არა, ჩვენ ვქმნით სრულად გამართულ, ინტუიციურ სისტემებს, რომელთა მართვაც ყოველგვარი ტექნიკური გამოცდილების გარეშეა შესაძლებელი. ჩვენ ვზრუნავთ ყველა ტექნიკურ დეტალზე."
    },
    {
      question: "რა დრო სჭირდება AI ავტომატიზაციის დანერგვას?",
      answer: "პროექტის სირთულიდან გამომდინარე, სამუშაო პროცესი (კონცეფციიდან იმპლემენტაციამდე) საშუალოდ 2-დან 6 კვირამდე გრძელდება."
    },
    {
      question: "შეგიძლიათ თუ არა შექმნათ ინდივიდუალური AI აგენტები ჩემი ბიზნესისთვის?",
      answer: "დიახ, ჩვენი ერთ-ერთი მთავარი მიმართულება სწორედ თქვენს სპეციფიკურ მოთხოვნებზე მორგებული AI აგენტების შემუშავებაა, რომლებიც ავტომატურად ასრულებენ კონკრეტულ დავალებებს."
    },
    {
      question: "რა ხდება პროექტის დასრულების შემდეგ?",
      answer: "ჩვენ გთავაზობთ მუდმივ ტექნიკურ მხარდაჭერას, მონიტორინგს და სისტემების პერიოდულ ოპტიმიზაციას, რათა თქვენი AI სისტემები მუდმივად საუკეთვეზოდ მუშაობდეს."
    }
  ];

  return (
    <section className="faq-section" id="faq">
      <div className="container faq-container">
        <div className="faq-grid">
          <div className="faq-title-col">
            <motion.div 
              className="faq-eyebrow"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              / კითხვა-პასუხი
            </motion.div>
            <motion.h2 
              className="faq-main-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              ხშირად დასმული<br />კითხვები
            </motion.h2>
          </div>

          <div className="faq-content-col">
            {faqs.map((faq, i) => (
              <FAQItem key={i} {...faq} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
