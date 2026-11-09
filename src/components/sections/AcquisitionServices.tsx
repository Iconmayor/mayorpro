import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Search, MousePointerClick, CalendarCheck, Star } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const services = [
  { id:'01', Icon:Target, title:'Lead Generation & Customer Acquisition', outcome:'More qualified enquiries',
    description:'Reach people who are actively looking for the service you provide. We develop relevant offers, lead capture campaigns and a clear path from first enquiry to sales conversation.',
    points:['Buyer and competitor research','Lead acquisition campaigns','Lead source tracking'],
    photo:'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85',
    alt:'Business professionals discussing customer acquisition' },
  { id:'02', Icon:Search, title:'Google Ads & Local SEO', outcome:'More buyers discovering your business',
    description:'Get found when customers are ready to act. Combine Google Ads, Google Maps visibility and local search improvements based on your locations, services and budget.',
    points:['Google Ads campaign management','Google Business Profile optimization','Local SEO and service-area pages'],
    photo:'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85',
    alt:'Laptop showing online marketing analysis' },
  { id:'03', Icon:MousePointerClick, title:'Website & Landing Page Conversion', outcome:'More enquiries from existing traffic',
    description:'Turn your website into a helpful sales tool. Clear services, proof, mobile-friendly layouts and simple quote or appointment actions make the next step easy.',
    points:['Conversion-focused website design','Campaign landing pages','Calls, forms and quote request tracking'],
    photo:'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=85',
    alt:'Laptop at a professional web development workspace' },
  { id:'04', Icon:CalendarCheck, title:'CRM, Follow-Up & Booking Automation', outcome:'Fewer missed opportunities',
    description:'Organize leads in one pipeline and make follow-up easier. Connect enquiries with practical notification, appointment and message workflows appropriate to your team.',
    points:['CRM setup and lead pipeline','Email, WhatsApp or SMS follow-up','Appointment booking and lead tracking'],
    photo:'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=85',
    alt:'Professionals coordinating project tasks and client enquiries' },
  { id:'05', Icon:Star, title:'Reputation & Review Growth', outcome:'More trust and referrals',
    description:'Build confidence with real customer feedback. Improve how you request reviews, respond to comments and present the work that helps customers choose you.',
    points:['Genuine customer review requests','Reputation management guidance','Referral and trust-building opportunities'],
    photo:'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85',
    alt:'Colleagues collaborating on customer relationship strategy' },
];
const journey = [
  ['Attract','Help relevant buyers discover you'],
  ['Convert','Make enquiring simple and compelling'],
  ['Follow up','Respond and nurture enquiries consistently'],
  ['Book & measure','Track appointments and business outcomes'],
];

const AcquisitionServices: React.FC<{detailed?:boolean}> = ({detailed=false}) => {
  const {mode}=useTheme();
  const reduceMotion = useReducedMotion();
  const dark=mode==='dark', fg=dark?'#fff':'#101010', muted=dark?'#b8b8b8':'#4b5563';
  return <section id="customer-acquisition" className="section-padding">
    <Container maxWidth="lg">
      <div className="max-w-3xl mb-10 md:mb-14">
        <Typography sx={{color:'#D4AF37',fontWeight:800,letterSpacing:2,fontSize:12,mb:2,textTransform:'uppercase'}}>Five business outcomes. One connected growth system.</Typography>
        <Typography className="font-display" sx={{fontSize:{xs:'2rem',md:'2.8rem'},fontWeight:750,lineHeight:1.15,color:fg,mb:2}}>
          Don't just get a website. <span className="text-primary">Get a way to win more customers.</span>
        </Typography>
        <Typography sx={{color:muted,fontSize:'1.05rem',lineHeight:1.75}}>Each service is designed around a commercial result: more qualified enquiries, stronger buyer visibility, better conversion, fewer missed opportunities, and more customer trust.</Typography>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service,index)=>{
          const Icon=service.Icon;
          return <motion.article key={service.id} initial={reduceMotion ? false : { opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : (index % 2) * 0.09 }} className={'rounded-2xl overflow-hidden border flex flex-col group ' + (index===0?'md:grid md:grid-cols-2 md:col-span-2':'')}
            style={{background:dark?'#141414':'#fff',borderColor:dark?'rgba(255,255,255,.1)':'rgba(0,0,0,.09)'}}>
            <div className={'relative overflow-hidden '+(index===0?'min-h-[280px] md:min-h-[380px]':'h-[235px]')}>
              <img src={service.photo} loading="lazy" decoding="async" alt={service.alt} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <span className="absolute top-4 left-4 px-3 py-2 rounded-lg bg-primary text-black font-bold text-xs">SERVICE {service.id}</span>
            </div>
            <div className="p-6 md:p-8 flex flex-col flex-1">
              <div className="flex gap-3 items-start">
                <span className="w-12 h-12 flex items-center justify-center rounded-xl shrink-0 text-primary" style={{background:'rgba(212,175,55,.14)'}}><Icon size={23}/></span>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold leading-tight" style={{color:fg}}>{service.title}</h3>
                  <p className="text-primary font-semibold text-sm mt-2">{service.outcome}</p>
                </div>
              </div>
              <p className="mt-5 text-[.95rem] leading-relaxed" style={{color:muted}}>{service.description}</p>
              {detailed&&<ul className="mt-5 space-y-2">{service.points.map(point=><li key={point} className="text-sm flex gap-2" style={{color:muted}}><span className="text-primary">✓</span>{point}</li>)}</ul>}
              <Link to="/contact" className="mt-6 inline-flex items-center gap-2 font-semibold text-sm text-primary no-underline self-start">Discuss this service <ArrowRight size={15}/></Link>
            </div>
          </motion.article>;
        })}
      </div>
      <p className="text-xs text-right mt-3" style={{color:muted}}>Illustrative stock photography; not images of client results.</p>
      <div className="mt-16 md:mt-20 rounded-3xl p-7 md:p-10 border" style={{background:dark?'rgba(212,175,55,.055)':'rgba(212,175,55,.065)',borderColor:dark?'rgba(255,255,255,.09)':'rgba(0,0,0,.08)'}}>
        <p className="text-primary text-xs font-extrabold uppercase tracking-widest">How your growth system works</p>
        <h3 className="font-display text-2xl md:text-3xl font-bold mt-3 mb-8" style={{color:fg}}>From first discovery to booked appointment.</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {journey.map(([title,copy],i)=><div key={title}><span className="text-primary text-xs font-bold">0{i+1}</span><h4 className="font-semibold text-lg mt-2" style={{color:fg}}>{title}</h4><p className="text-sm mt-2 leading-relaxed" style={{color:muted}}>{copy}</p></div>)}
        </div>
        <Button component={Link} to="/contact" variant="contained" endIcon={<ArrowRight size={17}/>} sx={{mt:4,background:'#D4AF37',color:'#0a0a0a',fontWeight:700,px:3,py:1.4,borderRadius:2,'&:hover':{background:'#E8C547'}}}>Get a free growth audit</Button>
      </div>
    </Container>
  </section>;
};
export default AcquisitionServices;
