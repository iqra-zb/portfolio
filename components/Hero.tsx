export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-zinc-200/50 dark:bg-zinc-800/30 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-medium text-accent tracking-widest uppercase mb-4">
              Available for AI Engineer &amp; Senior Backend roles
            </p>
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-zinc-900 dark:text-white mb-6">
              Hi, I&apos;m <span className="text-accent">Iqra</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 font-light leading-relaxed max-w-md mb-10">
              Backend engineer building AI and RAG systems that hold up in production. Four years across fintech, hospitality, and enterprise SaaS, from an OpenAI-powered RAG assistant to platforms serving 10,000+ daily users and 1,000+ daily transactions.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#work" className="shimmer inline-flex items-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium px-7 py-3.5 rounded-full hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors text-sm">
                View case studies
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-medium px-7 py-3.5 rounded-full hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-sm">
                Get in touch
              </a>
            </div>
            <div className="flex gap-8 mt-14 pt-8 border-t border-zinc-100 dark:border-zinc-900">
              <div><p className="font-display font-bold text-3xl text-zinc-900 dark:text-white">4+</p><p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Years building</p></div>
              <div><p className="font-display font-bold text-3xl text-zinc-900 dark:text-white">40%</p><p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Avg. performance boost</p></div>
              <div><p className="font-display font-bold text-3xl text-zinc-900 dark:text-white">1,000+</p><p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Daily transactions powered</p></div>
            </div>
          </div>
          <div>
            <div className="bg-zinc-900 rounded-3xl p-6 shadow-xl shadow-black/10 border border-zinc-800">
              <div className="flex items-center gap-1.5 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                <span className="ml-2 text-xs text-zinc-500 font-mono">backend.ts</span>
              </div>
              <pre className="font-mono text-[13px] leading-relaxed text-zinc-300 overflow-x-auto"><code><span className="text-accent">class</span> <span className="text-accent-light">AIEngineer</span> {'{'}
  stack = [<span className="text-zinc-400">&apos;Python&apos;</span>, <span className="text-zinc-400">&apos;FastAPI&apos;</span>, <span className="text-zinc-400">&apos;Laravel&apos;</span>, <span className="text-zinc-400">&apos;LangGraph&apos;</span>];
  focus = <span className="text-zinc-400">&apos;Shipping AI features that survive production&apos;</span>;

  ship(feature: AIProduct) {'{'}
    <span className="text-accent">return</span> feature
      .retrieve(<span className="text-zinc-400">&apos;pgvector&apos;</span>)
      .optimize(queries)
      .cache(<span className="text-zinc-400">&apos;redis&apos;</span>)
      .deploy(<span className="text-zinc-400">&apos;aws&apos;</span>);
  {'}'}
{'}'}

<span className="text-zinc-500">// Ready to ship AI at scale</span></code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
