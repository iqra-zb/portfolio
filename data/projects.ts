export type Project = {
  code: string;
  name: string;
  tagline: string;
  category: string;
  problem: string;
  action: string;
  result: string;
  tags: string[];
  logo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    code: 'WP',
    name: 'Waypoint',
    tagline: 'Self-Hosted AI-Agent Reliability Runtime',
    category: 'AI Infrastructure',
    problem:
      'AI agents fail mid-execution constantly — a timeout, a rate limit, a crashed worker — and most systems either restart from scratch or silently resume from corrupted state.',
    action:
      'Built a self-hosted reliability runtime on Django, Celery, and Redis implementing checkpoint-based recovery, two-layer idempotency, and environment-fingerprint validation. Added real-time WebSocket trace streaming via Django Channels and a Chaos Lab for controlled fault injection.',
    result:
      'Delivered retry-from-failed-step recovery, tenant-isolated live execution tracing, and per-attempt cost accounting that exposed failed retries as a measurable share of total run cost — a visibility gap most comparable frameworks don\u2019t surface.',
    tags: ['Django', 'Celery', 'Redis', 'PostgreSQL', 'Django Channels', 'React'],
    logo: '/logos/waypoint-icon.svg',
    featured: true,
  },
  {
    code: 'DA',
    name: 'Domus AI',
    tagline: 'Agentic Real-Estate Discovery Platform',
    category: 'AI',
    problem:
      'Property buyers had to manually sift through listings and imagine renovations themselves, with no assistant able to search and act on their behalf.',
    action:
      'Built a LangGraph ReAct agent with MCP 2.x tool exposure for autonomous property search and booking. Implemented RAG with PostgreSQL + pgvector, hybrid search and LLM reranking, backed by a custom evaluation harness, persistent memory, and guardrailed booking workflows.',
    result:
      'Shipped an agent that can search, reason over, and act on property listings end-to-end, with evaluation tooling in place to catch regressions before they reach users.',
    tags: ['Python', 'LangGraph', 'MCP 2.x', 'PostgreSQL', 'pgvector', 'RAG'],
    logo: '/logos/domus-ai-icon.svg',
    featured: true,
  },
  {
    code: 'P+',
    name: 'PeoplePlus',
    tagline: 'HR SaaS Platform',
    category: 'HR & Recruitment',
    problem:
      "PeoplePlus's HR platform was tightly coupled to its UI, making it impossible to scale features independently or support new client-facing modules.",
    action:
      'Spearheaded the migration to a versioned, decoupled RESTful API supporting 5+ independent modules. Built Project Management and real-time Chat modules on Laravel Queues, Redis, and WebSockets, then deployed into a React/Redux/TypeScript frontend.',
    result: 'Expanded platform functionality for 10+ enterprise clients on a decoupled, versioned API architecture.',
    tags: ['Laravel', 'Redis', 'MySQL', 'REST APIs'],
    logo: '/logos/peopleplus-icon.svg',
    featured: true,
  },
  {
    code: 'DH',
    name: 'DriniHotels',
    tagline: 'B2B/B2C Travel Platform',
    category: 'Travel',
    problem:
      'DriniHotels needed its transfer booking lifecycle — payments, cancellations, refunds — fully automated to scale past manual, error-prone handling.',
    action:
      'Engineered the transfer booking module end-to-end, integrating the KiwiTaxi API and automating the full booking lifecycle with Laravel, REST APIs, and cron jobs.',
    result: 'Scaled to 1,000+ monthly bookings with zero manual intervention, boosting operational efficiency by 20%.',
    tags: ['Laravel', 'REST APIs', 'Queues', 'Cron Jobs', 'CI/CD'],
    logo: '/logos/drinihotels-icon.svg',
  },
  {
    code: 'CP',
    name: 'CatalogPoint',
    tagline: 'Multi-Tenant E-Commerce',
    category: 'E-Commerce',
    problem:
      'The client needed a single platform to serve multiple tenants without duplicating infrastructure or billing logic, and onboarding new merchants took days of manual provisioning.',
    action:
      'Built a multi-tenant e-commerce SaaS with Stripe-powered subscription billing, automated provisioning, and RESTful APIs for tenant management on MySQL.',
    result:
      '30% improvement in operational efficiency, cutting manual billing work and merchant onboarding time significantly.',
    tags: ['Laravel', 'Multi-tenant', 'Stripe', 'MySQL', 'REST APIs'],
    logo: '/logos/catalogpoint-icon.svg',
  },
  {
    code: 'IC',
    name: 'ICRAPP CRM',
    tagline: 'Sales Automation Platform',
    category: 'CRM',
    problem:
      'Client operations relied on developers for routine tasks, and the platform needed to support 2 independent mobile app teams while scaling to 10,000+ daily users.',
    action:
      'Spearheaded end-to-end development of ICRAPP CRM and its API from scratch, engineered a self-serve admin panel, optimized database queries and caching, and launched social login integrations (GitHub, Google, Facebook).',
    result:
      'Reduced developer dependency by 25% for routine tasks, maintained sub-second response times for 10,000+ daily users, and boosted onboarding efficiency by 15%.',
    tags: ['Laravel', 'REST APIs', 'MySQL', 'RBAC', 'Admin Panel'],
    logo: '/logos/icrappcrm-icon.svg',
  },
  {
    code: 'SB',
    name: 'ShopperBuilder',
    tagline: 'Dynamic Storefront & Catalog',
    category: 'E-Commerce',
    problem:
      'Merchants needed to customize store layouts and manage large product catalogs, but rigid, code-dependent systems made changes slow and costly.',
    action:
      'Built a dynamic product management system letting merchants configure flexible store layouts without code, plus bulk processing pipelines and user activity tracking for operational visibility.',
    result:
      '35% reduction in manual operations, giving merchants full control over layout without engineering involvement.',
    tags: ['Laravel', 'MySQL', 'Dynamic Modules', 'Bulk Processing'],
    logo: '/logos/shopperbuilder-icon.svg',
  },
  {
    code: 'AO',
    name: 'Aortery',
    tagline: 'Supplier-Buyer Marketplace',
    category: 'E-Commerce',
    problem:
      'A two-sided supplier-buyer marketplace needed reliable transaction handling and an organized listing flow to support smooth buying and selling at scale.',
    action:
      'Architected the marketplace with Stripe-powered transactions, a two-sided product listing flow, optimized order management, and a clean category hierarchy for product discovery.',
    result:
      'Enabled the full order lifecycle and Stripe payments for 1,000+ daily transactions, with a stable, well-organized marketplace experience for both suppliers and buyers.',
    tags: ['Laravel', 'Stripe', 'Marketplace', 'MySQL'],
    logo: '/logos/aortery-icon.svg',
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
