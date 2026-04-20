import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import "./Works.css";

/* ── desktop pointer detection ── */
function usePointerDesktop() {
  const [enabled, setEnabled] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  return enabled;
}

/* ── TypingText for staggered animation ── */
function TypingText({ text, active, forceVisible }) {
  const chars = useMemo(() => text.split(""), [text]);
  const isShown = active || forceVisible;

  return (
    <span className="case-card__hover-cta-text" aria-label={text}>
      {chars.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          className="case-card__hover-char"
          initial={{ opacity: 0, y: 2, filter: "blur(2px)" }}
          animate={
            isShown
              ? { opacity: 1, y: 0, filter: "blur(0px)" }
              : { opacity: 0, y: 2, filter: "blur(2px)" }
          }
          transition={{
            duration: 0.1,
            ease: [0.22, 1, 0.36, 1],
            delay: isShown ? index * 0.022 : 0,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

/* ── CaseStudyCard ── */
function CaseStudyCard({ project, year, title, stats, image, imageAlt }) {
  const cardRef       = useRef(null);
  const pointerDesktop = usePointerDesktop();
  const [hovered, setHovered] = useState(false);
  const [revealedOnce, setRevealedOnce] = useState(false);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const smoothX = useSpring(rawX, { stiffness: 260, damping: 28, mass: 0.45 });
  const smoothY = useSpring(rawY, { stiffness: 260, damping: 28, mass: 0.45 });

  useEffect(() => {
    const card = cardRef.current;
    if (!card || !pointerDesktop) return;

    const CTA_WIDTH  = 152;
    const CTA_HEIGHT = 42;
    const OFFSET_X   = 16;
    const OFFSET_Y   = 14;
    const PAD        = 10;

    const updatePosition = (e) => {
      const rect  = card.getBoundingClientRect();
      const localX = e.clientX - rect.left;
      const localY = e.clientY - rect.top;

      let x = localX + OFFSET_X;
      let y = localY + OFFSET_Y;

      if (x + CTA_WIDTH  > rect.width  - PAD) x = localX - CTA_WIDTH  - 14;
      if (y + CTA_HEIGHT > rect.height - PAD) y = localY - CTA_HEIGHT - 14;

      x = Math.max(PAD, Math.min(x, rect.width  - CTA_WIDTH  - PAD));
      y = Math.max(PAD, Math.min(y, rect.height - CTA_HEIGHT - PAD));

      rawX.set(x);
      rawY.set(y);
    };

    const onEnter = (e) => { setHovered(true);  updatePosition(e); };
    const onMove  = (e) => { updatePosition(e); };
    const onLeave = ()  => { setHovered(false); };

    card.addEventListener("mouseenter",  onEnter);
    card.addEventListener("mousemove",   onMove);
    card.addEventListener("mouseleave",  onLeave);
    return () => {
      card.removeEventListener("mouseenter",  onEnter);
      card.removeEventListener("mousemove",   onMove);
      card.removeEventListener("mouseleave",  onLeave);
    };
  }, [pointerDesktop, rawX, rawY]);

  return (
    <motion.article
      ref={cardRef}
      className="case-card"
      initial={{ opacity: 0, y: 18 }}
      whileInView={() => {
        setRevealedOnce(true);
        return { opacity: 1, y: 0 };
      }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      whileHover={pointerDesktop ? { y: -4 } : {}}
    >
      {/* LEFT */}
      <div className="case-card__left">
        <div className="case-card__meta">
          <span className="case-card__project">{project}</span>
          <span className="case-card__year">{year}</span>
        </div>

        <h3 className="case-card__title">{title}</h3>

        <div className="case-card__divider" aria-hidden="true" />

        <div className="case-card__stats">
          {stats.map((item) => (
            <div className="case-card__stat" key={`${item.value}-${item.label}`}>
              <div className="case-card__stat-value">{item.value}</div>
              <div className="case-card__stat-label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT — image */}
      <motion.div
        className="case-card__right"
        whileHover={pointerDesktop ? { scale: 1.02 } : {}}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <img src={image} alt={imageAlt} className="case-card__image" />
      </motion.div>

      {/* CURSOR-FOLLOWING CTA */}
      {pointerDesktop && (
        <motion.div
          className="case-card__hover-cta"
          style={{ x: smoothX, y: smoothY }}
          initial={false}
          animate={
            hovered || (!revealedOnce)
              ? { opacity: 1, scale: 1, filter: "blur(0px)" }
              : { opacity: 0, scale: 0.92, filter: "blur(2px)" }
          }
          transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="case-card__hover-cta-inner">
            <TypingText text="გაიგე მეტი" active={hovered} forceVisible={!revealedOnce} />
            <motion.span
              className="case-card__hover-cta-arrow"
              initial={false}
              animate={
                hovered
                  ? { opacity: 1, x: 0, scale: 1 }
                  : { opacity: 0, x: -4, scale: 0.9 }
              }
              transition={{
                duration: 0.14,
                ease: [0.22, 1, 0.36, 1],
                delay: hovered ? 0.08 : 0,
              }}
            >
              ↗
            </motion.span>
          </div>
        </motion.div>
      )}
    </motion.article>
  );
}

/* ── Section data ── */
const CASES = [
  {
    project:  "Zoomex Auto Express",
    year:     "/2025",
    title:    "ავტო იმპორტის კომპანიისთვის შევქმენით მულტი-ფუნქციური პირადი კაბინეტი და ლიდების შეგროვების სისტემა.",
    stats: [
      { value: "2x",   label: "მეტი მოთხოვნა"     },
      { value: "35%",  label: "სწრაფი რეაგირება"   },
      { value: "24/7", label: "ავტომატური მიღება"  },
    ],
    image:    "/mockup-auto.png",
    imageAlt: "Zoomex Auto Express – ვებსაიტი",
  },
  {
    project:  "HUB Studio",
    year:     "/2025",
    title:    "AI ჩატბოტი, CRM და ციფრული სტრუქტურა — ერთ სისტემაში მომსახურების ბიზნესის ზრდისთვის.",
    stats: [
      { value: "3x",        label: "უფრო ხარისხიანი ლიდი"      },
      { value: "40%",       label: "ნაკლები ხელით სამუშაო"     },
      { value: "1 სისტემა", label: "ყველაფერი ერთ სივრცეში"    },
    ],
    image:    "/mockup-hub.png",
    imageAlt: "HUB Studio – AI სისტემა",
  },
];

/* ── Works section ── */
export default function Works() {
  return (
    <section className="works-section">
      <div className="works-container">

        <motion.div
          className="works-header"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="works-header-left">
            <span className="works-eyebrow">/ქეისები</span>
            <h2 className="works-title">ბოლო ნამუშევრები</h2>
          </div>
          <a href="#" className="works-view-all">
            ყველა ქეისის ნახვა
            <ArrowUpRight size={13} strokeWidth={1.5} />
          </a>
        </motion.div>

        <div className="works-list">
          {CASES.map((c, i) => (
            <CaseStudyCard key={i} {...c} />
          ))}
        </div>

      </div>
    </section>
  );
}
