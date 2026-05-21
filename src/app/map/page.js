import SectionWrapper from "@/components/ui/SectionWrapper";
import JourneyMap from "@/components/sections/JourneyMap";

export const metadata = {
  title: "Route Map",
  description: "Track our journey across the continent.",
};

export default function MapPage() {
  return (
    <>
      <SectionWrapper style={{ paddingTop: 'calc(var(--space-4xl) + 80px)' }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-4xl)' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-display-xl)', color: 'var(--color-text)', marginBottom: 'var(--space-lg)' }}>The Route</h1>
          <p style={{ fontSize: 'var(--text-heading-sm)', color: 'var(--color-text-muted)', maxWidth: '800px', margin: '0 auto' }}>
            Every stop, every detour, and every breakdown mapped out in detail. This is the living record of our path across North America.
          </p>
        </div>
      </SectionWrapper>
      
      {/* Reusing the homepage map component but without the outer wrapper padding since we added it above */}
      <JourneyMap />
    </>
  );
}
