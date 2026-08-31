export type Project = {
  id: string;
  logo: string;
  logoClass: string;
  name: string;
  type: string;
  categories: string[];
  problem: string;
  action: string;
  result: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    id: "waypoint",
    logo: "WP",
    logoClass: "wp",
    name: "Waypoint",
    type: "AI Agent Reliability Runtime",
    categories: ["ai", "enterprise"],
    problem:
      "AI agents fail mid-execution constantly — a timeout, a rate limit, a crashed worker — and most systems either restart from scratch, re-running completed and costly steps, or silently resume from corrupted state.",
    action:
      "Built a self-hosted reliability runtime on Django, Celery, and Redis implementing checkpoint-based recovery, two-layer idempotency, and environment-fingerprint validation so a resumed run can't silently continue on a changed model or prompt version. Added real-time WebSocket trace streaming via Django Channels and a Chaos Lab for controlled fault injection (worker crash, LLM timeout, checkpoint corruption) to validate recovery under real failure conditions.",
    result:
      "Delivered retry-from-failed-step recovery, tenant-isolated live execution tracing, and per-attempt cost accounting that exposed failed retries as a measurable share of total run cost in test scenarios — a visibility gap most comparable durable-execution frameworks don't surface.",
    stack: ["Django", "DRF", "Celery", "Redis", "PostgreSQL", "Django Channels", "Docker", "React"],
  },
  {
    id: "peopleplus",
    logo: "P+",
    logoClass: "pp",
    name: "PeoplePlus",
    type: "HR SaaS Platform",
    categories: ["hr", "saas", "enterprise"],
    problem:
      "PeoplePlus's HR platform was tightly coupled to its UI, making it impossible to scale features independently or support new client-facing modules as the platform grew.",
    action:
      "Spearheaded the migration to a versioned, decoupled RESTful API supporting 5+ independent modules. Built new Project Management and real-time Chat modules on Laravel Queues, Redis, and WebSockets, then deployed the new API into a React/Redux/TypeScript frontend with type-safe state management. Orchestrated PHPUnit and Postman test automation while mentoring 2 developers on secure coding and clean architecture.",
    result:
      "Expanded platform functionality for 10+ enterprise clients on a decoupled, versioned API architecture built on Clean Architecture and SOLID principles.",
    stack: ["Laravel", "Redis", "MySQL", "Laravel Passport", "REST APIs"],
  },
  {
    id: "drinihotels",
    logo: "DH",
    logoClass: "dh",
    name: "DriniHotels",
    type: "B2B/B2C Travel Platform",
    categories: ["enterprise", "fintech"],
    problem:
      "DriniHotels needed its transfer booking lifecycle — payments, cancellations, refunds — fully automated to scale past manual, error-prone handling.",
    action:
      "Engineered the transfer booking module end-to-end, integrating the KiwiTaxi API and automating the full booking lifecycle with Laravel, REST APIs, and cron jobs.",
    result:
      "Scaled to 1,000+ monthly bookings with zero manual intervention, boosting operational efficiency by 20%.",
    stack: ["Laravel", "REST APIs", "Queues", "Cron Jobs", "CI/CD"],
  },
  {
    id: "catalogpoint",
    logo: "CP",
    logoClass: "cp",
    name: "CatalogPoint",
    type: "Multi-tenant E-commerce",
    categories: ["ecommerce", "saas", "fintech"],
    problem:
      "The client needed a single platform to serve multiple tenants without duplicating infrastructure or billing logic, and onboarding new merchants took days of manual provisioning.",
    action:
      "Built a multi-tenant e-commerce SaaS with Stripe-powered subscription billing, automated provisioning, and RESTful APIs for tenant management on MySQL.",
    result:
      "30% improvement in operational efficiency, cutting manual billing work and merchant onboarding time significantly.",
    stack: ["Laravel", "Multi-tenant", "Stripe", "MySQL", "REST APIs"],
  },
  {
    id: "icrapp",
    logo: "IC",
    logoClass: "ic",
    name: "ICRAPP CRM",
    type: "Sales Automation Platform",
    categories: ["crm", "enterprise"],
    problem:
      "Client operations relied on developers for routine tasks, and the platform needed to support 2 independent mobile app teams while scaling to 10,000+ daily users.",
    action:
      "Spearheaded end-to-end development of ICRAPP CRM and its API from scratch, engineered a self-serve admin panel, optimized database queries and caching, and launched social login integrations (GitHub, Google, Facebook).",
    result:
      "Reduced developer dependency by 25% for routine tasks, maintained sub-second response times for 10,000+ daily users, and boosted onboarding efficiency by 15%.",
    stack: ["Laravel", "REST APIs", "MySQL", "RBAC", "Admin Panel"],
  },
  {
    id: "ai-property-assistant",
    logo: "AI",
    logoClass: "cb",
    name: "AI Property Assistant",
    type: "AI-Powered Property Search",
    categories: ["ai",],
    problem:
      "Property buyers had to manually sift through listings and imagine renovations themselves, making search-to-decision painfully slow and disconnected from what a space could actually look like.",
    action:
      "Pioneered an AI property assistant in Laravel, integrating the OpenAI API with home-design APIs to generate AI-powered redesign visualizations alongside live property search results.",
    result:
      "Cut search-to-decision time to under 2 minutes, processing 30+ inquiries per hour.",
    stack: ["Laravel", "OpenAI API", "RAG", "Vector Database", "REST APIs", "Home-Design APIs"],
  },
  {
    id: "shopperbuilder",
    logo: "SB",
    logoClass: "sb",
    name: "ShopperBuilder",
    type: "Dynamic Storefront & Catalog",
    categories: ["ecommerce", "inventory"],
    problem:
      "Merchants needed to customize store layouts and manage large product catalogs, but rigid, code-dependent systems made changes slow and costly.",
    action:
      "Built a dynamic product management system letting merchants configure flexible store layouts without code, plus bulk processing pipelines and user activity tracking for operational visibility.",
    result:
      "35% reduction in manual operations, giving merchants full control over layout without engineering involvement.",
    stack: ["Laravel", "MySQL", "Dynamic Modules", "Bulk Processing"],
  },
  {
    id: "aortery",
    logo: "AO",
    logoClass: "ao",
    name: "Aortery",
    type: "Supplier-Buyer Marketplace",
    categories: ["ecommerce", "fintech",],
    problem:
      "A two-sided supplier-buyer marketplace needed reliable transaction handling and an organized listing flow to support smooth buying and selling at scale.",
    action:
      "Architected the marketplace with Stripe-powered transactions, a two-sided product listing flow, optimized order management, and a clean category hierarchy for product discovery.",
    result:
      "Enabled the full order lifecycle and Stripe payments for 1,000+ daily transactions, with a stable, well-organized marketplace experience for both suppliers and buyers.",
    stack: ["Laravel", "Stripe", "Marketplace", "MySQL"],
  },
];

