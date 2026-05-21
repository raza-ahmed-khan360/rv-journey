import Link from "next/link";
import ScrollReveal from "../ui/ScrollReveal";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <ScrollReveal direction="up" amount={0.2}>
        <div className="footer__container">
          <div className="footer__grid">
            <div className="footer__brand">
              <Link href="/" className="footer__logo">
                THE <span className="footer__logo-highlight">NOMAD</span>
              </Link>
              <p className="footer__tagline">
                One Nation. One Road. One Story.
              </p>
            </div>
            
            <div className="footer__links">
              <h4 className="footer__heading">Navigation</h4>
              <ul className="footer__list">
                <li><Link href="/" className="footer__link">Journey</Link></li>
                <li><Link href="/about" className="footer__link">The Rig</Link></li>
                <li><Link href="/map" className="footer__link">Route Map</Link></li>
                <li><Link href="/journal" className="footer__link">Journal</Link></li>
              </ul>
            </div>
            
            <div className="footer__links">
              <h4 className="footer__heading">Connect</h4>
              <ul className="footer__list">
                <li><a href="#" className="footer__link">Instagram</a></li>
                <li><a href="#" className="footer__link">YouTube</a></li>
                <li><a href="#" className="footer__link">Twitter</a></li>
                <li><a href="#" className="footer__link">Newsletter</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer__bottom">
            <p className="footer__copyright">
              &copy; {currentYear} RV Journey. All rights reserved.
            </p>
            <div className="footer__legal">
              <Link href="/privacy" className="footer__legal-link">Privacy</Link>
              <Link href="/terms" className="footer__legal-link">Terms</Link>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </footer>
  );
}
