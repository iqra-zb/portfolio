import Link from "next/link";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import HeroTyping from "@/components/HeroTyping";
import ProjectsSection from "@/components/ProjectsSection";
import { profile, skillGroups, blogPosts, experience, education, certifications, services, testimonials } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="hero" id="hero">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: "center", gridTemplateColumns: "1.4fr 1fr" }}>
            <div className="hero-content">
              <Reveal>
                <div className="hero-badge">
                  <span className="pulse-dot" />
                  <span>Available for AI Engineer &amp; Senior Backend Roles</span>
                </div>
              </Reveal>
              <Reveal delay={1}>
                <HeroTyping words={profile.heroTypingWords} />
              </Reveal>
              <Reveal delay={2}>
                <p className="hero-subtitle">
                  Backend engineer turned AI Engineer with 4+ years shipping
                  production systems across fintech, hospitality, and enterprise
                  SaaS. I don&apos;t just write code—I design systems that survive
                  production, from RAG-powered AI assistants to platforms handling
                  10,000+ daily users and 1,000+ daily transactions.
                </p>
              </Reveal>
              <Reveal delay={3}>
                <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                  <a href="#projects" className="btn-hire">
                    <span>View Case Studies</span>
                    <span>→</span>
                  </a>
                  <a href="#contact" className="btn-outline">
                    <span>Get In Touch</span>
                  </a>
                </div>
              </Reveal>
              <Reveal delay={4}>
                <div className="hero-stats">
                  {profile.heroStats.map((stat) => (
                    <div className="stat-item" key={stat.label}>
                      <div className="stat-number">{stat.number}</div>
                      <div className="stat-label">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal delay={2}>
              <div className="code-block">
                <div className="code-header">
                  <span className="code-dot red" />
                  <span className="code-dot yellow" />
                  <span className="code-dot green" />
                  <span style={{ marginLeft: "auto", color: "var(--text-muted)", fontSize: "0.75rem" }}>
                    backend.ts
                  </span>
                </div>
                <code>
                  <div><span className="code-keyword">class</span> <span className="code-class">AIEngineer</span> {"{"}</div>
                  <div>&nbsp;&nbsp;<span className="code-property">stack</span> = [<span className="code-string">&apos;Python&apos;</span>, <span className="code-string">&apos;FastAPI&apos;</span>, <span className="code-string">&apos;Laravel&apos;</span>, <span className="code-string">&apos;LangChain&apos;</span>];</div>
                  <div>&nbsp;&nbsp;<span className="code-property">focus</span> = <span className="code-string">&apos;Shipping RAG Features That Survive Production&apos;</span>;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;&nbsp;<span className="code-method">ship</span>(<span className="code-property">feature</span>: <span className="code-class">AIProduct</span>) {"{"}</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-keyword">return</span> feature</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.<span className="code-method">retrieve</span>(<span className="code-string">&apos;vectorDB&apos;</span>)</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.<span className="code-method">optimize</span>(<span className="code-property">queries</span>)</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.<span className="code-method">cache</span>(<span className="code-string">&apos;redis&apos;</span>)</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.<span className="code-method">deploy</span>(<span className="code-string">&apos;aws&apos;</span>);</div>
                  <div>&nbsp;&nbsp;{"}"}</div>
                  <div>{"}"}</div>
                  <div>&nbsp;</div>
                  <div><span className="code-comment">{"// Ready to ship AI at scale"}</span></div>
                </code>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about">
        <div className="container">
          <Reveal>
            <span className="section-label">// About Me</span>
            <h2 className="section-title">
              From Tickets to <span className="gradient-text">System Architecture</span>
            </h2>
            <p className="section-subtitle">
              My journey from handling support tickets to shipping 18+ projects — from
              internship websites to production SaaS platforms — has shaped my approach
              to backend engineering.
            </p>
          </Reveal>
          <div className="grid grid-4">
            {[
              {
                icon: "🚀",
                title: "Scale-First Mindset",
                text: "Every architecture decision is made with 10x growth in mind. No rewrites needed at scale.",
              },
              {
                icon: "⚡",
                title: "Performance Obsessed",
                text: "I benchmark everything. If there's a millisecond to save, I'll find it. Caching is an art.",
              },
              {
                icon: "🏗️",
                title: "System Design Expert",
                text: "From monoliths to microservices, queues to event-driven systems—I build what fits the problem.",
              },
              {
                icon: "🎯",
                title: "Business Impact Focus",
                text: "Code is a means to an end. I measure success in user satisfaction, uptime, and revenue growth.",
              },
            ].map((card, i) => (
              <Reveal delay={i + 1} key={card.title}>
                <div className="about-card">
                  <div className="about-icon">{card.icon}</div>
                  <h4>{card.title}</h4>
                  <p>{card.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Resume */}
      <section id="resume">
        <div className="container">
          <Reveal>
            <span className="section-label">// Resume</span>
            <h2 className="section-title">
              Experience &amp; <span className="gradient-text">Education</span>
            </h2>
            <p className="section-subtitle">
              4+ years shipping production backend and AI systems — from an internship
              to architecting multi-tenant SaaS platforms.
            </p>
          </Reveal>

          <div className="resume-columns">
            <Reveal delay={1}>
              <div>
                <div className="resume-col-title">// Work Experience</div>
                <div className="timeline">
                  {experience.map((job) => (
                    <div className="timeline-item" key={`${job.company}-${job.role}`}>
                      <div className="timeline-period">{job.period}</div>
                      <div className="timeline-role">{job.role}</div>
                      <div className="timeline-company">{job.company} • {job.location}</div>
                      <ul className="timeline-points">
                        {job.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={2}>
              <div>
                <div className="resume-col-title">// Education</div>
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="timeline-period">{education.period}</div>
                    <div className="timeline-role">{education.degree}</div>
                    <div className="timeline-company">{education.school}</div>
                  </div>
                </div>

                <div className="cert-strip">
                  <div className="resume-col-title" style={{ marginBottom: "1rem" }}>// Certifications</div>
                  {certifications.map((cert) => (
                    <div className="cert-item" key={cert.name}>
                      <span className="cert-name">{cert.name}</span>
                      <span className="cert-issuer">{cert.issuer}{cert.date ? ` • ${cert.date}` : ""}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={3}>
            <div className="counters-strip">
              <div className="counter-item">
                <div className="counter-number">4+</div>
                <div className="counter-label">Years Building</div>
              </div>
              <div className="counter-item">
                <div className="counter-number">18+</div>
                <div className="counter-label">Projects Shipped</div>
              </div>
              <div className="counter-item">
                <div className="counter-number">10+</div>
                <div className="counter-label">Enterprise Clients</div>
              </div>
              <div className="counter-item">
                <div className="counter-number">40%</div>
                <div className="counter-label">Avg. Performance Boost</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Projects */}
      <ProjectsSection />

      {/* Skills */}
      <section id="skills">
        <div className="container">
          <Reveal>
            <span className="section-label">// Tech Stack</span>
            <h2 className="section-title">
              Tools That <span className="gradient-text">Ship Production</span>
            </h2>
            <p className="section-subtitle">
              Battle-tested technologies I use daily to build systems that scale. No
              buzzwords—just results.
            </p>
          </Reveal>
          <Reveal>
            {skillGroups.map((group) => (
              <div className="skills-group" key={group.title}>
                <div className="skills-group-title">// {group.title}</div>
                <div className="skills-container">
                  {group.skills.map((skill) => (
                    <div className="skill-badge" key={skill.name}>
                      <span className="skill-icon">{skill.icon}</span>
                      <div className="skill-name">{skill.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section id="services" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <Reveal>
            <span className="section-label">// What I Do</span>
            <h2 className="section-title">
              Services Built For <span className="gradient-text">Production</span>
            </h2>
            <p className="section-subtitle">
              Where I bring the most value — backend architecture and AI integration
              that survives real traffic, not just demos.
            </p>
          </Reveal>
          <div className="grid grid-4">
            {services.map((service, i) => (
              <Reveal delay={i + 1} key={service.title}>
                <div className="service-card">
                  <div className="service-icon">{service.icon}</div>
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials">
        <div className="container">
          <Reveal>
            <span className="section-label">// Recommendations</span>
            <h2 className="section-title">
              What People <span className="gradient-text">Say</span>
            </h2>
            <p className="section-subtitle">
              Real recommendations from recruiters and engineers I&apos;ve worked with directly.
            </p>
          </Reveal>
          <div className="grid grid-3">
            {testimonials.map((t, i) => (
              <Reveal delay={i + 1} key={t.name}>
                <div className="testimonial-card">
                  <div className="testimonial-quote-mark">&ldquo;</div>
                  <p className="testimonial-text">{t.quote}</p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">
                      {t.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <div className="testimonial-name">{t.name}</div>
                      <div className="testimonial-title">{t.relationship}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Blog teaser */}
      <section id="blog" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <Reveal>
            <span className="section-label">// Writing</span>
            <h2 className="section-title">
              Notes From <span className="gradient-text">Production</span>
            </h2>
            <p className="section-subtitle">
              Lessons from architecting SaaS platforms that survive growth — no theory,
              just what actually happened.
            </p>
          </Reveal>
          <div className="grid grid-2">
            {blogPosts.map((post, i) => (
              <Reveal delay={i + 1} key={post.slug}>
                <div className="blog-card">
                  <div className="blog-meta">
                    <span className="blog-tag">{post.tag}</span>
                    <span className="blog-read-time">{post.readTime}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="blog-link">
                    <span>Read full post</span>
                    <span>→</span>
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div style={{ textAlign: "center", marginTop: "3rem" }}>
              <Link href="/blog" className="btn-hire">
                <span>View All Posts</span>
                <span>→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <Reveal>
            <span className="section-label">// Let&apos;s Talk</span>
            <h2 className="section-title">
              Ready to <span className="gradient-text">Scale Your SaaS?</span>
            </h2>
            <p className="section-subtitle">
              I&apos;m currently open to AI Engineer and senior backend roles, plus consulting projects.
              Let&apos;s discuss how I can help your team ship faster.
            </p>
          </Reveal>
          <div className="grid grid-2" style={{ gridTemplateColumns: "1.4fr 1fr" }}>
            <Reveal delay={1}>
              <div className="contact-card">
                <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
                  Let&apos;s build something that <span className="gradient-text">scales</span>.
                </h3>
                <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>
                  Open to full-time remote positions, contract work, and technical
                  consulting for SaaS companies ready to scale past MVP.
                </p>
                <div className="social-links">
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
                <div style={{ marginTop: "2rem" }}>
                  <a href={`mailto:${profile.email}`} className="btn-hire">
                    <span>Schedule a Call</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={2}>
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">@</div>
                  <div>
                    <div className="contact-label">Email</div>
                    <a href={`mailto:${profile.email}`} className="contact-value">
                      {profile.email}
                    </a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div>
                    <div className="contact-label">Location</div>
                    <span className="contact-value">{profile.location} • Remote</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">⏱</div>
                  <div>
                    <div className="contact-label">Response Time</div>
                    <span className="contact-value">Within 24 hours</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">✓</div>
                  <div>
                    <div className="contact-label">Availability</div>
                    <span className="contact-value" style={{ color: "var(--accent-primary)" }}>
                      ● Open to opportunities
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>
            © 2026 {profile.name}
          </p>
        </div>
      </footer>
    </>
  );
}
