import React from 'react';
import { motion } from 'framer-motion';
import { Container, Typography, Box, Button, Chip } from '@mui/material';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { caseStudies } from '@/data/caseStudies';
import { useTheme } from '@/context/ThemeContext';

interface Props {
  full?: boolean;
}

const CaseStudies: React.FC<Props> = ({ full = false }) => {
  const { mode } = useTheme();
  const isDark = mode === 'dark';
  const items = full ? caseStudies : caseStudies.slice(0, 3);

  return (
    <section className="section-padding" id="case-studies">
      <Container maxWidth="lg">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div className="max-w-xl">
            <Typography sx={{ color: '#D4AF37', fontWeight: 700, letterSpacing: 2, fontSize: '0.75rem', textTransform: 'uppercase', mb: 2 }}>
              Case Studies
            </Typography>
            <Typography
              className="font-display"
              sx={{
                fontSize: { xs: '2rem', md: '2.75rem' },
                fontWeight: 700,
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                color: isDark ? '#fff' : '#0a0a0a',
              }}
            >
              Real operators. <span className="text-primary">Real results.</span>
            </Typography>
          </div>
          {!full && (
            <Button
              component={Link}
              to="/projects"
              variant="text"
              endIcon={<ArrowRight size={16} />}
              sx={{ color: '#D4AF37', fontWeight: 700 }}
            >
              View all case studies
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <Box
                className="rounded-2xl border overflow-hidden h-full flex flex-col"
                sx={{
                  backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : '#fff',
                  borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
                }}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <Chip
                      label={c.industry}
                      size="small"
                      sx={{ backgroundColor: 'rgba(212,175,55,0.95)', color: '#0a0a0a', fontWeight: 700, fontSize: '0.7rem' }}
                    />
                    <Chip
                      label={c.location}
                      size="small"
                      sx={{ backgroundColor: 'rgba(0,0,0,0.6)', color: '#fff', fontSize: '0.7rem' }}
                    />
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <Typography sx={{ fontSize: '1.15rem', fontWeight: 700, color: isDark ? '#fff' : '#0a0a0a', letterSpacing: '-0.01em', mb: 1.5 }}>
                    {c.title}
                  </Typography>
                  <Typography sx={{ color: isDark ? '#a0a0a0' : '#4b5563', fontSize: '0.9rem', lineHeight: 1.6, mb: 3 }}>
                    {c.headline}
                  </Typography>

                  <div className="mt-auto grid grid-cols-3 gap-2 pt-4 border-t" style={{ borderColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)' }}>
                    {c.results.map((r) => (
                      <div key={r.label}>
                        <div style={{ color: '#D4AF37', fontWeight: 700, fontSize: '1.05rem', letterSpacing: '-0.01em' }}>{r.metric}</div>
                        <div style={{ color: isDark ? '#8a8a8a' : '#6b7280', fontSize: '0.7rem', lineHeight: 1.3, marginTop: 2 }}>{r.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Box>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CaseStudies;
