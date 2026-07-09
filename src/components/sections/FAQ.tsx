import React, { useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '@/data/faq';
import { useTheme } from '@/context/ThemeContext';

const FAQ: React.FC = () => {
  const { mode } = useTheme();
  const isDark = mode === 'dark';
  const [open, setOpen] = useState<number | null>(0);
  const border = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';

  return (
    <section
      className="section-padding"
      style={{ backgroundColor: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)' }}
    >
      <Container maxWidth="md">
        <div className="text-center mb-14">
          <Typography sx={{ color: '#D4AF37', fontWeight: 700, letterSpacing: 2, fontSize: '0.75rem', textTransform: 'uppercase', mb: 2 }}>
            Answers
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
            Frequently asked <span className="text-primary">questions.</span>
          </Typography>
        </div>

        <Box
          className="rounded-2xl border overflow-hidden"
          sx={{
            backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : '#fff',
            borderColor: border,
          }}
        >
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} style={{ borderBottom: i < faqs.length - 1 ? `1px solid ${border}` : 'none' }}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left p-5 md:p-6 flex items-start justify-between gap-4"
                  aria-expanded={isOpen}
                >
                  <span
                    className="font-semibold"
                    style={{ color: isDark ? '#fff' : '#0a0a0a', fontSize: '1.05rem', letterSpacing: '-0.01em' }}
                  >
                    {f.q}
                  </span>
                  <span
                    className="flex-shrink-0 mt-1"
                    style={{ color: '#D4AF37' }}
                  >
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 md:px-6 pb-6 -mt-1">
                    <p style={{ color: isDark ? '#b5b5b5' : '#4b5563', lineHeight: 1.7, fontSize: '0.98rem' }}>
                      {f.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </Box>
      </Container>
    </section>
  );
};

export default FAQ;
