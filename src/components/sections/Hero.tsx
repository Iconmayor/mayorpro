import React from 'react';
import { motion } from 'framer-motion';
import { Button, Container, Typography, Box } from '@mui/material';
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { positioning, industries } from '@/data/positioning';
import { useTheme } from '@/context/ThemeContext';
import heroImage from '@/assets/hero-growth-engine.jpg';

const Hero: React.FC = () => {
  const { mode } = useTheme();
  const isDark = mode === 'dark';

  return (
    <section className="relative overflow-hidden pt-16 md:pt-24 pb-16 md:pb-24">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: isDark
            ? 'radial-gradient(1200px 600px at 80% -10%, rgba(212,175,55,0.10), transparent 60%), linear-gradient(180deg, hsl(0 0% 4%) 0%, hsl(0 0% 6%) 100%)'
            : 'radial-gradient(1200px 600px at 80% -10%, rgba(59,130,246,0.10), transparent 60%), linear-gradient(180deg, #ffffff 0%, #f7f8fb 100%)',
        }}
      />
      <div className="absolute -top-24 -right-24 w-[520px] h-[520px] rounded-full bg-primary/10 blur-3xl" />

      <Container maxWidth="lg" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* LEFT */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border"
                sx={{
                  borderColor: 'rgba(212, 175, 55, 0.35)',
                  backgroundColor: isDark ? 'rgba(212,175,55,0.08)' : 'rgba(212,175,55,0.10)',
                  mb: 3,
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-xs font-semibold tracking-wide text-primary uppercase">
                  {positioning.hero.eyebrow}
                </span>
              </Box>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="font-display"
              style={{
                fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                fontWeight: 700,
                color: isDark ? '#fff' : '#0a0a0a',
                marginBottom: '1.25rem',
              }}
            >
              Helping home service businesses generate{' '}
              <span className="text-primary">more qualified local leads.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                fontSize: '1.125rem',
                lineHeight: 1.6,
                color: isDark ? '#b5b5b5' : '#4b5563',
                maxWidth: '620px',
                marginBottom: '2rem',
              }}
            >
              {positioning.hero.sub}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex flex-wrap gap-3"
            >
              <Button
                component={Link}
                to={positioning.hero.primaryCta.href}
                variant="contained"
                size="large"
                startIcon={<Calendar size={18} />}
                sx={{
                  backgroundColor: '#D4AF37',
                  color: '#0a0a0a',
                  px: 3.5,
                  py: 1.6,
                  borderRadius: '10px',
                  fontWeight: 700,
                  boxShadow: '0 10px 30px -12px rgba(212,175,55,0.5)',
                  '&:hover': { backgroundColor: '#E8C547' },
                }}
              >
                {positioning.hero.primaryCta.label}
              </Button>
              <Button
                component={Link}
                to={positioning.hero.secondaryCta.href}
                variant="outlined"
                size="large"
                endIcon={<ArrowRight size={18} />}
                sx={{
                  borderColor: isDark ? 'rgba(255,255,255,0.18)' : 'rgba(0,0,0,0.18)',
                  color: isDark ? '#fff' : '#0a0a0a',
                  px: 3.5,
                  py: 1.6,
                  borderRadius: '10px',
                  fontWeight: 600,
                  '&:hover': {
                    borderColor: '#D4AF37',
                    backgroundColor: 'rgba(212,175,55,0.08)',
                  },
                }}
              >
                {positioning.hero.secondaryCta.label}
              </Button>
            </motion.div>

            {/* Trust bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-10"
            >
              <p
                className="text-xs uppercase tracking-widest mb-3"
                style={{ color: isDark ? '#8a8a8a' : '#6b7280', letterSpacing: '0.15em' }}
              >
                {positioning.hero.trustLine}
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {industries.slice(0, 8).map((i) => (
                  <span
                    key={i}
                    className="text-sm font-medium"
                    style={{ color: isDark ? '#c7c7c7' : '#374151' }}
                  >
                    {i}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT — Hero image */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-6"
          >
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-3xl blur-2xl opacity-60"
                style={{
                  background:
                    'radial-gradient(closest-side, rgba(59,130,246,0.25), transparent 70%)',
                }}
              />
              <div
                className="relative rounded-2xl overflow-hidden border"
                style={{
                  borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
                  boxShadow: isDark
                    ? '0 40px 80px -30px rgba(0,0,0,0.8)'
                    : '0 40px 80px -30px rgba(15,23,42,0.25)',
                }}
              >
                <img
                  src={heroImage}
                  alt="Able Digital Local Growth Engine dashboard preview"
                  width={1600}
                  height={1200}
                  className="w-full h-auto block"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
