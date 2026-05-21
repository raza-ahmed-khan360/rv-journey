import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ContactCTA from "@/components/sections/ContactCTA";
import "./about.css";

export const metadata = {
  title: "The Rig & The Crew",
  description: "Learn about the people and the machine behind the journey.",
};

export default function AboutPage() {
  return (
    <>
      <SectionWrapper className="about-hero">
        <ScrollReveal direction="up" className="about-hero__content">
          <h1 className="about-hero__title">The Crew</h1>
          <p className="about-hero__prose">
            Two humans, one cat, and a thirty-foot aluminum tube. We left the stationary life behind to see if the world is as big and beautiful as they say it is.
          </p>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper className="about-rig">
        <div className="about-rig__grid">
          <ScrollReveal direction="right" className="about-rig__visual">
            <div className="about-rig__image-wrapper">
              <Image
                src="/placeholder-rv.jpg"
                alt="The Nomad RV"
                fill
                className="about-rig__image"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="left" className="about-rig__content">
            <h2 className="about-rig__title">The Nomad</h2>
            <h3 className="about-rig__subtitle">Our Home on Wheels</h3>
            <p className="about-rig__prose">
              The Nomad is a fully renovated 2018 Airstream Classic. We spent six months tearing out the interior, upgrading the electrical systems, and making it off-grid capable.
            </p>
            <ul className="about-rig__specs">
              <li><strong>Length:</strong> 30 feet</li>
              <li><strong>Weight:</strong> 10,000 lbs (fully loaded)</li>
              <li><strong>Solar:</strong> 1200W Roof Array</li>
              <li><strong>Battery:</strong> 800Ah Lithium Bank</li>
              <li><strong>Water:</strong> 54 Gallons Fresh</li>
            </ul>
          </ScrollReveal>
        </div>
      </SectionWrapper>

      <SectionWrapper className="about-crew">
        <div className="about-crew__grid">
          <ScrollReveal direction="up" className="about-crew__content">
            <h2 className="about-crew__title">The Humans</h2>
            <p className="about-crew__prose">
              We're digital nomads who traded mortgages for mileage. By day, we work remotely from wherever we have a cell signal. By night, we explore the wild spaces of North America. Our goal isn't just to see the sights, but to live in them.
            </p>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={200} className="about-crew__visual">
            <div className="about-crew__image-wrapper">
              <Image
                src="/placeholder-story.jpg"
                alt="The Crew"
                fill
                className="about-crew__image"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>
        </div>
      </SectionWrapper>

      <ContactCTA />
    </>
  );
}