export const filterCategories = [
  { key: "all", label: "All" },
  { key: "saas", label: "SaaS" },
  { key: "ai", label: "AI" },
  { key: "hr", label: "HR & Recruitment" },
  { key: "ecommerce", label: "E-Commerce" },
  { key: "fintech", label: "FinTech" },
  { key: "crm", label: "CRM" },
  { key: "inventory", label: "Inventory Management" },
  { key: "enterprise", label: "Enterprise Applications" },
];

export type SkillGroup = {
  title: string;
  skills: { name: string; icon: string; color: string }[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "AI & ML",
    skills: [
      { name: "Python", icon: "🐍", color: "#3776ab" },
      { name: "FastAPI", icon: "⚡", color: "#009688" },
      { name: "LangChain", icon: "🔗", color: "#1c3c3c" },
      { name: "RAG", icon: "📚", color: "#00ff88" },
      { name: "Vector Databases", icon: "🧬", color: "#7c3aed" },
    ],
  },
  {
    title: "AI & Payments",
    skills: [
      { name: "OpenAI API", icon: "🤖", color: "#10a37f" },
      { name: "AI Integration", icon: "🧠", color: "#00ff88" },
      { name: "Stripe", icon: "💳", color: "#635bff" },
    ],
  },
  {
    title: "Backend & Languages",
    skills: [
      { name: "TypeScript", icon: "🔷", color: "#3178c6" },
      { name: "Node.js", icon: "⬢", color: "#68a063" },
      { name: "JavaScript", icon: "🟨", color: "#f7df1e" },
      { name: "Laravel", icon: "🔴", color: "#ff2d20" },
      { name: "PHP", icon: "🐘", color: "#777bb4" },
    ],
  },
  {
    title: "Architecture & APIs",
    skills: [
      { name: "Microservices", icon: "🧩", color: "#7c3aed" },
      { name: "System Design", icon: "🏗️", color: "#00ff88" },
      { name: "Software Architecture", icon: "🏛️", color: "#00d9ff" },
      { name: "REST APIs", icon: "🔗", color: "#00d9ff" },
    ],
  },
  {
    title: "Databases & Caching",
    skills: [
      { name: "Redis", icon: "⚡", color: "#dc382d" },
      { name: "PostgreSQL", icon: "🐘", color: "#336791" },
      { name: "MySQL", icon: "🗄️", color: "#4479a1" },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "CI/CD", icon: "🔁", color: "#00d9ff" },
      { name: "Docker", icon: "🐳", color: "#2496ed" },
      { name: "AWS", icon: "☁️", color: "#ff9900" },
      { name: "Git", icon: "🔀", color: "#f05033" },
    ],
  },
  {
    title: "Frontend & Realtime",
    skills: [
      { name: "WebSocket", icon: "🔌", color: "#00ff88" },
      { name: "Tailwind CSS", icon: "🎨", color: "#38bdf8" },
      { name: "Alpine.js", icon: "⛰️", color: "#77c1d2" },
      { name: "Livewire", icon: "🔥", color: "#fb70a9" },
    ],
  },
];

