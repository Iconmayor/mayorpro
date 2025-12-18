import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, IconButton, Typography } from '@mui/material';
import { Linkedin, Twitter, Github, Instagram, Mail } from 'lucide-react';
import { socials } from '@/data/socials';
import { useTheme } from '@/context/ThemeContext';

const iconMap: Record<string, React.ReactNode> = {
  Linkedin: <Linkedin size={20} />,
  Twitter: <Twitter size={20} />,
  Github: <Github size={20} />,
  Instagram: <Instagram size={20} />,
  Mail: <Mail size={20} />,
};

const Footer: React.FC = () => {
  const { mode } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      className="border-t border-border py-12"
      sx={{
        backgroundColor: mode === 'dark' ? 'rgba(10, 10, 10, 0.95)' : 'rgba(255, 255, 255, 0.95)',
      }}
    >
      <Container maxWidth="lg">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <Link to="/" className="text-xl font-bold" style={{ color: '#D4AF37' }}>
              ABLE DIGITAL
            </Link>
            <Typography 
              variant="body2" 
              className="mt-2"
              sx={{ color: mode === 'dark' ? '#a0a0a0' : '#666' }}
            >
              © {currentYear} ABLE DIGITAL Agency. All rights reserved.
            </Typography>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <IconButton
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                sx={{
                  color: mode === 'dark' ? '#a0a0a0' : '#666',
                  '&:hover': {
                    color: '#D4AF37',
                    backgroundColor: mode === 'dark' ? 'rgba(212, 175, 55, 0.1)' : 'rgba(212, 175, 55, 0.1)',
                  },
                }}
              >
                {iconMap[social.icon]}
              </IconButton>
            ))}
          </div>
        </div>
      </Container>
    </Box>
  );
};

export default Footer;
