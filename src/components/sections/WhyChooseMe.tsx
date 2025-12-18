import React from 'react';
import { motion } from 'framer-motion';
import { Container, Typography, Box, Grid } from '@mui/material';
import { 
  BarChart3, Layers, Award, Zap, Target, HeartHandshake 
} from 'lucide-react';
import { whyChooseUs } from '@/data/services';
import { useTheme } from '@/context/ThemeContext';

const iconMap: Record<string, React.ReactNode> = {
  BarChart3: <BarChart3 size={32} />,
  Layers: <Layers size={32} />,
  Award: <Award size={32} />,
  Zap: <Zap size={32} />,
  Target: <Target size={32} />,
  HeartHandshake: <HeartHandshake size={32} />,
};

const WhyChooseMe: React.FC = () => {
  const { mode } = useTheme();

  return (
    <section className="section-padding" id="why-choose">
      <Container maxWidth="lg">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
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
            Why Choose Us
          </Typography>
          <Typography 
            variant="h2" 
            className="font-display mb-4"
            sx={{ 
              fontSize: { xs: '2rem', md: '2.75rem' },
              fontWeight: 700,
              color: mode === 'dark' ? '#fff' : '#0a0a0a',
            }}
          >
            Your Success is Our <span className="text-primary">Priority</span>
          </Typography>
          <Typography 
            variant="body1"
            sx={{ 
              color: mode === 'dark' ? '#a0a0a0' : '#666',
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Partner with an agency that delivers measurable results
          </Typography>
        </motion.div>

        {/* Benefits Grid */}
        <Grid container spacing={4}>
          {whyChooseUs.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Box className="text-center p-6">
                  <Box 
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    sx={{ 
                      background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2) 0%, rgba(212, 175, 55, 0.1) 100%)',
                      color: '#D4AF37',
                    }}
                  >
                    {iconMap[item.icon]}
                  </Box>
                  
                  <Typography 
                    variant="h6" 
                    className="mb-2"
                    sx={{ 
                      fontWeight: 600,
                      color: mode === 'dark' ? '#fff' : '#0a0a0a',
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
      </Container>
    </section>
  );
};

export default WhyChooseMe;
