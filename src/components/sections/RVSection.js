"use client";

import { useState } from "react";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/ui/ScrollReveal";
import "./RVSection.css";

export default function RVSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <SectionWrapper className="rv-section">
      <div className="rv-section__grid">
        <ScrollReveal direction="right" className="rv-section__content">
          <h2 className="rv-section__title">The Rig</h2>
          <h3 className="rv-section__subtitle">Meet "The Nomad"</h3>
          <p className="rv-section__prose">
            A 30-foot home on wheels, outfitted for the long haul. "The Nomad" is more than just a vehicle; it's our basecamp, our office, and our sanctuary. Built to withstand the rugged roads of the backcountry and the long stretches of interstate alike.
          </p>
          
          <div className={`rv-section__details ${isExpanded ? "is-expanded" : ""}`}>
            <ul className="rv-section__specs">
              <li><strong>Model:</strong> Custom Airstream Classic</li>
              <li><strong>Power:</strong> 1200W Solar Array</li>
              <li><strong>Connectivity:</strong> Starlink Roam</li>
              <li><strong>Range:</strong> Built for off-grid boondocking</li>
            </ul>
          </div>
          
          <button 
            className="rv-section__toggle" 
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Hide Specs" : "Explore Specs"}
          </button>
        </ScrollReveal>
        
        <ScrollReveal direction="left" className="rv-section__visual">
          <div className="rv-section__image-wrapper">
            <Image
              src="/placeholder-rv.jpg"
              alt="The Nomad RV"
              fill
              className="rv-section__image"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
