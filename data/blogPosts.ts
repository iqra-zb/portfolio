export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  content: string[];
};

// All blog content lives here — add a new object to publish a new post.
// Home page shows the 3 most recent as a preview; /blog shows all of them.
export const blogPosts: BlogPost[] = [
  {
    slug: 'ai-agent-durable-execution',
    title: 'Shipping a Durable Execution Engine For AI Agents',
    category: 'AI Infrastructure',
    readTime: '4 min read',
    date: '2026-01-20',
    excerpt:
      "A demo agent runs once and works. Nobody asks what happens when step 3 of 5 times out after steps 1 and 2 already cost money. Building Waypoint taught me why that question matters more than the prompt ever did.",
    content: [
      "Every AI agent demo has the same unspoken assumption: nothing fails mid-run. In production, that assumption breaks constantly — a timeout, a rate limit, a crashed worker — and most systems respond by either restarting the whole run from scratch or silently resuming from a state nobody validated.",
      "Waypoint, a self-hosted reliability runtime built on Django, Celery, and Redis, was built around a different assumption: failure is the default case to design for, not the edge case to handle later. Checkpoint-based recovery means a run can resume from its last completed step instead of re-paying for work that already succeeded.",
      "Two-layer idempotency turned out to be the part that mattered most in practice. It's not enough to guarantee a step won't run twice — you also need environment-fingerprint validation, so a resumed run can't silently continue on a changed model version or prompt, producing results that look fine but were computed under different conditions than the original run.",
      "A Chaos Lab for controlled fault injection — killing workers, forcing LLM timeouts, corrupting checkpoints on purpose — was what actually built confidence in the recovery path, rather than trusting it worked because it hadn't failed yet. Per-attempt cost accounting was the surprising payoff: it exposed failed retries as a measurable, and often significant, share of total run cost — a visibility gap most comparable durable-execution frameworks don't surface.",
    ],
  },
  {
    slug: 'laravel-scale',
    title: 'Why Most Laravel APIs Break at Scale (And How to Architect Around It)',
    category: 'Performance',
    readTime: '6 min read',
    date: '2025-03-08',
    excerpt:
      "Cutting API response times 40% across 6+ production SaaS products taught me that slow APIs are rarely a code problem — they're an architecture problem. Here's what I actually changed.",
    content: [
      "Every Laravel app I've inherited had the same story: it was fast in staging, fast for the first few thousand users, and then it wasn't. The instinct is always to reach for a bigger server or a faster cache. Neither fixes the actual problem, which usually lives in how the app talks to the database, not in the code around it.",
      "The biggest single win across six production products was killing N+1 queries before they shipped, not after. Eager loading relationships, adding query-count assertions to test suites, and reviewing every new endpoint for implicit lazy loads caught more regressions than any monitoring dashboard did after the fact.",
      "Redis came in as a second layer, not a first fix. Caching a badly-shaped query just hides the problem until the cache misses under load. Once queries were lean, caching computed aggregates and expensive joins gave a real, durable win — that's where most of the 40% came from.",
      "The last piece was moving anything that didn't need to block the response — emails, webhooks, third-party API calls — onto queues. A request that used to take 800ms because it waited on an external API dropped to under 100ms once that work moved off the critical path.",
      "None of this required a rewrite or a new framework. It required treating the database as the bottleneck it almost always is, and being deliberate about what actually needs to happen before a response goes out.",
    ],
  },
  {
    slug: 'ai-in-production',
    title: 'Shipping AI Features That Actually Survive Production',
    category: 'AI Integration',
    readTime: '5 min read',
    date: '2025-02-21',
    excerpt:
      'Building an OpenAI-powered property search assistant taught me that the hard part of AI features was never the prompt — it was everything around it.',
    content: [
      "The prompt for the property search assistant took an afternoon to get right. Making it reliable enough to put in front of real users took weeks. That gap is where most AI features die on the way from demo to production.",
      "Retrieval quality mattered more than model choice. The assistant was only as good as the vector search feeding it context — tuning chunk size, embedding strategy, and hybrid search against the property database did more for answer quality than any prompt tweak.",
      "Latency and cost had to be designed in from day one, not optimized later. Caching embeddings, batching retrieval calls, and setting hard timeouts on the LLM call kept search-to-decision time under two minutes even under load, instead of degrading gracefully into a bad experience.",
      "Failure handling is the unglamorous 80% of the work. What happens when the API times out, returns something malformed, or the vector store is temporarily unavailable? Building explicit fallback paths for each of those cases is what separated a demo from something that could be shipped to actual users.",
    ],
  },
  {
    slug: 'multi-tenant-saas',
    title: 'Multi-Tenant SaaS: What Three Platforms Taught Me About Isolation',
    category: 'Architecture',
    readTime: '7 min read',
    date: '2025-01-14',
    excerpt:
      'PeoplePlus, CatalogPoint, and Aortery all needed to serve multiple tenants from one codebase. Each one forced a different tradeoff between isolation and simplicity.',
    content: [
      "There's no single correct answer to multi-tenancy — the right isolation model depends on what a tenant actually needs to trust. PeoplePlus, an HR platform holding sensitive employee data, needed much stronger isolation guarantees than CatalogPoint, a product catalog tool where tenants mostly cared about not stepping on each other's inventory.",
      "For PeoplePlus, row-level tenant scoping enforced at the query builder level — not just in application logic — was non-negotiable. A single missed WHERE clause in a shared-database model is a data leak, so that constraint got baked into a base model class every query passed through.",
      "CatalogPoint could afford a lighter model because the cost of a mistake was lower: shared database, shared schema, tenant ID as a first-class column, with billing and provisioning fully automated through Stripe so onboarding a new merchant took minutes, not days.",
      "Aortery, a two-sided marketplace, added a wrinkle neither of the others had: two tenant types — suppliers and buyers — interacting inside the same transaction. That meant isolation rules had to account for who was allowed to see what about the other side of a deal, not just isolate tenants from each other.",
      "The pattern that held across all three: decide the isolation model based on what a data leak actually costs a given tenant, not on what's easiest to build. Over-isolating a low-stakes catalog tool wastes engineering time; under-isolating an HR platform is a liability.",
    ],
  },
  {
    slug: 'clean-architecture',
    title: "Clean Architecture in Laravel: What I'd Do Differently",
    category: 'Clean Architecture',
    readTime: '5 min read',
    date: '2024-12-02',
    excerpt:
      "Migrating PeoplePlus to a decoupled, versioned API taught me that Clean Architecture pays off — but only if you're honest about where Laravel fights you.",
    content: [
      "Laravel is opinionated in ways that actively resist strict Clean Architecture — Eloquent models want to be both your domain entities and your persistence layer at once. Fighting that completely, with a full ports-and-adapters setup on day one, slowed the PeoplePlus migration down for weeks with very little payoff.",
      "What actually worked was a pragmatic middle ground: thin controllers, application services that owned business logic, and repository interfaces in front of Eloquent — without pretending Eloquent wasn't there. The domain layer stayed framework-agnostic where it mattered (pricing rules, permission checks) and pragmatic where fighting the framework wasn't worth it.",
      "Versioning the API alongside this migration was the multiplier. Once five independent modules could evolve behind stable v1 contracts, teams stopped blocking each other, and the decoupled frontend (React/Redux/TypeScript) could consume a contract instead of a moving target.",
      "If I started over, I'd introduce the repository interfaces from day one instead of retrofitting them mid-migration — retrofitting meant touching every controller twice. Otherwise, the core call was right: decouple where it protects the business logic, stay pragmatic where the framework just isn't going to bend.",
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRecentPosts(count: number): BlogPost[] {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

export function getAllPostsSorted(): BlogPost[] {
  return [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