export type BlogPost = {
  slug: string;
  tag: string;
  readTime: string;
  date: string;
  title: string;
  excerpt: string;
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "laravel-scale",
    tag: "Performance",
    readTime: "6 min read",
    date: "Jul 2026",
    title: "Why Most Laravel APIs Break at Scale (And How to Architect Around It)",
    excerpt:
      "Cutting API response times 40% across 6+ production SaaS products taught me that slow APIs are rarely a code problem — they're an architecture problem. Here's what I actually changed.",
    body: [
      `Every time I've been called in to fix a "slow API," the instinct is to start profiling controller code. That's almost never where the real cost is. Across the SaaS platforms I've worked on, the pattern repeats: N+1 queries hiding inside Eloquent relationships, missing composite indexes on the columns actually used in WHERE and JOIN clauses, and cache invalidation logic that either doesn't exist or is so aggressive it defeats the point of caching.`,
      `The fix that moved the needle most wasn't a clever optimization — it was strategic indexing based on actual query patterns from slow query logs, not guesses. Pair that with Redis caching on read-heavy, write-light endpoints (think: dashboard aggregates, catalog listings, anything that doesn't need to be real-time to the millisecond), and you remove most of the load before it ever hits MySQL.`,
      `The second lever is knowing what not to compute on every request. Queue anything that doesn't need to block the response — report generation, notification fan-out, third-party API calls. Laravel Queues plus Redis turns a 3-second synchronous endpoint into a 200ms one, with the actual work happening in the background where the user never feels it.`,
      `None of this is exotic. It's disciplined, boring engineering — and it's the difference between a system that degrades gracefully under load and one that falls over the first time a client's usage spikes.`,
    ],
  },
  {
    slug: "ai-in-production",
    tag: "AI Integration",
    readTime: "5 min read",
    date: "Jul 2026",
    title: "Shipping AI Features That Actually Survive Production",
    excerpt:
      "Building an OpenAI-powered property search assistant taught me that the hard part of AI features was never the prompt — it was everything around it.",
    body: [
      `When I built the AI property assistant — integrating OpenAI with home-design APIs to generate redesign visualizations inside a live property search flow — the demo version worked in an afternoon. Getting it to reliably process 30+ inquiries an hour in production took considerably longer, and almost none of that time was spent on the model itself.`,
      `The real work was treating the AI call like any other unreliable external dependency: timeouts, retries with backoff, and a fallback path for when the API is slow or errors out, so the user never sees a blank screen. It also meant caching aggressively wherever the input space was small enough to repeat — no reason to pay for the same completion twice.`,
      `Cost and latency are a package deal you have to design for up front, not bolt on later. Every AI feature has a p95 latency and a per-request cost, and if you haven't measured both before shipping, you don't actually know if the feature is sustainable at scale — you just know it works in a demo.`,
      `The teams that get burned by AI features aren't the ones with bad prompts. They're the ones who treated the AI call as a black box instead of a dependency that needs the same production discipline as a payment gateway or a database.`,
    ],
  },
  {
    slug: "multi-tenant-saas",
    tag: "Architecture",
    readTime: "7 min read",
    date: "Jul 2026",
    title: "Multi-Tenant SaaS: What Three Platforms Taught Me About Isolation",
    excerpt:
      "PeoplePlus, CatalogPoint, and Aortery all needed to serve multiple tenants from one codebase. Each one forced a different tradeoff between isolation and simplicity.",
    body: [
      `Multi-tenancy sounds like one problem until you actually build it three times. On CatalogPoint, tenants needed fully isolated billing logic through Stripe — one tenant's subscription state could never leak into another's, so the schema design put tenant scoping at the database layer, not just the application layer, and every query got tenant filtering baked in rather than trusted to remember.`,
      `PeoplePlus was a different shape of problem entirely: an enterprise HR SaaS where the hard part wasn't billing isolation, it was decoupling a UI-coupled monolith into a versioned REST API that could support 5+ independent modules — recruitment, project management, real-time chat — without one module's load spiking and degrading another's. That's where Clean Architecture and SOLID principles stopped being buzzwords and started being the only thing keeping the codebase navigable as it grew to serve 10+ enterprise clients.`,
      `Aortery's marketplace model added a third dimension: two-sided tenancy, where suppliers and buyers both needed their own views into shared inventory and order state, processing 1,000+ daily transactions through a single Stripe integration without either side stepping on the other's data.`,
      `The lesson that carried across all three: decide where tenant isolation lives — database, application layer, or both — before you write the first migration. Retrofitting isolation after the fact is one of the most expensive mistakes a growing SaaS platform can make.`,
    ],
  },
  {
    slug: "clean-architecture",
    tag: "Clean Architecture",
    readTime: "5 min read",
    date: "Jul 2026",
    title: "Clean Architecture in Laravel: What I'd Do Differently",
    excerpt:
      "Migrating PeoplePlus to a decoupled, versioned API taught me that Clean Architecture pays off — but only if you're honest about where Laravel fights you.",
    body: [
      `Laravel's conventions are optimized for shipping fast, not for strict layer separation — Eloquent models want to be both your data layer and your business logic layer at once, and fighting that too hard, too early, slows a small team down for no real benefit.`,
      `What actually justified the investment on PeoplePlus was scale of change, not scale of traffic. Once we were supporting 5+ independent modules and mentoring other developers on the codebase, the cost of not having clear boundaries — service classes separated from controllers, repository interfaces instead of direct Eloquent calls scattered through business logic — started outweighing the setup cost. Versioned REST APIs made this concrete: you can't decouple a frontend from a backend that doesn't have clean seams to begin with.`,
      `What I'd do differently starting over: introduce the architecture boundaries as soon as a second developer joins the project, not when the codebase is already large enough that refactoring feels risky. Clean Architecture is cheap when the codebase is small and expensive when it isn't — the trigger isn't traffic, it's team size and how many hands are touching the same modules.`,
    ],
  },
  {
    slug: "ai-agent-durable-execution",
    tag: "AI Infrastructure",
    readTime: "4 min read",
    date: "Aug 2026",
    title: "Shipping a Durable Execution Engine For AI Agents",
    excerpt:
      "A demo agent runs once and works. Nobody asks what happens when step 3 of 5 times out after steps 1 and 2 already cost money. Building Waypoint taught me why that question matters more than the prompt ever did.",
    body: [
      `A demo agent runs once, works, and everyone moves on. Nobody asks what happens when step 3 of a 5-step agent times out after steps 1 and 2 already cost money and made external calls. That question is where **Waypoint**, a side project I built to answer it properly, started.`,

      `## Where the idea came from`,
      `I'd shipped a RAG assistant in production and watched it fail the boring way real systems fail — an occasional timeout, an occasional worker restart. The naive fix, "just retry the whole thing," works fine until the agent has already called a paid API or written a record, and now retrying means doing it twice.`,
      `I looked at how the industry actually solves this: **Temporal**, **Restate**, **Inngest**, and **Hatchet** on the infrastructure side, and **Diagrid's Catalyst** layer for agent frameworks like LangGraph specifically. All of them solve durable execution — resume instead of restart. But each solves one slice of it, and as of mid-2026 none of them check whether the environment an agent resumes into still means the same thing it did when it crashed.`,
      `That gap became the actual thesis: **a resumed agent isn't safe just because its state persisted** — it's only safe if the model, prompt, and tools it resumes with still mean what they meant when it checkpointed.`,

      `## The stack, and what actually broke`,
      `The build was **Django + DRF** for the API layer, **Celery + Redis** for durable background execution outside the request/response cycle, **Django Channels** for real-time WebSocket tracing, and **PostgreSQL** underneath, all Dockerized.`,
      `The hardest part was the async/sync boundary inside the executor, which needs \`asyncio.gather()\` for concurrent tool calls while Django's ORM stays fundamentally synchronous. Getting that wrong the first time meant a thread-per-event hack just to publish WebSocket updates safely; ripping it out for proper \`sync_to_async\` was the single biggest refactor of the project.`,
      `Checkpoint atomicity was its own lesson — "persist output, persist checkpoint, commit, emit event" has to be all-or-nothing. I didn't trust my own context manager until I wrote a test that deliberately failed halfway through and confirmed everything rolled back together.`,

      `## What it does now`,
      `**Checkpoint-based recovery** so a failed run resumes from its last successful step instead of from scratch. **Two-layer idempotency** so neither a duplicate client request nor a duplicate internal retry creates duplicate work. **Environment-fingerprint validation** that flags a resume instead of silently proceeding on a changed model or prompt version. Tenant-isolated live WebSocket tracing, per-attempt cost accounting, and a small **Chaos Lab** command that grew out of literally killing a worker process mid-run to prove recovery actually worked.`,
      `OpenTelemetry export, an MCP connector, and a full reliability benchmark are still on the roadmap, not built.`,

      `## The lesson`,
      `Durable execution is solved enough that well-funded companies compete on it. What's not solved is that **"the state persisted" and "it's safe to resume" are different claims** — and most tools stop at the first one.`,
    ],
  },
];

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "DevioTech",
    role: "Senior Laravel Developer",
    period: "Feb 2025 — Present",
    location: "Lahore",
    points: [
      "Spearheaded an OpenAI-powered RAG assistant, cutting property search-to-decision time to under 2 minutes using vector database retrieval.",
      "Engineered DriniHotel's transfer booking module, automating the full booking lifecycle and integrating the KiwiTaxi API, scaling to 1,000+ bookings/month.",
      "Architected Aortery's multi-vendor marketplace, enabling 1,000+ daily transactions through Stripe payment integration.",
      "Improved performance across 6+ products by 40% by optimizing MySQL queries and implementing Redis caching.",
    ],
  },
  {
    company: "BearPlex — Driving Innovation",
    role: "Laravel Developer",
    period: "Aug 2023 — Dec 2024",
    location: "Lahore",
    points: [
      "Spearheaded the decoupling of PeoplePlus's monolith into a versioned RESTful API, enabling 5+ independent modules and supporting 10+ enterprise clients.",
      "Built the Job Finder Portal's backend using Node.js, expanding BearPlex's product line beyond its core Laravel platform.",
      "Engineered a real-time Chat module using Supabase for 10+ enterprise clients on the PeoplePlus platform.",
      "Mentored 2 developers in secure coding, increasing test coverage and reducing production bugs.",
    ],
  },
  {
    company: "Hello World Technologies",
    role: "Laravel Developer",
    period: "Apr 2022 — Aug 2023",
    location: "Lahore",
    points: [
      "Built ICRAPP CRM's core API from the ground up in Laravel, enabling 2 independent mobile app teams to ship in parallel.",
      "Reduced developer dependency by 25% by building a self-serve admin panel using Laravel, Blade, and MySQL.",
      "Maintained sub-second response times for 10,000+ daily users by optimizing MySQL queries and caching.",
      "Increased user onboarding efficiency by 15% by integrating GitHub, Google, and Facebook OAuth social login.",
    ],
  },
  {
    company: "Hello World Technologies",
    role: "Junior Web Developer",
    period: "Dec 2021 — Mar 2022",
    location: "Lahore, Punjab, Pakistan",
    points: [
      "Engineered 3 responsive admin dashboards and 5+ CRUD systems for the NFC-Allset barber shop app.",
      "Reduced API response issues by 15% by optimizing backend performance bottlenecks, earning a promotion within 4 months.",
    ],
  },
  {
    company: "IT Centre Rahim Yar Khan",
    role: "Full Stack Intern",
    period: "Sep 2021 — Nov 2021",
    location: "Rahim Yar Khan",
    points: [
      "Built 10+ responsive websites and first production Laravel backend systems using Laravel, PHP, HTML, CSS, and JavaScript.",
      "Practiced foundational MVC architecture and RESTful routing patterns across multiple client projects.",
    ],
  },
];

