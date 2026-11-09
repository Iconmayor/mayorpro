import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Target, Search, MousePointerClick, CalendarCheck2, Star, CheckCircle2 } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const steps = [
  {
    id: 'acquire', icon: Target, tag: '01 / CUSTOMER ACQUISITION',
    name: 'Lead Generation', headline: 'Reach people already looking for what you offer.',
    summary: 'Start with buyer intent, the right offer and a clear path for prospects to get in touch. Less random traffic. More useful conversations.',
    bullets: ['Buyer-focused lead campaigns', 'Clear landing-page and form journeys', 'Lead source visibility'],
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85',
    alt: 'Real stock photograph of business professionals planning customer outreach',
    badge: 'Find the right customers', color: '#fff1c4',
  },
  {
    id: 'search', icon: Search, tag: '02 / SEARCH VISIBILITY',
    name: 'Google Ads & Local SEO', headline: 'Show up where ready-to-buy customers search.',
    summary: 'Put your services in front of relevant people through intent-driven Google Ads, better Google Business Profile information and local search content.',
    bullets: ['Google Ads strategy', 'Google Maps and Business Profile', 'Location and service page optimization'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85',
    alt: 'Real stock photograph of a laptop displaying marketing and analytics charts',
    badge: 'Be easier to discover', color: '#eaf3ff',
  },
  {
    id: 'convert', icon: MousePointerClick, tag: '03 / CONVERSION',
    name: 'Websites & Landing Pages', headline: 'Turn the next visit into a real enquiry.',
    summary: 'Give people a fast, persuasive experience with clear services, credible evidence and friction-free contact, quote or booking actions.',
    bullets: ['Mobile-first websites', 'Campaign landing pages', 'Conversion-ready calls to action'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=85',
    alt: 'Real stock photograph of a modern laptop in a web development workspace',
    badge: 'Make every visit count', color: '#f4ebff',
  },
  {
    id: 'followup', icon: CalendarCheck2, tag: '04 / BOOKING SYSTEMS',
    name: 'CRM & Follow-Up', headline: 'Stop good opportunities slipping away.',
    summary: 'Connect your enquiry channels, organize customer conversations and build a follow-up process that helps your team turn interest into appointments.',
    bullets: ['Lead pipeline setup', 'Email and WhatsApp follow-up', 'Booking and reminder workflows'],
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=85',
    alt: 'Real stock photograph of a team coordinating business activities',
    badge: 'Follow up with confidence', color: '#e6f5ea',
  },
  {
    id: 'reputation', icon: Star, tag: '05 / CUSTOMER TRUST',
    name: 'Reviews & Reputation', headline: 'Make trust part of your growth strategy.',
    summary: 'Help happy customers share genuine feedback and make it easier for new buyers to see why your business deserves a conversation.',
    bullets: ['Authentic review request systems', 'Reputation support', 'Social proof and referral opportunities'],
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85',
    alt: 'Real stock photograph of colleagues collaborating in a professional workspace',
    badge: 'Turn great work into trust', color: '#f8eddd',
  },
];

const GrowthExperience: React.FC = () => {
  const [active, setActive] = useState(0);
  const { mode } = useTheme();
  const reduceMotion = useReducedMotion();
  const dark = mode === 'dark';
  const current = steps[active];
  const fg = dark ? '#fff' : '#131313';
  const muted = dark ? '#b9b9b9' : '#515662';
  return (
    <section id="growth-story" className="section-padding relative overflow-hidden"
      style={{ background: dark ? '#11100d' : '#f7f7f2' }}>
      <Container maxWidth="lg" className="relative z-10">
        <motion.div initial={reduceMotion ? false : { opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }} className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-flex rounded-full border px-4 py-2 text-xs font-bold tracking-[.17em] uppercase text-primary border-primary/25 bg-primary/5">
            A connected growth engine
          </span>
          <h2 className="font-display text-[clamp(2rem,5vw,3.7rem)] leading-[1.07] font-extrabold mt-6" style={{ color: fg }}>
            One growth partner. <span className="text-primary">Five ways to win customers.</span>
          </h2>
          <p className="mt-5 text-base md:text-lg leading-relaxed" style={{ color: muted }}>
            Discover the services behind every successful customer journey. Select a service to explore how the pieces fit together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[.95fr,1.35fr] gap-5 lg:gap-8 items-stretch">
          <div role="tablist" aria-label="Explore Able Digital growth services" className="flex flex-col gap-2">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const selected = active === i;
              return (
                <motion.button key={step.id} type="button" role="tab" id={'growth-tab-'+step.id}
                  aria-selected={selected} aria-controls="growth-service-panel" onClick={() => setActive(i)}
                  whileHover={reduceMotion ? undefined : { x: 4 }}
                  className="w-full text-left flex items-center gap-3 sm:gap-4 rounded-2xl border p-4 sm:p-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
                  style={{
                    borderColor: selected ? '#D4AF37' : dark ? 'rgba(255,255,255,.09)' : 'rgba(0,0,0,.075)',
                    background: selected ? dark ? '#292113' : '#fff8e7' : dark ? '#1a1916' : '#fff',
                    boxShadow: selected ? '0 14px 40px -28px rgba(166,122,19,.65)' : 'none',
                  }}>
                  <span className="inline-flex items-center justify-center rounded-xl w-12 h-12 shrink-0"
                    style={{ color: selected ? '#131313' : '#D4AF37', background: selected ? '#D4AF37' : 'rgba(212,175,55,.11)' }}>
                    <Icon size={22} aria-hidden="true"/>
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-[10px] tracking-widest font-extrabold text-primary mb-1">{step.tag}</span>
                    <span className="block font-bold text-[.98rem] md:text-lg" style={{ color: fg }}>{step.name}</span>
                  </span>
                  <ArrowUpRight size={18} aria-hidden="true" style={{ color: selected ? '#D4AF37' : muted }} />
                </motion.button>
              );
            })}
          </div>

          <div className="relative rounded-[28px] border overflow-hidden min-h-[620px] sm:min-h-[650px]"
            style={{ borderColor: dark ? 'rgba(255,255,255,.1)' : '#e9e3d6', background: dark ? '#1a1916' : '#fff', boxShadow: '0 24px 65px -46px rgba(30,24,9,.55)' }}>
            <AnimatePresence mode="wait">
              <motion.div key={current.id} id="growth-service-panel" role="tabpanel"
                aria-labelledby={'growth-tab-'+current.id}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
                transition={{ duration: reduceMotion ? 0 : 0.32, ease: 'easeOut' }} className="h-full flex flex-col">
                <div className="relative h-[245px] sm:h-[300px] overflow-hidden">
                  <motion.img src={current.image} alt={current.alt} loading="lazy"
                    initial={reduceMotion ? false : { scale: 1.08 }}
                    animate={{ scale: 1 }} transition={{ duration: reduceMotion ? 0 : 0.75 }}
                    className="w-full h-full object-cover" />
                  <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg,transparent 55%,rgba(0,0,0,.46))' }} />
                  <div className="absolute bottom-4 left-5 flex items-center gap-2 rounded-full px-4 py-2"
                    style={{ background: current.color, color: '#161616', fontWeight: 700, fontSize: 12 }}>
                    <CheckCircle2 size={16}/>{current.badge}
                  </div>
                </div>
                <div className="p-6 sm:p-8 flex flex-col flex-1">
                  <p className="text-primary text-xs tracking-wider font-bold uppercase mb-3">{current.tag}</p>
                  <h3 className="font-display font-bold leading-tight text-2xl sm:text-3xl" style={{ color: fg }}>{current.headline}</h3>
                  <p className="mt-4 text-sm sm:text-base leading-relaxed" style={{ color: muted }}>{current.summary}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mt-5 mb-7">
                    {current.bullets.map((bullet) => <li key={bullet} className="flex items-start gap-2 text-sm" style={{ color: muted }}>
                      <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" aria-hidden="true"/>{bullet}
                    </li>)}
                  </ul>
                  <div className="mt-auto flex flex-wrap gap-4 items-center justify-between border-t pt-5" style={{ borderColor: dark ? 'rgba(255,255,255,.12)' : '#eee9df' }}>
                    <Link className="inline-flex items-center gap-2 font-bold text-primary no-underline" to="/contact">
                      Discuss this service <ArrowRight size={17}/>
                    </Link>
                    <span className="text-[11px]" style={{ color: muted }}>Illustrative stock photography</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default GrowthExperience;