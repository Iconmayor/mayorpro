export type Platform = 'Google' | 'Direct Client' | 'Referral';

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  country: string;
  countryName: string;
  platform: Platform;
  rating: number;
  review: string;
  verified?: boolean;
  topRated?: boolean;
  date?: string;
}

export const seedTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Marcus Reeves',
    role: 'Owner',
    company: 'Reeves HVAC',
    country: 'us',
    countryName: 'Phoenix, AZ',
    platform: 'Google',
    rating: 5,
    review:
      "We went from invisible on Google to the top of the Map Pack in one quarter. Our summer call volume more than tripled. Able Digital doesn't feel like a vendor — they feel like part of the company.",
    verified: true,
    topRated: true,
    date: '2 weeks ago',
  },
  {
    id: '2',
    name: 'Danielle Ortega',
    role: 'General Manager',
    company: 'Ortega Roofing',
    country: 'us',
    countryName: 'Atlanta, GA',
    platform: 'Direct Client',
    rating: 5,
    review:
      "Every inbound lead gets a response inside a minute. We stopped losing storm jobs to national competitors. The dashboard alone is worth the fee.",
    verified: true,
    topRated: true,
    date: '1 month ago',
  },
  {
    id: '3',
    name: 'Kevin Nguyen',
    role: 'Founder',
    company: 'Nguyen Plumbing',
    country: 'us',
    countryName: 'Dallas, TX',
    platform: 'Google',
    rating: 5,
    review:
      "I spent years wasting money on agencies that sold me tactics. Able Digital sold me a system — and it works. Organic calls are up more than 3x and we cut ad spend.",
    verified: true,
    date: '3 weeks ago',
  },
  {
    id: '4',
    name: 'Sarah Whitfield',
    role: 'Principal',
    company: 'Whitfield Design-Build',
    country: 'us',
    countryName: 'Denver, CO',
    platform: 'Direct Client',
    rating: 5,
    review:
      "They repositioned our brand and rebuilt our site to actually match the caliber of work we do. We stopped competing on price. Average project value doubled.",
    verified: true,
    date: '2 months ago',
  },
  {
    id: '5',
    name: 'Jamal Roberts',
    role: 'Owner',
    company: 'Greenline Landscaping',
    country: 'us',
    countryName: 'Tampa, FL',
    platform: 'Referral',
    rating: 5,
    review:
      "We're booked six months out with zero ad spend. Reviews come in on their own now. This is what a real growth partner looks like.",
    verified: true,
    topRated: true,
    date: '1 month ago',
  },
  {
    id: '6',
    name: 'Priya Chandra',
    role: 'Operations Director',
    company: 'Bright Path Electric',
    country: 'us',
    countryName: 'Charlotte, NC',
    platform: 'Google',
    rating: 5,
    review:
      "The AI follow-up alone changed our business. We were losing 60% of leads before. Now we close two out of three. Serious, calm, professional team.",
    verified: true,
    date: '3 weeks ago',
  },
];
