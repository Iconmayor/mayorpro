import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Container, Typography, Box, Grid, IconButton, Button } from '@mui/material';
import { Mail, MapPin, Phone, Linkedin, Github, Instagram, Twitter, MessageCircle, ArrowRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { socials } from '@/data/socials';
import { useTheme } from '@/context/ThemeContext';

const iconMap: Record<string, React.ReactNode> = {
  Linkedin: <Linkedin size={24} />,
  Twitter: <Twitter size={24} />,
  Github: <Github size={24} />,
  Instagram: <Instagram size={24} />,
  Mail: <Mail size={24} />,
};

const Contact: React.FC = () => {
  const { mode } = useTheme();

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in learning more about ABLE DIGITAL Agency services.");
    window.open(`https://wa.me/2349167587995?text=${message}`, '_blank');
  };

  const handleEmail = () => {
    window.location.href = 'mailto:Iconmayor1@gmail.com';
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | ABLE DIGITAL Agency</title>
        <meta name="description" content="Get in touch with ABLE DIGITAL Agency for web development, digital marketing, and automation services." />
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
                Have a project in mind? We'd love to hear from you. Reach out and let's discuss how we can help bring your vision to life.
              </Typography>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              <Button
                onClick={handleWhatsApp}
                variant="contained"
                size="large"
                startIcon={<MessageCircle size={20} />}
                sx={{
                  backgroundColor: '#25D366',
                  color: '#fff',
                  px: 5,
                  py: 2,
                  fontWeight: 600,
                  fontSize: '1rem',
                  '&:hover': {
                    backgroundColor: '#20bd5a',
                  },
                }}
              >
                Chat on WhatsApp
              </Button>
              <Button
                onClick={handleEmail}
                variant="outlined"
                size="large"
                startIcon={<Mail size={20} />}
                sx={{
                  borderColor: '#D4AF37',
                  color: '#D4AF37',
                  px: 5,
                  py: 2,
                  fontWeight: 600,
                  fontSize: '1rem',
                  '&:hover': {
                    borderColor: '#E8C547',
                    backgroundColor: 'rgba(212, 175, 55, 0.1)',
                  },
                }}
              >
                Send an Email
              </Button>
            </motion.div>

            <Grid container spacing={6} justifyContent="center">
              {/* Contact Cards */}
              <Grid size={{ xs: 12, md: 10, lg: 8 }}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Grid container spacing={4}>
                    {/* Email Card */}
                    <Grid size={{ xs: 12, sm: 4 }}>
                      <Box 
                        className="p-6 rounded-2xl text-center h-full card-hover border cursor-pointer"
                        onClick={handleEmail}
                        sx={{
                          backgroundColor: mode === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)',
                          borderColor: mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            borderColor: '#D4AF37',
                          }
                        }}
                      >
                        <Box 
                          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                          sx={{ 
                            background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2) 0%, rgba(212, 175, 55, 0.1) 100%)',
                          }}
                        >
                          <Mail className="text-primary" size={28} />
                        </Box>
                        <Typography 
                          variant="h6" 
                          className="mb-2"
                          sx={{ 
                            fontWeight: 600,
                            color: mode === 'dark' ? '#fff' : '#0a0a0a',
                          }}
                        >
                          Email Us
                        </Typography>
                        <Typography 
                          variant="body2"
                          sx={{ color: mode === 'dark' ? '#a0a0a0' : '#666' }}
                        >
                          Iconmayor1@gmail.com
                        </Typography>
                      </Box>
                    </Grid>

                    {/* Phone/WhatsApp Card */}
                    <Grid size={{ xs: 12, sm: 4 }}>
                      <Box 
                        className="p-6 rounded-2xl text-center h-full card-hover border cursor-pointer"
                        onClick={handleWhatsApp}
                        sx={{
                          backgroundColor: mode === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)',
                          borderColor: mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            borderColor: '#25D366',
                          }
                        }}
                      >
                        <Box 
                          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                          sx={{ 
                            background: 'linear-gradient(135deg, rgba(37, 211, 102, 0.2) 0%, rgba(37, 211, 102, 0.1) 100%)',
                          }}
                        >
                          <Phone className="text-[#25D366]" size={28} />
                        </Box>
                        <Typography 
                          variant="h6" 
                          className="mb-2"
                          sx={{ 
                            fontWeight: 600,
                            color: mode === 'dark' ? '#fff' : '#0a0a0a',
                          }}
                        >
                          Call / WhatsApp
                        </Typography>
                        <Typography 
                          variant="body2"
                          sx={{ color: mode === 'dark' ? '#a0a0a0' : '#666' }}
                        >
                          +234 916 758 7995
                        </Typography>
                      </Box>
                    </Grid>

                    {/* Location Card */}
                    <Grid size={{ xs: 12, sm: 4 }}>
                      <Box 
                        className="p-6 rounded-2xl text-center h-full border"
                        sx={{
                          backgroundColor: mode === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)',
                          borderColor: mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
                        }}
                      >
                        <Box 
                          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                          sx={{ 
                            background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2) 0%, rgba(212, 175, 55, 0.1) 100%)',
                          }}
                        >
                          <MapPin className="text-primary" size={28} />
                        </Box>
                        <Typography 
                          variant="h6" 
                          className="mb-2"
                          sx={{ 
                            fontWeight: 600,
                            color: mode === 'dark' ? '#fff' : '#0a0a0a',
                          }}
                        >
                          Location
                        </Typography>
                        <Typography 
                          variant="body2"
                          sx={{ color: mode === 'dark' ? '#a0a0a0' : '#666' }}
                        >
                          Remote (Worldwide)
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </motion.div>
              </Grid>

              {/* Social Links */}
              <Grid size={12}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-center mt-8"
                >
                  <Typography 
                    variant="h6" 
                    className="mb-6"
                    sx={{ 
                      fontWeight: 600,
                      color: mode === 'dark' ? '#fff' : '#0a0a0a',
                    }}
                  >
                    Follow Us
                  </Typography>
                  <Box className="flex justify-center gap-4">
                    {socials.map((social) => (
                      <IconButton
                        key={social.id}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          width: 56,
                          height: 56,
                          backgroundColor: mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                          color: mode === 'dark' ? '#a0a0a0' : '#666',
                          '&:hover': {
                            backgroundColor: 'rgba(212, 175, 55, 0.15)',
                            color: '#D4AF37',
                            transform: 'translateY(-4px)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        {iconMap[social.icon]}
                      </IconButton>
                    ))}
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