export const education = {
  school: "Khwaja Fareed University of Engineering & Information Technology",
  degree: "Bachelor of Science, Computer Science",
  period: "Oct 2018 — Jul 2022",
};

export type Certification = {
  name: string;
  issuer: string;
  date: string;
};

export const certifications: Certification[] = [
  { name: "Software Engineer Certificate", issuer: "HackerRank", date: "Jul 2026" },
  { name: "Python (Basic) Certificate", issuer: "HackerRank", date: "Jul 2026" },
  { name: "Claude 101", issuer: "Anthropic", date: "Jul 2026" },
  { name: "Full Stack Web Development", issuer: "Certificate", date: "" },
];

export type Service = {
  icon: string;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: "🤖",
    title: "AI & RAG Integration",
    description:
      "Production-grade RAG pipelines, vector search, and LLM integration with LangChain and the OpenAI API — built to survive real traffic, not just demos.",
  },
  {
    icon: "🏗️",
    title: "Backend Architecture",
    description:
      "Clean, versioned REST APIs and service-oriented backends in Laravel and FastAPI, decoupled from the frontend and designed to scale past MVP.",
  },
  {
    icon: "⚡",
    title: "Performance Optimization",
    description:
      "Query optimization, Redis caching, and queue-based architectures that cut API response times — 40% average improvement across 6+ production products.",
  },
  {
    icon: "🧩",
    title: "Multi-Tenant SaaS Systems",
    description:
      "Multi-tenant platforms with proper data isolation, subscription billing via Stripe, and automated provisioning — built for PeoplePlus, CatalogPoint, and Aortery.",
  },
];

