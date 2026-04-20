import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import './Services.css';

/* ─── Service Data ─── */
const SERVICES = [
  {
    image: '/service_strategy.png',
    title: 'AI სტრატეგია & კონსულტაცია',
    text: 'მიიღე მკაფიო გზამკვლევი, თუ როგორ შეუძლია AI-ს გაზარდოს ეფექტიანობა და შემოსავალი შენს ბიზნეს პროცესებში.',
    large: true,
  },
  {
    image: '/service_content.png',
    title: 'AI კონტენტის შექმნა',
    text: 'ავტომატიზირებული კონტენტი, რომელიც ასახავს შენი ბრენდის ხმას და ზუსტად ემთხვევა სამიზნე აუდიტორიას.',
    large: true,
  },
  {
    image: '/service_agent.png',
    title: 'AI აგენტების დეველოპმენტი',
    text: 'შექმენი და განათავსე AI აგენტები შენი ბიზნეს გამოწვევების გადასაჭრელად.',
    large: false,
  },
  {
    image: '/service_crm.png',
    title: 'CRM AI ავტომატიზაცია',
    text: 'ავტომატიზირე კლიენტებთან ურთიერთობა — ყოველი ლიდი სისტემაში.',
    large: false,
  },
  {
    image: '/service_process.png',
    title: 'AI პროცესების ავტომატიზაცია',
    text: 'გადააქციე განმეორებადი სამუშაოები გამარტივებულ, ავტომატიზირებულ სისტემებად.',
    large: false,
  },
];

/* ─── Reusable Animated Card ─── */
const ServiceCard = ({ service, index, isLarge }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: false, margin: '-80px' });

  return (
    <motion.div
      ref={cardRef}
      className={`service-card ${isLarge ? 'service-card--large' : 'service-card--small'}`}
      /* ── Scroll Reveal: 3D tilt + fade + slide ── */
      initial={{ opacity: 0, y: 70, rotateX: 8 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, rotateX: 0 }
          : { opacity: 0, y: 70, rotateX: 8 }
      }
      transition={{
        type: 'spring',
        stiffness: 80,
        damping: 22,
        delay: index * 0.1,
      }}
      /* ── Hover micro-animation ── */
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { type: 'spring', stiffness: 300, damping: 20 },
      }}
      style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
    >
      <div className="card-illustration">
        <motion.img
          src={service.image}
          alt={service.title}
          className="service-img"
          /* Image floats up slightly on card hover (CSS handles the rest) */
        />
      </div>
      <div className="card-body">
        <h3 className="card-title">{service.title}</h3>
        <p className="card-text">{service.text}</p>
      </div>
    </motion.div>
  );
};

/* ─── Main Section ─── */
const Services = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: false, margin: '-60px' });

  /* Scroll-linked parallax: maps section scroll progress to transforms */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  /* ── Pull / Stretch effect ──
     As section enters viewport (0→0.3 progress):
     - scaleX stretches from 0.92 → 1 (rubber-band pull)
     - translateX shifts from 60px → 0 (slide-in from right)
     - opacity fades 0 → 1
  */
  const gridScaleX = useTransform(scrollYProgress, [0, 0.25], [0.92, 1]);
  const gridTranslateX = useTransform(scrollYProgress, [0, 0.3], [80, 0]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);

  /* Subtle parallax on the bottom row — moves slightly slower */
  const bottomRowY = useTransform(scrollYProgress, [0.1, 0.45], [40, 0]);

  const topCards = SERVICES.filter(s => s.large);
  const bottomCards = SERVICES.filter(s => !s.large);

  return (
    <section ref={sectionRef} className="services-section" id="services">
      <div className="services-container">

        {/* ── Section Header ── */}
        <motion.div
          ref={headerRef}
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="services-header-inner">
            <div className="services-header-left">
              <span className="services-eyebrow">/ ჩვენი სერვისები</span>
              <h2 className="services-title">ავტომატიზაციის<br />გამოსავლები</h2>
            </div>
            <p className="services-header-desc">
              AI-ზე დაფუძნებული გამოსავლები, რომლებიც ამუშავებს შენს ოპერაციებს, ზრდის
              პროდუქტიულობას და ეხმარება ბიზნესს გაუმჯობესებაში — ყოველდღიური ძალისხმევის გარეშე.
            </p>
          </div>
        </motion.div>

        {/* ── Animated Grid Wrapper — stretch/pull/slide ── */}
        <motion.div
          className="services-grid-animate-wrapper"
          style={{
            scaleX: gridScaleX,
            x: gridTranslateX,
            opacity: gridOpacity,
            transformOrigin: 'left center',
          }}
        >
          {/* Top row — 2 large cards */}
          <div className="services-grid-top">
            {topCards.map((service, i) => (
              <ServiceCard key={`top-${i}`} service={service} index={i} isLarge={true} />
            ))}
          </div>

          {/* Bottom row — 3 small cards with extra parallax */}
          <motion.div className="services-grid-bottom" style={{ y: bottomRowY }}>
            {bottomCards.map((service, i) => (
              <ServiceCard key={`bot-${i}`} service={service} index={i + 2} isLarge={false} />
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
