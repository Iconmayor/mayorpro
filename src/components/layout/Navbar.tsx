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
  Container,
  useMediaQuery,
  useTheme as useMuiTheme
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
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar 
        position="fixed" 
        elevation={0}
        sx={{ 
          backgroundColor: mode === 'dark' ? 'rgba(10, 10, 10, 0.95)' : 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: `1px solid ${mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar 
            disableGutters 
            sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              minHeight: { xs: 64, md: 72 }
            }}
          >
            {/* Logo - Left */}
            <Link to="/" className="flex items-center gap-2 no-underline">
              <motion.span 
                className="text-2xl font-bold"
                style={{ color: mode === 'dark' ? '#D4AF37' : '#0a0a0a' }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                MP
              </motion.span>
            </Link>

            {/* Desktop Navigation - Center */}
            <Box 
              sx={{ 
                display: { xs: 'none', md: 'flex' },
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                alignItems: 'center',
                gap: 4
              }}
            >
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative no-underline text-sm font-medium transition-all duration-200 hover:text-primary ${
                    location.pathname === item.path 
                      ? 'text-primary' 
                      : mode === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}
                  style={{ 
                    color: location.pathname === item.path 
                      ? '#D4AF37' 
                      : mode === 'dark' ? '#e5e5e5' : '#525252' 
                  }}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      style={{ backgroundColor: '#D4AF37' }}
                    />
                  )}
                </Link>
              ))}
            </Box>

            {/* Right Section - Theme Toggle & Mobile Menu */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {/* Theme Toggle - Always Visible */}
              <IconButton 
                onClick={toggleTheme}
                sx={{ 
                  color: mode === 'dark' ? '#D4AF37' : '#0a0a0a',
                  '&:hover': { 
                    backgroundColor: mode === 'dark' ? 'rgba(212, 175, 55, 0.1)' : 'rgba(10, 10, 10, 0.1)' 
                  }
                }}
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

              {/* Mobile Menu Button */}
              <IconButton
                sx={{ 
                  display: { xs: 'flex', md: 'none' },
                  color: mode === 'dark' ? '#fff' : '#0a0a0a',
                  '&:hover': { 
                    backgroundColor: mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)' 
                  }
                }}
                onClick={handleDrawerToggle}
              >
                <Menu size={24} />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            width: 280,
            backgroundColor: mode === 'dark' ? '#0a0a0a' : '#ffffff',
            borderLeft: `1px solid ${mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
          },
        }}
      >
        <Box className="p-4 flex items-center justify-between border-b" 
          sx={{ 
            borderColor: mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
            minHeight: 64
          }}
        >
          <Link 
            to="/" 
            onClick={handleDrawerToggle}
            className="no-underline"
          >
            <span className="text-2xl font-bold" 
              style={{ color: mode === 'dark' ? '#D4AF37' : '#0a0a0a' }}
            >
              MP
            </span>
          </Link>
          <IconButton 
            onClick={handleDrawerToggle}
            sx={{ color: mode === 'dark' ? '#fff' : '#0a0a0a' }}
          >
            <X size={24} />
          </IconButton>
        </Box>
        <List sx={{ py: 2 }}>
          {navItems.map((item) => (
            <ListItem key={item.path} disablePadding>
              <ListItemButton
                component={Link}
                to={item.path}
                onClick={handleDrawerToggle}
                sx={{
                  py: 2.5,
                  px: 4,
                  my: 0.5,
                  mx: 2,
                  borderRadius: 1,
                  color: location.pathname === item.path 
                    ? '#D4AF37' 
                    : mode === 'dark' ? '#fff' : '#0a0a0a',
                  backgroundColor: location.pathname === item.path 
                    ? mode === 'dark' ? 'rgba(212, 175, 55, 0.15)' : 'rgba(212, 175, 55, 0.1)'
                    : 'transparent',
                  '&:hover': {
                    backgroundColor: mode === 'dark' ? 'rgba(212, 175, 55, 0.1)' : 'rgba(212, 175, 55, 0.05)',
                  },
                }}
              >
                <ListItemText 
                  primary={item.label}
                  primaryTypographyProps={{
                    fontWeight: location.pathname === item.path ? 600 : 400,
                    fontSize: '1rem',
                  }}
                />
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="mobileActive"
                    className="w-1.5 h-6 rounded-full"
                    style={{ backgroundColor: '#D4AF37' }}
                  />
                )}
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