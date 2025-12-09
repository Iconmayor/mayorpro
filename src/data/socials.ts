export interface Social {
  id: number;
  name: string;
  url: string;
  icon: string;
}

export const socials: Social[] = [
  {
    id: 1,
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourprofile",
    icon: "Linkedin"
  },
  {
    id: 2,
    name: "Twitter",
    url: "https://twitter.com/yourhandle",
    icon: "Twitter"
  },
  {
    id: 3,
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: "Github"
  },
  {
    id: 4,
    name: "Instagram",
    url: "https://instagram.com/yourhandle",
    icon: "Instagram"
  },
  {
    id: 5,
    name: "Email",
    url: "mailto:hello@yourdomain.com",
    icon: "Mail"
  }
];
