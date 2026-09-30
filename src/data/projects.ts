import type { Project } from '../types/studio';

export const PROJECTS: Project[] = [
  {
    id: 'proj-1',
    slug: 'lumen-spectra',
    title: 'LUMEN // SPECTRA',
    client: 'Lumen Acoustic Laboratories',
    year: '2026',
    category: 'digital',
    aspect: 'tall', // 4:5 vertical editorial
    heroImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=85',
    secondaryImages: [
      'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85'
    ],
    tags: ['WebGL Shaders', 'Spatial Audio', 'Generative Identity', 'Interactive Canvas'],
    summary: 'A generative acoustic brand identity and spatial web platform translating sound frequencies into chromatic liquid light simulations.',
    challenge: 'Lumen developed a breakthrough transducer technology priced at $4,800/unit. Traditional audiophile marketing was bogged down in technical spec sheets and sterile product renders, failing to convey the transcendent psychoacoustic sensation of spatial audio to modern luxury buyers.',
    approach: 'Rather than explaining acoustic physics intellectually, we designed an interactive sensory instrument. We engineered a proprietary WebGL vertex-displacement engine connected directly to Web Audio FFT analyzers, enabling visitors to physically sculpt synthetic soundscapes and perceive chromatic sound waves in real time. We coupled this with a stark Swiss editorial typographic system that established instant high-culture authority.',
    solution: 'Engineered a custom WebGL vertex-displacement engine driven by real-time audio FFT analysis, allowing visitors to sculpt soundscapes and witness dynamic chromatic reverberation.',
    outcomes: {
      headline: 'Category-defining launch yielding 3.4x session depth and immediate sell-out',
      metrics: [
        { value: '+340%', label: 'Session Duration (4.2m avg)' },
        { value: '$12.4M', label: 'Series A Closed in 60 Days' },
        { value: '4.8x', label: 'Direct Pre-order Quota Surpassed' },
        { value: '180K+', label: 'Organic Soundscapes Generated' }
      ],
      summary: 'The platform repositioned Lumen from a boutique acoustic component maker into an avant-garde luxury sound architecture house, commanding a 40% price premium over legacy competitors.'
    },
    strategicImpact: 'Transformed an invisible engineering milestone into an unforgettable sensory benchmark, establishing Lumen as the definitive pioneer in spatial psychoacoustics.',
    clientQuote: {
      quote: 'Kinesis made invisible sound waves feel visceral on glass. The conversion velocity and brand stature they built directly enabled our Series A oversubscription.',
      author: 'Astrid Lindqvist',
      role: 'Co-Founder & Chief Product Officer'
    },
    deliverables: [
      'Interactive WebGL Audio Flagship Engine',
      'Dynamic Parametric Design System & Tokens',
      'Algorithmic Motion Guidelines & Sound DNA',
      'Custom Web Audio Spatial Synthesizer Architecture'
    ],
    awards: ['Awwwards Site of the Month', 'FWA of the Day & Month', 'D&AD Graphite Pencil'],
    accentColor: '#D8FF38',
    metric: {
      value: '+340%',
      label: 'Avg. Session Duration (4.2m)'
    },
    featured: true
  },
  {
    id: 'proj-2',
    slug: 'kairos-automotive',
    title: 'KAIROS AUTONOMOUS',
    client: 'Kairos Mobility AG (Stuttgart / Zurich)',
    year: '2025',
    category: 'spatial',
    aspect: 'ultra-wide', // 21:9 cinematic banner
    heroImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85',
    secondaryImages: [
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=85'
    ],
    tags: ['Real-time 3D', 'HMI Interface', 'Brand Architecture', 'CGI Film'],
    summary: 'Next-generation hyper-luxury autonomous vehicle digital twin, in-cabin HUD interface architecture, and launch film.',
    challenge: 'As automotive mobility shifts to Level 4 autonomy, the interior interface ceases to be an instrument cluster and becomes an architectural sanctuary. Kairos faced severe skepticism that autonomous cockpits would feel generic, sterile, and dehumanizing.',
    approach: 'We developed an atmospheric "Zero-Friction Glass" spatial design language rooted in Swiss minimalism and tactile haptics. Combining real-time Three.js raymarched shadows with contextual micro-interactions, we architected a digital cockpit configurator and in-vehicle HUD that subtly adapts to passenger circadian rhythms and speed.',
    solution: 'Developed an atmospheric volumetric cockpit experience with contextual micro-interactions, real-time raytraced vehicle configurator, and a minimal typographic instrument cluster.',
    outcomes: {
      headline: 'Secured $48M in VIP allocation reservations before physical production began',
      metrics: [
        { value: '$48M', label: 'Pre-Order Pipeline Captured' },
        { value: '92%', label: 'Configurator Completion Rate' },
        { value: '3.8 min', label: 'Avg Interactive Build Time' },
        { value: '#1', label: 'Red Dot Best of the Best 2025' }
      ],
      summary: 'Delivered an emotional and commercial moat for Kairos, establishing their brand valuation alongside century-old European luxury marques within its first fiscal quarter.'
    },
    strategicImpact: 'Redefined autonomous interior luxury from gadget-dense screens to calm architectural materiality, setting the global benchmark for Level 4 HMI design.',
    clientQuote: {
      quote: 'Kinesis operated as our executive skunkworks. They bridged Swiss typographic precision with real-time WebGL in a way no traditional auto agency could conceive.',
      author: 'Dr. Florian Meyer',
      role: 'Head of Human-Machine Experience'
    },
    deliverables: [
      'Autonomous In-Cabin HMI Design Language',
      'Real-Time WebGL Vehicle & Material Configurator',
      'CGI Global Launch Film & Motion Choreography',
      'Interactive Exhibition Pavilion Terminal Software'
    ],
    awards: ['Red Dot: Best of the Best 2025', 'Cannes Lions Silver (Digital Craft)'],
    accentColor: '#00F0FF',
    metric: {
      value: '$48M',
      label: 'Pre-order Pipeline Generated'
    },
    featured: true
  },
  {
    id: 'proj-3',
    slug: 'chrono-nebula',
    title: 'CHRONO // NEBULA',
    client: 'Atelier Nebula Haute Horlogerie (Geneva)',
    year: '2026',
    category: 'branding',
    aspect: 'square', // 1:1 tactile square
    heroImage: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=85',
    secondaryImages: [
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=85'
    ],
    tags: ['Identity System', 'Tactile Packaging', '3D Micro-Mechanics', 'Editorial Publication'],
    summary: 'A boundary-pushing brand ecosystem for an avant-garde celestial tourbillon movement inspired by astrophysics and dark matter.',
    challenge: 'Geneva watchmaking is paralyzed by tradition. Atelier Nebula engineered an ultra-complex flying tourbillon containing meteoritic iron and aerogel, but their existing identity read as an antique relic rather than computational horology.',
    approach: 'We executed a full brand repositioning: "Time Measured in Cosmic Gravity". We engineered Nebula Mono, a custom variable typeface that contracts and expands based on live gravitational lunar ephemerides. We paired this computational type system with monolithic obsidian glass packaging and macro-mechanical 3D visualizations.',
    solution: 'Engineered a dual-phase identity featuring bespoke variable typefaces that compress and expand according to lunar gravitational cycles, paired with tactile obsidian glass presentation packaging.',
    outcomes: {
      headline: 'The entire 50-piece edition priced at CHF 185,000 sold out in 42 minutes',
      metrics: [
        { value: '100%', label: 'Sold Out in 42 Minutes' },
        { value: 'CHF 9.25M', label: 'Gross Release Volume' },
        { value: '620+', label: 'Global Waitlist Applications' },
        { value: '2x', label: 'TDC Typographic Excellence Award' }
      ],
      summary: 'Proved that contemporary computational typography and uncompromising strategic branding command astronomical pricing and instant collector frenzy in luxury horology.'
    },
    strategicImpact: 'Elevated an independent atelier to equal footing with historic Geneva grand houses, creating permanent secondary-market price appreciation.',
    clientQuote: {
      quote: 'Kinesis understood the gravity of our micro-mechanics. The variable typeface and obsidian storytelling turned our movement into an obsession for collectors worldwide.',
      author: 'Jean-Luc Vauthier',
      role: 'Master Horologist & Managing Director'
    },
    deliverables: [
      'Bespoke Variable Typeface (Nebula Mono)',
      'Handcrafted Obsidian Presentation Packaging Artifacts',
      'Macro 3D Mechanical Micro-Visualization Suite',
      'Hardcover 240-Page Collector Monograph'
    ],
    awards: ['Type Directors Club Certificate of Typographic Excellence', 'Tokyo TDC Annual'],
    accentColor: '#E6D5B8',
    metric: {
      value: '100%',
      label: 'Sold Out in 42 Minutes'
    },
    featured: true
  },
  {
    id: 'proj-4',
    slug: 'archetype-botanica',
    title: 'ARCHETYPE BOTANICA',
    client: 'Maison Archetype (Kyoto / Paris)',
    year: '2025',
    category: 'digital',
    aspect: 'standard', // 3:4 portrait
    heroImage: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=85',
    secondaryImages: [
      'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&w=1200&q=85'
    ],
    tags: ['E-Commerce Flagship', 'Biomimetic 3D', 'Olfactory Web Storytelling', 'Headless Commerce'],
    summary: 'An ethereal digital flagship and biomimetic 3D sculpture for high-concept botanical molecular fragrances.',
    challenge: 'Fine perfumery has historically relied on brick-and-mortar department store counters because digital fragrance buying feels like a blind gamble. Archetype needed a digital flagship capable of driving $220+ blind-buys without physical scent strips.',
    approach: 'We invented an "Olfactory Chromatics" interaction model. Customers navigate interactive 3D biomimetic glass flora that react dynamically to cursor speed, ambient lighting mode, and fragrance notes (wet ozone, charred hinoki, crushed green stems). We structured the checkout flow with sample-credit guarantees and immersive micro-copy.',
    solution: 'Designed an interactive sensory spectrum where molecular fragrance notes bloom as organic 3D glass flora that react to mouse hover, temperature, and ambient light mode.',
    outcomes: {
      headline: '+215% direct-to-consumer conversion lift and 68% sample-to-full-bottle upgrade rate',
      metrics: [
        { value: '+215%', label: 'D2C Conversion Lift' },
        { value: '$185', label: 'Average Order Value (+42%)' },
        { value: '68%', label: 'Discovery-to-Full Upgrade' },
        { value: '24ms', label: 'Sub-second Edge Hydration' }
      ],
      summary: 'Proved that sensory digital storytelling can break down the physical barrier of e-commerce fragrance, establishing direct relationship profitability independent of wholesale retail.'
    },
    strategicImpact: 'Decoupled luxury fragrance distribution from legacy department stores, generating an 82% gross margin direct-to-consumer channel.',
    clientQuote: {
      quote: 'Kinesis manifested our soul in light and code. Customers repeatedly tell us navigating our flagship feels like meditating inside a Kyoto cedar forest.',
      author: 'Éléonore Vance',
      role: 'Global Creative Director'
    },
    deliverables: [
      'Sensory E-Commerce Flagship (Shopify Plus / Next.js)',
      'Procedural 3D Botanical Sculptures & Shaders',
      'Spatial Soundtrack & Sound Architecture',
      'Art Direction for Global Editorial Campaign'
    ],
    awards: ['Awwwards Site of the Year Nominee', 'CSS Design Awards WOTD'],
    accentColor: '#FF4D2E',
    metric: {
      value: '+215%',
      label: 'Conversion Rate Lift'
    },
    featured: true
  },
  {
    id: 'proj-5',
    slug: 'synthesis-pavilion',
    title: 'SYNTHESIS PAVILION',
    client: 'Venice Architecture Biennale / Fondazione Arte',
    year: '2026',
    category: 'spatial',
    aspect: 'wide', // 16:9 landscape
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85',
    secondaryImages: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=85'
    ],
    tags: ['Spatial Computing', 'Interactive Installation', 'Generative Architecture', 'Projection Mapping'],
    summary: 'A responsive kinetic light and monolithic glass pavilion reacting to visitor bio-rhythms and tidal movements in Venice lagoon.',
    challenge: 'Historic European architectural biennales often alienate younger global digital audiences. The Fondazione Arte sought a site-specific installation that bridged ancient Venetian brickwork with cutting-edge responsive spatial computing.',
    approach: 'We designed a physical-digital kinetic sanctuary inside the historic Arsenale. 48 motorized dichroic glass mirrors were orchestrated by real-time tidal velocity sensors and camera-based crowd density analysis. We built a simultaneous real-time WebGL digital twin allowing 200,000+ remote global visitors to manipulate light rays in Venice from their browser.',
    solution: 'Installed 48 synchronized motorized dichroic mirrors and 12-channel spatialized transducers driven by live tidal sensors, generating perpetual light refractions inside the historic Arsenale.',
    outcomes: {
      headline: 'Over 220,000 in-person visitors and 1.8M global web interactions with zero downtime',
      metrics: [
        { value: '220K+', label: 'Physical Attendees' },
        { value: '1.8M', label: 'Remote Interactive Sessions' },
        { value: 'Golden Lion', label: 'Biennale Honors Mention' },
        { value: '100%', label: 'Renewable Solar Power Grid' }
      ],
      summary: 'Became the viral cultural centerpiece of the Venice Biennale, covered across 40+ international architectural journals and creating a permanent benchmark for civic spatial computing.'
    },
    strategicImpact: 'Proved the commercial and cultural viability of hybrid physical-digital public architecture for sovereign institutions.',
    clientQuote: {
      quote: 'Kinesis possesses the rare ability to honor historical gravity while deploying computational audacity. The pavilion was the undisputed triumph of the season.',
      author: 'Matteo Bellini',
      role: 'Chief Curator, Fondazione Arte'
    },
    deliverables: [
      'Physical Kinetic Architecture & Mechanical Engineering',
      'Custom C++ / TouchDesigner Sensor Pipeline',
      'Spatial Exhibition Identity & Monolithic Wayfinding',
      'Live Web Companion & Synchronous Telepresence Stream'
    ],
    awards: ['Golden Lion Mention (Venice)', 'Frame Awards: Spatial Installation of the Year'],
    accentColor: '#A855F7',
    metric: {
      value: '220k+',
      label: 'In-Person Visitors'
    },
    featured: true
  },
  {
    id: 'proj-6',
    slug: 'vortex-soundsystem',
    title: 'VORTEX ALGORITHMIC',
    client: 'Vortex Audio Technologies (Berlin / London)',
    year: '2025',
    category: 'creative-tech',
    aspect: 'tall', // 4:5 vertical
    heroImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=85',
    secondaryImages: [
      'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1200&q=85'
    ],
    tags: ['Creative Engineering', 'Live WebGL Visualizer', 'Sonic Identity', 'Generative Typography'],
    summary: 'Custom algorithmic audio synthesizer and responsive visual identity for electronic music pioneers and club culture.',
    challenge: 'Vortex was transitioning from underground modular Eurorack synthesizers into a high-growth audio hardware and software ecosystem. They needed to scale commercially without losing the raw cred and authenticity demanded by world-class electronic music producers.',
    approach: 'We architected a living generative identity system where brand marks are rendered dynamically via Web Audio frequency analysis. We built an in-browser modular synthesizer and reactive typography tool that artists could play live, turning the marketing site into a genuine creative DAW (Digital Audio Workstation).',
    solution: 'Designed a real-time reactive typography engine that distorts glyph metrics based on live microphone input or streaming audio tracks, creating a living brand that never looks the same twice.',
    outcomes: {
      headline: '1.4M interactive DAW sessions in 30 days and 4x community growth velocity',
      metrics: [
        { value: '1.4M', label: 'Interactive Sessions (Month 1)' },
        { value: '38%', label: 'Hardware Waitlist Conversion' },
        { value: '99.9%', label: '60 FPS Audio Thread Latency' },
        { value: 'FWA', label: 'Site of the Month Winner' }
      ],
      summary: 'Vortex expanded into pro-audio retail across 28 countries while simultaneously cementing its status as an iconic subcultural artifact in modern electronic music.'
    },
    strategicImpact: 'Turned a digital brand website into a legitimate creative production utility, generating organic viral adoption across global electronic producers.',
    clientQuote: {
      quote: 'They did not just build our brand; they wrote the code for our sound engine. The cultural credibility and commercial surge have been staggering.',
      author: 'Niklas Weber',
      role: 'Founder & Audio Systems Architect'
    },
    deliverables: [
      'Real-Time Audio Reactive Variable Font Engine',
      'Web-Based Modular Synthesizer Application',
      'World Tour Motion Identity & Visual Stems Package',
      'Limited-Edition CNC Aluminum Hardware Enclosure Design'
    ],
    awards: ['FWA Site of the Month', 'Cannes Lions Bronze'],
    accentColor: '#38BDF8',
    metric: {
      value: '1.4M',
      label: 'Interactive Sessions in 30 Days'
    },
    featured: true
  }
];
