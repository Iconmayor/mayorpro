import React from 'react';
import { motion } from 'framer-motion';
import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Calendar, Check } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const CTASection: React.FC = () => {
  const { mode } = useTheme();
  const isDark = mode === 'dark';

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi Able Digital — I'd like to book a strategy call for my home service business.");
    window.open(`https://wa.me/2349167587995?text=${message}`, '_blank');
  };

  return (
    <section className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: isDark
            ? 'radial-gradient(800px 400px at 50% 0%, rgba(212,175,55,0.10), transparent 60%), #0a0a0a'
            : 'radial-gradient(800px 400px at 50% 0%, rgba(212,175,55,0.15), transparent 60%), #ffffff',
        }}
      />
      <Container maxWidth="md" className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Box
            className="rounded-3xl p-8 md:p-14 text-center border"
            sx={{
              backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : '#fff',
              borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
              boxShadow: '0 40px 80px -40px rgba(212,175,55,0.25)',
            }}
          >
            <Typography sx={{ color: '#D4AF37', fontWeight: 700, letterSpacing: 2, fontSize: '0.75rem', textTransform: 'uppercase', mb: 2 }}>
              Free Strategy Call
            </Typography>
            <Typography
              className="font-display"
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 700,
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                color: isDark ? '#fff' : '#0a0a0a',
                mb: 3,
              }}
            >
              Book your free <span className="text-primary">Visibility Audit.</span>
            </Typography>
            <Typography sx={{ color: isDark ? '#b5b5b5' : '#4b5563', fontSize: '1.05rem', maxWidth: '540px', mx: 'auto', mb: 5, lineHeight: 1.65 }}>
              30 minutes. We'll show you exactly where your visibility gaps are, and what a Local Growth Engine would do for your business.
            </Typography>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl mx-auto mb-8 text-left">
              {[
                'Local market & competitor scan',
                'Google Business Profile review',
                '90-day growth roadmap',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <Check size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  <span style={{ color: isDark ? '#d0d0d0' : '#374151', fontSize: '0.9rem' }}>{item}</span>
                </div>
              ))}
            </div>

            <Box className="flex flex-col sm:flex-row items-center justify-center gap-3">
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
                  py: 1.6,
                  borderRadius: '10px',
                  fontWeight: 700,
                  '&:hover': { backgroundColor: '#E8C547' },
                }}
              >
                Book a Strategy Call
              </Button>
              <Button
                onClick={handleWhatsApp}
                variant="outlined"
                size="large"
                startIcon={<MessageCircle size={18} />}
                sx={{
                  borderColor: isDark ? 'rgba(255,255,255,0.18)' : 'rgba(0,0,0,0.18)',
                  color: isDark ? '#fff' : '#0a0a0a',
                  px: 4,
                  py: 1.6,
                  borderRadius: '10px',
                  fontWeight: 600,
                  '&:hover': { borderColor: '#25D366', color: '#25D366', backgroundColor: 'rgba(37,211,102,0.08)' },
                }}
              >
                Chat on WhatsApp
              </Button>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </section>
  );
};

export default CTASection;
