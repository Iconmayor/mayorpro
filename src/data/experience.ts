export interface Experience {
  id: number;
  company: string;
  role: string;
  year: string;
  duration: string;
  responsibilities: string[];
  location: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Digital Growth Agency",
    role: "Digital Consultant",
    year: "2025 - Present",
    duration: "1+ years",
    responsibilities: [
      "Lead digital transformation initiatives for enterprise clients",
      "Develop and execute comprehensive marketing strategies",
      "Manage a companies of 5 marketing specialists",
      "Increased client ROI by an average of 150%"
    ],
    location: "Remote"
  },
  {
    id: 2,
    company: "ACCEND HOLDINGS LIMITED & Subsidiaries",
    role: "WordPress Developer, Social Media Marketing & SEO Specialist",
    year: "2018 - 2020",
    duration: "2 years",
    responsibilities: [
      "Built and maintained 15+ client websites using Elementor, PHP,Yoast SEO / Rank Math, Ahrefs / Semrush",
      "Implemented SEO best practices achieving top rankings",
      "Developed custom automation solutions using Zapier",
      "Conducted technical audits and performance optimization"
    ],
    location: "Remote"
  },
  {
    id: 3,
    company: "CreativeMinds Studio",
    role: "Digital Marketing Manager",
    year: "2020 - 2022",
    duration: "2 years",
    responsibilities: [
      "Managed social media accounts with 5K+ combined followers",
      "Created and executed paid advertising campaigns",
      "Designed graphics and marketing materials",
      "Grew organic reach by 100% through content strategy"
    ],
    location: "Remote"
  },
  {
    id: 4,
    company: "Freelance",
    role: "Web Developer, Graphic Designer, Social Media Marketing",
    year: "2020 - present",
    duration: "5 years",
    responsibilities: [
      "Delivered 30+ websites for small businesses",
      "Created brand identities and marketing collateral",
      "Built lasting client relationships",
      "Developed expertise in multiple tech stacks"
    ],
    location: "Remote-Fiverr & Upwork"
  }
];