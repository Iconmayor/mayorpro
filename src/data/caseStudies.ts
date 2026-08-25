import hvacImg from '@/assets/portfolio-hvac-website.jpg';
import roofingImg from '@/assets/portfolio-roofing-website.jpg';
import plumbingImg from '@/assets/portfolio-plumbing-website.jpg';
import remodelingImg from '@/assets/portfolio-remodeling-website.jpg';
import landscapingImg from '@/assets/portfolio-landscaping-website.jpg';
import electricalImg from '@/assets/portfolio-electrical-website.jpg';

export interface CaseStudy {
  id: number;
  slug: string;
  industry: string;
  location: string;
  title: string;
  headline: string;
  image: string;
  imageAlt: string;
  challenge: string;
  strategy: string[];
  deliverables: string[];
  results: { metric: string; label: string }[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    slug: "hvac-phoenix",
    industry: "HVAC",
    location: "Phoenix, AZ",
    title: "From invisible to Map Pack #1 in 90 days",
    headline: "A residential HVAC operator scaling summer emergency calls.",
    image: hvacImg,
    imageAlt: "Concept project: HVAC company website with Google Map Pack and review widget",
    challenge:
      "Ranked outside the top 20 for high-intent searches like 'AC repair near me'. Great crews, weak digital footprint, phone quieter than the competition.",
    strategy: [
      "Rebuilt on a Conversion Website™ with service-area pages",
      "Full Google Business Profile overhaul + weekly posts",
      "Local SEO + technical schema for HVAC service intents",
      "Review Growth Engine™ across every completed job",
    ],
    deliverables: [
      "12 service + city landing pages",
      "Google Business Profile optimization",
      "Automated review + SMS follow-up",
      "Live growth dashboard",
    ],
    results: [
      { metric: "#1", label: "Map Pack (AC Repair Phoenix)" },
      { metric: "+218%", label: "Qualified inbound calls" },
      { metric: "4.9★", label: "Avg. Google rating" },
    ],
  },
  {
    id: 2,
    slug: "roofing-atlanta",
    industry: "Roofing",
    location: "Atlanta, GA",
    title: "Storm-season pipeline, engineered.",
    headline: "A regional roofer turning weather events into booked inspections.",
    image: roofingImg,
    imageAlt: "Concept project: roofing company website with free inspection booking form and before/after gallery",
    challenge:
      "Big storm demand, but leads leaked to national competitors with faster response times and stronger local presence online.",
    strategy: [
      "Storm-response landing pages with instant scheduling",
      "AI follow-up under 60 seconds on every form fill",
      "Local SEO for suburb-level intent",
      "Review Growth Engine™ tied to job completion",
    ],
    deliverables: [
      "Storm-response Conversion Website™",
      "AI lead qualification workflow",
      "GBP posts + service-area targeting",
      "CRM + pipeline integration",
    ],
    results: [
      { metric: "3.4×", label: "Booked inspections MoM" },
      { metric: "58s", label: "Avg. lead response time" },
      { metric: "+41%", label: "Close rate on inbound" },
    ],
  },
  {
    id: 3,
    slug: "plumbing-dallas",
    industry: "Plumbing",
    location: "Dallas, TX",
    title: "Owning 'plumber near me' across a metro.",
    headline: "A family plumbing company breaking into a saturated market.",
    image: plumbingImg,
    imageAlt: "Industry demo: plumbing website with city service pages and local SEO ranking dashboard",
    challenge:
      "Established competitors dominated Map Pack and organic results. Owner spent thousands monthly on ads with unclear ROI.",
    strategy: [
      "Local SEO overhaul: citations, schema, and content",
      "Suburb-specific service pages built for intent",
      "GBP daily activity + review velocity",
      "AI follow-up + missed-call text-back",
    ],
    deliverables: [
      "24 city + service landing pages",
      "Citation cleanup across 60+ directories",
      "Automated review + reputation dashboard",
    ],
    results: [
      { metric: "Top 3", label: "8 core service keywords" },
      { metric: "+312%", label: "Organic local traffic" },
      { metric: "-38%", label: "Cost per acquired job" },
    ],
  },
  {
    id: 4,
    slug: "remodeling-denver",
    industry: "Remodeling",
    location: "Denver, CO",
    title: "Positioning a premium remodeler above the price war.",
    headline: "A design-build remodeler competing on craft, not cost.",
    image: remodelingImg,
    imageAlt: "Concept project: design-build remodeling website with editorial project portfolio grid",
    challenge:
      "Beautiful work, but the brand and website looked like every other contractor in the market. Attracting bargain shoppers, not ideal clients.",
    strategy: [
      "Authority Foundation™ repositioning around design-build craftsmanship",
      "Editorial-quality Conversion Website™",
      "Local SEO for high-ticket remodel intents",
      "AI Visibility System™ to be cited on design queries",
    ],
    deliverables: [
      "New brand narrative + trust assets",
      "Portfolio-driven site",
      "GBP + review growth",
      "Content pillars ranking in AI Overviews",
    ],
    results: [
      { metric: "2.1×", label: "Avg. project value" },
      { metric: "+147%", label: "Qualified consult requests" },
      { metric: "Featured", label: "In Google AI Overviews" },
    ],
  },
  {
    id: 5,
    slug: "landscaping-tampa",
    industry: "Landscaping",
    location: "Tampa, FL",
    title: "A landscape company booked out for 6 months.",
    headline: "A boutique landscaper filling the calendar without ad spend.",
    image: landscapingImg,
    imageAlt: "Industry demo: landscaping website with service-area suburb pages and booking calendar",
    challenge:
      "Relied on referrals. Zero digital pipeline. Wanted to scale without becoming a lead-gen dependency.",
    strategy: [
      "Local SEO + GBP dominance across 9 suburbs",
      "Portfolio-first Conversion Website™",
      "Review Growth Engine™ tied to project completion",
      "AI Visibility for landscape design queries",
    ],
    deliverables: [
      "9 suburb landing pages",
      "GBP optimization + weekly posts",
      "Automated review + referral flow",
    ],
    results: [
      { metric: "6 mo.", label: "Booked calendar" },
      { metric: "+276%", label: "Organic call volume" },
      { metric: "$0", label: "Ad spend required" },
    ],
  },
  {
    id: 6,
    slug: "electrical-charlotte",
    industry: "Electrical",
    location: "Charlotte, NC",
    title: "Every lead answered in under a minute.",
    headline: "An electrical contractor closing more of the leads they already had.",
    image: electricalImg,
    imageAlt: "Industry demo: electrical contractor website with AI lead-response automation dashboard",
    challenge:
      "Solid lead flow, but response times of 4+ hours meant 60% of inquiries went cold before follow-up.",
    strategy: [
      "AI follow-up on every form fill and missed call",
      "Instant SMS + email + qualifying questions",
      "CRM pipeline + booking automation",
      "Weekly conversion review",
    ],
    deliverables: [
      "AI lead qualification bot",
      "Missed-call text-back",
      "CRM + calendar integration",
      "Conversion dashboard",
    ],
    results: [
      { metric: "58s", label: "Avg. first response" },
      { metric: "+64%", label: "Lead-to-job conversion" },
      { metric: "18 hrs", label: "Saved per week" },
    ],
  },
];
