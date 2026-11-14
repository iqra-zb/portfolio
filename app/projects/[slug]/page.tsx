import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { projects } from '../../../data/projects';
import { getProjectBySlug, outcomes, projectSlug } from '../../../data/projectUtils';
import ProjectMark from '../../../components/ProjectMark';

type Params = { slug: string };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: projectSlug(p) }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const p = getProjectBySlug(params.slug);
  if (!p) return { title: 'Project not found' };
  return {
    title: `${p.name}: ${p.tagline} | Iqra Ramzan`,
    description: outcomes[p.code] ?? p.tagline,
  };
}

export default function ProjectPage({ params }: { params: Params }) {
  const p = getProjectBySlug(params.slug);
  if (!p) notFound();

  const index = projects.findIndex((x) => x.code === p.code);
  const next = projects[(index + 1) % projects.length];

  const sections = [
    { label: 'Problem', text: p.problem },
    { label: 'Action', text: p.action },
    { label: 'Result', text: p.result },
  ];

  return (
    <main className="pt-28 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/#work" className="text-sm text-accent font-medium hover:underline">
          ← All case studies
        </Link>

        <header className="mt-8 mb-12">
          <div className="flex items-center gap-4 mb-5">
            <ProjectMark code={p.code} logo={p.logo} size="lg" />
            <span className="text-xs bg-orange-50 dark:bg-zinc-800 text-accent border border-orange-200 dark:border-zinc-700 px-3 py-1 rounded-full">
              {p.category}
            </span>
          </div>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white mb-2">{p.name}</h1>
          <p className="text-lg text-accent font-medium">{p.tagline}</p>
          <div className="flex flex-wrap gap-2 mt-6">
            {p.tags.map((tag) => (
              <span key={tag} className="text-xs bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 px-2.5 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="space-y-10">
          {sections.map((s) => (
            <section key={s.label}>
              <h2 className="text-xs font-medium text-accent tracking-widest uppercase mb-3">{s.label}</h2>
              <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">{s.text}</p>
            </section>
          ))}
        </div>

        <nav className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-4">
          <Link href="/#work" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-accent">
            ← Back to all projects
          </Link>
          <Link href={`/projects/${projectSlug(next)}`} className="text-sm font-medium text-accent hover:underline">
            Next: {next.name} →
          </Link>
        </nav>
      </div>
    </main>
  );
}
