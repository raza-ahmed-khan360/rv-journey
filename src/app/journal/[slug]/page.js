import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/ui/ScrollReveal";
import "./post.css";

// Mock data
const MOCK_POST = {
  title: "Surviving Our First Winter Storm in the Rockies",
  date: "Dec 12, 2024",
  author: "Captain the Cat",
  image: "/placeholder-gallery-1.jpg",
  content: `
    <p>We thought we were prepared. The Airstream's furnace thought otherwise. Here's what happened when temperatures dropped to -10°F.</p>
    <p>It was a quiet Tuesday when the weather alert came through. A polar vortex was sweeping down from Canada, and we were parked just outside of Estes Park. We had full propane tanks, our skirts were attached, and we felt invincible.</p>
    <h2>The First Night</h2>
    <p>By 8 PM, the condensation on the inside of the windows had frozen solid. Captain (our cat) decided that sleeping on our faces was his only chance of survival. Then, at 2 AM, the furnace made a terrible grinding noise and shut down.</p>
    <p>This is the reality of RV life. The Instagram photos show you the golden hour light spilling across the dinette, but they don't show you huddled under three sleeping bags wearing a beanie, trying to restart a finicky Dometic furnace with freezing fingers.</p>
    <blockquote>"The best part about things going wrong is that it makes a great story later. At the time, it just makes you question all your life choices."</blockquote>
    <h2>The Fix</h2>
    <p>It turned out the sail switch was jammed with dog hair (we don't even own a dog, so that's a mystery). A quick clean, and we had heat again. But those four hours of freezing temperatures taught us a valuable lesson about redundancy.</p>
  `
};

export default function JournalPostPage({ params }) {
  // In Phase 4, we will fetch data from Supabase using params.slug
  const post = MOCK_POST;

  return (
    <article className="post">
      <div className="post__hero">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="post__hero-image"
          priority
        />
        <div className="post__hero-overlay"></div>
        <div className="post__hero-content">
          <ScrollReveal direction="up">
            <Link href="/journal" className="post__back">← Back to Journal</Link>
            <h1 className="post__title">{post.title}</h1>
            <div className="post__meta">
              <span>{post.date}</span>
              <span className="post__meta-dot">•</span>
              <span>By {post.author}</span>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <SectionWrapper>
        <ScrollReveal direction="up" delay={200}>
          <div 
            className="post__content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </ScrollReveal>
      </SectionWrapper>
    </article>
  );
}
