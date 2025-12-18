import React from 'react';
import { motion } from 'framer-motion';
import { Container, Typography, Box, Grid } from '@mui/material';
import { CheckCircle } from 'lucide-react';
import { aboutData } from '@/data/about';
import { useTheme } from '@/context/ThemeContext';

const AboutBrand: React.FC = () => {
  const { mode } = useTheme();

  const achievements = [
    "Strategic digital consulting",
    "Full-service marketing solutions",
    "Custom web development",
    "AI-powered automation",
    "Data-driven strategies",
    "Proven ROI results"
  ];

  return (
    <section className="section-padding" id="about">
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          {/* Image */}
          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Box 
                className="relative rounded-2xl overflow-hidden"
                sx={{ aspectRatio: '4/5' }}
              >
                <img
                  src={aboutData.images.profile}
                  alt="Digital Consultant"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Gold accent border */}
                <div 
                  className="absolute inset-0 rounded-2xl border-2 border-primary/30"
                  style={{ transform: 'translate(12px, 12px)', zIndex: -1 }}
                />
              </Box>
            </motion.div>
          </Grid>

          {/* Content */}
          <Grid size={{ xs: 12, md: 7 }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
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
                About The Brand
              </Typography>
              
              <Typography 
                variant="h2" 
                className="font-display mb-6"
                sx={{ 
                  fontSize: { xs: '1.75rem', md: '2.5rem' },
                  fontWeight: 700,
                  color: mode === 'dark' ? '#fff' : '#0a0a0a',
                  lineHeight: 1.2,
                }}
              >
                Helping Businesses Scale with{' '}
                <span className="text-primary">Smart Digital Systems</span>
              </Typography>
              
              <Typography 
                variant="body1"
                sx={{ 
                  color: mode === 'dark' ? '#a0a0a0' : '#666',
                  lineHeight: 1.8,
                  mb: 4,
                }}
              >
                {aboutData.shortBio} With a unique blend of technical expertise and marketing strategy, 
                I deliver end-to-end digital solutions that drive real business growth. From stunning 
                websites to automated marketing systems, every solution is crafted to maximize your ROI.
              </Typography>

              {/* Achievement list */}
              <Grid container spacing={2}>
                {achievements.map((item, index) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <Typography 
                        variant="body2"
                        sx={{ 
                          color: mode === 'dark' ? '#e0e0e0' : '#333',
                          fontWeight: 500,
                        }}
                      >
                        {item}
                      </Typography>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default AboutBrand;
