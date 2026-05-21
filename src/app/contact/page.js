import SectionWrapper from "@/components/ui/SectionWrapper";
import ContactCTA from "@/components/sections/ContactCTA";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with us on the road.",
};

export default function ContactPage() {
  return (
    <div style={{ paddingTop: '80px', minHeight: 'calc(100vh - 400px)', display: 'flex', alignItems: 'center' }}>
      <ContactCTA />
    </div>
  );
}
