import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Container, Typography, Box } from '@mui/material';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CTASection from '@/components/sections/CTASection';
import { aboutData } from '@/data/about';
import { industries } from '@/data/positioning';
import { useTheme } from '@/context/ThemeContext';

const About: React.FC = () => {
  const { mode } = useTheme();
  const isDark = mode === 'dark';

  return (
    <>
      <Helmet>
        <title>About Able Digital — Growth Partner for Home Service Businesses</title>
        <meta name="description" content="Able Digital is the growth partner for home service businesses in the United States. Systems, not tactics. Meet the studio behind the Local Growth Engine." />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <section
            className="section-padding"
            style={{
              background: isDark
                ? 'radial-gradient(900px 500px at 50% -10%, rgba(212,175,55,0.10), transparent 60%), #0a0a0a'
                : 'radial-gradient(900px 500px at 50% -10%, rgba(212,175,55,0.15), transparent 60%), #ffffff',
            }}
          >
            <Container maxWidth="md" className="text-center">
              <Typography sx={{ color: '#D4AF37', fontWeight: 700, letterSpacing: 2, fontSize: '0.75rem', textTransform: 'uppercase', mb: 2 }}>
                About Able Digital
              </Typography>
              <Typography
                className="font-display"
                sx={{
                  fontSize: { xs: '2.25rem', md: '3.5rem' },
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.05,
                  color: isDark ? '#fff' : '#0a0a0a',
                  mb: 3,
                }}
              >
                A growth partner built for <span className="text-primary">home service.</span>
              </Typography>
              <Typography sx={{ color: isDark ? '#b5b5b5' : '#4b5563', fontSize: '1.15rem', lineHeight: 1.65, maxWidth: 640, mx: 'auto' }}>
                {aboutData.shortBio}
              </Typography>
            </Container>
          </section>

          <section className="section-padding">
            <Container maxWidth="md">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Typography
                  sx={{
                    whiteSpace: 'pre-line',
                    color: isDark ? '#c7c7c7' : '#374151',
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                  }}
                >
                  {aboutData.fullBio}
                </Typography>
              </motion.div>

              <Box
                className="mt-14 p-8 rounded-2xl border"
                sx={{
                  borderColor: 'rgba(212,175,55,0.3)',
                  backgroundColor: isDark ? 'rgba(212,175,55,0.06)' : 'rgba(212,175,55,0.08)',
                }}
              >
                <Typography sx={{ color: '#D4AF37', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', mb: 2 }}>
                  Our Mission
                </Typography>
                <Typography sx={{ fontSize: '1.35rem', lineHeight: 1.5, color: isDark ? '#fff' : '#0a0a0a', fontWeight: 500, letterSpacing: '-0.01em' }}>
                  {aboutData.mission}
                </Typography>
              </Box>
            </Container>
          </section>

          {/* Principles */}
          <section
            className="section-padding"
            style={{ backgroundColor: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)' }}
          >
            <Container maxWidth="lg">
              <div className="max-w-2xl mb-12">
                <Typography sx={{ color: '#D4AF37', fontWeight: 700, letterSpacing: 2, fontSize: '0.75rem', textTransform: 'uppercase', mb: 2 }}>
                  Principles
                </Typography>
                <Typography className="font-display" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1, color: isDark ? '#fff' : '#0a0a0a' }}>
                  How we operate.
                </Typography>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {aboutData.principles.map((p, i) => (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    <Box
                      className="p-6 rounded-2xl border h-full"
                      sx={{
                        backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : '#fff',
                        borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
                      }}
                    >
                      <Typography sx={{ fontSize: '1.1rem', fontWeight: 700, color: isDark ? '#fff' : '#0a0a0a', mb: 1, letterSpacing: '-0.01em' }}>
                        {p.title}
                      </Typography>
                      <Typography sx={{ color: isDark ? '#a0a0a0' : '#4b5563', fontSize: '0.95rem', lineHeight: 1.6 }}>
                        {p.description}
                      </Typography>
                    </Box>
                  </motion.div>
                ))}
              </div>
            </Container>
          </section>

          {/* Who we serve */}
          <section className="section-padding">
            <Container maxWidth="lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <Typography sx={{ color: '#D4AF37', fontWeight: 700, letterSpacing: 2, fontSize: '0.75rem', textTransform: 'uppercase', mb: 2 }}>
                    Who we serve
                  </Typography>
                  <Typography className="font-display" sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' }, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15, color: isDark ? '#fff' : '#0a0a0a', mb: 3 }}>
                    Home service operators in the United States.
                  </Typography>
                  <Typography sx={{ color: isDark ? '#b5b5b5' : '#4b5563', fontSize: '1rem', lineHeight: 1.7, mb: 3 }}>
                    Established businesses, 3–50 employees, already generating revenue, ready to compound growth through disciplined systems.
                  </Typography>
                  <div className="flex flex-wrap gap-2">
                    {industries.map((i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-full text-xs font-semibold border"
                        style={{
                          borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)',
                          color: isDark ? '#d0d0d0' : '#374151',
                        }}
                      >
                        {i}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <Typography sx={{ color: '#D4AF37', fontWeight: 700, letterSpacing: 2, fontSize: '0.75rem', textTransform: 'uppercase', mb: 2 }}>
                    Who we don't
                  </Typography>
                  <Typography className="font-display" sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' }, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15, color: isDark ? '#fff' : '#0a0a0a', mb: 3 }}>
                    Fit matters more than fee.
                  </Typography>
                  <ul className="space-y-3">
                    {[
                      'Businesses looking for a cheap website with no strategy.',
                      'Owners who want to "just try SEO for a month".',
                      'Industries outside U.S. home service.',
                      'Anyone unwilling to commit to a growth system.',
                    ].map((s) => (
                      <li key={s} className="flex items-start gap-3" style={{ color: isDark ? '#b5b5b5' : '#4b5563', fontSize: '0.98rem', lineHeight: 1.6 }}>
                        <span style={{ color: '#D4AF37', fontWeight: 700 }}>—</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Container>
          </section>

          <CTASection />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default About;
