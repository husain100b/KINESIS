import type { Award, Collaborator } from '../types/studio';

export const COLLABORATORS: Collaborator[] = [
  {
    id: 'collab-1',
    name: 'Kairos Mobility AG',
    location: 'Zurich / Stuttgart',
    discipline: 'Autonomous Electric Luxury',
    featuredQuote: 'Working with Kinesis was like collaborating with an elite strategic skunkworks. They bridged Swiss typographic rigor with real-time WebGL, securing $48M in pre-orders before our tooling was complete.',
    author: 'Dr. Florian Meyer',
    role: 'Head of Human-Machine Experience',
    badge: 'Red Dot Best of the Best 2025',
    metricHighlight: '$48M Pre-Order Velocity'
  },
  {
    id: 'collab-2',
    name: 'Maison Archetype',
    location: 'Paris / Kyoto',
    discipline: 'Haute Parfumerie & Botanical Tech',
    featuredQuote: 'Kinesis decoupled our fragrance house from department store wholesale. Their sensory 3D flagship achieved a 215% lift in direct e-commerce conversion, completely redefining digital fragrance commerce.',
    author: 'Éléonore Vance',
    role: 'Global Creative Director',
    badge: 'Paris Fashion Week 2026',
    metricHighlight: '+215% Direct Conversion Lift'
  },
  {
    id: 'collab-3',
    name: 'Lumen Acoustic Labs',
    location: 'Stockholm',
    discipline: 'Spatial Acoustics & Transducers',
    featuredQuote: 'They made invisible sound physics visceral on screen. The resulting engagement depth and brand authority directly enabled our Series A oversubscription within 60 days of launch.',
    author: 'Astrid Lindqvist',
    role: 'Co-Founder & Chief Product Officer',
    badge: 'Awwwards Site of the Month',
    metricHighlight: '+340% Session Duration (4.2m)'
  },
  {
    id: 'collab-4',
    name: 'Atelier Nebula',
    location: 'Geneva',
    discipline: 'Haute Horlogerie & Micro-Mechanics',
    featuredQuote: 'Kinesis treated our tourbillon with the intellectual depth of an astrophysics paper and the aesthetic grace of a fine art monograph. Our 50-piece edition sold out in 42 minutes flat.',
    author: 'Jean-Luc Vauthier',
    role: 'Master Horologist & Managing Director',
    badge: 'TDC Typographic Excellence',
    metricHighlight: '100% Sold Out in 42 Minutes'
  },
  {
    id: 'collab-5',
    name: 'Fondazione Arte Contemporanea',
    location: 'Venice / Milan',
    discipline: 'Sovereign Cultural Institution',
    featuredQuote: 'A rare partner possessing the nuance of historical context alongside raw computational audacity. Over 220,000 visitors experienced our pavilion, making it the defining architectural landmark of the year.',
    author: 'Matteo Bellini',
    role: 'Chief Curator & Sovereign Trustee',
    badge: 'Venice Golden Lion Mention',
    metricHighlight: '220,000+ Physical Visitors'
  }
];

export const CLIENT_LOGOS = [
  { name: 'KAIROS MOBILITY', sector: 'Autonomous Mobility', location: 'Zurich', symbol: 'KM' },
  { name: 'MAISON ARCHETYPE', sector: 'Haute Parfumerie', location: 'Paris', symbol: 'MA' },
  { name: 'LUMEN ACOUSTICS', sector: 'Spatial Transducers', location: 'Stockholm', symbol: 'LA' },
  { name: 'ATELIER NEBULA', sector: 'Haute Horlogerie', location: 'Geneva', symbol: 'AN' },
  { name: 'VORTEX SOUND', sector: 'Audio Technologies', location: 'Berlin', symbol: 'VS' },
  { name: 'FONDAZIONE ARTE', sector: 'Cultural Institution', location: 'Venice', symbol: 'FA' },
  { name: 'CHRONO HYPERION', sector: 'Swiss Watchmaking', location: 'La Chaux-de-Fonds', symbol: 'CH' },
  { name: 'SYNAPSE NEURAL', sector: 'Cognitive Computing', location: 'Tokyo', symbol: 'SN' }
];

export const AWARDS: Award[] = [
  {
    year: '2026',
    body: 'Awwwards',
    category: 'Site of the Month & Developer Award',
    project: 'LUMEN // SPECTRA',
    type: 'International Honors'
  },
  {
    year: '2026',
    body: 'FWA',
    category: 'FWA of the Day & Month',
    project: 'VORTEX ALGORITHMIC',
    type: 'Digital Craft'
  },
  {
    year: '2025',
    body: 'Red Dot Award',
    category: 'Best of the Best: Interface Architecture',
    project: 'KAIROS AUTONOMOUS',
    type: 'Industrial & HMI'
  },
  {
    year: '2025',
    body: 'Type Directors Club',
    category: 'Certificate of Typographic Excellence',
    project: 'CHRONO // NEBULA',
    type: 'Bespoke Type System'
  },
  {
    year: '2025',
    body: 'Cannes Lions',
    category: 'Silver Lion (Digital Craft & Sound)',
    project: 'LUMEN // SPECTRA',
    type: 'Global Excellence'
  },
  {
    year: '2024',
    body: 'D&AD Awards',
    category: 'Yellow Pencil (Interaction Design)',
    project: 'KINESIS ARCHIVE v1',
    type: 'Mastery of Craft'
  }
];
