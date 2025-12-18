import React from 'react';
import { motion } from 'framer-motion';
import { Button, Container, Typography, Box } from '@mui/material';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { aboutData } from '@/data/about';
import { useTheme } from '@/context/ThemeContext';

const Hero: React.FC = () => {
  const { mode } = useTheme();

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background with gradient and texture */}
      <div 
        className="absolute inset-0 texture-overlay"
        style={{
          background: mode === 'dark'
            ? 'linear-gradient(135deg, hsl(0 0% 4%) 0%, hsl(0 0% 8%) 50%, hsl(43 74% 52% / 0.1) 100%)'
            : 'linear-gradient(135deg, hsl(0 0% 100%) 0%, hsl(0 0% 96%) 50%, hsl(43 74% 52% / 0.15) 100%)',
        }}
      />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

      <Container maxWidth="lg" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Box className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">Available for new projects</span>
              </Box>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Typography 
                variant="h1" 
                className="font-display mb-4"
                sx={{ 
                  fontSize: { xs: '2.25rem', md: '3.5rem', lg: '4rem' },
                  fontWeight: 700,
                  lineHeight: 1.1,
                  color: mode === 'dark' ? '#fff' : '#0a0a0a',
                }}
              >
                Hi, I'm{' '}
                <span className="text-primary">{aboutData.name}</span>
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Typography 
                variant="h2"
                sx={{ 
                  fontSize: { xs: '1.125rem', md: '1.5rem' },
                  fontWeight: 500,
                  color: mode === 'dark' ? '#a0a0a0' : '#666',
                  mb: 3,
                }}
              >
                {aboutData.title}
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Typography 
                variant="body1"
                sx={{ 
                  fontSize: { xs: '1rem', md: '1.125rem' },
                  color: mode === 'dark' ? '#a0a0a0' : '#666',
                  mb: 4,
                  maxWidth: '500px',
                  lineHeight: 1.7,
                }}
              >
                Helping businesses scale with smart digital systems, marketing, and automation.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                component={Link}
                to="/contact"
                variant="contained"
                size="large"
                startIcon={<Calendar size={18} />}
                sx={{
                  backgroundColor: '#D4AF37',
                  color: '#0a0a0a',
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: '#E8C547',
                  },
                }}
              >
                Get a Free Consultation
              </Button>
              <Button
                component="a"
                href="#services"
                variant="outlined"
                size="large"
                endIcon={<ArrowRight size={18} />}
                sx={{
                  borderColor: mode === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)',
                  color: mode === 'dark' ? '#fff' : '#0a0a0a',
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  '&:hover': {
                    borderColor: '#D4AF37',
                    backgroundColor: 'rgba(212, 175, 55, 0.1)',
                  },
                }}
              >
                View Services
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              {aboutData.stats.map((stat, index) => (
                <div key={index}>
                  <Typography 
                    variant="h4"
                    sx={{
                      fontSize: { xs: '1.5rem', md: '2rem' },
                      fontWeight: 700,
                      color: '#D4AF37',
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography 
                    variant="body2"
                    sx={{
                      color: mode === 'dark' ? '#a0a0a0' : '#666',
                      mt: 0.5,
                      fontSize: '0.875rem',
                    }}
                  >
                    {stat.label}
                  </Typography>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 scale-110" />
              <div className="absolute inset-0 rounded-full border border-primary/10 scale-125" />
              
              {/* Image container */}
              <div className="relative w-80 h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden gold-glow">
                <img
                  src={aboutData.images.profile}
                  alt={aboutData.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              
              {/* Gold accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-primary/20 blur-xl" />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
