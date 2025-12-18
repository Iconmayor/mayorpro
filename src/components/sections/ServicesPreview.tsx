import React from 'react';
import { motion } from 'framer-motion';
import { Container, Typography, Box, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { 
  Globe, Search, Share2, Users, Target, Palette, 
  Bot, TrendingUp, Workflow, ArrowRight 
} from 'lucide-react';
import { services } from '@/data/services';
import { useTheme } from '@/context/ThemeContext';

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe size={28} />,
  Search: <Search size={28} />,
  Share2: <Share2 size={28} />,
  Users: <Users size={28} />,
  Target: <Target size={28} />,
  Palette: <Palette size={28} />,
  Bot: <Bot size={28} />,
  TrendingUp: <TrendingUp size={28} />,
  Workflow: <Workflow size={28} />,
};

const ServicesPreview: React.FC = () => {
  const { mode } = useTheme();
  const displayedServices = services.slice(0, 6);

  return (
    <section 
      className="section-padding" 
      id="services"
      style={{
        backgroundColor: mode === 'dark' ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)',
      }}
    >
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
            What I Offer
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
            Services That <span className="text-primary">Drive Results</span>
          </Typography>
          <Typography 
            variant="body1"
            sx={{ 
              color: mode === 'dark' ? '#a0a0a0' : '#666',
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Comprehensive digital solutions tailored to scale your business
          </Typography>
        </motion.div>

        {/* Services Grid */}
        <Grid container spacing={4}>
          {displayedServices.map((service, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={service.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="h-full"
              >
                <Box 
                  className="p-6 rounded-xl h-full border card-hover group"
                  sx={{
                    backgroundColor: mode === 'dark' ? 'rgba(255,255,255,0.03)' : '#fff',
                    borderColor: mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: 'rgba(212, 175, 55, 0.3)',
                    }
                  }}
                >
                  <Box 
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-colors"
                    sx={{ 
                      backgroundColor: mode === 'dark' ? 'rgba(212, 175, 55, 0.1)' : 'rgba(212, 175, 55, 0.15)',
                      color: '#D4AF37',
                    }}
                  >
                    {iconMap[service.icon] || <Globe size={28} />}
                  </Box>
                  
                  <Typography 
                    variant="h6" 
                    className="mb-2"
                    sx={{ 
                      fontWeight: 600,
                      color: mode === 'dark' ? '#fff' : '#0a0a0a',
                    }}
                  >
                    {service.title}
                  </Typography>
                  
                  <Typography 
                    variant="body2"
                    sx={{ 
                      color: mode === 'dark' ? '#a0a0a0' : '#666',
                      lineHeight: 1.6,
                    }}
                  >
                    {service.description}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button
            component={Link}
            to="/services"
            variant="outlined"
            size="large"
            endIcon={<ArrowRight size={18} />}
            sx={{
              borderColor: '#D4AF37',
              color: '#D4AF37',
              px: 4,
              py: 1.5,
              fontWeight: 600,
              '&:hover': {
                borderColor: '#E8C547',
                backgroundColor: 'rgba(212, 175, 55, 0.1)',
              },
            }}
          >
            View All Services
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};

export default ServicesPreview;
