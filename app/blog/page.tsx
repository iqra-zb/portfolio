import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import { blogPosts, profile } from "@/lib/data";

export const metadata: Metadata = {
  title: `Blog | ${profile.name} — Backend → AI Engineer`,
  description:
    "Notes on RAG, AI integration, Laravel performance, and SaaS architecture from a Backend → AI Engineer.",
};

export default function BlogListPage() {
  return (
    <>
      <Navbar />
      <section className="page-hero">
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
        </div>
      </section>
      <footer>
        <div className="container">
          <p>
            © 2026 {profile.name}. Built with{" "}
            <span style={{ color: "var(--accent-primary)" }}>⚡</span> and zero
            dependencies.
          </p>
        </div>
      </footer>
    </>
  );
}
