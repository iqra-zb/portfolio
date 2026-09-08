import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts, getPostBySlug } from '../../../data/blogPosts';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} — Iqra Ramzan`,
    description: post.excerpt,
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  return (
    <div className="max-w-2xl mx-auto px-6 py-24">
      <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-accent transition-colors nl mb-10">
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
        Back to all posts
      </Link>

      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs bg-orange-50 dark:bg-zinc-800 text-accent border border-orange-200 dark:border-zinc-700 px-2.5 py-1 rounded-full">{post.category}</span>
        <span className="text-xs text-zinc-400">{post.readTime}</span>
        <span className="text-xs text-zinc-400">&middot;</span>
        <span className="text-xs text-zinc-400">{formatDate(post.date)}</span>
      </div>

      <h1 className="font-display font-bold text-3xl md:text-4xl text-zinc-900 dark:text-white leading-tight mb-8">{post.title}</h1>

      <div className="space-y-5">
        {post.content.map((paragraph, i) => (
          <p key={i} className="text-zinc-600 dark:text-zinc-300 leading-relaxed">{paragraph}</p>
        ))}
      </div>

      <div className="mt-14 pt-8 border-t border-zinc-100 dark:border-zinc-900 flex items-center justify-between">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">Written by Iqra Ramzan</p>
        <a href="mailto:iqra046cs@gmail.com" className="text-sm font-medium text-accent nl">Get in touch →</a>
      </div>
    </div>
  );
}
