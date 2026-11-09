export interface Phase {
  id: string;
  number: string;
  name: string;
  tagline: string;
  outcome: string;
  description: string;
  deliverables: string[];
  icon: string;
}
export const growthEngine: Phase[] = [
  { id:"audit",number:"01",name:"Growth Opportunity Audit",tagline:"Know where growth is getting stuck.",outcome:"A prioritized plan.",description:"We review your services, customer journey, visibility, website, enquiry process and market to identify practical opportunities.",deliverables:["Competitor and local demand review","Website and conversion audit","Current lead sources and follow-up check","Prioritized 90-day action plan"],icon:"Compass" },
  { id:"acquisition",number:"02",name:"Targeted Lead Acquisition",tagline:"Reach ready-to-buy customers.",outcome:"More relevant enquiries.",description:"We match the right acquisition channels to your market, from Google Ads to Google Maps visibility and service-area SEO.",deliverables:["Google Ads strategy and campaign setup","Google Business Profile optimization","Local SEO and relevant landing pages","Lead and enquiry tracking"],icon:"MapPin" },
  { id:"conversion",number:"03",name:"Conversion-Focused Experience",tagline:"Turn visits into conversations.",outcome:"More calls and requests.",description:"We build or improve webpages so your services, trust signals, and enquiry actions are clear, especially on mobile.",deliverables:["Website and landing-page design","Persuasive offers and service content","Click-to-call and quote pathways","Conversion testing"],icon:"Monitor" },
  { id:"followup",number:"04",name:"CRM & Booking Follow-Up",tagline:"Keep the opportunity moving.",outcome:"Fewer missed leads.",description:"We organize lead information and implement appropriate notifications, messages and booking processes to support timely customer responses.",deliverables:["CRM pipeline configuration","Lead capture and routing","WhatsApp, email or SMS workflows as applicable","Appointment tracking"],icon:"Sparkles" },
  { id:"reviews",number:"05",name:"Review Growth & Optimization",tagline:"Build trust as you grow.",outcome:"More confidence and referrals.",description:"We support honest customer reviews and review what is happening across leads, booked work and campaign performance.",deliverables:["Compliant customer review requests","Reputation response guidance","Lead quality and appointment reporting","Continuous campaign improvements"],icon:"Star" },
];
