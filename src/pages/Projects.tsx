import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Typography, Box, Grid, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CTASection from '@/components/sections/CTASection';
import WebsitePortfolio from '@/components/sections/WebsitePortfolio';
import WorkShowcase from '@/components/sections/WorkShowcase';
import { caseStudies } from '@/data/caseStudies';
import { projects } from '@/data/projects';
import { useTheme } from '@/context/ThemeContext';

const Projects: React.FC = () => {
  const { mode } = useTheme();
  const isDark = mode === 'dark';

  return (
    <>
      <Helmet>
        <title>Our Work | Websites, Google Ads, SEO, CRM & Lead Generation | Able Digital</title>
        <meta name="description" content="Explore website references and illustrative service examples for lead generation, Google Ads, local SEO, landing pages, CRM automation and reputation." />
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
                Our Work
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
                Beyond websites. <span className="text-primary">Built for business growth.</span>
              </Typography>
              <Typography sx={{ color: isDark ? '#b5b5b5' : '#4b5563', fontSize: '1.1rem', lineHeight: 1.6, maxWidth: 620, mx: 'auto' }}>
                Explore website references and illustrative service examples covering customer acquisition, paid advertising, Local SEO, conversion, CRM, bookings and reputation. Client delivery claims are clearly distinguished from examples.
              </Typography>
            </Container>
          </section>

          <WorkShowcase />
          <WebsitePortfolio />

          <CTASection />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Projects;
