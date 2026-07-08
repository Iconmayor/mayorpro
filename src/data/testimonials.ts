export type Platform = 'Fiverr' | 'Upwork' | 'Direct Client';

export interface Testimonial {
  id: string;
  name: string;
  country: string; // ISO code lowercase, e.g. 'us'
  countryName: string;
  platform: Platform;
  rating: number; // 1-5
  review: string;
  verified?: boolean;
  topRated?: boolean;
  date?: string;
}

export const seedTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    country: 'us',
    countryName: 'United States',
    platform: 'Fiverr',
    rating: 5,
    review: 'Outstanding work! ABLE DIGITAL transformed our online presence completely. Their attention to detail and strategic approach delivered results beyond our expectations.',
    verified: true,
    topRated: true,
    date: '2 weeks ago',
  },
  {
    id: '2',
    name: 'James Whitmore',
    country: 'gb',
    countryName: 'United Kingdom',
    platform: 'Upwork',
    rating: 5,
    review: 'Exceptional team! They built our entire automation workflow and our productivity skyrocketed. Highly professional and responsive throughout the project.',
    verified: true,
    topRated: true,
    date: '1 month ago',
  },
  {
    id: '3',
    name: 'Aisha Khan',
    country: 'ca',
    countryName: 'Canada',
    platform: 'Fiverr',
    rating: 5,
    review: 'Best digital agency we have worked with. The website they built converts like crazy. Will definitely hire again for our next project!',
    verified: true,
    date: '3 weeks ago',
  },
  {
    id: '4',
    name: 'Marcus Weber',
    country: 'de',
    countryName: 'Germany',
    platform: 'Direct Client',
    rating: 5,
    review: 'Truly premium service. They took time to understand our brand before delivering a stunning, conversion-focused website. Worth every penny.',
    verified: true,
    date: '2 months ago',
  },
  {
    id: '5',
    name: 'Olivia Martin',
    country: 'au',
    countryName: 'Australia',
    platform: 'Upwork',
    rating: 4,
    review: 'Great communication and excellent results on our SEO campaign. Saw a 130% increase in organic traffic within 3 months. Highly recommended.',
    verified: true,
    date: '1 month ago',
  },
  {
    id: '6',
    name: 'Daniel Okeke',
    country: 'ng',
    countryName: 'Nigeria',
    platform: 'Direct Client',
    rating: 5,
    review: 'ABLE DIGITAL delivered a complete brand overhaul plus automation systems that saved us hours every week. Professional, reliable, and innovative.',
    verified: true,
    topRated: true,
    date: '3 weeks ago',
  },
];
