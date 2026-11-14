const JOBS = [
  {
    role: 'Backend Engineer — DevioTech, Lahore',
    period: 'Feb 2025 — Present',
    summary:
      'Backend engineer building RAG and AI features alongside high-volume booking and marketplace platforms. Stack: Laravel, PHP 8, MySQL, Redis, OpenAI API, Stripe.',
    bullets: [
      'Built an OpenAI-powered RAG assistant with vector retrieval for property search, cutting search-to-decision time to under 2 minutes.',
      'Engineered DriniHotels’ transfer booking module end to end, integrating multiple KiwiTaxi APIs and the Quipu payment gateway and automating payments, cancellations, and refunds with Laravel queues and cron jobs, now handling 1,000+ bookings a month.',
      'Built Aortery’s multi-vendor marketplace with Stripe payments and a two-sided listing flow, supporting 1,000+ daily transactions.',
      'Contributed to CatalogPoint, a multi-tenant e-commerce SaaS with Stripe subscription billing: developed a multi-grid layout module with customize options and fixed bugs in existing modules.',
    ],
  },
  {
    role: 'Laravel Developer — BearPlex - Driving Innovation, Lahore',
    period: 'Aug 2023 — Dec 2024',
    summary:
      'Led backend work on an enterprise HR SaaS, a job portal, and real-time chat. Stack: Laravel, Node.js, Supabase, Redis, React.',
    bullets: [
      'Moved PeoplePlus from a Livewire monolith to a versioned REST API with a React frontend across 5+ modules, supporting 10+ enterprise clients. Started on a 3-person backend team, then became lead developer.',
      'Owned all PeoplePlus APIs as lead: new endpoints, new modules, and the backend for a project management module similar to ClickUp and Asana.',
      'Cut API response times by 40% on PeoplePlus by optimizing MySQL queries and adding Redis caching.',
      'Built the real-time chat module on Supabase for the React frontend, giving enterprise clients live messaging.',
      'Built the Job Finder Portal’s backend in Node.js, extending the team’s stack beyond Laravel.',
      'Rebuilt legacy Livewire views in React, Redux, and TypeScript, replacing fragile state handling.',
    ],
  },
  {
    role: 'Laravel Developer — Hello World Technologies, Lahore',
    period: 'Apr 2022 — Aug 2023',
    summary: 'Built ICRAPP CRM from scratch. Stack: Laravel, MySQL, REST APIs.',
    bullets: [
      'Built ICRAPP CRM’s core REST API from scratch in Laravel, enabling 2 independent mobile teams to ship in parallel.',
      'Built a self-serve admin panel with Laravel, Blade, and MySQL, reducing developer dependency by 25% for routine tasks.',
      'Optimized MySQL queries and added caching, sustaining sub-second responses for 10,000+ daily users as data grew.',
      'Integrated GitHub, Google, and Facebook OAuth, improving onboarding efficiency by 15%.',
    ],
  },
  {
    role: 'Junior Web Developer — Hello World Technologies, Lahore',
    period: 'Dec 2021 — Mar 2022',
    bullets: [
      'Built 3 admin dashboards and 5+ CRUD modules for the NFC-Allset barber app with Laravel, MySQL, and JavaScript, giving internal teams visibility over services and bookings.',
      'Reduced API response issues by 15% by optimizing Laravel and MySQL bottlenecks, earning a promotion within 4 months.',
    ],
  },
  {
    role: 'Full Stack Intern — IT Centre Rahim Yar Khan',
    period: 'Sep 2021 — Nov 2021',
    bullets: [
      'Built 10+ responsive websites and my first production Laravel backends, practicing MVC architecture and RESTful routing.',
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
              {job.summary && (
                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-3">{job.summary}</p>
              )}
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
