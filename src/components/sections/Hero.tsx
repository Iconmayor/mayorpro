import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, CalendarCheck2, CheckCircle2, MessageCircle, Search, MousePointerClick, Sparkles } from 'lucide-react';
import { positioning } from '@/data/positioning';


const rotating = ['booked jobs.', 'paying customers.', 'real growth.'];
const journey = [
  { name: 'Attract', desc: 'Google Ads + Local SEO', Icon: Search },
  { name: 'Convert', desc: 'Website + lead forms', Icon: MousePointerClick },
  { name: 'Follow up', desc: 'CRM + messaging', Icon: MessageCircle },
  { name: 'Book', desc: 'Appointments + insights', Icon: CalendarCheck2 },
];

const Hero: React.FC = () => {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (reduced) return;
    const timer = window.setInterval(() => setIndex(i => (i + 1) % rotating.length), 3500);
    return () => window.clearInterval(timer);
  }, [reduced]);
  // The premium hero remains dark in both themes to create a strong editorial anchor.
  const dark = true;
  const fg = dark ? '#fff' : '#141414';
  const muted = dark ? '#b9b9b9' : '#505866';
  const border = dark ? 'rgba(255,255,255,.11)' : 'rgba(0,0,0,.09)';

  return <section className="relative overflow-hidden pt-20 md:pt-28 pb-16 md:pb-24">
    <div className="absolute inset-0 pointer-events-none" style={{background:dark
      ? 'radial-gradient(ellipse at 50% 45%,rgba(212,175,55,.09),transparent 64%),#0a0a0a'
      : 'radial-gradient(ellipse at 50% 62%,rgba(237,201,108,.15),transparent 66%),linear-gradient(#fff,#fbfaf7)'}} />
    <Container maxWidth="lg" className="relative z-10">
      <div className="text-center max-w-[900px] mx-auto">
        <motion.div initial={reduced?false:{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:.5}}
          className="inline-flex items-center gap-2 rounded-full border px-4 py-2"
          style={{borderColor:'rgba(212,175,55,.35)',background:dark?'rgba(212,175,55,.09)':'#fff7e4'}}>
          <span className="able-pulse-dot h-2 w-2 rounded-full bg-primary"/>
          <span className="text-[11px] sm:text-xs tracking-[.12em] font-bold text-primary">THE ABLE DIGITAL GROWTH ENGINE</span>
          <ArrowUpRight size={15} className="text-primary"/>
        </motion.div>
        <motion.h1 initial={reduced?false:{opacity:0,y:26}} animate={{opacity:1,y:0}} transition={{duration:.65,delay:.08}}
          className="font-display text-[clamp(2.5rem,6.5vw,5.8rem)] font-extrabold leading-[1.08] tracking-[-.045em] mt-7"
          style={{color:fg}}>
          More qualified leads.<br/>
          More <span className="inline-block text-primary align-bottom" style={{minWidth:'min(71vw,435px)',textAlign:'left'}}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.span key={rotating[index]} className="inline-block"
                initial={reduced?false:{opacity:0,y:18,filter:'blur(5px)'}}
                animate={{opacity:1,y:0,filter:'blur(0px)'}}
                exit={reduced?undefined:{opacity:0,y:-14,filter:'blur(5px)'}}
                transition={{duration:reduced?0:.34}}>{rotating[index]}</motion.span>
            </AnimatePresence>
          </span>
        </motion.h1>
        <motion.p initial={reduced?false:{opacity:0,y:19}} animate={{opacity:1,y:0}} transition={{duration:.6,delay:.16}}
          className="mx-auto max-w-[700px] mt-6 text-base sm:text-lg md:text-xl leading-[1.7]" style={{color:muted}}>
          {positioning.hero.sub}
        </motion.p>
        <motion.div initial={reduced?false:{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.6,delay:.24}}
          className="flex flex-wrap gap-3 justify-center mt-8">
          <Button component={Link} to="/contact" variant="contained" endIcon={<ArrowRight size={18}/>}
            sx={{background:'#D4AF37',color:'#111',fontWeight:800,textTransform:'none',borderRadius:3,px:3,py:1.65,
              boxShadow:'0 14px 35px -18px rgba(212,175,55,.7)','&:hover':{background:'#eec84e',transform:'translateY(-2px)'}}}>
            Get a Free Growth Audit
          </Button>
          <Button component="a" href="#growth-story" variant="outlined"
            sx={{fontWeight:700,textTransform:'none',borderRadius:3,px:3,py:1.65,
              borderColor:dark?'rgba(255,255,255,.28)':'#d3c8ae',color:fg,'&:hover':{borderColor:'#D4AF37',background:'rgba(212,175,55,.08)'}}}>
            See how it works
          </Button>
        </motion.div>
        <p className="mt-5 text-xs sm:text-sm" style={{color:muted}}>For home services, contractors and ambitious local businesses.</p>
      </div>

      <motion.div initial={reduced?false:{opacity:0,y:55,scale:.97}} animate={{opacity:1,y:0,scale:1}}
        transition={{duration:.8,delay:.3,ease:[.21,1,.36,1]}} className="relative mt-14 md:mt-20 max-w-5xl mx-auto">
        <div className="absolute -inset-6 blur-3xl opacity-50 pointer-events-none" style={{background:'radial-gradient(ellipse,rgba(212,175,55,.31),transparent 72%)'}}/>
        <div className="relative rounded-[26px] overflow-hidden border"
          style={{background:dark?'#181715':'#fff',borderColor:border,boxShadow:'0 33px 85px -42px rgba(20,16,8,.44)'}}>
          <div className="flex items-center justify-between gap-2 px-4 sm:px-7 py-4 border-b" style={{borderColor:border}}>
            <div className="flex items-center gap-3">
              <img src="/brand/able-digital-logo.webp" alt="" className="h-9 w-9 rounded-lg object-cover" width={36} height={36}/>
              <div>
                <p className="text-sm font-bold" style={{color:fg}}>Able Digital <span className="hidden sm:inline">Growth Journey</span></p>
                <p className="text-[11px]" style={{color:muted}}>Illustrative customer acquisition experience</p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-bold px-3 py-2 rounded-full"
              style={{background:dark?'#2b251b':'#f8edce',color:dark?'#f1cd74':'#886716'}}><Sparkles size={13}/> WORKFLOW</span>
          </div>
          <div className="grid md:grid-cols-[170px_1fr]">
            <aside className="hidden md:flex flex-col gap-1 p-4 border-r" style={{borderColor:border,background:dark?'#121110':'#faf9f5'}}>
              <p className="uppercase tracking-widest text-[10px] font-bold px-3 py-2" style={{color:muted}}>Growth dashboard</p>
              {journey.map(({name,Icon},i)=><div key={name}
                className="flex items-center gap-2 rounded-lg px-3 py-3 text-xs font-semibold"
                style={{background:i===0?dark?'#302719':'#fff0ca':'transparent',color:i===0?'#D4AF37':muted}}>
                <Icon size={15}/>{name}</div>)}
              <div className="mt-auto p-3 text-[11px] leading-relaxed" style={{color:muted}}>Discovery → Enquiry → Booking</div>
            </aside>
            <div className="px-4 sm:px-7 py-6 sm:py-9">
              <div className="flex items-start justify-between gap-3 mb-7">
                <div><p className="text-primary tracking-widest text-[10px] font-bold mb-2">YOUR CUSTOMER JOURNEY</p>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight" style={{color:fg}}>From search to booked customer.</h2>
                </div>
                <span className="hidden sm:flex items-center gap-1 text-xs rounded-lg p-2" style={{background:dark?'#282620':'#f6f3eb',color:muted}}>
                  <CheckCircle2 size={15} className="text-primary"/>One connected process
                </span>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {journey.map(({name,desc,Icon},i)=><motion.div key={name} initial={reduced?false:{opacity:0,y:20}} animate={{opacity:1,y:0}}
                  transition={{duration:.4,delay:reduced?0:.65+i*.12}} className="rounded-xl p-3 sm:p-4 border"
                  style={{background:dark?'#22201b':'#fffdf8',borderColor:border}}>
                  <div className="flex items-center justify-between"><span className="text-primary font-bold text-xs">0{i+1}</span><Icon size={18} className="text-primary"/></div>
                  <p className="text-sm sm:text-base font-bold mt-4" style={{color:fg}}>{name}</p>
                  <p className="text-[11px] sm:text-xs leading-relaxed mt-1" style={{color:muted}}>{desc}</p>
                </motion.div>)}
              </div>
              <div className="mt-5 rounded-xl border p-4 sm:p-6" style={{borderColor:border,background:dark?'#1c1a16':'#faf8f2'}}>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div><p className="text-sm font-bold" style={{color:fg}}>An end-to-end growth system</p>
                    <p className="text-xs mt-1" style={{color:muted}}>Each stage makes the next one easier.</p></div>
                  <span className="text-[10px] text-primary font-bold">DEMO PROCESS</span>
                </div>
                <div className="grid grid-cols-4 gap-1.5 sm:gap-3">
                  {journey.map(({name},i)=><div key={name}>
                    <motion.div initial={reduced?false:{scaleX:0}} animate={{scaleX:1}}
                      transition={{duration:.55,delay:reduced?0:1+i*.15}}
                      className="h-3 sm:h-4 rounded-full" style={{background:['#efdb9c','#e9c86f','#d4af37','#a48027'][i],transformOrigin:'left'}}/>
                    <p className="text-[10px] sm:text-xs mt-2 font-semibold" style={{color:muted}}>{name}</p>
                  </div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
        <motion.div initial={reduced?false:{opacity:0,x:24}} animate={{opacity:1,x:0}} transition={{delay:.9}}
          className="hidden sm:flex absolute -bottom-5 -right-3 md:-right-6 gap-3 rounded-xl border px-4 py-3 items-center backdrop-blur-xl"
          style={{background:dark?'rgba(37,31,20,.97)':'rgba(255,255,255,.97)',borderColor:dark?'#53401f':'#e9d49c',boxShadow:'0 18px 45px -25px #0006'}}>
          <span className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/15"><CalendarCheck2 size={22} className="text-primary"/></span>
          <div><p className="text-sm font-bold" style={{color:fg}}>Enquiry → Appointment</p>
            <p className="text-xs" style={{color:muted}}>A better path to real customers</p></div>
        </motion.div>
      </motion.div>
      <p className="text-center mt-10 text-xs" style={{color:muted}}>Concept illustration only. This is not a live client dashboard or claim of campaign performance.</p>
    </Container>
  </section>;
};
export default Hero;