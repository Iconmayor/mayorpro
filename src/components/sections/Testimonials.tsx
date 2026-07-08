import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Container,
  Typography,
  Box,
  Grid,
  Tabs,
  Tab,
  TextField,
  MenuItem,
  Button,
  Chip,
  Avatar,
  Rating,
} from '@mui/material';
import { Star, BadgeCheck, Award, Send } from 'lucide-react';
import { toast } from 'sonner';
import { useTheme } from '@/context/ThemeContext';
import { seedTestimonials, Testimonial, Platform } from '@/data/testimonials';

const COUNTRIES = [
  { code: 'us', name: 'United States' },
  { code: 'gb', name: 'United Kingdom' },
  { code: 'ca', name: 'Canada' },
  { code: 'au', name: 'Australia' },
  { code: 'de', name: 'Germany' },
  { code: 'fr', name: 'France' },
  { code: 'es', name: 'Spain' },
  { code: 'it', name: 'Italy' },
  { code: 'nl', name: 'Netherlands' },
  { code: 'ng', name: 'Nigeria' },
  { code: 'za', name: 'South Africa' },
  { code: 'ke', name: 'Kenya' },
  { code: 'in', name: 'India' },
  { code: 'ae', name: 'United Arab Emirates' },
  { code: 'sa', name: 'Saudi Arabia' },
  { code: 'br', name: 'Brazil' },
  { code: 'mx', name: 'Mexico' },
  { code: 'jp', name: 'Japan' },
  { code: 'sg', name: 'Singapore' },
];

const Flag: React.FC<{ code: string; size?: number }> = ({ code, size = 20 }) => (
  <img
    src={`https://flagcdn.com/w40/${code}.png`}
    alt={code}
    width={size}
    height={Math.round(size * 0.75)}
    style={{ borderRadius: 2, objectFit: 'cover' }}
    loading="lazy"
  />
);

const platformColors: Record<Platform, { bg: string; color: string; label: string }> = {
  Fiverr: { bg: '#1DBF73', color: '#fff', label: 'Fiverr' },
  Upwork: { bg: '#14A800', color: '#fff', label: 'Upwork' },
  'Direct Client': { bg: '#D4AF37', color: '#0a0a0a', label: 'Direct Client' },
};

