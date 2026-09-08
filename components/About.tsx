const TRAITS = [
  { icon: '🚀', title: 'Scale-first mindset', body: 'Every architecture decision is made with 10x growth in mind. No rewrites needed at scale.' },
  { icon: '⚡', title: 'Performance obsessed', body: "I benchmark everything. If there's a millisecond to save, I'll find it. Caching is an art." },
  { icon: '🏗️', title: 'System design expert', body: 'From monoliths to microservices, queues to event-driven systems — I build what fits the problem.' },
  { icon: '🎯', title: 'Business impact focus', body: 'Code is a means to an end. I measure success in user satisfaction, uptime, and revenue growth.' },
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
          <h2 className="font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white">From tickets to system architecture</h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mt-4 leading-relaxed">
            My journey from handling support tickets to shipping 18+ projects — from internship websites to production SaaS and agentic AI platforms — has shaped how I approach backend engineering. Based in Lahore, Pakistan, working remote.
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
