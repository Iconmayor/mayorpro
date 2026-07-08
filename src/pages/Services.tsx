import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Container, Typography, Box, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { 
  Globe, Search, Share2, Users, Target, Palette, 
  Bot, TrendingUp, Workflow, ArrowRight, CheckCircle 
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CTASection from '@/components/sections/CTASection';
import { services } from '@/data/services';
import { useTheme } from '@/context/ThemeContext';

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe size={32} />,
  Search: <Search size={32} />,
  Share2: <Share2 size={32} />,
  Users: <Users size={32} />,
  Target: <Target size={32} />,
  Palette: <Palette size={32} />,
  Bot: <Bot size={32} />,
  TrendingUp: <TrendingUp size={32} />,
  Workflow: <Workflow size={32} />,
};

const Services: React.FC = () => {
  const { mode } = useTheme();

  return (
    <>
      <Helmet>
        <title>Services | ABLE DIGITAL Agency</title>
        <meta name="description" content="Comprehensive digital services including web development, SEO, social media marketing, lead generation, graphic design, and AI automation." />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {/* Hero Section */}
          <section 
            className="section-padding relative overflow-hidden"
            style={{
              background: mode === 'dark'
                ? 'linear-gradient(135deg, hsl(0 0% 4%) 0%, hsl(0 0% 8%) 50%, hsl(43 74% 52% / 0.1) 100%)'
                : 'linear-gradient(135deg, hsl(0 0% 100%) 0%, hsl(0 0% 96%) 50%, hsl(43 74% 52% / 0.15) 100%)',
            }}
          >
            <Container maxWidth="lg">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-3xl mx-auto"
              >
                <Typography 
                  variant="overline"
                  sx={{ 
                    color: '#D4AF37',
                    fontWeight: 600,
                    letterSpacing: 2,
                    mb: 2,
                    display: 'block'
                  }}
                >
                  What We Offer
                </Typography>
                <Typography 
                  variant="h1" 
                  className="font-display mb-4"
                  sx={{ 
                    fontSize: { xs: '2rem', md: '3rem' },
                    fontWeight: 700,
                    color: mode === 'dark' ? '#fff' : '#0a0a0a',
                  }}
                >
                  Digital Services That <span className="text-primary">Drive Growth</span>
                </Typography>
                <Typography 
                  variant="body1"
                  sx={{ 
                    color: mode === 'dark' ? '#a0a0a0' : '#666',
                    fontSize: '1.125rem',
                  }}
                >
                  End-to-end digital solutions designed to help your business thrive in the modern landscape
                </Typography>
              </motion.div>
            </Container>
          </section>

          {/* Services List */}
          <section className="section-padding">
            <Container maxWidth="lg">
              <div className="space-y-16">
                {services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                  >
                    <Grid 
                      container 
                      spacing={6} 
                      alignItems="center"
                      direction={index % 2 === 0 ? 'row' : 'row-reverse'}
                    >
                      {/* Icon/Visual */}
                      <Grid size={{ xs: 12, md: 4 }}>
                        <Box 
                          className="w-full aspect-square max-w-xs mx-auto rounded-2xl flex items-center justify-center"
                          sx={{ 
                            background: mode === 'dark' 
                              ? 'linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(212, 175, 55, 0.05) 100%)'
                              : 'linear-gradient(135deg, rgba(212, 175, 55, 0.2) 0%, rgba(212, 175, 55, 0.08) 100%)',
                            border: '1px solid',
                            borderColor: 'rgba(212, 175, 55, 0.2)',
                          }}
                        >
                          <Box sx={{ color: '#D4AF37', transform: 'scale(3)' }}>
                            {iconMap[service.icon] || <Globe size={32} />}
                          </Box>
                        </Box>
                      </Grid>

                      {/* Content */}
                      <Grid size={{ xs: 12, md: 8 }}>
                        <Typography 
                          variant="overline"
                          sx={{ 
                            color: '#D4AF37',
                            fontWeight: 600,
                            letterSpacing: 1,
                            mb: 1,
                            display: 'block'
                          }}
                        >
                          {service.category}
                        </Typography>
                        <Typography 
                          variant="h3" 
                          className="mb-3"
                          sx={{ 
                            fontSize: { xs: '1.5rem', md: '2rem' },
                            fontWeight: 700,
                            color: mode === 'dark' ? '#fff' : '#0a0a0a',
                          }}
                        >
                          {service.title}
                        </Typography>
                        <Typography 
                          variant="body1"
                          sx={{ 
                            color: mode === 'dark' ? '#a0a0a0' : '#666',
                            mb: 3,
                            lineHeight: 1.7,
                          }}
                        >
                          {service.description}
                        </Typography>

                        {/* Benefits */}
                        <Grid container spacing={2}>
                          {service.benefits.map((benefit, bIndex) => (
                            <Grid size={{ xs: 12, sm: 6 }} key={bIndex}>
                              <Box className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                                <Typography 
                                  variant="body2"
                                  sx={{ 
                                    color: mode === 'dark' ? '#e0e0e0' : '#333',
                                    fontWeight: 500,
                                  }}
                                >
                                  {benefit}
                                </Typography>
                              </Box>
                            </Grid>
                          ))}
                        </Grid>
                      </Grid>
                    </Grid>

                    {/* Divider */}
                    {index < services.length - 1 && (
                      <Box 
                        className="mt-16"
                        sx={{ 
                          borderBottom: '1px solid',
                          borderColor: mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
                        }}
                      />
                    )}
                  </motion.div>
                ))}
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

export default Services;
