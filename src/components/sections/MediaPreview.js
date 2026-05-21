import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/ui/ScrollReveal";
import VideoFacade from "@/components/ui/VideoFacade";
import Image from "next/image";
import "./MediaPreview.css";

const GALLERY = [
  { id: 1, src: "/placeholder-gallery-1.jpg", alt: "Mountain view from RV", aspect: "square" },
  { id: 2, src: "/placeholder-gallery-2.jpg", alt: "Campfire at night", aspect: "tall" },
  { id: 3, src: "/placeholder-gallery-3.jpg", alt: "Hiking trail", aspect: "wide" },
  { id: 4, src: "/placeholder-gallery-4.jpg", alt: "Morning coffee", aspect: "square" },
];

export default function MediaPreview() {
  return (
    <SectionWrapper className="media-preview">
      <div className="media-preview__header">
        <ScrollReveal direction="up">
          <h2 className="media-preview__title">Visions</h2>
          <h3 className="media-preview__subtitle">Life in Motion</h3>
          <p className="media-preview__prose">
            Capturing the fleeting moments of our journey. The quiet mornings, the chaotic travel days, and the views that make it all worth it.
          </p>
        </ScrollReveal>
      </div>

      <ScrollReveal direction="fade" className="media-preview__video-container">
        <VideoFacade 
          videoId="tO01J-M3g0U" 
          thumbnail="/placeholder-video-thumb.jpg" 
          title="A Day in the Life on the Road" 
        />
        <div className="media-preview__video-caption">
          <p>Watch: A Day in the Life on the Road</p>
        </div>
      </ScrollReveal>

      <div className="media-preview__gallery">
        {GALLERY.map((item, index) => (
          <ScrollReveal 
            key={item.id} 
            direction="up" 
            delay={index * 100}
            className={`media-preview__gallery-item is-${item.aspect}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="media-preview__gallery-img"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
