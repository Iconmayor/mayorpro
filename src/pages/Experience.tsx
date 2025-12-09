import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Container, Typography, Box, Paper } from '@mui/material';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { experiences } from '@/data/experience';
import { useTheme } from '@/context/ThemeContext';

const Experience: React.FC = () => {
  const { mode } = useTheme();

  return (
    <>
      <Helmet>
        <title>Experience | Alex Morgan - Digital Consultant</title>
        <meta name="description" content="Explore my professional journey and experience in web development, digital marketing, and automation." />
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
                My <span className="text-primary">Experience</span>
              </Typography>
              <Typography 
                variant="body1"
                sx={{ 
                  color: mode === 'dark' ? '#a0a0a0' : '#666',
                  maxWidth: '600px',
                  mx: 'auto',
                }}
              >
                A journey through my professional career and the roles that shaped my expertise
              </Typography>
            </motion.div>

            {/* Timeline */}
            <div className="relative max-w-3xl mx-auto">
              {/* Timeline line */}
              <div 
                className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 transform md:-translate-x-1/2"
                style={{ backgroundColor: mode === 'dark' ? 'rgba(212, 175, 55, 0.3)' : 'rgba(212, 175, 55, 0.4)' }}
              />

              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className={`relative mb-12 pl-8 md:pl-0 ${
                    index % 2 === 0 ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%] md:text-left'
                  }`}
                >
                  {/* Timeline dot */}
                  <div 
                    className={`absolute top-2 left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary transform md:-translate-x-1/2 z-10`}
                    style={{ boxShadow: '0 0 20px rgba(212, 175, 55, 0.5)' }}
                  />

                  <Paper
                    elevation={0}
                    className={`p-6 rounded-xl border ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}
                    sx={{
                      backgroundColor: mode === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)',
                      borderColor: mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
                    }}
                  >
                    <Box className={`flex items-center gap-2 mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <Calendar size={16} className="text-primary" />
                      <Typography 
                        variant="caption"
                        sx={{ color: '#D4AF37', fontWeight: 600 }}
                      >
                        {exp.year}
                      </Typography>
                    </Box>

                    <Typography 
                      variant="h5"
                      className="mb-1"
                      sx={{ 
                        fontWeight: 700,
                        color: mode === 'dark' ? '#fff' : '#0a0a0a',
                      }}
                    >
                      {exp.role}
                    </Typography>

                    <Box className={`flex items-center gap-4 mb-4 flex-wrap ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <Box className="flex items-center gap-1">
                        <Briefcase size={14} className="text-muted-foreground" />
                        <Typography 
                          variant="body2"
                          sx={{ color: mode === 'dark' ? '#a0a0a0' : '#666' }}
                        >
                          {exp.company}
                        </Typography>
                      </Box>
                      <Box className="flex items-center gap-1">
                        <MapPin size={14} className="text-muted-foreground" />
                        <Typography 
                          variant="body2"
                          sx={{ color: mode === 'dark' ? '#a0a0a0' : '#666' }}
                        >
                          {exp.location}
                        </Typography>
                      </Box>
                    </Box>

                    <Box component="ul" className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex}>
                          <Typography 
                            variant="body2"
                            sx={{ 
                              color: mode === 'dark' ? '#a0a0a0' : '#666',
                              lineHeight: 1.6,
                            }}
                          >
                            {resp}
                          </Typography>
                        </li>
                      ))}
                    </Box>
                  </Paper>
                </motion.div>
              ))}
            </div>
          </Container>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Experience;
