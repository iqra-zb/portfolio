import type { Metadata } from 'next';
import { getAllPostsSorted } from '../../data/blogPosts';
import BlogCard from '../../components/BlogCard';

export const metadata: Metadata = {
  title: 'Blog — Iqra Ramzan',
  description: 'Notes from production: backend architecture, AI/RAG systems, and lessons from shipping SaaS platforms at scale.',
};

export default function BlogIndexPage() {
  const posts = getAllPostsSorted();

  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <div className="mb-14">
        <p className="text-xs font-medium text-accent tracking-widest uppercase mb-3">Writing</p>
        <h1 className="font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white mb-4">Notes from production</h1>
        <p className="text-zinc-500 dark:text-zinc-400 max-w-xl leading-relaxed">
          Lessons from architecting SaaS platforms and AI systems that survive growth — no theory, just what actually happened.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
