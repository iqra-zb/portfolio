import Link from 'next/link';
import type { BlogPost } from '../data/blogPosts';

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="block group h-full">
      <article className="card-h h-full bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-100 dark:border-zinc-800 hover:border-accent">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs bg-orange-50 dark:bg-zinc-800 text-accent border border-orange-200 dark:border-zinc-700 px-2.5 py-1 rounded-full">
            {post.category}
          </span>
          <span className="text-xs text-zinc-400">{post.readTime}</span>
        </div>
        <h3 className="font-display font-bold text-lg text-zinc-900 dark:text-white mb-2 group-hover:text-accent transition-colors">
          {post.title}
        </h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">{post.excerpt}</p>
        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 dark:text-white nl">
          Read more
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </article>
    </Link>
  );
}
