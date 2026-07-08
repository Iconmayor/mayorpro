import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import { positioning } from '@/data/positioning';
import { useTheme } from '@/context/ThemeContext';

const TrustBar: React.FC = () => {
  const { mode } = useTheme();
  const isDark = mode === 'dark';

  return (
    <section
      className="py-12 md:py-16 border-y"
      style={{
        borderColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
        backgroundColor: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)',
      }}
    >
      <Container maxWidth="lg">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {positioning.metrics.map((m) => (
            <Box key={m.label} className="text-center md:text-left">
              <Typography
                sx={{
                  fontSize: { xs: '1.75rem', md: '2.25rem' },
                  fontWeight: 700,
                  color: '#D4AF37',
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                }}
              >
                {m.value}
              </Typography>
              <Typography
                sx={{
                  mt: 1,
                  fontSize: '0.9rem',
                  color: isDark ? '#a0a0a0' : '#4b5563',
                  fontWeight: 500,
                }}
              >
                {m.label}
              </Typography>
            </Box>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TrustBar;
