"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import VideoFacade from "@/components/ui/VideoFacade";
import "./HeroSection.css";

export default function HeroSection({ config }) {
  const { headline, subheadline, cta_text, cta_url, hero_image, video_url } = config || {
    headline: "One Nation. One Road. One Story.",
    subheadline: "Follow an epic cross-country RV journey across America — one conversation at a time.",
    cta_text: "Join the Journey",
    cta_url: "/journal",
    video_url: null,
    hero_image: null,
  };

  const isVideo = !!video_url;
  const heroRef = useRef(null);
  
  // Track scroll position within the hero section to create the parallax zoom effect
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"] // from when top hits top to when bottom hits top
  });

  // Apply a spring to make the scroll value smooth
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Scale the background from 1 to 1.15 as you scroll down past the hero
  const scale = useTransform(smoothProgress, [0, 1], [1, 1.15]);

  return (
    <section className="hero" ref={heroRef}>
      <motion.div 
        className="hero__background"
        style={{ scale }}
      >
        {isVideo ? (
          <VideoFacade 
            videoId={video_url} 
            platform="youtube" 
            className="hero__video" 
            thumbnailUrl={hero_image || "/placeholder-hero.jpg"}
          />
        ) : (
          <Image
            src={hero_image || "/placeholder-hero.jpg"}
            alt="RV Journey Hero"
            fill
            priority
            className="hero__image"
            sizes="100vw"
          />
        )}
        <div className="hero__overlay" />
      </motion.div>

      <div className="container hero__container">
        <div className="reveal-group">
          <ScrollReveal>
            <h1 className="hero__headline">{headline}</h1>
          </ScrollReveal>
          
          <ScrollReveal delay={150}>
            <p className="hero__subheadline">{subheadline}</p>
          </ScrollReveal>
          
          <ScrollReveal delay={300}>
            <div className="hero__cta-group">
              <Link href={cta_url} passHref legacyBehavior>
                <Button variant="primary" size="lg">{cta_text}</Button>
              </Link>
              <Link href="/about" passHref legacyBehavior>
                <Button variant="ghost" size="lg">Meet the Crew</Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
