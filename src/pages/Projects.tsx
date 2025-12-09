import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Container, Typography, Box, Grid, Chip, Button } from '@mui/material';
import { ExternalLink, ArrowRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { projects, Project } from '@/data/projects';
import { useTheme } from '@/context/ThemeContext';

const Projects: React.FC = () => {
  const { mode } = useTheme();

  return (
    <>
      <Helmet>
        <title>Projects | Alex Morgan - Digital Consultant</title>
        <meta name="description" content="Explore my portfolio of web development, marketing, and automation projects." />
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
                Featured <span className="text-primary">Projects</span>
              </Typography>
              <Typography 
                variant="body1"
                sx={{ 
                  color: mode === 'dark' ? '#a0a0a0' : '#666',
                  maxWidth: '600px',
                  mx: 'auto',
                }}
              >
                A showcase of my best work across web development, marketing, and automation
              </Typography>
            </motion.div>

            {/* Projects Grid */}
            <Grid container spacing={4}>
              {projects.map((project, index) => (
                <Grid size={{ xs: 12, md: 6 }} key={project.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <ProjectCard project={project} mode={mode} />
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
        <Footer />
      </div>
    </>
  );
};

const ProjectCard: React.FC<{ project: Project; mode: string }> = ({ project, mode }) => {
  return (
    <Box 
      className="group rounded-2xl overflow-hidden h-full border card-hover"
      sx={{
        backgroundColor: mode === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)',
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
        
        {/* Category Badge */}
        <Chip
          label={project.category}
          size="small"
          sx={{
            position: 'absolute',
            top: 16,
            left: 16,
            backgroundColor: 'rgba(212, 175, 55, 0.9)',
            color: '#0a0a0a',
            fontWeight: 600,
            fontSize: '0.7rem',
          }}
        />

        {/* Hover overlay */}
        <Box 
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Button
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            endIcon={<ExternalLink size={16} />}
            sx={{
              backgroundColor: '#D4AF37',
              color: '#0a0a0a',
              '&:hover': {
                backgroundColor: '#E8C547',
              },
            }}
          >
            View Project
          </Button>
        </Box>
      </Box>

      {/* Content */}
      <Box className="p-6">
        <Typography 
          variant="h5" 
          className="mb-2"
          sx={{ 
            fontWeight: 700,
            color: mode === 'dark' ? '#fff' : '#0a0a0a',
          }}
        >
          {project.title}
        </Typography>
        <Typography 
          variant="body2"
          sx={{ 
            color: mode === 'dark' ? '#a0a0a0' : '#666',
            mb: 3,
            lineHeight: 1.6,
          }}
        >
          {project.description}
        </Typography>

        {/* Tech Tags */}
        <Box className="flex flex-wrap gap-2">
          {project.tech.map((tech, index) => (
            <Chip
              key={index}
              label={tech}
              size="small"
              sx={{
                backgroundColor: mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
                color: mode === 'dark' ? '#a0a0a0' : '#666',
                fontSize: '0.75rem',
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
