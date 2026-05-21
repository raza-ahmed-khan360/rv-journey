import HeroSection from "@/components/sections/HeroSection";
import MissionSection from "@/components/sections/MissionSection";
import StorySection from "@/components/sections/StorySection";
import RVSection from "@/components/sections/RVSection";
import MascotSection from "@/components/sections/MascotSection";
import JourneyMap from "@/components/sections/JourneyMap";
import MediaPreview from "@/components/sections/MediaPreview";
import FollowSection from "@/components/sections/FollowSection";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <StorySection />
      <RVSection />
      <MascotSection />
      <JourneyMap />
      <MediaPreview />
      <FollowSection />
      <ContactCTA />
    </>
  );
}
