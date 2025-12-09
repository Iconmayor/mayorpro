import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Container, Typography, Box, Grid, Tabs, Tab, LinearProgress } from '@mui/material';
import { 
  Code, Server, FileCode, Palette, Database, Globe,
  Target, Search, TrendingUp, Mail, FileText, BarChart,
  PenTool, Image, Shapes, Layout, Award, Brush,
  Zap, Workflow, GitBranch, Users, Send, Bot
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { stacks, categories, Stack } from '@/data/stacks';
import { useTheme } from '@/context/ThemeContext';

const iconMap: Record<string, React.ReactNode> = {
  Code: <Code size={24} />,
  Server: <Server size={24} />,
  FileCode: <FileCode size={24} />,
  Palette: <Palette size={24} />,
  Database: <Database size={24} />,
  Globe: <Globe size={24} />,
  Target: <Target size={24} />,
  Search: <Search size={24} />,
  TrendingUp: <TrendingUp size={24} />,
  Mail: <Mail size={24} />,
  FileText: <FileText size={24} />,
  BarChart: <BarChart size={24} />,
  PenTool: <PenTool size={24} />,
  Image: <Image size={24} />,
  Shapes: <Shapes size={24} />,
  Layout: <Layout size={24} />,
  Award: <Award size={24} />,
  Brush: <Brush size={24} />,
  Zap: <Zap size={24} />,
  Workflow: <Workflow size={24} />,
  GitBranch: <GitBranch size={24} />,
  Users: <Users size={24} />,
  Send: <Send size={24} />,
  Bot: <Bot size={24} />,
};

const Stacks: React.FC = () => {
  const { mode } = useTheme();
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredStacks = activeTab === 'all' 
    ? stacks 
    : stacks.filter(stack => stack.category === activeTab);

  return (
    <>
      <Helmet>
        <title>Tech Stack | Alex Morgan - Digital Consultant</title>
        <meta name="description" content="Explore the technologies and tools I use for web development, marketing, design, and automation." />
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
              className="text-center mb-12"
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
                My Tech <span className="text-primary">Stack</span>
              </Typography>
              <Typography 
                variant="body1"
                sx={{ 
                  color: mode === 'dark' ? '#a0a0a0' : '#666',
                  maxWidth: '600px',
                  mx: 'auto',
                }}
              >
                Tools and technologies I use to bring ideas to life
              </Typography>
            </motion.div>

            {/* Filter Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-12"
            >
              <Tabs
                value={activeTab}
                onChange={(_, val) => setActiveTab(val)}
                centered
                sx={{
                  '& .MuiTab-root': {
                    color: mode === 'dark' ? '#a0a0a0' : '#666',
                    textTransform: 'none',
                    fontWeight: 500,
                    '&.Mui-selected': {
                      color: '#D4AF37',
                    },
                  },
                  '& .MuiTabs-indicator': {
                    backgroundColor: '#D4AF37',
                  },
                }}
              >
                <Tab label="All" value="all" />
                {categories.map(cat => (
                  <Tab key={cat.id} label={cat.label} value={cat.id} />
                ))}
              </Tabs>
            </motion.div>

            {/* Stacks Grid */}
            <Grid container spacing={3}>
              {filteredStacks.map((stack, index) => (
                <Grid size={{ xs: 6, sm: 4, md: 3 }} key={stack.id}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.05 * index }}
                  >
                    <StackCard stack={stack} mode={mode} />
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

const StackCard: React.FC<{ stack: Stack; mode: string }> = ({ stack, mode }) => {
  const categoryColor = categories.find(c => c.id === stack.category)?.color || '#D4AF37';

  return (
    <Box 
      className="p-5 rounded-xl h-full card-hover border text-center"
      sx={{
        backgroundColor: mode === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)',
        borderColor: mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
      }}
    >
      <Box 
        className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3"
        sx={{ 
          backgroundColor: `${categoryColor}20`,
          color: categoryColor,
        }}
      >
        {iconMap[stack.icon] || <Code size={24} />}
      </Box>
      <Typography 
        variant="subtitle1" 
        className="mb-2"
        sx={{ 
          fontWeight: 600,
          color: mode === 'dark' ? '#fff' : '#0a0a0a',
        }}
      >
        {stack.name}
      </Typography>
      <Box className="mt-3">
        <LinearProgress
          variant="determinate"
          value={stack.proficiency}
          sx={{
            height: 4,
            borderRadius: 2,
            backgroundColor: mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)',
            '& .MuiLinearProgress-bar': {
              backgroundColor: categoryColor,
              borderRadius: 2,
            },
          }}
        />
        <Typography 
          variant="caption"
          sx={{ 
            color: mode === 'dark' ? '#a0a0a0' : '#666',
            mt: 0.5,
            display: 'block',
          }}
        >
          {stack.proficiency}%
        </Typography>
      </Box>
    </Box>
  );
};

export default Stacks;
