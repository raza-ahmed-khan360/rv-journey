import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/ui/ScrollReveal";
import "./MascotSection.css";

export default function MascotSection() {
  return (
    <SectionWrapper className="mascot">
      <div className="mascot__grid">
        <ScrollReveal direction="fade" className="mascot__visual">
          <div className="mascot__image-wrapper">
            <Image
              src="/placeholder-mascot.jpg"
              alt="Captain the Cat"
              fill
              className="mascot__image"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
        </ScrollReveal>
        
        <ScrollReveal direction="up" className="mascot__content">
          <h2 className="mascot__title">The Real Boss</h2>
          <h3 className="mascot__subtitle">Meet Captain</h3>
          <p className="mascot__prose">
            Every expedition needs a fearless leader. Ours just happens to sleep 18 hours a day and demand treats at every state line. Captain is a rescue tabby who took to the road life like a duck to water. He watches the world roll by from the dashboard and inspects every new campground with strict authority.
          </p>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
