"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionTemplate, useSpring } from "framer-motion";
import ScrollReveal from "../ui/ScrollReveal";
import "./JourneyMap.css";

const STOPS = [
  { id: 1, name: "Estes Park, CO", date: "June 2026" },
  { id: 2, name: "Yellowstone, WY", date: "July 2026" },
  { id: 3, name: "Glacier NP, MT", date: "August 2026" },
  { id: 4, name: "Banff, AB", date: "September 2026" },
];

export default function JourneyMap() {
  const containerRef = useRef(null);
  
  // Track scroll progress within this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Map the scroll progress (0 to 1) to a percentage string
  const progressPercent = useTransform(smoothProgress, [0, 1], [0, 100]);
  const progressPercentString = useMotionTemplate`${progressPercent}%`;

  return (
    <section className="journey-map" ref={containerRef}>
      <div className="container journey-map__container">
        <ScrollReveal direction="up" className="journey-map__header">
          <h2 className="journey-map__title">The Route</h2>
          <p className="journey-map__subtitle">Track our coordinates across North America.</p>
        </ScrollReveal>
        
        <div className="journey-map__linear-wrapper">
          {/* The background track line */}
          <div className="journey-map__track"></div>
          
          {/* The active progress line that fills left to right (or top to bottom on mobile) */}
          <motion.div 
            className="journey-map__progress" 
            style={{ 
              "--progress": progressPercentString 
            }}
          />

          {/* The markers */}
          <div className="journey-map__stops">
            {STOPS.map((stop, index) => {
              const triggerPoint = index / (STOPS.length - 1);
              
              return (
                <div key={stop.id} className="journey-map__stop-container">
                  <Node stop={stop} scrollYProgress={scrollYProgress} smoothProgress={smoothProgress} triggerPoint={triggerPoint} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Node({ stop, scrollYProgress, smoothProgress, triggerPoint }) {
  const opacity = useTransform(smoothProgress, [Math.max(0, triggerPoint - 0.1), triggerPoint], [0, 1]);
  const scale = useTransform(smoothProgress, [Math.max(0, triggerPoint - 0.1), triggerPoint], [0.5, 1]);
  const yOffset = useTransform(smoothProgress, [Math.max(0, triggerPoint - 0.1), triggerPoint], [20, 0]);

  return (
    <motion.div 
      className="journey-map__stop"
      style={{ opacity, scale }}
    >
      <div className="journey-map__dot">
        <div className="journey-map__dot-inner" />
      </div>
      <motion.div 
        className="journey-map__label"
        style={{ y: yOffset }}
      >
        <h4>{stop.name}</h4>
        <p>{stop.date}</p>
      </motion.div>
    </motion.div>
  );
}
