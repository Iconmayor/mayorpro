export interface Phase {
  id: string;
  number: string;
  name: string;
  tagline: string;
  outcome: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export const growthEngine: Phase[] = [
  {
    id: "audit",
    number: "01",
    name: "Visibility Audit™",
    tagline: "Know exactly where you stand.",
    outcome: "A clear picture of every gap between your business and the customers searching for you today.",
    description:
      "We audit your website, Google Business Profile, local rankings, reviews, and AI visibility — then map the fastest path to more qualified leads.",
    deliverables: [
      "Local market & competitor analysis",
      "Google Business Profile audit",
      "Website conversion audit",
      "AI search visibility scan",
      "90-day growth roadmap",
    ],
    icon: "Compass",
  },
  {
    id: "authority",
    number: "02",
    name: "Authority Foundation™",
    tagline: "Look like the obvious choice.",
    outcome: "A cohesive local brand that signals trust the moment a customer sees your name.",
    description:
      "We shape the messaging, positioning, and visual identity that separates you from generic competitors and price-shoppers.",
    deliverables: [
      "Positioning & messaging framework",
      "Service naming & offer structure",
      "Local brand identity refresh",
      "Trust asset library (badges, guarantees, proof)",
    ],
    icon: "ShieldCheck",
  },
  {
    id: "website",
    number: "03",
    name: "Conversion Website™",
    tagline: "A website that books jobs.",
    outcome: "A fast, mobile-first site engineered to convert visitors into calls, form fills, and booked appointments.",
    description:
      "Built around home service buyer psychology: instant clarity, local proof, mobile-optimized CTAs, and every page structured to convert.",
    deliverables: [
      "Custom design + development",
      "Service-area pages built for Local SEO",
      "Mobile-first conversion flow",
      "Click-to-call & instant-quote CTAs",
      "Core Web Vitals & accessibility ready",
    ],
    icon: "Monitor",
  },
  {
    id: "seo",
    number: "04",
    name: "Local Search Engine™",
    tagline: "Own the Map Pack.",
    outcome: "Top 3 visibility for the searches your ideal customers actually type.",
    description:
      "A rigorous Local SEO program — technical foundations, GBP optimization, service-area targeting, and content that ranks and converts.",
    deliverables: [
      "Google Business Profile optimization",
      "Local citation cleanup & building",
      "Service + city landing pages",
      "Technical SEO & schema",
      "Ongoing keyword expansion",
    ],
    icon: "MapPin",
  },
  {
    id: "reviews",
    number: "05",
    name: "Review Growth Engine™",
    tagline: "Turn every job into social proof.",
    outcome: "A steady stream of 5-star reviews that push you up the rankings and win the trust click.",
    description:
      "An automated, respectful review system that asks the right customer at the right moment — and keeps your reputation compounding.",
    deliverables: [
      "Automated review requests (SMS + email)",
      "Smart routing to Google, Facebook, etc.",
      "Negative feedback capture flow",
      "Review response templates",
      "Reputation dashboard",
    ],
    icon: "Star",
  },
  {
    id: "ai",
    number: "06",
    name: "AI Visibility System™",
    tagline: "Get cited by ChatGPT, Gemini, and Google AI.",
    outcome: "Show up when customers ask AI assistants who to hire in your area.",
    description:
      "We structure your content, entities, and citations so AI search engines quote you — the new front door to local intent.",
    deliverables: [
      "AI-readable content architecture",
      "Structured data & entity optimization",
      "Answer-engine (AEO/GEO) tuning",
      "AI citation monitoring",
    ],
    icon: "Sparkles",
  },
  {
    id: "partnership",
    number: "07",
    name: "Growth Partnership™",
    tagline: "A team that compounds results.",
    outcome: "Month over month, more qualified leads, higher-value jobs, and lower cost per acquisition.",
    description:
      "Ongoing optimization, testing, reporting, and strategy — the difference between a project that peaks and a business that keeps growing.",
    deliverables: [
      "Monthly strategy call",
      "Live growth dashboard",
      "Ongoing SEO & content",
      "Conversion & funnel testing",
      "AI follow-up & CRM optimization",
    ],
    icon: "TrendingUp",
  },
];
