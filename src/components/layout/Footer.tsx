import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Typography } from '@mui/material';
import { useTheme } from '@/context/ThemeContext';

const Footer: React.FC = () => {
  const { mode } = useTheme();
  const isDark = mode === 'dark';
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      className="border-t"
      sx={{
        borderColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
        backgroundColor: isDark ? '#0a0a0a' : '#fafafa',
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2 max-w-sm">
            <Link to="/" className="no-underline">
              <span className="font-display font-bold text-xl" style={{ color: isDark ? '#fff' : '#0a0a0a', letterSpacing: '-0.02em' }}>
                Able<span style={{ color: '#D4AF37' }}>Digital</span>
              </span>
            </Link>
            <Typography sx={{ mt: 2, color: isDark ? '#a0a0a0' : '#6b7280', fontSize: '0.9rem', lineHeight: 1.6 }}>
              The Local Growth Engine for home service businesses in the United States.
            </Typography>
          </div>

          <div>
            <Typography sx={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700, color: isDark ? '#d0d0d0' : '#374151', mb: 2 }}>
              Company
            </Typography>
            <ul className="space-y-2">
              {[
                { l: 'Growth System', p: '/services' },
                { l: 'Case Studies', p: '/projects' },
                { l: 'About', p: '/about' },
                { l: 'Contact', p: '/contact' },
              ].map((i) => (
                <li key={i.p}>
                  <Link to={i.p} className="no-underline text-sm" style={{ color: isDark ? '#a0a0a0' : '#6b7280' }}>
                    {i.l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Typography sx={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700, color: isDark ? '#d0d0d0' : '#374151', mb: 2 }}>
              Get In Touch
            </Typography>
            <ul className="space-y-2 text-sm" style={{ color: isDark ? '#a0a0a0' : '#6b7280' }}>
              <li>
                <a href="mailto:Iconmayor1@gmail.com" className="no-underline" style={{ color: 'inherit' }}>
                  Iconmayor1@gmail.com
                </a>
              </li>
              <li>Serving the United States</li>
              <li>
                <a href="https://wa.me/2349167587995" target="_blank" rel="noreferrer" className="no-underline" style={{ color: 'inherit' }}>
                  WhatsApp us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-3" style={{ borderColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)' }}>
          <Typography sx={{ color: isDark ? '#7a7a7a' : '#9ca3af', fontSize: '0.8rem' }}>
            © {year} Able Digital. All rights reserved.
          </Typography>
          <Typography sx={{ color: isDark ? '#7a7a7a' : '#9ca3af', fontSize: '0.8rem' }}>
            Build Trust. Get Found. Generate More Qualified Local Leads.
          </Typography>
        </div>
      </Container>
    </Box>
  );
};

export default Footer;
