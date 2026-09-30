export type ProjectCategory = 'all' | 'branding' | 'digital' | 'spatial' | 'creative-tech';

export type AspectRatioType = 'tall' | 'wide' | 'ultra-wide' | 'square' | 'standard';

export interface ProjectOutcome {
  headline: string;
  metrics: {
    value: string;
    label: string;
  }[];
  summary: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  year: string;
  category: ProjectCategory;
  aspect: AspectRatioType;
  heroImage: string;
  secondaryImages: string[];
  tags: string[];
  summary: string;
  challenge: string;
  approach: string;
  solution?: string; // backwards compatibility
  outcomes: ProjectOutcome;
  strategicImpact: string;
  clientQuote?: {
    quote: string;
    author: string;
    role: string;
  };
  deliverables: string[];
  link?: string;
  awards?: string[];
  accentColor: string;
  metric?: {
    value: string;
    label: string;
  };
  featured?: boolean;
}

export interface CapabilityItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  summary: string;
  deliverables: string[];
  technologies: string[];
  image: string;
  highlightClient: string;
  stats: string;
  strategicValue: string;
}

export interface ProcessPhase {
  id: string;
  number: string;
  duration: string;
  name: string;
  tagline: string;
  summary: string;
  strategicActivities: string[];
  deliverables: string[];
  checkpoint: string;
}

export interface PhilosophyChapter {
  id: string;
  number: string;
  title: string;
  italicWord: string;
  statement: string;
  narrative: string;
  takeaway: string;
}

export interface Collaborator {
  id: string;
  name: string;
  location: string;
  discipline: string;
  featuredQuote: string;
  author: string;
  role: string;
  badge: string;
  metricHighlight?: string;
}

export interface Award {
  year: string;
  body: string;
  category: string;
  project: string;
  type: string;
}

export interface BriefFormData {
  selectedDisciplines: string[];
  timeline: string;
  budgetRange: number; // in thousands (e.g. 75 for $75,000)
  fullName: string;
  company: string;
  email: string;
  overview: string;
  preferredStart: string;
}

