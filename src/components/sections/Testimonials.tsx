import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Typography, Box, Tabs, Tab, Chip, Avatar } from '@mui/material';
import { Star, BadgeCheck, Award } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { seedTestimonials, Testimonial, Platform } from '@/data/testimonials';

const platformColors: Record<Platform, { bg: string; color: string; label: string }> = {
  Google: { bg: '#4285F4', color: '#fff', label: 'Google Review' },
  'Direct Client': { bg: '#D4AF37', color: '#0a0a0a', label: 'Direct Client' },
  Referral: { bg: '#111827', color: '#fff', label: 'Referral' },
};

const Testimonials: React.FC = () => {
  const { mode } = useTheme();
  const isDark = mode === 'dark';
  const [filter, setFilter] = useState<'All' | Platform>('All');

  const filtered = useMemo(
    () => (filter === 'All' ? seedTestimonials : seedTestimonials.filter((r) => r.platform === filter)),
    [filter]
  );

  const avgRating = useMemo(() => {
    if (!seedTestimonials.length) return 0;
    return seedTestimonials.reduce((s, r) => s + r.rating, 0) / seedTestimonials.length;
  }, []);

  const cardBg = isDark ? 'rgba(255,255,255,0.03)' : '#fff';
  const cardBorder = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)';
  const textPrimary = isDark ? '#fff' : '#0a0a0a';
  const textMuted = isDark ? '#a0a0a0' : '#6b7280';

  return (
    <section className="section-padding" id="testimonials">
      <Container maxWidth="lg">
        <div className="text-center mb-12">
          <Typography sx={{ color: '#D4AF37', fontWeight: 700, letterSpacing: 2, fontSize: '0.75rem', textTransform: 'uppercase', mb: 2 }}>
            Client Voices
          </Typography>
          <Typography
            className="font-display"
            sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1, color: textPrimary }}
          >
            Trusted by operators who <span className="text-primary">expect results.</span>
          </Typography>

          <Box className="flex flex-wrap items-center justify-center gap-6 mt-6">
            <Box className="flex items-center gap-2">
              <Star className="w-6 h-6 fill-primary text-primary" />
              <Typography sx={{ fontSize: '1.35rem', fontWeight: 700, color: textPrimary, letterSpacing: '-0.01em' }}>
                {avgRating.toFixed(1)}/5
              </Typography>
              <Typography sx={{ color: textMuted, fontSize: '0.9rem' }}>
                ({seedTestimonials.length} verified reviews)
              </Typography>
            </Box>
          </Box>
        </div>

        <Box className="flex justify-center mb-8">
          <Tabs
            value={filter}
            onChange={(_, v) => setFilter(v)}
            sx={{
              '& .MuiTab-root': { color: textMuted, fontWeight: 600, textTransform: 'none' },
              '& .Mui-selected': { color: '#D4AF37 !important' },
              '& .MuiTabs-indicator': { backgroundColor: '#D4AF37' },
            }}
          >
            <Tab label="All" value="All" />
            <Tab label="Google" value="Google" />
            <Tab label="Direct" value="Direct Client" />
            <Tab label="Referral" value="Referral" />
          </Tabs>
        </Box>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((r, i) => {
              const pc = platformColors[r.platform];
              return (
                <motion.div
                  key={r.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                >
                  <Box
                    className="rounded-2xl p-6 h-full border flex flex-col"
                    sx={{ backgroundColor: cardBg, borderColor: cardBorder }}
                  >
                    <Box className="flex items-start justify-between mb-4">
                      <Box className="flex items-center gap-3">
                        <Avatar sx={{ bgcolor: '#D4AF37', color: '#0a0a0a', fontWeight: 700, width: 44, height: 44 }}>
                          {r.name.charAt(0)}
                        </Avatar>
                        <Box>
                          <Typography sx={{ fontWeight: 700, color: textPrimary, fontSize: '0.95rem' }}>
                            {r.name}
                          </Typography>
                          <Typography sx={{ color: textMuted, fontSize: '0.78rem' }}>
                            {r.role} · {r.company}
                          </Typography>
                          <Typography sx={{ color: textMuted, fontSize: '0.75rem', mt: 0.3 }}>
                            {r.countryName}
                          </Typography>
                        </Box>
                      </Box>
                      <Chip
                        label={pc.label}
                        size="small"
                        sx={{ backgroundColor: pc.bg, color: pc.color, fontWeight: 700, fontSize: '0.65rem', height: 22 }}
                      />
                    </Box>

                    <Box className="flex items-center gap-2 mb-3">
                      <Box className="flex">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <Star
                            key={idx}
                            className={`w-4 h-4 ${
                              idx < r.rating ? 'fill-primary text-primary' : 'text-muted-foreground/30'
                            }`}
                          />
                        ))}
                      </Box>
                      {r.date && (
                        <Typography sx={{ color: textMuted, fontSize: '0.72rem' }}>
                          • {r.date}
                        </Typography>
                      )}
                    </Box>

                    <Typography
                      sx={{
                        color: isDark ? '#d0d0d0' : '#374151',
                        fontSize: '0.92rem',
                        lineHeight: 1.65,
                        flex: 1,
                        mb: 3,
                      }}
                    >
                      "{r.review}"
                    </Typography>

                    <Box className="flex flex-wrap gap-3 pt-3 border-t" sx={{ borderColor: cardBorder }}>
                      {r.verified && (
                        <Box className="flex items-center gap-1">
                          <BadgeCheck className="w-3.5 h-3.5 text-primary" />
                          <Typography sx={{ color: textMuted, fontSize: '0.7rem', fontWeight: 600 }}>
                            Verified
                          </Typography>
                        </Box>
                      )}
                      {r.topRated && (
                        <Box className="flex items-center gap-1">
                          <Award className="w-3.5 h-3.5 text-primary" />
                          <Typography sx={{ color: textMuted, fontSize: '0.7rem', fontWeight: 600 }}>
                            Top Rated
                          </Typography>
                        </Box>
                      )}
                    </Box>
                  </Box>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
