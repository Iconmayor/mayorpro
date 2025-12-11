export interface Stack {
  id: number;
  name: string;
  icon: string;
  category: "development" | "marketing" | "design" | "automation";
  proficiency: number;
}

export const stacks: Stack[] = [
  // Development
  { id: 1, name: "WordPress", icon: "FileCode", category: "development", proficiency: 94 },
  { id: 2, name: "PHP", icon: "Code", category: "development", proficiency: 79 },
  { id: 3, name: "JavaScript", icon: "Code", category: "development", proficiency: 85 },
  { id: 4, name: "Elementor", icon: "FileCode", category: "development", proficiency: 95 },
  
  // Marketing
  { id: 5, name: "Facebook Ads", icon: "Target", category: "marketing", proficiency: 95 },
  { id: 6, name: "Google Ads", icon: "Search", category: "marketing", proficiency: 92 },
  { id: 7, name: "SEO", icon: "TrendingUp", category: "marketing", proficiency: 94 },
  { id: 8, name: "Email Marketing", icon: "Mail", category: "marketing", proficiency: 90 },
  
  // Design
  { id: 9, name: "Figma", icon: "PenTool", category: "design", proficiency: 90 },
  { id: 10, name: "UI/UX Design", icon: "Layout", category: "design", proficiency: 88 },
  { id: 11, name: "Brand Identity", icon: "Award", category: "design", proficiency: 86 },
  { id: 12, name: "Canva", icon: "Brush", category: "design", proficiency: 95 },
  
  // Automation
  { id: 13, name: "Zapier", icon: "Zap", category: "automation", proficiency: 95 },
  { id: 14, name: "GoHighLevel", icon: "Workflow", category: "automation", proficiency: 92 },
  { id: 15, name: "HubSpot", icon: "Users", category: "automation", proficiency: 85 },
  { id: 16, name: "Mailchimp", icon: "Send", category: "automation", proficiency: 90 },
  { id: 17, name: "AI Tools", icon: "Bot", category: "automation", proficiency: 91 }
];

export const categories = [
  { id: "development", label: "Development", color: "#3B82F6" },
  { id: "marketing", label: "Marketing", color: "#10B981" },
  { id: "design", label: "Design", color: "#8B5CF6" },
  { id: "automation", label: "Automation", color: "#F59E0B" }
];
