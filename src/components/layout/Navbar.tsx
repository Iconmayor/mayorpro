import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemButton,
  ListItemText, Box, Container, Button,
} from '@mui/material';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const navItems = [
  { label: 'Growth System', path: '/services' },
  { label: 'Case Studies', path: '/projects' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { mode, toggleTheme } = useTheme();
  const location = useLocation();
  const isDark = mode === 'dark';

  const toggle = () => setMobileOpen((v) => !v);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: isDark ? 'rgba(10, 10, 10, 0.75)' : 'rgba(255, 255, 255, 0.75)',
          backdropFilter: 'blur(16px)',
          borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 72 }, display: 'flex', justifyContent: 'space-between' }}>
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 no-underline">
              <span
                className="font-display font-bold tracking-tight"
                style={{ color: isDark ? '#fff' : '#0a0a0a', fontSize: '1.15rem', letterSpacing: '-0.02em' }}
              >
                Able<span style={{ color: '#D4AF37' }}>Digital</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 4 }}>
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative no-underline text-sm font-medium transition-colors"
                  style={{
                    color: location.pathname === item.path
                      ? '#D4AF37'
                      : isDark ? '#d0d0d0' : '#374151',
                  }}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full"
                      style={{ backgroundColor: '#D4AF37' }}
                    />
                  )}
                </Link>
              ))}
            </Box>

            {/* Right */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <IconButton
                onClick={toggleTheme}
                size="small"
                sx={{ color: isDark ? '#D4AF37' : '#0a0a0a' }}
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={mode}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isDark ? <Sun size={18} /> : <Moon size={18} />}
                  </motion.div>
                </AnimatePresence>
              </IconButton>

              <Button
                component={Link}
                to="/contact"
                variant="contained"
                size="small"
                sx={{
                  display: { xs: 'none', md: 'inline-flex' },
                  backgroundColor: '#D4AF37',
                  color: '#0a0a0a',
                  fontWeight: 700,
                  borderRadius: '8px',
                  px: 2.5,
                  py: 1,
                  boxShadow: 'none',
                  '&:hover': { backgroundColor: '#E8C547' },
                }}
              >
                Book a Call
              </Button>

              <IconButton
                sx={{ display: { xs: 'flex', md: 'none' }, color: isDark ? '#fff' : '#0a0a0a' }}
                onClick={toggle}
                aria-label="Open menu"
              >
                <Menu size={22} />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={toggle}
        PaperProps={{
          sx: {
            width: 300,
            backgroundColor: isDark ? '#0a0a0a' : '#fff',
          },
        }}
      >
        <Box className="p-4 flex items-center justify-between border-b" sx={{ borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)' }}>
          <Link to="/" onClick={toggle} className="no-underline">
            <span className="font-display font-bold" style={{ color: isDark ? '#fff' : '#0a0a0a', fontSize: '1.05rem' }}>
              Able<span style={{ color: '#D4AF37' }}>Digital</span>
            </span>
          </Link>
          <IconButton onClick={toggle} sx={{ color: isDark ? '#fff' : '#0a0a0a' }}>
            <X size={22} />
          </IconButton>
        </Box>
        <List sx={{ py: 2 }}>
          {navItems.map((item) => (
            <ListItem key={item.path} disablePadding>
              <ListItemButton
                component={Link}
                to={item.path}
                onClick={toggle}
                sx={{
                  py: 2,
                  px: 3,
                  color: location.pathname === item.path ? '#D4AF37' : (isDark ? '#fff' : '#0a0a0a'),
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{ fontWeight: location.pathname === item.path ? 700 : 500, fontSize: '1rem' }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Box className="p-4">
          <Button
            component={Link}
            to="/contact"
            onClick={toggle}
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: '#D4AF37',
              color: '#0a0a0a',
              fontWeight: 700,
              py: 1.4,
              '&:hover': { backgroundColor: '#E8C547' },
            }}
          >
            Book a Strategy Call
          </Button>
        </Box>
      </Drawer>

      <Toolbar />
    </>
  );
};

export default Navbar;
