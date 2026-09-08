const SERVICES = [
  { icon: '🤖', title: 'AI & RAG Integration', body: 'Production-grade RAG pipelines, vector search, and LLM/agent integration with LangGraph and the OpenAI API — built to survive real traffic, not just demos.', dark: false },
  { icon: '🏗️', title: 'Backend Architecture', body: 'Clean, versioned REST APIs and service-oriented backends in Laravel and FastAPI, decoupled from the frontend and designed to scale past MVP.', dark: true },
  { icon: '⚡', title: 'Performance Optimization', body: 'Query optimization, Redis caching, and queue-based architectures — 40% average improvement across 6+ production products.', dark: false },
  { icon: '🧩', title: 'Multi-Tenant SaaS Systems', body: 'Multi-tenant platforms with proper data isolation, subscription billing via Stripe, and automated provisioning.', dark: false },
];

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-xs font-medium text-accent tracking-widest uppercase mb-3">What I do</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white">Services built for production</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {SERVICES.map((s) =>
            s.dark ? (
              <article key={s.title} className="card-h bg-zinc-900 dark:bg-zinc-800 rounded-2xl p-8 border border-zinc-800 hover:border-accent">
                <div className="w-12 h-12 flex items-center justify-center bg-zinc-800 dark:bg-zinc-700 rounded-xl mb-6 text-2xl">{s.icon}</div>
                <h3 className="font-display font-bold text-xl text-white mb-3">{s.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{s.body}</p>
              </article>
            ) : (
              <article key={s.title} className="card-h bg-white dark:bg-zinc-900 rounded-2xl p-8 border border-zinc-100 dark:border-zinc-800 hover:border-accent">
                <div className="w-12 h-12 flex items-center justify-center bg-orange-50 dark:bg-zinc-800 rounded-xl mb-6 text-2xl">{s.icon}</div>
                <h3 className="font-display font-bold text-xl text-zinc-900 dark:text-white mb-3">{s.title}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{s.body}</p>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}
