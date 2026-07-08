import React from 'react';
import { motion } from 'framer-motion';
import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const CTASection: React.FC = () => {
  const { mode } = useTheme();

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in a free consultation for my business.");
    window.open(`https://wa.me/15551234567?text=${message}`, '_blank');
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: mode === 'dark'
            ? 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(10, 10, 10, 1) 50%, rgba(212, 175, 55, 0.05) 100%)'
            : 'linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(255, 255, 255, 1) 50%, rgba(212, 175, 55, 0.1) 100%)',
        }}
      />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />

      <Container maxWidth="md" className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Typography 
            variant="h2" 
            className="font-display mb-4"
            sx={{ 
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 700,
              color: mode === 'dark' ? '#fff' : '#0a0a0a',
              lineHeight: 1.2,
            }}
          >
            Ready to <span className="text-primary">Transform</span> Your Business?
          </Typography>
          
          <Typography 
            variant="body1"
            sx={{ 
              color: mode === 'dark' ? '#a0a0a0' : '#666',
              fontSize: '1.125rem',
              maxWidth: '500px',
              mx: 'auto',
              mb: 5,
              lineHeight: 1.7,
            }}
          >
            Let's discuss how we can help you achieve your goals. Get a free consultation today.
          </Typography>

          <Box className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              size="large"
              endIcon={<ArrowRight size={18} />}
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
              Get Free Consultation
            </Button>
            
            <Button
              onClick={handleWhatsApp}
              variant="outlined"
              size="large"
              startIcon={<MessageCircle size={18} />}
              sx={{
                borderColor: mode === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)',
                color: mode === 'dark' ? '#fff' : '#0a0a0a',
                px: 4,
                py: 1.5,
                fontWeight: 600,
                '&:hover': {
                  borderColor: '#25D366',
                  backgroundColor: 'rgba(37, 211, 102, 0.1)',
                  color: '#25D366',
                },
              }}
            >
              Chat on WhatsApp
            </Button>
          </Box>
        </motion.div>
      </Container>
    </section>
  );
};

export default CTASection;
