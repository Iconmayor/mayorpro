import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import GrowthEngine from '@/components/sections/GrowthEngine';
import CTASection from '@/components/sections/CTASection';
import FAQ from '@/components/sections/FAQ';
import { useTheme } from '@/context/ThemeContext';

const Services: React.FC = () => {
  const { mode } = useTheme();
  const isDark = mode === 'dark';

  return (
    <>
      <Helmet>
        <title>The Local Growth Engine™ | Able Digital</title>
        <meta name="description" content="Seven phases. One system. How Able Digital builds a complete Local Growth Engine for home service businesses in the United States." />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <section
            className="section-padding relative overflow-hidden"
            style={{
              background: isDark
                ? 'radial-gradient(1000px 500px at 50% -10%, rgba(212,175,55,0.10), transparent 60%), #0a0a0a'
                : 'radial-gradient(1000px 500px at 50% -10%, rgba(212,175,55,0.15), transparent 60%), #ffffff',
            }}
          >
            <Container maxWidth="md" className="text-center">
              <Typography sx={{ color: '#D4AF37', fontWeight: 700, letterSpacing: 2, fontSize: '0.75rem', textTransform: 'uppercase', mb: 2 }}>
                The Growth System
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
                The Able Digital <span className="text-primary">Local Growth Engine™</span>
              </Typography>
              <Typography sx={{ color: isDark ? '#b5b5b5' : '#4b5563', fontSize: '1.15rem', lineHeight: 1.6, mb: 5, maxWidth: 640, mx: 'auto' }}>
                Websites, Local SEO, Google Business Profile, reviews, and AI visibility — engineered as one system. Every phase compounds the next.
              </Typography>
              <div className="flex flex-wrap gap-3 justify-center">
                <Button
                  component={Link}
                  to="/contact"
                  variant="contained"
                  size="large"
                  startIcon={<Calendar size={18} />}
                  sx={{ backgroundColor: '#D4AF37', color: '#0a0a0a', px: 3.5, py: 1.6, borderRadius: '10px', fontWeight: 700, '&:hover': { backgroundColor: '#E8C547' } }}
                >
                  Book a Strategy Call
                </Button>
                <Button
                  component="a"
                  href="#growth-engine"
                  variant="outlined"
                  size="large"
                  endIcon={<ArrowRight size={18} />}
                  sx={{
                    borderColor: isDark ? 'rgba(255,255,255,0.18)' : 'rgba(0,0,0,0.18)',
                    color: isDark ? '#fff' : '#0a0a0a',
                    px: 3.5, py: 1.6, borderRadius: '10px', fontWeight: 600,
                    '&:hover': { borderColor: '#D4AF37', backgroundColor: 'rgba(212,175,55,0.08)' },
                  }}
                >
                  Explore the System
                </Button>
              </div>
            </Container>
          </section>

          <GrowthEngine detailed />
          <FAQ />
          <CTASection />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Services;
