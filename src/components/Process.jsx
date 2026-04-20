import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useMemo, useRef, useState, useEffect } from "react";
import "./Process.css";

const steps = [
  {
    number: "/01",
    title: "აღმოჩენა",
    text: "ვიწყებთ შენი ბიზნესის, აუდიტორიის და ძირითადი bottleneck-ების დეტალური ანალიზით. ამ ეტაპზე ვხედავთ სად იკარგება შესაძლებლობა და სად შეიძლება სისტემის გამართვა.",
    icon: "search",
  },
  {
    number: "/02",
    title: "გეგმა",
    text: "შემდეგ ვადგენთ ზუსტ ციფრულ სტრატეგიას — რა უნდა შეიქმნას, რა უნდა ავტომატიზდეს და როგორ უნდა იყოს დაკავშირებული ვებგვერდი, ლიდები, კომუნიკაცია და CRM.",
    icon: "plan",
  },
  {
    number: "/03",
    title: "შექმნა",
    text: "ამ ეტაპზე ვქმნით სისტემას: ვებგვერდს, AI ჩატბოტს, ავტომატიზაციას, რეკლამის სტრუქტურას ან მომხმარებლის გზას — კონკრეტულად შენი ბიზნესის მიზნებზე მორგებით.",
    icon: "build",
  },
  {
    number: "/04",
    title: "ზრდა",
    text: "დასასრულს ვაკვირდებით შედეგებს, ვაუმჯობესებთ პროცესებს და ვზრდით სისტემას ისე, რომ მან არა მხოლოდ იმუშაოს, არამედ დროთა განმავლობაში მეტი ეფექტიც მოიტანოს.",
    icon: "scale",
  },
];

/* ── 3D Icons (Pure CSS) ── */

function SearchIcon() {
  return (
    <div className="process-icon process-icon--search">
      <div className="search-lens" />
      <div className="search-handle" />
    </div>
  );
}

function PlanIcon() {
  return (
    <div className="process-icon process-icon--plan">
      <div className="plan-back" />
      <div className="plan-front">
        <span />
        <span />
        <span />
      </div>
      <div className="plan-rings">
        <i />
        <i />
        <i />
        <i />
      </div>
    </div>
  );
}

function BuildIcon() {
  return (
    <div className="process-icon process-icon--build">
      <div className="build-back" />
      <div className="build-front">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
        <div className="code-mark">&lt;/&gt;</div>
      </div>
    </div>
  );
}

function ScaleIcon() {
  return (
    <div className="process-icon process-icon--scale">
      <div className="scale-arrow" />
    </div>
  );
}

function IconByType({ type }) {
  if (type === "search") return <SearchIcon />;
  if (type === "plan") return <PlanIcon />;
  if (type === "build") return <BuildIcon />;
  return <ScaleIcon />;
}

/* ── Math Helpers ── */
function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function mapRange(value, inMin, inMax, outMin, outMax) {
  if (inMax - inMin === 0) return outMin;
  const t = clamp((value - inMin) / (inMax - inMin), 0, 1);
  return outMin + (outMax - outMin) * t;
}

/* ── Main Component ── */
export default function ProcessTimeline() {
  const sectionRef = useRef(null);
  const stepHeight = 260; // Matching the height in CSS

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 80, 
    damping: 30,
    mass: 0.5,
  });

  const totalSteps = steps.length;

  const [data, setData] = useState({
    currentStep: 0,
    nextStep: 0,
    local: 0,
  });

  useEffect(() => {
    return progress.on("change", (v) => {
      const stepSize = 1 / totalSteps;
      const currentStep = Math.min(totalSteps - 1, Math.floor(v / stepSize));
      const stepStart = currentStep * stepSize;
      const local = clamp((v - stepStart) / stepSize, 0, 1);

      setData({
        currentStep,
        nextStep: Math.min(totalSteps - 1, currentStep + 1),
        local,
      });
    });
  }, [progress, totalSteps]);

  // CONTINUOUS VERTICAL SCROLL TRACK
  // The entire text block moves as one long container
  const trackY = useTransform(progress, [0, 1], [0, -(totalSteps - 1) * stepHeight]);

  // IMAGE REVEAL LOGIC (70/30 SPLIT)
  // Current icon stays pinned until text has mostly exited (70% of step)
  const iconRevealPhase = useTransform(progress, (v) => {
    const stepSize = 1 / totalSteps;
    const local = (v % stepSize) / stepSize;
    return clamp((local - 0.7) / 0.3, 0, 1);
  });

  const iconOpacityCurrent = useTransform(iconRevealPhase, [0, 0.5, 1], [1, 1, 0]);
  const iconScaleCurrent = useTransform(iconRevealPhase, [0, 1], [1, 0.95]);

  const iconClipNext = useTransform(iconRevealPhase, (v) => {
    const reveal = mapRange(v, 0, 1, 100, 0);
    return `inset(0% 0% ${reveal}% 0%)`;
  });

  const iconOpacityNext = useTransform(iconRevealPhase, [0, 0.5, 1], [0, 0.3, 1]);
  const iconScaleNext = useTransform(iconRevealPhase, [0, 1], [0.95, 1]);

  const numberOpacity = (index) => {
    if (data.currentStep === index) return 1;
    if (data.nextStep === index) return mapRange(data.local, 0.8, 1, 0.28, 1);
    return 0.28;
  };

  return (
    <section ref={sectionRef} className="process-section">
      <div className="process-sticky">
        <div className="process-header">
          <div className="process-eyebrow-line" />
          <div className="process-eyebrow">/როგორ ვმუშაობთ</div>
        </div>

        <div className="process-grid">
          <div className="process-left">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="process-number"
                style={{ opacity: numberOpacity(index) }}
              >
                {step.number}
              </motion.div>
            ))}
          </div>

          <div className="process-center">
            <div className="process-visual-stack">
              <motion.div
                className="process-visual-layer"
                style={{
                  opacity: iconOpacityCurrent,
                  scale: iconScaleCurrent,
                }}
              >
                <IconByType type={steps[data.currentStep].icon} />
              </motion.div>

              <motion.div
                className="process-visual-layer"
                style={{
                  opacity: iconOpacityNext,
                  scale: iconScaleNext,
                  clipPath: iconClipNext,
                }}
              >
                <IconByType type={steps[data.nextStep].icon} />
              </motion.div>
            </div>
          </div>

          <div className="process-right">
            <div className="process-copy-shell">
              <motion.div
                className="process-text-track"
                style={{ y: trackY }}
              >
                {steps.map((step) => (
                  <div key={step.number} className="process-copy-step">
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


