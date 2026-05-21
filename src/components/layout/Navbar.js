"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className={`navbar ${isScrolled ? "is-scrolled" : ""}`}>
      <div className="container navbar__container">
        <Link href="/" className="navbar__logo">
          RV JOURNEY
        </Link>

        <nav className="navbar__desktop">
          <Link href="/about" className="navbar__link">About</Link>
          <Link href="/journey" className="navbar__link">The Journey</Link>
          <Link href="/media" className="navbar__link">Gallery</Link>
          <Link href="/contact" className="navbar__link">Contact</Link>
        </nav>

        <button className="navbar__mobile-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile-menu ${isMobileMenuOpen ? "is-open" : ""}`}>
        <nav className="navbar__mobile-nav">
          <Link href="/about" className="navbar__mobile-link" onClick={toggleMenu}>About</Link>
          <Link href="/journey" className="navbar__mobile-link" onClick={toggleMenu}>The Journey</Link>
          <Link href="/media" className="navbar__mobile-link" onClick={toggleMenu}>Gallery</Link>
          <Link href="/contact" className="navbar__mobile-link" onClick={toggleMenu}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
