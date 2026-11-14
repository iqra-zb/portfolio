import { projects } from './projects';

export type Project = (typeof projects)[number];

// URL slug made from the project name: "Domus AI" -> "domus-ai"
export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function projectSlug(p: Project): string {
  return slugify(p.name);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => projectSlug(p) === slug);
}

// One-line outcome shown on the homepage card, keyed by project code.
// Only claims you have confirmed. Edit freely.
export const outcomes: Record<string, string> = {
  WP: 'Failed agent runs resume from the last checkpoint instead of restarting.',
  DA: 'A LangGraph agent that searches, reasons over and acts on property listings.',
  MS: 'A gateway that scans MCP tool descriptions for prompt-injection risks.',
  'P+': 'Decoupled an HR SaaS into 5+ modules for 10+ enterprise clients.',
  DH: 'Booking lifecycle automated, handling 1,000+ bookings a month.',
  CP: 'Contributed a multi-grid layout module to a multi-tenant e-commerce SaaS.',
  IC: 'Core REST API that let 2 mobile teams ship in parallel.',
  SB: 'Configurable storefront and catalog management for merchants.',
  AO: 'Multi-vendor marketplace handling 1,000+ daily transactions.',
};