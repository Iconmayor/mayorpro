import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  AppBar, 
  Toolbar, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton,
  ListItemText,
  Box,
  useMediaQuery
} from '@mui/material';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Stacks', path: '/stacks' },
  { label: 'Experience', path: '/experience' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { mode, toggleTheme } = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery('(max-width: 768px)');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar 
        position="fixed" 
        elevation={0}
        sx={{ 
          backgroundColor: mode === 'dark' ? 'rgba(10, 10, 10, 0.9)' : 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          borderBottom: `1px solid ${mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
        }}
      >
        <Toolbar className="container-custom justify-between">
          <Link to="/" className="flex items-center gap-2">
            <motion.span 
              className="text-2xl font-display font-bold text-primary"
              whileHover={{ scale: 1.05 }}
            >
              AM
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path 
                    ? 'text-primary' 
                    : 'text-muted-foreground'
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  />
                )}
              </Link>
            ))}
            <IconButton 
              onClick={toggleTheme}
              sx={{ color: mode === 'dark' ? '#D4AF37' : '#0a0a0a' }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={mode}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {mode === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </motion.div>
              </AnimatePresence>
            </IconButton>
          </nav>

          {/* Mobile Menu Button */}
          <Box className="flex md:hidden items-center gap-2">
            <IconButton 
              onClick={toggleTheme}
              sx={{ color: mode === 'dark' ? '#D4AF37' : '#0a0a0a' }}
            >
              {mode === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </IconButton>
            <IconButton
              onClick={handleDrawerToggle}
              sx={{ color: mode === 'dark' ? '#fff' : '#0a0a0a' }}
            >
              <Menu size={24} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            width: 280,
            backgroundColor: mode === 'dark' ? '#0a0a0a' : '#ffffff',
            borderLeft: `1px solid ${mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
          },
        }}
      >
        <Box className="p-4 flex justify-end">
          <IconButton 
            onClick={handleDrawerToggle}
            sx={{ color: mode === 'dark' ? '#fff' : '#0a0a0a' }}
          >
            <X size={24} />
          </IconButton>
        </Box>
        <List>
          {navItems.map((item) => (
            <ListItem key={item.path} disablePadding>
              <ListItemButton
                component={Link}
                to={item.path}
                onClick={handleDrawerToggle}
                sx={{
                  py: 2,
                  px: 4,
                  color: location.pathname === item.path 
                    ? '#D4AF37' 
                    : mode === 'dark' ? '#fff' : '#0a0a0a',
                  borderLeft: location.pathname === item.path 
                    ? '3px solid #D4AF37' 
                    : '3px solid transparent',
                  '&:hover': {
                    backgroundColor: mode === 'dark' ? 'rgba(212, 175, 55, 0.1)' : 'rgba(212, 175, 55, 0.1)',
                  },
                }}
              >
                <ListItemText 
                  primary={item.label}
                  primaryTypographyProps={{
                    fontWeight: location.pathname === item.path ? 600 : 400,
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Spacer for fixed navbar */}
      <Toolbar />
    </>
  );
};

export default Navbar;
