import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './AdditionalServices.css';

const SERVICES = [
  {
    num: '01',
    title: 'ციფრი ბიზნესის დაბალანსება',
    text: 'თქვენი ფინანსური და ციფრული ეკოსისტემის ოპტიმიზაცია AI-ს დახმარებით, მონაცემების ზუსტი ანალიზი და რისკების მინიმიზაცია.',
    details: 'ფინანსური მოდელირება, დანახარჯების ოპტიმიზაცია, რესურსების განაწილება.',
    large: true,
    img: '/img_balance.png'
  },
  {
    num: '02',
    title: 'აპლიკაციების შექმნა',
    text: 'ფუნქციური და მოსახერხებელი აპლიკაციები, რომლებიც მომხმარებლის გამოცდილებას და ბიზნეს პროცესებს აუმჯობესებს.',
    details: 'iOS/Android კონცეფცია, MVP, UI flow, ინტეგრაციები.',
    large: true,
    img: '/img_app.png'
  },
  {
    num: '03',
    title: 'ციფრული მეურნეობა სიგნალი',
    text: 'მონაცემებზე დაფუძნებული მარკეტინგული სტრატეგიები და ანალიტიკა, რომელიც ბაზრის სიგნალებს აქცევს კონკრეტულ ქმედებად.',
    details: 'Data analytics, signal processing, tracking, conversion optimization.',
    large: false,
    img: '/img_signal.png'
  },
  {
    num: '04',
    title: 'აუდიო ბრენდინგი',
    text: 'უნიკალური ხმოვანი იდენტობა, რომელიც ბრენდს ცნობადობას და ემოციურ კავშირს მატებს თითოეულ შეხების წერტილში.',
    details: 'Sonic logo, voice style, brand sound system.',
    large: false,
    img: '/img_audio.png'
  },
  {
    num: '05',
    title: 'სოციალური მედიის მართვა',
    text: 'სტრატეგიული კონტენტი და ქსელების მართვა, რომელიც ზრდის ჩართულობას, მსმენელთა ლოიალურობას და ბრენდის ხილვადობას.',
    details: 'კონტენტ კალენდარი, ვიზუალური მიმართულება, კამპანიები.',
    large: false,
    img: '/img_social.png'
  },
];

const containerVariants = {
  hidden: { x: 20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
      when: 'beforeChildren',
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { x: 15, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const AdditionalServices = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const topCards = SERVICES.filter((s) => s.large);
  const bottomCards = SERVICES.filter((s) => !s.large);

  return (
    <section ref={sectionRef} className="add-services-section">
      <div className="services-container">
        <motion.div
          className="add-services-wrapper"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <div className="add-services-grid-top">
            {topCards.map((service, i) => (
              <motion.div key={i} className="add-service-card add-service-card--large" variants={cardVariants}>
                <div className="add-card-inner">
                  <div className="add-card-header">
                    <span className="add-card-num">{service.num}</span>
                    <div className="add-card-visual">
                       {/* Expecting premium 3D transparent PNG here */}
                       <img src={service.img} alt={service.title} className="add-card-img" />
                    </div>
                  </div>
                  <div className="add-card-content">
                    <h3 className="add-card-title">{service.title}</h3>
                    <p className="add-card-text">{service.text}</p>
                    <div className="add-card-details-wrapper">
                      <p className="add-card-details">
                        <span className="add-detail-dot"></span> {service.details}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="add-services-grid-bottom">
            {bottomCards.map((service, i) => (
              <motion.div key={i} className="add-service-card add-service-card--small" variants={cardVariants}>
                <div className="add-card-inner">
                  <div className="add-card-header">
                    <span className="add-card-num">{service.num}</span>
                     <div className="add-card-visual add-card-visual--small">
                        {/* Expecting premium 3D transparent PNG here */}
                        <img src={service.img} alt={service.title} className="add-card-img" />
                     </div>
                  </div>
                  <div className="add-card-content">
                    <h3 className="add-card-title">{service.title}</h3>
                    <p className="add-card-text">{service.text}</p>
                    <div className="add-card-details-wrapper">
                      <p className="add-card-details">
                        <span className="add-detail-dot"></span> {service.details}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdditionalServices;
