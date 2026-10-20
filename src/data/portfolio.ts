import arcsolarx from '@/assets/portfolio/arcsolarx.jpg.asset.json';
import express from '@/assets/portfolio/express.jpg.asset.json';
import bluediamond from '@/assets/portfolio/bluediamond.jpg.asset.json';
import method from '@/assets/portfolio/method.jpg.asset.json';
import vista from '@/assets/portfolio/vista.jpg.asset.json';
import justice from '@/assets/portfolio/justice.jpg.asset.json';
import promxy from '@/assets/portfolio/promxy.jpg.asset.json';
import debrooks from '@/assets/portfolio/debrooks.jpg.asset.json';
import charles from '@/assets/portfolio/charles.jpg.asset.json';
import dernee from '@/assets/portfolio/dernee.jpg.asset.json';
import lightnation from '@/assets/portfolio/lightnation.jpg.asset.json';
import staywoke from '@/assets/portfolio/staywoke.jpg.asset.json';
import thrive from '@/assets/portfolio/thrive.jpg.asset.json';
import yap from '@/assets/portfolio/yap.jpg.asset.json';
import vtrac from '@/assets/portfolio/vtrac.jpg.asset.json';

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
  { title: 'ARC SolarX', url: 'https://arcsolarx.com/', category: 'Solar & Energy', description: 'A solar energy website showcasing renewable energy services in a professional digital format.', status: 'Needs Verification', image: arcsolarx.url },
  { title: 'Express Plumbing & Heating', url: 'https://expressplumbingandheating.ca/', category: 'Plumbing & Heating', description: 'A service-focused website presenting plumbing and heating services to prospective customers.', status: 'Needs Verification', image: express.url },
  { title: 'Blue Diamond Air & Ref', url: 'https://bluediamondacr.com.au/', category: 'HVAC', description: 'An HVAC and refrigeration website designed to present services and help customers explore the business.', status: 'Needs Verification', image: bluediamond.url },
  { title: 'Method Remodel', url: 'https://methodremodel.com/', category: 'Remodeling', description: "A remodeling website showcasing the company's services and providing a professional online presence.", status: 'Needs Verification', image: method.url },
  { title: 'Vista Remodeling', url: 'https://vistaremodeling.com/', category: 'Remodeling', description: 'A business website presenting remodeling services through a structured digital experience.', status: 'Needs Verification', image: vista.url },
  { title: 'Justice Construction', url: 'https://justiceconstruction.ca/', category: 'Construction', description: 'A construction website presenting the business and its services to prospective customers.', status: 'Needs Verification', image: justice.url },
  { title: 'Promxy Homes', url: 'https://www.promxyhomes.com/', category: 'Real Estate', description: 'A property website with listing search, presenting the business and its offerings.', status: 'Needs Verification', image: promxy.url },
  { title: 'De-Brooks', url: 'https://de-brooks.vercel.app/', category: 'Business', description: 'A business website designed to establish an online presence and present relevant information.', status: 'Needs Verification', image: debrooks.url },
  { title: 'Charles Standard Fire', url: 'https://charlesstandardfire.com/', category: 'Fire Safety', description: "A fire safety website presenting the company's solutions for businesses and organisations.", status: 'Needs Verification', image: charles.url },
  { title: 'Dernee Events', url: 'https://dernee-events.vercel.app/', category: 'Events', description: 'An events website presenting the business and its event-related offerings.', status: 'Needs Verification', image: dernee.url },
  { title: 'Light Nation', url: 'https://light-nation-abeokuta.vercel.app/', category: 'Organisation', description: 'A community website showcasing its mission, events and offerings through a dedicated online presence.', status: 'Needs Verification', image: lightnation.url },
  { title: 'Stay Woke', url: 'https://staywoke.com.ng/', category: 'Fashion', description: 'A fashion brand website presenting its collections and online offerings.', status: 'Needs Verification', image: staywoke.url },
  { title: 'Thrive Mama Care', url: 'https://thrivemamacare.com/', category: 'Care Services', description: 'A website connecting families with trusted caregivers and presenting the brand’s services.', status: 'Needs Verification', image: thrive.url },
  { title: 'YAP Career Centre', url: 'https://www.yapcareercentre.org/', category: 'Education', description: 'A website presenting career-related information, services, and opportunities.', status: 'Needs Verification', image: yap.url },
  { title: 'VTrac Company', url: 'https://vtraccompany.com/', category: 'Business', description: 'A professional business website showcasing the company and its products.', status: 'Needs Verification', image: vtrac.url },
];