const Testimonials: React.FC = () => {
  const { mode } = useTheme();
  const [reviews, setReviews] = useState<Testimonial[]>(seedTestimonials);
  const [filter, setFilter] = useState<'All' | Platform>('All');
  const [form, setForm] = useState({
    name: '',
    country: 'us',
    platform: 'Fiverr' as Platform,
    rating: 5,
    review: '',
  });

  const filtered = useMemo(
    () => (filter === 'All' ? reviews : reviews.filter((r) => r.platform === filter)),
    [reviews, filter]
  );

  const avgRating = useMemo(() => {
    if (!reviews.length) return 0;
    return reviews.reduce((s, r) => s + r.rating, 0) / reviews.length;
  }, [reviews]);

  const uniqueCountries = useMemo(
    () => Array.from(new Set(reviews.map((r) => r.country))),
    [reviews]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.review.trim()) {
      toast.error('Please fill in all required fields');
      return;
    }
    if (form.name.length > 100 || form.review.length > 1000) {
      toast.error('Input too long');
      return;
    }

    const country = COUNTRIES.find((c) => c.code === form.country)!;
    const newReview: Testimonial = {
      id: Date.now().toString(),
      name: form.name.trim(),
      country: form.country,
      countryName: country.name,
      platform: form.platform,
      rating: form.rating,
      review: form.review.trim(),
      verified: true,
      date: 'Just now',
    };
    setReviews((prev) => [newReview, ...prev]);

    // Send via mailto
    const subject = encodeURIComponent(`New Review from ${newReview.name}`);
    const body = encodeURIComponent(
      `Name: ${newReview.name}\nCountry: ${country.name}\nPlatform: ${newReview.platform}\nRating: ${newReview.rating}/5\n\nReview:\n${newReview.review}`
    );
    window.location.href = `mailto:Iconmayor1@gmail.com?subject=${subject}&body=${body}`;

    toast.success('Thank you for your feedback!');
    setForm({ name: '', country: 'us', platform: 'Fiverr', rating: 5, review: '' });
  };

  const cardBg = mode === 'dark' ? 'rgba(255,255,255,0.03)' : '#fff';
  const cardBorder = mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';
  const textPrimary = mode === 'dark' ? '#fff' : '#0a0a0a';
  const textMuted = mode === 'dark' ? '#a0a0a0' : '#666';

  return (
    <section
      className="section-padding"
      id="testimonials"
      style={{ backgroundColor: mode === 'dark' ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)' }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Typography
            variant="overline"
            sx={{ color: '#D4AF37', fontWeight: 600, letterSpacing: 2, display: 'block', mb: 2 }}
          >
            Client Testimonials
          </Typography>
          <Typography
            variant="h2"
            className="font-display mb-4"
            sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, fontWeight: 700, color: textPrimary }}
          >
            What Our <span className="text-primary">Clients Say</span>
          </Typography>

          {/* Average rating + diversity */}
          <Box className="flex flex-wrap items-center justify-center gap-6 mt-6">
            <Box className="flex items-center gap-2">
              <Star className="w-6 h-6 fill-primary text-primary" />
              <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: textPrimary }}>
                {avgRating.toFixed(1)}/5
              </Typography>
              <Typography sx={{ color: textMuted }}>
                ({reviews.length} reviews)
              </Typography>
            </Box>
            <Box className="flex items-center gap-2">
              <Typography sx={{ color: textMuted, fontSize: '0.875rem' }}>
                Trusted globally:
              </Typography>
              <Box className="flex gap-1">
                {uniqueCountries.slice(0, 8).map((c) => (
                  <Flag key={c} code={c} size={22} />
                ))}
              </Box>
            </Box>
          </Box>
        </motion.div>

        {/* Filter Tabs */}
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
            <Tab label="All Reviews" value="All" />
            <Tab label="Fiverr" value="Fiverr" />
            <Tab label="Upwork" value="Upwork" />
            <Tab label="Direct" value="Direct Client" />
          </Tabs>
        </Box>

        {/* Reviews Grid */}
        <Grid container spacing={3}>
          <AnimatePresence mode="popLayout">
            {filtered.map((r, i) => {
              const pc = platformColors[r.platform];
              return (
                <Grid size={{ xs: 12, md: 6, lg: 4 }} key={r.id}>
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    <Box
                      className="rounded-2xl p-6 h-full border flex flex-col"
                      sx={{ backgroundColor: cardBg, borderColor: cardBorder }}
                    >
                      <Box className="flex items-start justify-between mb-4">
                        <Box className="flex items-center gap-3">
                          <Avatar sx={{ bgcolor: '#D4AF37', color: '#0a0a0a', fontWeight: 700 }}>
                            {r.name.charAt(0)}
                          </Avatar>
                          <Box>
                            <Typography sx={{ fontWeight: 600, color: textPrimary, fontSize: '0.95rem' }}>
                              {r.name}
                            </Typography>
                            <Box className="flex items-center gap-1.5 mt-0.5">
                              <Flag code={r.country} size={16} />
                              <Typography sx={{ color: textMuted, fontSize: '0.75rem' }}>
                                {r.countryName}
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                        <Chip
                          label={pc.label}
                          size="small"
                          sx={{
                            backgroundColor: pc.bg,
                            color: pc.color,
                            fontWeight: 700,
                            fontSize: '0.7rem',
                            height: 22,
                          }}
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
                          <Typography sx={{ color: textMuted, fontSize: '0.75rem' }}>
                            • {r.date}
                          </Typography>
                        )}
                      </Box>

                      <Typography
                        sx={{
                          color: mode === 'dark' ? '#d0d0d0' : '#444',
                          fontSize: '0.9rem',
                          lineHeight: 1.6,
                          flex: 1,
                          mb: 3,
                        }}
                      >
                        "{r.review}"
                      </Typography>

                      <Box className="flex flex-wrap gap-2 pt-3 border-t" sx={{ borderColor: cardBorder }}>
                        {r.verified && (
                          <Box className="flex items-center gap-1">
                            <BadgeCheck className="w-3.5 h-3.5 text-primary" />
                            <Typography sx={{ color: textMuted, fontSize: '0.7rem', fontWeight: 600 }}>
                              Verified Client
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
                </Grid>
              );
            })}
          </AnimatePresence>
        </Grid>

        {/* Leave a Review Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <Box
            className="rounded-2xl p-8 border max-w-3xl mx-auto"
            sx={{ backgroundColor: cardBg, borderColor: cardBorder }}
          >
            <Typography
              variant="h4"
              className="font-display mb-2 text-center"
              sx={{ fontWeight: 700, color: textPrimary, fontSize: { xs: '1.5rem', md: '2rem' } }}
            >
              Leave a <span className="text-primary">Review</span>
            </Typography>
            <Typography sx={{ color: textMuted, textAlign: 'center', mb: 4 }}>
              Share your experience working with ABLE DIGITAL
            </Typography>

            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    required
                    label="Full Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    inputProps={{ maxLength: 100 }}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    select
                    label="Country"
                    value={form.country}
                    onChange={(e) => setForm({ ...form, country: e.target.value })}
                  >
                    {COUNTRIES.map((c) => (
                      <MenuItem key={c.code} value={c.code}>
                        <Box className="flex items-center gap-2">
                          <Flag code={c.code} size={18} />
                          {c.name}
                        </Box>
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    select
                    label="Platform"
                    value={form.platform}
                    onChange={(e) => setForm({ ...form, platform: e.target.value as Platform })}
                  >
                    <MenuItem value="Fiverr">Fiverr</MenuItem>
                    <MenuItem value="Upwork">Upwork</MenuItem>
                    <MenuItem value="Direct Client">Direct Client</MenuItem>
                  </TextField>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Box>
                    <Typography sx={{ color: textMuted, fontSize: '0.75rem', mb: 1 }}>
                      Star Rating
                    </Typography>
                    <Rating
                      value={form.rating}
                      onChange={(_, v) => setForm({ ...form, rating: v || 1 })}
                      size="large"
                      sx={{ '& .MuiRating-iconFilled': { color: '#D4AF37' } }}
                    />
                  </Box>
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    required
                    multiline
                    minRows={4}
                    label="Written Review"
                    value={form.review}
                    onChange={(e) => setForm({ ...form, review: e.target.value })}
                    inputProps={{ maxLength: 1000 }}
                    helperText={`${form.review.length}/1000`}
                  />
                </Grid>
                <Grid size={{ xs: 12 }} className="text-center">
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    endIcon={<Send size={18} />}
                    sx={{
                      backgroundColor: '#D4AF37',
                      color: '#0a0a0a',
                      px: 5,
                      py: 1.5,
                      fontWeight: 600,
                      '&:hover': { backgroundColor: '#E8C547' },
                    }}
                  >
                    Submit Review
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </motion.div>
      </Container>
    </section>
  );
};

export default Testimonials;
