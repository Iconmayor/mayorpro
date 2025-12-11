import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Container, Typography, Box, Grid, IconButton } from '@mui/material';
import { Mail, MapPin, Phone, Linkedin, Github, Instagram, Twitter } from 'lucide-react';
import { toast } from 'sonner';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { socials } from '@/data/socials';
import { useTheme } from '@/context/ThemeContext';

const iconMap: Record<string, React.ReactNode> = {
  Linkedin: <Linkedin size={20} />,
  Twitter: <Twitter size={20} />,
  Github: <Github size={20} />,
  Instagram: <Instagram size={20} />,
  Mail: <Mail size={20} />,
};

const Contact: React.FC = () => {
  const { mode } = useTheme();

  return (
    <>
      <Helmet>
        <title>Contact | Alex Morgan - Digital Consultant</title>
        <meta name="description" content="Get in touch with me for web development, digital marketing, and automation services." />
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
                Let's <span className="text-primary">Connect</span>
              </Typography>
              <Typography 
                variant="body1"
                sx={{ 
                  color: mode === 'dark' ? '#a0a0a0' : '#666',
                  maxWidth: '600px',
                  mx: 'auto',
                }}
              >
                Have a project in mind? Let's discuss how I can help bring your vision to life.
              </Typography>
            </motion.div>

            <Grid container spacing={8}>
              {/* Contact Info */}
              <Grid size={{ xs: 12, md: 12 }}>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Box className="space-y-8">
                    {/* Contact Details */}
                    <Box>
                      <Typography 
                        variant="h5" 
                        className="mb-6"
                        sx={{ 
                          fontWeight: 600,
                          color: mode === 'dark' ? '#fff' : '#0a0a0a',
                        }}
                      >
                        Contact Details
                      </Typography>
                      <Box className="space-y-4">
                        <Box className="flex items-center gap-4">
                          <Box 
                            className="w-12 h-12 rounded-lg flex items-center justify-center"
                            sx={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }}
                          >
                            <Mail className="text-primary" size={20} />
                          </Box>
                          <Box>
                            <Typography 
                              variant="body2" 
                              sx={{ color: mode === 'dark' ? '#a0a0a0' : '#666' }}
                            >
                              Email
                            </Typography>
                            <Typography 
                              variant="body1" 
                              sx={{ color: mode === 'dark' ? '#fff' : '#0a0a0a', fontWeight: 500 }}
                            >
                              Iconmayor1@gmail.com
                            </Typography>
                          </Box>
                        </Box>

                        <Box className="flex items-center gap-4">
                          <Box 
                            className="w-12 h-12 rounded-lg flex items-center justify-center"
                            sx={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }}
                          >
                            <MapPin className="text-primary" size={20} />
                          </Box>
                          <Box>
                            <Typography 
                              variant="body2" 
                              sx={{ color: mode === 'dark' ? '#a0a0a0' : '#666' }}
                            >
                              Location
                            </Typography>
                            <Typography 
                              variant="body1" 
                              sx={{ color: mode === 'dark' ? '#fff' : '#0a0a0a', fontWeight: 500 }}
                            >
                             Remote
                            </Typography>
                          </Box>
                        </Box>

                        <Box className="flex items-center gap-4">
                          <Box 
                            className="w-12 h-12 rounded-lg flex items-center justify-center"
                            sx={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }}
                          >
                            <Phone className="text-primary" size={20} />
                          </Box>
                          <Box>
                            <Typography 
                              variant="body2" 
                              sx={{ color: mode === 'dark' ? '#a0a0a0' : '#666' }}
                            >
                              Phone
                            </Typography>
                            <Typography 
                              variant="body1" 
                              sx={{ color: mode === 'dark' ? '#fff' : '#0a0a0a', fontWeight: 500 }}
                            >
                              +234 916 758 7995
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>

                    {/* Social Links */}
                    <Box>
                      <Typography 
                        variant="h5" 
                        className="mb-4"
                        sx={{ 
                          fontWeight: 600,
                          color: mode === 'dark' ? '#fff' : '#0a0a0a',
                        }}
                      >
                        Follow Me
                      </Typography>
                      <Box className="flex gap-3">
                        {socials.map((social) => (
                          <IconButton
                            key={social.id}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              backgroundColor: mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                              color: mode === 'dark' ? '#a0a0a0' : '#666',
                              '&:hover': {
                                backgroundColor: 'rgba(212, 175, 55, 0.15)',
                                color: '#D4AF37',
                              },
                            }}
                          >
                            {iconMap[social.icon]}
                          </IconButton>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
            
          </Container>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
