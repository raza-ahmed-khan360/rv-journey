import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/ui/ScrollReveal";
import "./StorySection.css";

export default function StorySection() {
  return (
    <SectionWrapper className="story">
      <div className="story__grid">
        <ScrollReveal direction="left" className="story__image-col">
          <div className="story__image-wrapper">
            <Image
              src="/placeholder-story.jpg"
              alt="Our Story"
              fill
              className="story__image"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </ScrollReveal>
        
        <ScrollReveal direction="right" className="story__content-col">
          <h2 className="story__title">The Spark That Started It All</h2>
          <div className="story__prose">
            <p>
              It began as a simple conversation over coffee in a dimly lit diner. We realized that our lives had become a series of predictable routines, dictated by alarms and calendars. The world outside our window was vast, filled with untold stories and undiscovered landscapes, yet we were anchored to the familiar.
            </p>
            <p>
              We decided it was time to trade our stationary walls for wheels. To swap the drone of city traffic for the hum of tires on an open highway. This journey isn't just about covering miles; it's about uncovering the heart of the country, state by state, town by town.
            </p>
            <p>
              Through this documentary effort, we aim to capture the raw, unfiltered essence of America. From the majestic peaks of the Rockies to the quiet charm of a Midwest sunset, every stop is a new chapter. Join us as we explore the diverse tapestry of landscapes and lives that make up this great nation.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
