"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import "./Header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="header__container">
        <Link href="/" className="header__logo">
          THE <span className="header__logo-highlight">NOMAD</span>
        </Link>

        <button 
          className={`header__menu-toggle ${menuOpen ? "is-active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <span className="header__hamburger"></span>
        </button>

        <nav className={`header__nav ${menuOpen ? "is-open" : ""}`}>
          <ul className="header__nav-list">
            <li><Link href="/" className="header__nav-link" onClick={() => setMenuOpen(false)}>Journey</Link></li>
            <li><Link href="/about" className="header__nav-link" onClick={() => setMenuOpen(false)}>The Rig</Link></li>
            <li><Link href="/map" className="header__nav-link" onClick={() => setMenuOpen(false)}>Route Map</Link></li>
            <li><Link href="/journal" className="header__nav-link" onClick={() => setMenuOpen(false)}>Journal</Link></li>
          </ul>
          <div className="header__action">
            <button className="button button--small">Subscribe</button>
          </div>
        </nav>
      </div>
    </header>
  );
}
