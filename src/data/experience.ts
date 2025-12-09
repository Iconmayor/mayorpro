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
    role: "Senior Digital Consultant",
    year: "2022 - Present",
    duration: "2+ years",
    responsibilities: [
      "Lead digital transformation initiatives for enterprise clients",
      "Develop and execute comprehensive marketing strategies",
      "Manage a team of 5 marketing specialists",
      "Increased client ROI by an average of 150%"
    ],
    location: "Remote"
  },
  {
    id: 2,
    company: "TechStart Solutions",
    role: "Full Stack Developer & SEO Specialist",
    year: "2020 - 2022",
    duration: "2 years",
    responsibilities: [
      "Built and maintained 20+ client websites using React and Node.js",
      "Implemented SEO best practices achieving top rankings",
      "Developed custom automation solutions using Zapier",
      "Conducted technical audits and performance optimization"
    ],
    location: "New York, NY"
  },
  {
    id: 3,
    company: "CreativeMinds Studio",
    role: "Digital Marketing Manager",
    year: "2018 - 2020",
    duration: "2 years",
    responsibilities: [
      "Managed social media accounts with 500K+ combined followers",
      "Created and executed paid advertising campaigns",
      "Designed graphics and marketing materials",
      "Grew organic reach by 200% through content strategy"
    ],
    location: "Los Angeles, CA"
  },
  {
    id: 4,
    company: "Freelance",
    role: "Web Developer & Graphic Designer",
    year: "2016 - 2018",
    duration: "2 years",
    responsibilities: [
      "Delivered 50+ websites for small businesses",
      "Created brand identities and marketing collateral",
      "Built lasting client relationships",
      "Developed expertise in multiple tech stacks"
    ],
    location: "Remote"
  }
];
