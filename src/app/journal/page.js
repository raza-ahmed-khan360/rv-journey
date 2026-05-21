import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata = {
  title: "Journal",
  description: "Read our latest dispatches from the road.",
};

// Mock data for the journal before Supabase is connected
const MOCK_POSTS = [
  {
    id: 1,
    title: "Surviving Our First Winter Storm in the Rockies",
    excerpt: "We thought we were prepared. The Airstream's furnace thought otherwise. Here's what happened when temperatures dropped to -10°F.",
    date: "Dec 12, 2024",
    image: "/placeholder-gallery-1.jpg",
    slug: "surviving-winter-storm"
  },
  {
    id: 2,
    title: "The Ultimate Guide to Boondocking Connectivity",
    excerpt: "How we manage to work full-time while parked miles away from the nearest cell tower using Starlink and cellular bonding.",
    date: "Nov 05, 2024",
    image: "/placeholder-video-thumb.jpg",
    slug: "boondocking-connectivity"
  },
  {
    id: 3,
    title: "Meeting the Locals: A Grizzly Encounter",
    excerpt: "A quiet morning hike turned into an adrenaline-pumping standoff with a massive grizzly bear in Glacier National Park.",
    date: "Sep 28, 2024",
    image: "/placeholder-gallery-3.jpg",
    slug: "grizzly-encounter"
  },
  {
    id: 4,
    title: "5 Things We Wish We Knew Before Hitting the Road",
    excerpt: "The romantic idea of RV life vs the harsh realities. Here are the top five things no one tells you about living in 200 square feet.",
    date: "Aug 15, 2024",
    image: "/placeholder-gallery-4.jpg",
    slug: "5-things-we-wish-we-knew"
  }
];

export default function JournalPage() {
  return (
    <SectionWrapper style={{ paddingTop: 'calc(var(--space-4xl) + 80px)', minHeight: '100vh' }}>
      <div style={{ textAlign: 'center', marginBottom: 'var(--space-4xl)' }}>
        <ScrollReveal direction="up">
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-display-xl)', color: 'var(--color-text)', marginBottom: 'var(--space-lg)' }}>The Journal</h1>
          <p style={{ fontSize: 'var(--text-heading-sm)', color: 'var(--color-text-muted)', maxWidth: '800px', margin: '0 auto' }}>
            Dispatches from the road. Stories of triumph, disaster, and the quiet moments in between.
          </p>
        </ScrollReveal>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
        gap: 'var(--space-2xl)' 
      }}>
        {MOCK_POSTS.map((post, index) => (
          <ScrollReveal key={post.id} direction="up" delay={index * 100}>
            <Link href={`/journal/${post.slug}`} style={{ textDecoration: 'none' }}>
              <Card 
                title={post.title}
                description={post.excerpt}
                image={post.image}
                meta={post.date}
              />
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
