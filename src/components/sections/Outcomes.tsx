import React from 'react';
import { motion } from 'framer-motion';
import { Container, Typography, Box } from '@mui/material';
import { outcomes } from '@/data/positioning';
import { useTheme } from '@/context/ThemeContext';

const Outcomes: React.FC = () => {
  const { mode } = useTheme();
  const isDark = mode === 'dark';

  return (
    <section
      className="section-padding"
      style={{ backgroundColor: isDark ? '#1C1A17' : '#FFFFFF' }}
    >
      <Container maxWidth="lg">
        <div className="max-w-2xl mb-14">
          <Typography sx={{ color: '#D4AF37', fontWeight: 700, letterSpacing: 2, fontSize: '0.75rem', textTransform: 'uppercase', mb: 2 }}>
            Outcomes
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
            The commercial outcomes we <span className="text-primary">work to improve.</span>
          </Typography>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {outcomes.map((o, i) => (
            <motion.div
              key={o.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Box
                className="p-6 md:p-7 rounded-2xl border h-full"
                sx={{
                  backgroundColor: isDark ? '#27241F' : '#F9F7F1',
                  borderColor: isDark ? 'rgba(212,175,55,0.12)' : '#E9E3D8',
                }}
              >
                <Typography sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, fontWeight: 700, color: '#D4AF37', letterSpacing: '-0.02em', lineHeight: 1 }}>
                  {o.metric}
                </Typography>
                <Typography sx={{ mt: 1.5, fontWeight: 600, color: isDark ? '#fff' : '#0a0a0a', fontSize: '1rem' }}>
                  {o.label}
                </Typography>
                <Typography sx={{ mt: 1, color: isDark ? '#a0a0a0' : '#6b7280', fontSize: '0.85rem', lineHeight: 1.5 }}>
                  {o.detail}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Outcomes;
