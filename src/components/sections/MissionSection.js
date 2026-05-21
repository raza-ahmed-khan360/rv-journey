import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/ui/ScrollReveal";
import "./MissionSection.css";

export default function MissionSection() {
  return (
    <SectionWrapper className="mission" containerType="narrow">
      <ScrollReveal direction="up">
        <h2 className="mission__statement">
          We believe the best way to understand a country is to drive through it. No highways. No rush. Just open roads and the stories of the people we meet along the way.
        </h2>
      </ScrollReveal>
    </SectionWrapper>
  );
}
