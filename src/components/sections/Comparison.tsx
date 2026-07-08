import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { Check } from 'lucide-react';
import { comparison } from '@/data/positioning';
import { useTheme } from '@/context/ThemeContext';

const Comparison: React.FC = () => {
  const { mode } = useTheme();
  const isDark = mode === 'dark';
  const border = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';

  return (
    <section className="section-padding">
      <Container maxWidth="lg">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Typography sx={{ color: '#D4AF37', fontWeight: 700, letterSpacing: 2, fontSize: '0.75rem', textTransform: 'uppercase', mb: 2 }}>
            Why Able Digital
          </Typography>
          <Typography
            className="font-display"
            sx={{
              fontSize: { xs: '2rem', md: '2.75rem' },
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              color: isDark ? '#fff' : '#0a0a0a',
            }}
          >
            You've been sold tactics. <span className="text-primary">We sell the system.</span>
          </Typography>
        </div>

        <Box
          className="rounded-2xl border overflow-hidden"
          sx={{
            backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : '#fff',
            borderColor: border,
          }}
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr style={{ borderBottom: `1px solid ${border}` }}>
                  <th className="text-left p-4 md:p-5" style={{ color: isDark ? '#a0a0a0' : '#6b7280', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
                    &nbsp;
                  </th>
                  {comparison.columns.map((c, idx) => {
                    const isUs = idx === comparison.columns.length - 1;
                    return (
                      <th
                        key={c}
                        className="text-left p-4 md:p-5"
                        style={{
                          color: isUs ? '#D4AF37' : (isDark ? '#e0e0e0' : '#374151'),
                          fontSize: '0.95rem',
                          fontWeight: isUs ? 800 : 600,
                          backgroundColor: isUs ? 'rgba(212,175,55,0.06)' : 'transparent',
                        }}
                      >
                        {c}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {comparison.rows.map((row, ri) => (
                  <tr key={row.label} style={{ borderBottom: ri < comparison.rows.length - 1 ? `1px solid ${border}` : 'none' }}>
                    <td className="p-4 md:p-5 font-semibold" style={{ color: isDark ? '#fff' : '#0a0a0a', fontSize: '0.9rem' }}>
                      {row.label}
                    </td>
                    {row.values.map((v, ci) => {
                      const isUs = ci === row.values.length - 1;
                      return (
                        <td
                          key={ci}
                          className="p-4 md:p-5"
                          style={{
                            color: isUs ? (isDark ? '#fff' : '#0a0a0a') : (isDark ? '#9a9a9a' : '#6b7280'),
                            fontSize: '0.9rem',
                            fontWeight: isUs ? 600 : 400,
                            backgroundColor: isUs ? 'rgba(212,175,55,0.06)' : 'transparent',
                          }}
                        >
                          <span className="inline-flex items-center gap-2">
                            {isUs && <Check size={16} className="text-primary flex-shrink-0" />}
                            {v}
                          </span>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Box>
      </Container>
    </section>
  );
};

export default Comparison;
