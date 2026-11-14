import Link from 'next/link';
import { projects } from '../data/projects';
import { outcomes, projectSlug } from '../data/projectUtils';
import ProjectMark from './ProjectMark';

export default function Work() {
  return (
    <section id="work" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-xs font-medium text-accent tracking-widest uppercase mb-3">Case studies</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white">Proof, not promises</h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mt-4 leading-relaxed">
            Open any project for the full Problem → Action → Result.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <Link
              key={p.code}
              href={`/projects/${projectSlug(p)}`}
              className="block group"
              aria-label={`Open the ${p.name} case study`}
            >
              <article className="card-h h-full rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 group-hover:border-accent">
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <ProjectMark code={p.code} logo={p.logo} />
                    <span className="text-xs bg-orange-50 dark:bg-zinc-800 text-accent border border-orange-200 dark:border-zinc-700 px-3 py-1 rounded-full">
                      {p.category}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-2xl text-zinc-900 dark:text-white mb-1">{p.name}</h3>
                  <p className="text-sm text-accent font-medium mb-3">{p.tagline}</p>
                  {outcomes[p.code] && (
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-5">{outcomes[p.code]}</p>
                  )}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 px-2.5 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-accent">View case study →</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
