"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { profile } from "@/lib/data";

const NAV_LINKS = [
  { id: "hero", href: "/#hero", label: "Home" },
  { id: "about", href: "/#about", label: "About" },
  { id: "resume", href: "/#resume", label: "Resume" },
  { id: "projects", href: "/#projects", label: "Portfolio" },
  { id: "services", href: "/#services", label: "Services" },
  { id: "skills", href: "/#skills", label: "Skills" },
  { id: "testimonials", href: "/#testimonials", label: "Testimonials" },
  { id: "blog", href: "/blog", label: "Blog" },
  { id: "contact", href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  // Scrollspy — only meaningful on the homepage where the section ids exist
  useEffect(() => {
    if (pathname !== "/") return;
    const sectionIds = NAV_LINKS.filter((l) => l.href.startsWith("/#")).map((l) => l.id);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  const isActive = (id: string) => pathname === "/" && active === id;
  const isBlogActive = (id: string) => id === "blog" && pathname.startsWith("/blog");

  return (
    <>
      {/* Fixed desktop sidebar */}
      <aside className="side-nav" aria-label="Primary">
        <div className="side-nav-avatar">IR</div>
        <div className="side-nav-name">{profile.name}</div>
        <div className="side-nav-tagline">Backend → AI Engineer</div>

        <nav className="side-nav-links">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={`side-nav-link${isActive(link.id) || isBlogActive(link.id) ? " active" : ""}`}
            >
              <span className="dot" />
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="side-nav-socials">
          <a href={profile.linkedin} target="_blank" rel="noopener" className="social-link" aria-label="LinkedIn">
            in
          </a>
          <a href={profile.github} target="_blank" rel="noopener" className="social-link" aria-label="GitHub">
            gh
          </a>
          <a href={`mailto:${profile.email}`} className="social-link" aria-label="Email">
            @
          </a>
        </div>

        <div className="side-nav-footer">
          <a href={`mailto:${profile.email}`} className="btn-hire">
            <span>Hire Me</span>
            <span>→</span>
          </a>
        </div>
      </aside>

      {/* Mobile top bar + drawer */}
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="navbar-inner">
          <Link href="/" className="navbar-brand" aria-label="Home">
            IR
          </Link>
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
              key={link.id}
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
