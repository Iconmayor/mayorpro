import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Container, Typography, Box, Grid } from '@mui/material';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { aboutData } from '@/data/about';
import { useTheme } from '@/context/ThemeContext';

const About: React.FC = () => {
  const { mode } = useTheme();

  return (
    <>
      <Helmet>
        <title>About Us | ABLE DIGITAL Agency</title>
        <meta name="description" content="Learn more about ABLE DIGITAL Agency, a digital agency with expertise in web development, SEO, marketing, and AI automation." />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 section-padding">
          <Container maxWidth="lg">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <Typography 
                variant="h1" 
                className="font-display mb-4"
                sx={{ 
                  fontSize: { xs: '2rem', md: '3rem' },
                  fontWeight: 700,
                  color: mode === 'dark' ? '#fff' : '#0a0a0a',
                }}
              >
                About <span className="text-primary">Us</span>
              </Typography>
              <Typography 
                variant="body1"
                sx={{ 
                  color: mode === 'dark' ? '#a0a0a0' : '#666',
                  maxWidth: '600px',
                  mx: 'auto',
                }}
              >
                {aboutData.tagline}
              </Typography>
            </motion.div>

            {/* Main Content */}
            <Grid container spacing={8} alignItems="center">
              {/* Image */}
              <Grid size={{ xs: 12, md: 5 }}>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Box 
                    className="relative rounded-2xl overflow-hidden gold-glow"
                    sx={{ aspectRatio: '4/5' }}
                  >
                    <img
                      src={aboutData.images.profile}
                      alt="ABLE DIGITAL Agency"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </Box>
                </motion.div>
              </Grid>

              {/* Text Content */}
              <Grid size={{ xs: 12, md: 7 }}>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Typography 
                    variant="body1"
                    sx={{ 
                      color: mode === 'dark' ? '#e0e0e0' : '#333',
                      lineHeight: 1.8,
                      mb: 4,
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {aboutData.fullBio}
                  </Typography>

                  {/* Mission */}
                  <Box 
                    className="p-6 rounded-xl border"
                    sx={{
                      backgroundColor: mode === 'dark' ? 'rgba(212, 175, 55, 0.05)' : 'rgba(212, 175, 55, 0.08)',
                      borderColor: 'rgba(212, 175, 55, 0.2)',
                    }}
                  >
                    <Typography 
                      variant="h6" 
                      className="font-display mb-2"
                      sx={{ color: '#D4AF37' }}
                    >
                      Our Mission
                    </Typography>
                    <Typography 
                      variant="body2"
                      sx={{ 
                        color: mode === 'dark' ? '#a0a0a0' : '#666',
                        fontStyle: 'italic',
                      }}
                    >
                      "{aboutData.mission}"
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>

            {/* Expertise Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-20"
            >
              <Typography 
                variant="h2" 
                className="font-display text-center mb-12"
                sx={{ 
                  fontSize: { xs: '1.75rem', md: '2.25rem' },
                  fontWeight: 600,
                  color: mode === 'dark' ? '#fff' : '#0a0a0a',
                }}
              >
                Our <span className="text-primary">Expertise</span>
              </Typography>
              <Grid container spacing={4}>
                {aboutData.expertise.map((item, index) => (
                  <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                    >
                      <Box 
                        className="p-6 rounded-xl h-full card-hover border"
                        sx={{
                          backgroundColor: mode === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)',
                          borderColor: mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
                        }}
                      >
                        <Typography 
                          variant="h6" 
                          className="mb-2"
                          sx={{ 
                            color: '#D4AF37',
                            fontWeight: 600,
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Typography 
                          variant="body2"
                          sx={{ 
                            color: mode === 'dark' ? '#a0a0a0' : '#666',
                            lineHeight: 1.6,
                          }}
                        >
                          {item.description}
                        </Typography>
                      </Box>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Container>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default About;
