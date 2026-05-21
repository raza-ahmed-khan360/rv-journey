import SectionWrapper from "@/components/ui/SectionWrapper";
import MediaPreview from "@/components/sections/MediaPreview";

export const metadata = {
  title: "Media Gallery",
  description: "Photos and videos from life on the road.",
};

export default function MediaPage() {
  return (
    <>
      <SectionWrapper style={{ paddingTop: 'calc(var(--space-4xl) + 80px)' }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-4xl)' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-display-xl)', color: 'var(--color-text)', marginBottom: 'var(--space-lg)' }}>Gallery</h1>
          <p style={{ fontSize: 'var(--text-heading-sm)', color: 'var(--color-text-muted)', maxWidth: '800px', margin: '0 auto' }}>
            A curated collection of our favorite moments.
          </p>
        </div>
      </SectionWrapper>
      
      <MediaPreview />
    </>
  );
}
