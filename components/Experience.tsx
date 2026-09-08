const JOBS = [
  {
    role: 'Backend Engineer — DevioTech, Lahore',
    period: 'Feb 2025 — Present',
    bullets: [
      'Spearheaded an OpenAI-powered RAG assistant, cutting property search-to-decision time to under 2 minutes.',
      "Engineered DriniHotel's transfer booking module, scaling to 1,000+ bookings/month.",
      'Architected Aortery\u2019s multi-vendor marketplace, enabling 1,000+ daily transactions via Stripe.',
      'Improved performance across 6+ products by 40% via MySQL optimization and Redis caching.',
    ],
  },
  {
    role: 'Laravel Developer — BearPlex, Lahore',
    period: 'Aug 2023 — Dec 2024',
    bullets: [
      "Spearheaded decoupling PeoplePlus's monolith into a versioned RESTful API for 10+ enterprise clients.",
      "Built the Job Finder Portal's backend using Node.js.",
      'Engineered a real-time chat module using Supabase.',
      'Mentored 2 developers in secure coding, reducing production bugs.',
    ],
  },
  {
    role: 'Laravel Developer — Hello World Technologies, Lahore',
    period: 'Apr 2022 — Aug 2023',
    bullets: [
      "Built ICRAPP CRM's core API from the ground up, enabling 2 mobile app teams to ship in parallel.",
      'Reduced developer dependency by 25% with a self-serve admin panel.',
      'Maintained sub-second response times for 10,000+ daily users.',
      'Increased onboarding efficiency by 15% via GitHub, Google, and Facebook OAuth.',
    ],
  },
];

const EDUCATION = {
  degree: 'B.S. Computer Science',
  school: 'Khwaja Fareed University of Engineering & Information Technology',
  period: 'Oct 2018 — Jul 2022',
};

const CERTS = [
  'Software Engineer Certificate — HackerRank',
  'Python (Basic) Certificate — HackerRank',
  'Claude 101 — Anthropic',
  'Full Stack Web Development Certificate',
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-zinc-50 dark:bg-zinc-900/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-xs font-medium text-accent tracking-widest uppercase mb-3">Resume</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white">Experience &amp; education</h2>
        </div>
        <div className="space-y-6">
          {JOBS.map((job) => (
            <div key={job.role} className="bg-white dark:bg-zinc-900 rounded-2xl p-7 border border-zinc-100 dark:border-zinc-800">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <h3 className="font-display font-bold text-lg text-zinc-900 dark:text-white">{job.role}</h3>
                <span className="text-xs text-accent font-medium">{job.period}</span>
              </div>
              <ul className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed list-disc pl-4 space-y-1">
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 border border-zinc-100 dark:border-zinc-800">
              <p className="text-xs text-accent font-medium mb-2">{EDUCATION.period}</p>
              <h3 className="font-display font-bold text-base text-zinc-900 dark:text-white mb-1">{EDUCATION.degree}</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">{EDUCATION.school}</p>
            </div>
            <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 border border-zinc-100 dark:border-zinc-800">
              <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-3">Certifications</p>
              <ul className="text-sm text-zinc-600 dark:text-zinc-300 space-y-1">
                {CERTS.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
