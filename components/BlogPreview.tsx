import Link from 'next/link';
import { getRecentPosts } from '../data/blogPosts';
import BlogCard from './BlogCard';

export default function BlogPreview() {
  const posts = getRecentPosts(3);

  return (
    <section id="blog" className="py-24 bg-zinc-50 dark:bg-zinc-900/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-14">
          <div>
            <p className="text-xs font-medium text-accent tracking-widest uppercase mb-3">Writing</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white">Notes from production</h2>
          </div>
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 dark:text-white nl shrink-0">
            View all posts
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
