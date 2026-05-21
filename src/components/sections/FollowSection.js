import Image from "next/image";
// using emojis for icons for now
import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/ui/ScrollReveal";
import "./FollowSection.css";

const POSTS = [
  { id: 1, src: "/placeholder-ig-1.jpg", likes: "1.2k" },
  { id: 2, src: "/placeholder-ig-2.jpg", likes: "856" },
  { id: 3, src: "/placeholder-ig-3.jpg", likes: "2.1k" },
  { id: 4, src: "/placeholder-ig-4.jpg", likes: "943" },
];

export default function FollowSection() {
  return (
    <SectionWrapper className="follow-section">
      <div className="follow-section__grid">
        <ScrollReveal direction="right" className="follow-section__content">
          <h2 className="follow-section__title">Join The Convoy</h2>
          <h3 className="follow-section__subtitle">Live Updates</h3>
          <p className="follow-section__prose">
            We share daily updates, behind-the-scenes mishaps, and real-time location scouting on our social channels. Follow along to see where we end up next.
          </p>
          
          <div className="follow-section__socials">
            <a href="#" className="follow-section__social-link" aria-label="Instagram">
              <span className="follow-section__icon" style={{ fontSize: '1.5rem' }}>📸</span>
              <span>@rvjourney</span>
            </a>
            <a href="#" className="follow-section__social-link" aria-label="YouTube">
              <span className="follow-section__icon" style={{ fontSize: '1.5rem' }}>▶️</span>
              <span>RV Journey Channel</span>
            </a>
            <a href="#" className="follow-section__social-link" aria-label="Twitter">
              <span className="follow-section__icon" style={{ fontSize: '1.5rem' }}>🐦</span>
              <span>@rvjourney_live</span>
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="left" className="follow-section__feed">
          <div className="follow-section__feed-grid">
            {POSTS.map((post, index) => (
              <div key={post.id} className={`follow-section__post follow-section__post--${index + 1}`}>
                <Image
                  src={post.src}
                  alt="Instagram post"
                  fill
                  className="follow-section__post-img"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="follow-section__post-overlay">
                  <span>❤️ {post.likes}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="follow-section__handle">
            <span>Follow on Instagram</span>
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
