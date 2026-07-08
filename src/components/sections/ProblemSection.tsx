import React from 'react';
import { motion } from 'framer-motion';
import { Container, Typography, Box } from '@mui/material';
import { EyeOff, MousePointerClick, Clock } from 'lucide-react';
import { problemPoints } from '@/data/positioning';
import { useTheme } from '@/context/ThemeContext';

const icons = [EyeOff, MousePointerClick, Clock];

const ProblemSection: React.FC = () => {
  const { mode } = useTheme();
  const isDark = mode === 'dark';

  return (
    <section className="section-padding">
      <Container maxWidth="lg">
        <div className="max-w-2xl mb-14">
          <Typography sx={{ color: '#D4AF37', fontWeight: 700, letterSpacing: 2, fontSize: '0.75rem', textTransform: 'uppercase', mb: 2 }}>
            The Problem
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
            Great work isn't enough if local customers can't <span className="text-primary">find you.</span>
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problemPoints.map((p, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Box
                  className="p-6 md:p-8 rounded-2xl h-full border"
                  sx={{
                    backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : '#fff',
                    borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
                  }}
                >
                  <Box
                    className="w-11 h-11 rounded-lg flex items-center justify-center mb-5"
                    sx={{ backgroundColor: 'rgba(212,175,55,0.12)', color: '#D4AF37' }}
                  >
                    <Icon size={22} />
                  </Box>
                  <Typography
                    sx={{
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      color: isDark ? '#fff' : '#0a0a0a',
                      mb: 1.5,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {p.title}
                  </Typography>
                  <Typography sx={{ color: isDark ? '#a0a0a0' : '#4b5563', lineHeight: 1.65, fontSize: '0.95rem' }}>
                    {p.body}
                  </Typography>
                </Box>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ProblemSection;
