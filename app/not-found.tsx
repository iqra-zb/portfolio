import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-24 text-center">
      <p className="text-xs font-medium text-accent tracking-widest uppercase mb-3">404</p>
      <h1 className="font-display font-bold text-3xl text-zinc-900 dark:text-white mb-4">Page not found</h1>
      <p className="text-zinc-500 dark:text-zinc-400 mb-8">That page doesn&apos;t exist, or it moved.</p>
      <Link href="/" className="inline-flex items-center gap-2 bg-accent text-white font-medium px-6 py-3 rounded-full hover:bg-accent-light transition-colors text-sm">
        Back home
      </Link>
    </div>
  );
}
