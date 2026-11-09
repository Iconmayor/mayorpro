import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '@/context/ThemeContext';

// Pinterest is a discovery/reference library, not a licensed asset library.
// These are real stock photographs; external Pinterest searches open the visual
// inspiration for each service without republishing a pin or misrepresenting
// somebody else's work as an Able Digital client project.
const inspirations = [
  { title:'Google Ads campaign dashboards', category:'Paid Search & Lead Generation',
    outcome:'Understand spend, clicks and meaningful enquiries.',
    image:'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85',
    query:'google ads campaign dashboard screenshot',
    alt:'Real stock photograph of a computer showing business marketing analytics' },
  { title:'Google Business Profile & local SEO', category:'Search Visibility',
    outcome:'See how local discovery and customer actions are measured.',
    image:'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=85',
    query:'google business profile seo insights report',
    alt:'Real stock image showing data reporting on a digital screen' },
  { title:'Lead capture & landing-page funnels', category:'Customer Acquisition',
    outcome:'Explore focused forms and buyer journeys built around enquiries.',
    image:'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=85',
    query:'lead generation landing page form funnel design',
    alt:'Real photograph of a desktop web-development workspace' },
  { title:'CRM pipeline & opportunity tracking', category:'Lead Management',
    outcome:'Visualize a lead moving from first contact to appointment.',
    image:'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85',
    query:'crm sales pipeline kanban dashboard screenshot',
    alt:'Real stock photograph of a professional team planning work' },
  { title:'Booking & follow-up workflows', category:'Booking Automation',
    outcome:'Understand reminders, calendars and connected conversations.',
    image:'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=85',
    query:'appointment booking automation workflow dashboard',
    alt:'Real photograph of coworkers coordinating a business workflow' },
  { title:'Reviews & online reputation', category:'Trust & Retention',
    outcome:'See customer feedback presentation and review workflows.',
    image:'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85',
    query:'google reviews reputation management dashboard',
    alt:'Real stock photograph of professionals collaborating' },
];

const WorkShowcase: React.FC<{compact?:boolean}> = ({compact=false}) => {
  const {mode} = useTheme();
  const dark = mode==='dark';
  const muted = dark?'#b7b7b7':'#565b64';
  const items = compact?inspirations.slice(0,3):inspirations;
  return <section id="service-inspiration" className="section-padding" style={{background:dark?'#22201C':'#F5F2E9'}}>
    <Container maxWidth="lg">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">
        <div className="max-w-2xl">
          <Typography sx={{color:'#D4AF37',fontWeight:800,fontSize:'.75rem',letterSpacing:2,textTransform:'uppercase',mb:2}}>More Than Website Design</Typography>
          <Typography className="font-display" sx={{color:dark?'#fff':'#111',fontWeight:750,fontSize:{xs:'2rem',md:'2.7rem'},lineHeight:1.12,mb:2}}>Explore the systems behind <span className="text-primary">more customers.</span></Typography>
          <Typography sx={{color:muted,lineHeight:1.7}}>Visual references for the other services we provide, inspired by real dashboard and funnel examples found through Pinterest. These are reference concepts—not completed Able Digital client projects or performance screenshots.</Typography>
        </div>
        {compact && <Button component={Link} to="/projects" variant="outlined" endIcon={<ArrowRight size={17}/>} sx={{alignSelf:'start',borderColor:'#D4AF37',color:'#D4AF37',whiteSpace:'nowrap'}}>View all categories</Button>}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item,i)=><article key={item.title} className="rounded-3xl overflow-hidden border flex flex-col group" style={{background:dark?'#2C2924':'#FFFFFF',borderColor:dark?'rgba(212,175,55,.12)':'#E6E0D4',boxShadow:dark?'none':'0 16px 40px -34px rgba(20,20,20,.35)'}}>
          <div className="relative aspect-[16/10] overflow-hidden">
            <img src={item.image} alt={item.alt} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute top-4 left-4 rounded-full px-3 py-1.5 text-xs font-bold" style={{color:'#111',background:'#D4AF37'}}>{item.category}</div>
          </div>
          <div className="p-6 flex flex-col flex-1">
            <span className="text-xs font-bold tracking-wider uppercase mb-3" style={{color:'#b18e2c'}}>SERVICE REFERENCE / 0{i+1}</span>
            <h3 className="text-xl font-bold leading-snug" style={{color:dark?'#fff':'#101010'}}>{item.title}</h3>
            <p className="text-sm mt-3 mb-6 leading-relaxed flex-1" style={{color:muted}}>{item.outcome}</p>
            <a target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-semibold text-sm no-underline text-primary" href={'https://www.pinterest.com/search/pins/?q='+encodeURIComponent(item.query)}>
              Explore visual references on Pinterest <ArrowUpRight size={16}/>
            </a>
          </div>
        </article>)}
      </div>
    </Container>
  </section>;
};
export default WorkShowcase;
