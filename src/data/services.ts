export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
  category: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Web Design & Development",
    description: "Custom, responsive websites built with modern technologies that convert visitors into customers.",
    icon: "Globe",
    benefits: [
      "Mobile-first responsive design",
      "Fast loading speeds",
      "SEO-optimized structure",
      "Conversion-focused layouts"
    ],
    category: "Development"
  },
  {
    id: 2,
    title: "SEO Optimization",
    description: "Data-driven SEO strategies that improve your search rankings and drive organic traffic.",
    icon: "Search",
    benefits: [
      "Keyword research & strategy",
      "On-page & technical SEO",
      "Content optimization",
      "Link building campaigns"
    ],
    category: "Marketing"
  },
  {
    id: 3,
    title: "Social Media Marketing",
    description: "Strategic social media campaigns that build brand awareness and engage your audience.",
    icon: "Share2",
    benefits: [
      "Platform-specific strategies",
      "Paid advertising campaigns",
      "Audience growth tactics",
      "Performance analytics"
    ],
    category: "Marketing"
  },
  {
    id: 4,
    title: "Social Media Management",
    description: "Full-service social media management to maintain your brand presence consistently.",
    icon: "Users",
    benefits: [
      "Content calendar planning",
      "Daily posting & engagement",
      "Community management",
      "Monthly reporting"
    ],
    category: "Marketing"
  },
  {
    id: 5,
    title: "Lead Generation",
    description: "High-converting Facebook & Google Ads campaigns that deliver qualified leads.",
    icon: "Target",
    benefits: [
      "Facebook & Instagram Ads",
      "Google Ads management",
      "Landing page optimization",
      "Lead tracking & CRM setup"
    ],
    category: "Marketing"
  },
  {
    id: 6,
    title: "Graphic Design & Branding",
    description: "Professional brand identity design that makes your business stand out.",
    icon: "Palette",
    benefits: [
      "Logo & brand identity",
      "Marketing materials",
      "Social media graphics",
      "Brand guidelines"
    ],
    category: "Design"
  },
  {
    id: 7,
    title: "AI Automations",
    description: "Smart automation solutions using GoHighLevel, Zapier, and CRM systems to streamline operations.",
    icon: "Bot",
    benefits: [
      "Workflow automation",
      "CRM setup & integration",
      "Email sequences",
      "Chatbot implementation"
    ],
    category: "Automation"
  },
  {
    id: 8,
    title: "Funnel & Conversion Optimization",
    description: "Strategic funnel design and optimization to maximize your conversion rates.",
    icon: "TrendingUp",
    benefits: [
      "Sales funnel design",
      "A/B testing",
      "Conversion tracking",
      "User journey optimization"
    ],
    category: "Strategy"
  },
  {
    id: 9,
    title: "Business Process Automation",
    description: "End-to-end automation solutions that save time and reduce manual work.",
    icon: "Workflow",
    benefits: [
      "Process mapping",
      "Tool integration",
      "Reporting automation",
      "Efficiency optimization"
    ],
    category: "Automation"
  }
];

export const whyChooseMe = [
  {
    id: 1,
    title: "Results-Driven Approach",
    description: "Every strategy is backed by data and focused on measurable outcomes that impact your bottom line.",
    icon: "BarChart3"
  },
  {
    id: 2,
    title: "Full-Service Solutions",
    description: "From web development to marketing automation, get all your digital needs handled under one roof.",
    icon: "Layers"
  },
  {
    id: 3,
    title: "Proven Track Record",
    description: "Hundreds of successful projects and happy clients across multiple industries.",
    icon: "Award"
  },
  {
    id: 4,
    title: "Cutting-Edge Technology",
    description: "Leveraging the latest tools, AI, and automation to give your business a competitive edge.",
    icon: "Zap"
  },
  {
    id: 5,
    title: "Personalized Strategy",
    description: "No cookie-cutter solutions. Every project is tailored to your unique business goals.",
    icon: "Target"
  },
  {
    id: 6,
    title: "Ongoing Support",
    description: "Long-term partnership with continuous optimization and support beyond project delivery.",
    icon: "HeartHandshake"
  }
];
