import React, { useState } from 'react';
import { Container, Typography, Chip, Button } from '@mui/material';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { portfolioSites } from '@/data/portfolio';
import { useTheme } from '@/context/ThemeContext';

type WorkExample = {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  label: string;
  url?: string;
};

const websiteReferences: WorkExample[] = ['De-Brooks', 'Light Nation', 'ARC SolarX']
  .map((name) => portfolioSites.find((site) => site.title === name))
  .filter((site): site is NonNullable<typeof site> => Boolean(site))
  .map((site) => ({
    id: site.title,
    category: 'Websites & Landing Pages',
    title: site.title,
    description: site.description,
    image: site.image,
    imageAlt: site.title + ' website screenshot',
    label: 'Website example · Scope on request',
    url: site.url,
  }));

// These are photographic illustrations of service types, NOT claims of client delivery.
// Replace with permission-cleared screenshots as authentic project examples become available.
const illustrativeServices: WorkExample[] = [
  {
    id: 'lead-generation',
    category: 'Lead Generation',
    title: 'Customer Acquisition & Lead Funnel Planning',
    description: 'Illustrative example: research the buyer, define the offer, design a lead form and track enquiries through the sales process.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Real stock photo of professionals planning a business campaign',
    label: 'Illustrative service example · Stock photography',
  },
  {
    id: 'google-ads',
    category: 'Google Ads & Local SEO',
    title: 'Google Ads Campaign & Search Visibility',
    description: 'Illustrative example: plan intent-led campaigns, improve local presence, and measure calls and enquiries instead of just clicks.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Real stock photo of a laptop displaying digital analytics',
    label: 'Illustrative service example · Stock photography',
  },
  {
    id: 'landing-pages',
    category: 'Websites & Landing Pages',
    title: 'High-Converting Landing Page Experience',
    description: 'Illustrative example: build a focused offer, service proof, mobile-first enquiry form and clear calls to action.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Real stock photo of a laptop in a modern website development workspace',
    label: 'Illustrative service example · Stock photography',
  },
  {
    id: 'crm-automation',
    category: 'CRM & Booking Automation',
    title: 'Lead Follow-Up & Appointment Workflow',
    description: 'Illustrative example: connect enquiry forms, CRM stages, reminders and booking notifications to reduce missed opportunities.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Real stock photo of professionals coordinating work',
    label: 'Illustrative service example · Stock photography',
  },
  {
    id: 'reputation',
    category: 'Reputation & Review Growth',
    title: 'Customer Feedback & Reputation Building',
    description: 'Illustrative example: develop an authentic review-request process and build stronger confidence through genuine customer feedback.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Real stock photo of a professional team working together',
    label: 'Illustrative service example · Stock photography',
  },
];

const categories = ['All', 'Websites & Landing Pages', 'Lead Generation', 'Google Ads & Local SEO', 'CRM & Booking Automation', 'Reputation & Review Growth'];

const WorkShowcase: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const { mode } = useTheme();
  const dark = mode === 'dark';
  const [filter, setFilter] = useState('All');
  const allWork = compact ? [websiteReferences[0], ...illustrativeServices].filter(Boolean) : [...websiteReferences, ...illustrativeServices];
  const filtered = filter === 'All' ? allWork : allWork.filter((item) => item.category === filter);
  const muted = dark ? '#b3b3b3' : '#4b5563';

  return (
    <section id="our-work" className="section-padding" style={{ background: dark ? 'rgba(255,255,255,0.02)' : '#f8f8f8' }}>
      <Container maxWidth="lg">
        <div className="max-w-3xl mb-10">
          <Typography sx={{ color: '#D4AF37', letterSpacing: 2, fontWeight: 800, fontSize: '0.75rem', textTransform: 'uppercase', mb: 2 }}>
            Our Work & Service Examples
          </Typography>
          <Typography className="font-display" sx={{ color: dark ? '#fff' : '#111', fontWeight: 750, fontSize: { xs: '2rem', md: '2.8rem' }, lineHeight: 1.14, mb: 2 }}>
            More than websites. <span className="text-primary">Solutions built around business growth.</span>
          </Typography>
          <Typography sx={{ color: muted, fontSize: '1rem', lineHeight: 1.75 }}>
            Explore website references and examples of the services we offer: lead generation, Google Ads, local search, landing pages, booking automation and review growth. Illustrative cards show service concepts, not completed client campaigns.
          </Typography>
        </div>
        {!compact && (
          <div className="flex flex-wrap gap-2 mb-8" aria-label="Filter work examples by service">
            {categories.map((category) => (
              <Chip key={category} label={category} clickable onClick={() => setFilter(category)}
                sx={{
                  background: filter === category ? '#D4AF37' : dark ? 'rgba(255,255,255,0.08)' : '#ebebeb',
                  color: filter === category ? '#111' : dark ? '#eee' : '#333',
                  fontWeight: 650,
                  '&:hover': { background: filter === category ? '#e8c547' : dark ? 'rgba(212,175,55,0.2)' : '#e0e0e0' },
                }}
              />
            ))}
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((work) => (
            <article key={work.id} className="rounded-2xl border flex flex-col overflow-hidden group"
              style={{ background: dark ? '#151515' : '#fff', borderColor: dark ? 'rgba(255,255,255,0.09)' : 'rgba(0,0,0,0.08)' }}>
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={work.image} alt={work.imageAlt} loading="lazy" decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                <span className="absolute left-3 top-3 px-3 py-1.5 rounded-md text-xs font-bold text-black" style={{ background: '#D4AF37' }}>
                  {work.category}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <Typography sx={{ color: muted, fontSize: '0.72rem', mb: 1.4 }}>{work.label}</Typography>
                <Typography sx={{ fontWeight: 750, lineHeight: 1.3, fontSize: '1.12rem', color: dark ? '#fff' : '#111', mb: 2 }}>
                  {work.title}
                </Typography>
                <Typography sx={{ color: muted, lineHeight: 1.7, fontSize: '0.9rem', mb: 3, flex: 1 }}>
                  {work.description}
                </Typography>
                {work.url ? (
                  <a href={work.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold no-underline text-primary">
                    View website <ArrowUpRight size={16} />
                  </a>
                ) : (
                  <Link to="/contact" className="inline-flex items-center gap-1.5 text-sm font-semibold no-underline text-primary">
                    Discuss this solution <ArrowRight size={16} />
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
          <p className="text-xs max-w-2xl leading-relaxed" style={{ color: muted }}>
            Visual examples are clearly marked. Stock photographs are not presented as client deliverables, and no campaign metrics or testimonials are fabricated.
          </p>
          {compact && <Button component={Link} to="/projects" variant="outlined" endIcon={<ArrowRight size={17} />}
            sx={{ whiteSpace: 'nowrap', color: '#D4AF37', borderColor: '#D4AF37', '&:hover': { borderColor: '#e8c547', background: 'rgba(212,175,55,0.08)' } }}>
            Explore all our work
          </Button>}
        </div>
      </Container>
    </section>
  );
};
export default WorkShowcase;
