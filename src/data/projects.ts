export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  link: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform Redesign",
    description: "Complete overhaul of a major retail platform, increasing conversions by 45% through strategic UX improvements and performance optimization.",
    image: "/projects/ecommerce.jpg",
    tech: ["React", "Node.js", "Stripe", "PostgreSQL"],
    link: "#",
    category: "Web Development"
  },
  {
    id: 2,
    title: "Social Media Growth Campaign",
    description: "Developed and executed a comprehensive social media strategy that grew client's following from 5K to 50K in 6 months.",
    image: "/projects/social.jpg",
    tech: ["Facebook Ads", "Instagram", "Analytics", "Content Strategy"],
    link: "#",
    category: "Marketing"
  },
  {
    id: 3,
    title: "AI-Powered Lead Generation System",
    description: "Built an automated lead generation pipeline using AI and GoHighLevel, generating 200+ qualified leads per month.",
    image: "/projects/ai-leads.jpg",
    tech: ["GoHighLevel", "Zapier", "OpenAI", "Facebook Ads"],
    link: "#",
    category: "Automation"
  },
  {
    id: 4,
    title: "Corporate Brand Identity",
    description: "Created a complete brand identity package including logo, color palette, typography, and brand guidelines for a fintech startup.",
    image: "/projects/branding.jpg",
    tech: ["Figma", "Adobe Illustrator", "Brand Strategy"],
    link: "#",
    category: "Design"
  },
  {
    id: 5,
    title: "SEO Optimization Project",
    description: "Implemented comprehensive SEO strategy that improved organic traffic by 300% and achieved top 3 rankings for 15+ keywords.",
    image: "/projects/seo.jpg",
    tech: ["SEMrush", "Google Analytics", "Technical SEO", "Content"],
    link: "#",
    category: "SEO"
  },
  {
    id: 6,
    title: "Marketing Automation Workflow",
    description: "Designed and implemented end-to-end marketing automation saving 20+ hours per week in manual tasks.",
    image: "/projects/automation.jpg",
    tech: ["Zapier", "HubSpot", "Mailchimp", "Webhooks"],
    link: "#",
    category: "Automation"
  }
];
