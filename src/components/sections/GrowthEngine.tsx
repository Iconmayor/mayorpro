import React from 'react';
import { motion } from 'framer-motion';
import { Container, Typography, Box } from '@mui/material';
import {
  Compass, ShieldCheck, Monitor, MapPin, Star, Sparkles, TrendingUp,
} from 'lucide-react';
import { growthEngine } from '@/data/growthEngine';
import { useTheme } from '@/context/ThemeContext';

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  Compass, ShieldCheck, Monitor, MapPin, Star, Sparkles, TrendingUp,
};

interface Props {
  detailed?: boolean;
}

const GrowthEngine: React.FC<Props> = ({ detailed = false }) => {
  const { mode } = useTheme();
  const isDark = mode === 'dark';

  return (
    <section className="section-padding" id="growth-engine">
      <Container maxWidth="lg">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Typography sx={{ color: '#D4AF37', fontWeight: 700, letterSpacing: 2, fontSize: '0.75rem', textTransform: 'uppercase', mb: 2 }}>
            The Able Digital Local Growth Engine™
          </Typography>
          <Typography
            className="font-display"
            sx={{
              fontSize: { xs: '2rem', md: '2.75rem' },
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              color: isDark ? '#fff' : '#0a0a0a',
              mb: 2,
            }}
          >
            One system. Seven phases. <span className="text-primary">Compounding growth.</span>
          </Typography>
          <Typography sx={{ color: isDark ? '#a0a0a0' : '#4b5563', fontSize: '1.05rem', lineHeight: 1.65 }}>
            Every phase is engineered to work with the next. Together they turn local search into booked jobs — month after month.
          </Typography>
        </div>

        <div className="relative">
          {/* Vertical connector line */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px"
            style={{ background: isDark ? 'rgba(212,175,55,0.15)' : 'rgba(212,175,55,0.25)' }}
          />

          <div className="space-y-10 md:space-y-16">
            {growthEngine.map((phase, i) => {
              const Icon = iconMap[phase.icon] || Compass;
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={phase.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5 }}
                  className="relative md:grid md:grid-cols-2 md:gap-16 items-center"
                >
                  {/* Node dot */}
                  <div
                    className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2"
                    style={{
                      top: 32,
                      backgroundColor: '#D4AF37',
                      borderColor: isDark ? '#0a0a0a' : '#fff',
                      boxShadow: '0 0 0 6px rgba(212,175,55,0.15)',
                    }}
                  />

                  <div className={left ? 'md:pr-12 md:text-right' : 'md:col-start-2 md:pl-12'}>
                    <Box
                      className={`p-6 md:p-8 rounded-2xl border ${left ? 'md:ml-auto' : ''}`}
                      sx={{
                        backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : '#fff',
                        borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
                        maxWidth: 520,
                      }}
                    >
                      <div className={`flex items-center gap-3 mb-4 ${left ? 'md:justify-end' : ''}`}>
                        <Box
                          className="w-10 h-10 rounded-lg flex items-center justify-center"
                          sx={{ backgroundColor: 'rgba(212,175,55,0.12)', color: '#D4AF37' }}
                        >
                          <Icon size={20} />
                        </Box>
                        <span className="text-xs font-bold tracking-widest text-primary">
                          PHASE {phase.number}
                        </span>
                      </div>
                      <Typography
                        sx={{
                          fontSize: '1.5rem',
                          fontWeight: 700,
                          color: isDark ? '#fff' : '#0a0a0a',
                          letterSpacing: '-0.01em',
                          mb: 1,
                        }}
                      >
                        {phase.name}
                      </Typography>
                      <Typography sx={{ color: '#D4AF37', fontWeight: 600, fontSize: '0.95rem', mb: 2 }}>
                        {phase.tagline}
                      </Typography>
                      <Typography sx={{ color: isDark ? '#b5b5b5' : '#4b5563', lineHeight: 1.65, fontSize: '0.95rem' }}>
                        {phase.description}
                      </Typography>

                      {detailed && (
                        <ul className={`mt-5 space-y-2 ${left ? 'md:text-right' : ''}`}>
                          {phase.deliverables.map((d) => (
                            <li
                              key={d}
                              className="text-sm"
                              style={{ color: isDark ? '#d0d0d0' : '#374151' }}
                            >
                              — {d}
                            </li>
                          ))}
                        </ul>
                      )}
                    </Box>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GrowthEngine;
