import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowUpRight } from 'lucide-react';
import './Pricing.css';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: "Starter",
      title: "დამწყები",
      desc: "მცირე ბიზნესისთვის",
      price: billingCycle === 'monthly' ? "300" : "240", // Changed to 300
      features: [
        "AI სტრატეგიული სესია",
        "ბაზისური ავტომატიზაცია",
        "თვიური რეპორტი",
        "Email მხარდაჭერა"
      ],
      btnText: "აირჩიე Starter",
      highlight: false
    },
    {
      name: "Growth",
      title: "ზრდა",
      desc: "მზარდი კომპანიებისთვის",
      price: billingCycle === 'monthly' ? "600" : "480", // Changed to 600
      features: [
        "ყველაფერი Starter-დან",
        "პერსონალური AI აგენტი",
        "CRM ავტომატიზაცია",
        "ორკვირიანი ოპტიმიზაცია"
      ],
      btnText: "აირჩიე Growth",
      highlight: true
    },
    {
      name: "Enterprise",
      title: "კორპორატიული",
      desc: "დიდი ორგანიზაციებისთვის",
      price: "ინდივიდუალური", // Will be smaller in CSS
      features: [
        "ყველაფერი Growth-დან",
        "სრული ავტომატიზაცია",
        "AI კონსულტანტი",
        "ანალიტიკის Dashboard"
      ],
      btnText: "დაგვიკავშირდი",
      highlight: false
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Premium smooth easing
      },
    }),
  };

  return (
    <section className="pricing-section">
      <div className="container">
        <div className="pricing-header">
           <motion.div 
             className="pricing-eyebrow"
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
           >
             / ტარიფები
           </motion.div>
           
           <div className="pricing-title-row">
             <motion.h2 
               className="pricing-title"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
             >
               აირჩიე შენი პაკეტი
             </motion.h2>

             <motion.div 
               className="pricing-toggle-wrapper"
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
             >
               <div className="pricing-toggle">
                 <button 
                   className={`toggle-btn ${billingCycle === 'yearly' ? 'active' : ''}`}
                   onClick={() => setBillingCycle('yearly')}
                 >
                   წლიური <span className="save-badge">SAVE 20%</span>
                 </button>
                 <button 
                   className={`toggle-btn ${billingCycle === 'monthly' ? 'active' : ''}`}
                   onClick={() => setBillingCycle('monthly')}
                 >
                   თვიური
                 </button>
               </div>
             </motion.div>
           </div>
        </div>

        <div className="plans-grid">
          {plans.map((plan, i) => (
            <motion.div 
              key={i} 
              custom={i}
              className={`plan-card ${plan.highlight ? 'plan-highlight' : ''}`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="plan-info">
                <h3 className="plan-name">{plan.title}</h3>
                <p className="plan-desc">{plan.desc}</p>
                
                <div className="plan-price-box">
                  <span className={`price-value ${plan.price === 'ინდივიდუალური' ? 'price-value--small' : ''}`}>
                    {plan.price}
                  </span>
                  {plan.name !== 'Enterprise' && <span className="price-currency">₾ / თვეში</span>}
                </div>
              </div>

              <div className="plan-divider"></div>

              <ul className="plan-features">
                {plan.features.map((feat, idx) => (
                  <li key={idx} className="feature-item">
                    <Check size={18} className="feature-icon" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <button className="plan-btn">
                <span>{plan.btnText}</span>
                <div className="btn-icon">
                   <ArrowUpRight size={18} />
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
