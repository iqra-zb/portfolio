import { projects } from '../data/projects';

function ProjectMark({ code, logo }: { code: string; logo?: string }) {
  if (logo) {
    return (
      <span className="w-11 h-11 flex items-center justify-center bg-white rounded-xl border border-zinc-200 shrink-0 overflow-hidden p-1.5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo} alt={`${code} logo`} className="max-w-full max-h-full w-auto h-auto object-contain" />
      </span>
    );
  }
  return (
    <span className="w-11 h-11 flex items-center justify-center rounded-xl bg-accent text-white font-display font-bold text-sm shrink-0">
      {code}
    </span>
  );
}

export default function Work() {
  return (
    <section id="work" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-xs font-medium text-accent tracking-widest uppercase mb-3">Case studies</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white">Proof, not promises</h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mt-4 leading-relaxed">
            Each project: Problem → Action → Result. Here&apos;s how I deliver measurable value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article
              key={p.code}
              className="card-h rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-accent"
            >
              <div className="p-7">
                <div className="flex items-center gap-3 mb-4">
                  <ProjectMark code={p.code} logo={p.logo} />
                  <span className="text-xs bg-orange-50 dark:bg-zinc-800 text-accent border border-orange-200 dark:border-zinc-700 px-3 py-1 rounded-full">
                    {p.category}
                  </span>
                </div>
                <h3 className="font-display font-bold text-2xl text-zinc-900 dark:text-white mb-1">{p.name}</h3>
                <p className="text-sm text-accent font-medium mb-4">{p.tagline}</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-3">
                  <strong className="text-zinc-700 dark:text-zinc-300 font-medium">Problem:</strong> {p.problem}
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-3">
                  <strong className="text-zinc-700 dark:text-zinc-300 font-medium">Action:</strong> {p.action}
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-5">
                  <strong className="text-zinc-700 dark:text-zinc-300 font-medium">Result:</strong> {p.result}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