export type Testimonial = {
  name: string;
  title: string;
  quote: string;
  relationship: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Imran Sharif",
    title: "Senior Full Stack & Agentic AI Developer | RAG, LangChain, LLMs",
    relationship: "Worked with Iqra on the same team",
    quote:
      "I had the pleasure of working with Iqra Ramzan on the same team and was consistently impressed by her technical expertise and professionalism. Highly skilled Senior Backend Engineer with strong experience in Laravel, PHP 8, and Node.js. She has a deep understanding of scalable SaaS architectures and consistently delivers high-quality, maintainable solutions. I would highly recommend Iqra to any organization looking for a talented backend engineer.",
  },
  {
    name: "Ayesha Aslam",
    title: "Tech & Non-Tech Recruiter | Talent Acquisition Expert",
    relationship: "Iqra was Ayesha's client",
    quote:
      "Iqra developed our backend system from scratch and turned our ideas into a reliable, production-ready solution. She has a strong understanding of Laravel, backend architecture, and database design, and consistently approaches problems with a business mindset rather than just writing code. I would happily work with her again and highly recommend her for backend development projects.",
  },
  {
    name: "Tallha Mushtaq",
    title: "Senior Software Engineer @Innovation Insight",
    relationship: "Worked with Iqra on the same team",
    quote:
      "I highly recommend Iqra Ramzan as a Software Engineer. She excels in Laravel & Livewire, React.js & Firebase, and Supabase. Her expertise spans end-to-end operations, ensuring seamless deployment. Iqra's dedication and skill make her a valuable asset to any team.",
  },
];

export const profile = {
  name: "Iqra Ramzan",
  email: "iqra046cs@gmail.com",
  location: "Lahore, Pakistan",
  linkedin: "https://www.linkedin.com/in/iqra-ramzan-dev",
  github: "https://github.com/iqra-zb",
  heroTypingWords: [
    "I Ship Production RAG.",
    "I Scale SaaS Past MVP.",
    "I Build Systems That Scale.",
    "I Ship AI Performance.",
  ],
  heroStats: [
    { number: "4+", label: "Years Building" },
    { number: "40%", label: "Avg. Performance Boost" },
    { number: "1,000+", label: "Daily Transactions Powered" },
  ],
};
