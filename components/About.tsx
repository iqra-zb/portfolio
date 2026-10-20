const TRAITS = [
  { icon: '🤖', title: 'AI & RAG', body: 'Shipped an OpenAI-powered RAG assistant with vector retrieval, cutting property search-to-decision time to under 2 minutes.' },
  { icon: '⚡', title: 'Performance', body: 'Redis caching and query optimization across 6+ products, with 40% faster API responses.' },
  { icon: '🚀', title: 'Scale', body: 'Built multi-tenant and marketplace platforms (CatalogPoint, Aortery, DriniHotels) handling 1,000+ monthly bookings and 1,000+ daily transactions.' },
  { icon: '🏗️', title: 'Systems', body: 'Decoupled a monolithic HR SaaS into a versioned RESTful API: 5+ modules, 10+ enterprise clients.' },
];

const STACK = [
  'Python', 'FastAPI', 'Laravel', 'LangGraph', 'LangChain', 'OpenAI API',
  'RAG / pgvector', 'MySQL / PostgreSQL', 'Redis', 'Django & Celery', 'Stripe',
  'React / TypeScript', 'Docker', 'AWS',
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-zinc-50 dark:bg-zinc-900/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-xs font-medium text-accent tracking-widest uppercase mb-3">About me</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white">From prototype to production</h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mt-4 leading-relaxed">
            Most "AI features" work in a demo, then fall over in production. I build the kind that doesn't. Four years across fintech, hospitality, and enterprise SaaS, taking backend systems and AI features from prototype to something that actually holds up. The gap between a clever proof-of-concept and a system that survives real traffic is where most of the work happens. Based in Lahore, Pakistan, working remote.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {TRAITS.map((t) => (
            <article key={t.title} className="card-h bg-white dark:bg-zinc-900 rounded-2xl p-8 border border-zinc-100 dark:border-zinc-800 hover:border-accent">
              <div className="w-12 h-12 flex items-center justify-center bg-orange-50 dark:bg-zinc-800 rounded-xl mb-6 text-2xl">{t.icon}</div>
              <h3 className="font-display font-bold text-xl text-zinc-900 dark:text-white mb-3">{t.title}</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{t.body}</p>
            </article>
          ))}
        </div>
        <div>
          <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-3">Stack &amp; tools</p>
          <div className="flex flex-wrap gap-2" role="list" aria-label="Skills">
            {STACK.map((s) => (
              <span key={s} role="listitem" className="text-sm bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-3.5 py-1.5 rounded-full hover:border-accent transition-colors">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}