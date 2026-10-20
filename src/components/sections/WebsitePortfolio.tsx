import React, { useState } from 'react';
import { Container, Typography, Chip } from '@mui/material';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { portfolioSites } from '@/data/portfolio';
import { useTheme } from '@/context/ThemeContext';

const WebsitePortfolio: React.FC<{ limit?: number }> = ({ limit }) => {
  const { mode } = useTheme();
  const isDark = mode === 'dark';
  const cats = ['All Projects', ...Array.from(new Set(portfolioSites.map((s) => s.category)))];
  const [active, setActive] = useState('All Projects');
  const filtered = active === 'All Projects' ? portfolioSites : portfolioSites.filter((s) => s.category === active);
  const list = limit ? filtered.slice(0, limit) : filtered;

  return (
    <section className="section-padding" id={limit ? "our-work" : "portfolio"}>
      <Container maxWidth="lg">
        <div className="mb-8 max-w-2xl">
          <Typography sx={{ color: '#D4AF37', fontWeight: 700, letterSpacing: 2, fontSize: '0.75rem', textTransform: 'uppercase', mb: 2 }}>
            {limit ? 'Our Work' : 'Website Portfolio'}
          </Typography>
          <Typography className="font-display" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1, color: isDark ? '#fff' : '#0a0a0a', mb: 2 }}>
            Websites by ABLE DIGITAL.
          </Typography>
          <Typography sx={{ color: isDark ? '#b5b5b5' : '#4b5563', fontSize: '1rem', lineHeight: 1.65 }}>
            Live websites across industries — click any project to visit it.
          </Typography>
        </div>

        {!limit && <div className="flex flex-wrap gap-2 mb-8">
          {cats.map((c) => (
            <Chip
              key={c}
              label={c}
              onClick={() => setActive(c)}
              sx={{
                fontWeight: 600,
                backgroundColor: active === c ? '#D4AF37' : isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)',
                color: active === c ? '#0a0a0a' : isDark ? '#d0d0d0' : '#374151',
                '&:hover': { backgroundColor: active === c ? '#E8C547' : 'rgba(212,175,55,0.2)' },
              }}
            />
          ))}
        </div>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((s) => (
            <div
              key={s.url}
              className="rounded-2xl border overflow-hidden flex flex-col"
              style={{ backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : '#fff', borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)' }}
            >
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="block relative aspect-[16/10] overflow-hidden group">
                {s.image ? (
                  <img src={s.image} alt={`${s.title} website homepage screenshot`} loading="lazy" decoding="async" width={1280} height={800} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-sm" style={{ background: 'rgba(212,175,55,0.08)', color: '#D4AF37' }}>Screenshot coming soon</div>
                )}
              </a>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span style={{ color: '#D4AF37', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{s.category}</span>
                  <span style={{ color: isDark ? '#7a7a7a' : '#9ca3af', fontSize: '0.7rem' }}>{s.status}</span>
                </div>
                <Typography sx={{ fontSize: '1.1rem', fontWeight: 700, color: isDark ? '#fff' : '#0a0a0a', mb: 1 }}>{s.title}</Typography>
                <Typography sx={{ color: isDark ? '#a0a0a0' : '#4b5563', fontSize: '0.9rem', lineHeight: 1.6, mb: 3 }}>{s.description}</Typography>
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex flex-col" style={{ color: '#D4AF37' }}>
                  <span className="inline-flex items-center gap-1 font-semibold text-sm">View Website <ArrowUpRight size={16} /></span>
                  <span className="text-xs opacity-70 break-all">{s.url}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
        {limit && (
          <div className="text-center mt-12">
            <Button component={Link} to="/projects" variant="outlined" size="large" endIcon={<ArrowRight size={18} />}
              sx={{ borderColor: '#D4AF37', color: '#D4AF37', px: 4, py: 1.5, fontWeight: 600, '&:hover': { borderColor: '#E8C547', backgroundColor: 'rgba(212,175,55,0.1)' } }}>
              View All {portfolioSites.length} Websites
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default WebsitePortfolio;
