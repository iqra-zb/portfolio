"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { profile } from "@/lib/data";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="navbar-inner">
          <Link href="/" className="navbar-brand" aria-label="Home" />
          <button
            className="nav-toggle-btn"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </nav>

      <div
        className={`nav-sidebar-overlay${open ? " open" : ""}`}
        onClick={() => setOpen(false)}
      />
      <div className={`nav-sidebar${open ? " open" : ""}`}>
        <div className="nav-sidebar-header">
          <span>Menu</span>
          <button
            className="nav-sidebar-close"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>
        </div>
        <div className="nav-sidebar-body">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div style={{ marginTop: "1.5rem" }}>
            <a href={`mailto:${profile.email}`} className="btn-hire" onClick={() => setOpen(false)}>
              <span>Hire Me</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>

      <a href={`mailto:${profile.email}`} className="floating-hire" aria-label="Hire Me">
        HIRE
      </a>
    </>
  );
}
