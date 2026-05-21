"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/ui/ScrollReveal";
import "./ContactCTA.css";

export default function ContactCTA() {
  return (
    <SectionWrapper className="contact-cta">
      <div className="contact-cta__container">
        <ScrollReveal direction="up" className="contact-cta__content">
          <h2 className="contact-cta__title">Cross Paths With Us</h2>
          <h3 className="contact-cta__subtitle">Have a spot we should see?</h3>
          <p className="contact-cta__prose">
            We're always looking for hidden gems, local diners, and quiet spots to park for the night. If you've got a recommendation or just want to say hi when we're in your neck of the woods, let us know.
          </p>
          
          <form className="contact-cta__form" onSubmit={(e) => e.preventDefault()}>
            <div className="contact-cta__input-group">
              <input type="email" placeholder="Your Email Address" className="contact-cta__input" required />
              <button type="submit" className="button contact-cta__submit">Send Note</button>
            </div>
            <p className="contact-cta__disclaimer">
              We read everything, but depending on our cell signal, replies might take a while.
            </p>
          </form>
        </ScrollReveal>
      </div>
      
      {/* Abstract decorative elements */}
      <div className="contact-cta__decor contact-cta__decor--left"></div>
      <div className="contact-cta__decor contact-cta__decor--right"></div>
    </SectionWrapper>
  );
}
