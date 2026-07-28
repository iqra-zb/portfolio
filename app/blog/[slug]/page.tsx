import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import { blogPosts, profile } from "@/lib/data";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | ${profile.name}`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <>
      <Navbar />
      <section className="page-hero">
        <div className="container">
          <div className="container-narrow">
            <Reveal>
              <a href="/blog" className="back-link">
                <span>←</span>
                <span>Back to all posts</span>
              </a>
            </Reveal>
            <Reveal delay={1}>
              <div className="blog-meta">
                <span className="blog-tag">{post.tag}</span>
                <span className="blog-read-time">{post.readTime}</span>
                <span className="article-date">{post.date}</span>
              </div>
            </Reveal>
            <Reveal delay={2}>
              <h1 className="article-title">{post.title}</h1>
            </Reveal>
            <Reveal delay={3}>
              <div className="article-body">
                {post.body.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={4}>
              <div className="article-cta">
                <p>If your team is building something that needs to survive growth, let&apos;s talk.</p>
                <a href="/#contact" className="btn-hire">
                  <span>Get In Touch</span>
                  <span>→</span>
                </a>
              </div>
            </Reveal>
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
