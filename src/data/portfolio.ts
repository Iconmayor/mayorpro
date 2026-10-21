import arcsolarx from '@/assets/portfolio/arcsolarx.jpg';
import express from '@/assets/portfolio/express.jpg';
import bluediamond from '@/assets/portfolio/bluediamond.jpg';
import method from '@/assets/portfolio/method.jpg';
import vista from '@/assets/portfolio/vista.jpg';
import justice from '@/assets/portfolio/justice.jpg';
import promxy from '@/assets/portfolio/promxy.jpg';
import debrooks from '@/assets/portfolio/debrooks.jpg';
import charles from '@/assets/portfolio/charles.jpg';
import dernee from '@/assets/portfolio/dernee.jpg';
import lightnation from '@/assets/portfolio/lightnation.jpg';
import staywoke from '@/assets/portfolio/staywoke.jpg';
import thrive from '@/assets/portfolio/thrive.jpg';
import yap from '@/assets/portfolio/yap.jpg';
import vtrac from '@/assets/portfolio/vtrac.jpg';

export type PortfolioStatus = 'Completed Project' | 'Design Concept' | 'Demo Website' | 'Portfolio Sample' | 'Needs Verification';

export interface PortfolioSite {
  title: string;
  url: string;
  category: string;
  description: string;
  status: PortfolioStatus;
  image: string; // set to '' to show a "Screenshot coming soon" placeholder
}

// Change `status` once each project's details are confirmed.
export const portfolioSites: PortfolioSite[] = [
  { title: 'ARC SolarX', url: 'https://arcsolarx.com/', category: 'Solar & Energy', description: 'A solar energy website showcasing renewable energy services in a professional digital format.', status: 'Needs Verification', image: arcsolarx },
  { title: 'Express Plumbing & Heating', url: 'https://expressplumbingandheating.ca/', category: 'Plumbing & Heating', description: 'A service-focused website presenting plumbing and heating services to prospective customers.', status: 'Needs Verification', image: express },
  { title: 'Blue Diamond Air & Ref', url: 'https://bluediamondacr.com.au/', category: 'HVAC', description: 'An HVAC and refrigeration website designed to present services and help customers explore the business.', status: 'Needs Verification', image: bluediamond },
  { title: 'Method Remodel', url: 'https://methodremodel.com/', category: 'Remodeling', description: "A remodeling website showcasing the company's services and providing a professional online presence.", status: 'Needs Verification', image: method },
  { title: 'Vista Remodeling', url: 'https://vistaremodeling.com/', category: 'Remodeling', description: 'A business website presenting remodeling services through a structured digital experience.', status: 'Needs Verification', image: vista },
  { title: 'Justice Construction', url: 'https://justiceconstruction.ca/', category: 'Construction', description: 'A construction website presenting the business and its services to prospective customers.', status: 'Needs Verification', image: justice },
  { title: 'Promxy Homes', url: 'https://www.promxyhomes.com/', category: 'Real Estate', description: 'A property website with listing search, presenting the business and its offerings.', status: 'Needs Verification', image: promxy },
  { title: 'De-Brooks', url: 'https://de-brooks.vercel.app/', category: 'Business', description: 'A business website designed to establish an online presence and present relevant information.', status: 'Needs Verification', image: debrooks },
  { title: 'Charles Standard Fire', url: 'https://charlesstandardfire.com/', category: 'Fire Safety', description: "A fire safety website presenting the company's solutions for businesses and organisations.", status: 'Needs Verification', image: charles },
  { title: 'Dernee Events', url: 'https://dernee-events.vercel.app/', category: 'Events', description: 'An events website presenting the business and its event-related offerings.', status: 'Needs Verification', image: dernee },
  { title: 'Light Nation', url: 'https://light-nation-abeokuta.vercel.app/', category: 'Organisation', description: 'A community website showcasing its mission, events and offerings through a dedicated online presence.', status: 'Needs Verification', image: lightnation },
  { title: 'Stay Woke', url: 'https://staywoke.com.ng/', category: 'Fashion', description: 'A fashion brand website presenting its collections and online offerings.', status: 'Needs Verification', image: staywoke },
  { title: 'Thrive Mama Care', url: 'https://thrivemamacare.com/', category: 'Care Services', description: 'A website connecting families with trusted caregivers and presenting the brand’s services.', status: 'Needs Verification', image: thrive },
  { title: 'YAP Career Centre', url: 'https://www.yapcareercentre.org/', category: 'Education', description: 'A website presenting career-related information, services, and opportunities.', status: 'Needs Verification', image: yap },
  { title: 'VTrac Company', url: 'https://vtraccompany.com/', category: 'Business', description: 'A professional business website showcasing the company and its products.', status: 'Needs Verification', image: vtrac },
];
