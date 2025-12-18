import React from 'react';
import { motion } from 'framer-motion';
import { Container, Typography, Box, Grid, Chip, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { projects } from '@/data/projects';
import { useTheme } from '@/context/ThemeContext';

const FeaturedWork: React.FC = () => {
  const { mode } = useTheme();
  const featuredProjects = projects.slice(0, 3);

  return (
    <section 
      className="section-padding" 
      id="work"
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
            Featured Work
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
            Recent <span className="text-primary">Case Studies</span>
          </Typography>
          <Typography 
            variant="body1"
            sx={{ 
              color: mode === 'dark' ? '#a0a0a0' : '#666',
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Real results from real projects
          </Typography>
        </motion.div>

        {/* Projects Grid */}
        <Grid container spacing={4}>
          {featuredProjects.map((project, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="h-full"
              >
                <Box 
                  className="group rounded-2xl overflow-hidden h-full border"
                  sx={{
                    backgroundColor: mode === 'dark' ? 'rgba(255,255,255,0.03)' : '#fff',
                    borderColor: mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
                  }}
                >
                  {/* Image */}
                  <Box className="relative overflow-hidden" sx={{ aspectRatio: '16/10' }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60" />
                    
                    <Chip
                      label={project.category}
                      size="small"
                      sx={{
                        position: 'absolute',
                        top: 12,
                        left: 12,
                        backgroundColor: 'rgba(212, 175, 55, 0.9)',
                        color: '#0a0a0a',
                        fontWeight: 600,
                        fontSize: '0.7rem',
                      }}
                    />
                  </Box>

                  {/* Content */}
                  <Box className="p-5">
                    <Typography 
                      variant="h6" 
                      className="mb-2"
                      sx={{ 
                        fontWeight: 600,
                        color: mode === 'dark' ? '#fff' : '#0a0a0a',
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography 
                      variant="body2"
                      sx={{ 
                        color: mode === 'dark' ? '#a0a0a0' : '#666',
                        lineHeight: 1.6,
                      }}
                    >
                      {project.description.substring(0, 100)}...
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button
            component={Link}
            to="/projects"
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
            View All Projects
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};

export default FeaturedWork;
