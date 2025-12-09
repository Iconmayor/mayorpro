export interface Stack {
  id: number;
  name: string;
  icon: string;
  category: "development" | "marketing" | "design" | "automation";
  proficiency: number;
}

export const stacks: Stack[] = [
  // Development
  { id: 1, name: "React.js", icon: "Code", category: "development", proficiency: 95 },
  { id: 2, name: "Node.js", icon: "Server", category: "development", proficiency: 90 },
  { id: 3, name: "TypeScript", icon: "FileCode", category: "development", proficiency: 88 },
  { id: 4, name: "Tailwind CSS", icon: "Palette", category: "development", proficiency: 92 },
  { id: 5, name: "PostgreSQL", icon: "Database", category: "development", proficiency: 85 },
  { id: 6, name: "Next.js", icon: "Globe", category: "development", proficiency: 88 },
  
  // Marketing
  { id: 7, name: "Facebook Ads", icon: "Target", category: "marketing", proficiency: 95 },
  { id: 8, name: "Google Ads", icon: "Search", category: "marketing", proficiency: 92 },
  { id: 9, name: "SEO", icon: "TrendingUp", category: "marketing", proficiency: 94 },
  { id: 10, name: "Email Marketing", icon: "Mail", category: "marketing", proficiency: 90 },
  { id: 11, name: "Content Strategy", icon: "FileText", category: "marketing", proficiency: 88 },
  { id: 12, name: "Analytics", icon: "BarChart", category: "marketing", proficiency: 91 },
  
  // Design
  { id: 13, name: "Figma", icon: "PenTool", category: "design", proficiency: 90 },
  { id: 14, name: "Adobe Photoshop", icon: "Image", category: "design", proficiency: 85 },
  { id: 15, name: "Adobe Illustrator", icon: "Shapes", category: "design", proficiency: 82 },
  { id: 16, name: "UI/UX Design", icon: "Layout", category: "design", proficiency: 88 },
  { id: 17, name: "Brand Identity", icon: "Award", category: "design", proficiency: 86 },
  { id: 18, name: "Canva", icon: "Brush", category: "design", proficiency: 95 },
  
  // Automation
  { id: 19, name: "Zapier", icon: "Zap", category: "automation", proficiency: 95 },
  { id: 20, name: "GoHighLevel", icon: "Workflow", category: "automation", proficiency: 92 },
  { id: 21, name: "Make (Integromat)", icon: "GitBranch", category: "automation", proficiency: 88 },
  { id: 22, name: "HubSpot", icon: "Users", category: "automation", proficiency: 85 },
  { id: 23, name: "Mailchimp", icon: "Send", category: "automation", proficiency: 90 },
  { id: 24, name: "AI Tools", icon: "Bot", category: "automation", proficiency: 91 }
];

export const categories = [
  { id: "development", label: "Development", color: "#3B82F6" },
  { id: "marketing", label: "Marketing", color: "#10B981" },
  { id: "design", label: "Design", color: "#8B5CF6" },
  { id: "automation", label: "Automation", color: "#F59E0B" }
];
