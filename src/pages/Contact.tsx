import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Container, Typography, Box, Button } from '@mui/material';
import { Mail, MapPin, MessageCircle, Check, Clock } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useTheme } from '@/context/ThemeContext';

const Contact: React.FC = () => {
  const { mode } = useTheme();
  const isDark = mode === 'dark';

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi Able Digital, I'd like to request a growth audit. My business is: ");
    window.open(`https://wa.me/447988373847?text=${message}`, '_blank');
  };

  const handleEmail = () => {
    window.location.href = 'mailto:info@abledigital.site?subject=Free%20Growth%20Audit%20Request&body=Business%20name%3A%0AWebsite%3A%0ALocation%20served%3A%0AMain%20growth%20challenge%3A';
  };

  const border = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)';
  const cardBg = isDark ? 'rgba(255,255,255,0.03)' : '#fff';

  return (
    <>
      <Helmet>
        <title>Get a Free Customer Acquisition Audit | Able Digital</title>
        <meta name="description" content="30 minutes. No pressure. Explore how your business can attract, convert, and follow up with more qualified customers." />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <section
            className="section-padding"
            style={{
              background: isDark
                ? 'radial-gradient(900px 500px at 50% -10%, rgba(212,175,55,0.10), transparent 60%), #0a0a0a'
                : 'radial-gradient(900px 500px at 50% -10%, rgba(212,175,55,0.15), transparent 60%), #ffffff',
            }}
          >
            <Container maxWidth="lg">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                {/* Left */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="lg:col-span-7"
                >
                  <Typography sx={{ color: '#D4AF37', fontWeight: 700, letterSpacing: 2, fontSize: '0.75rem', textTransform: 'uppercase', mb: 2 }}>
                    Free Growth Audit
                  </Typography>
                  <Typography
                    className="font-display"
                    sx={{
                      fontSize: { xs: '2.25rem', md: '3.5rem' },
                      fontWeight: 700,
                      letterSpacing: '-0.02em',
                      lineHeight: 1.05,
                      color: isDark ? '#fff' : '#0a0a0a',
                      mb: 3,
                    }}
                  >
                    Let's get you more <span className="text-primary">qualified enquiries.</span>
                  </Typography>
                  <Typography sx={{ color: isDark ? '#b5b5b5' : '#4b5563', fontSize: '1.15rem', lineHeight: 1.65, mb: 5 }}>
                    Tell us where your business needs more customers. We'll discuss your current visibility, website, lead capture, follow-up and booking opportunities.
                  </Typography>

                  <div className="mb-8">
                    <Typography sx={{ color: isDark ? '#d0d0d0' : '#374151', fontWeight: 700, fontSize: '0.9rem', mb: 3, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                      What to expect
                    </Typography>
                    <ul className="space-y-3">
                      {[
                        'A review of how potential customers discover you.',
                        'Honest feedback on your website and enquiry journey.',
                        'Practical ideas for ads, local search and lead follow-up.',
                        'A clear discussion of the next steps and whether we are a fit.',
                      ].map((i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                          <span style={{ color: isDark ? '#c7c7c7' : '#374151', fontSize: '1rem', lineHeight: 1.5 }}>{i}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <Typography sx={{ color: isDark ? '#d0d0d0' : '#374151', fontWeight: 700, fontSize: '0.9rem', mb: 3, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                      Who this is for
                    </Typography>
                    <ul className="space-y-2">
                      {[
                        'Businesses in any industry — home services, construction, real estate, automotive, professional services, retail, education and more.',
                        'Already operating with real revenue and capacity to serve new customers.',
                        'Owners ready to invest in a long-term growth partnership.',
                      ].map((i) => (
                        <li key={i} style={{ color: isDark ? '#a0a0a0' : '#6b7280', fontSize: '0.95rem', lineHeight: 1.55 }}>
                          — {i}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button
                      onClick={handleWhatsApp}
                      variant="contained"
                      size="large"
                      startIcon={<MessageCircle size={18} />}
                      sx={{
                        backgroundColor: '#25D366',
                        color: '#fff',
                        px: 3.5, py: 1.6, borderRadius: '10px', fontWeight: 700,
                        '&:hover': { backgroundColor: '#20bd5a' },
                      }}
                    >
                      Chat on WhatsApp
                    </Button>
                    <Button
                      onClick={handleEmail}
                      variant="outlined"
                      size="large"
                      startIcon={<Mail size={18} />}
                      sx={{
                        borderColor: '#D4AF37',
                        color: '#D4AF37',
                        px: 3.5, py: 1.6, borderRadius: '10px', fontWeight: 700,
                        '&:hover': { borderColor: '#E8C547', backgroundColor: 'rgba(212,175,55,0.1)' },
                      }}
                    >
                      Send an Email
                    </Button>
                  </div>
                </motion.div>

                {/* Right — contact card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="lg:col-span-5 w-full"
                >
                  <Box
                    className="rounded-2xl p-8 border"
                    sx={{
                      backgroundColor: cardBg,
                      borderColor: border,
                      boxShadow: '0 30px 60px -30px rgba(0,0,0,0.35)',
                    }}
                  >
                    <Typography sx={{ fontSize: '1.35rem', fontWeight: 700, color: isDark ? '#fff' : '#0a0a0a', mb: 1, letterSpacing: '-0.01em' }}>
                      Contact Able Digital
                    </Typography>
                    <Typography sx={{ color: isDark ? '#a0a0a0' : '#6b7280', fontSize: '0.95rem', mb: 4 }}>
                      Choose whichever channel works best for you.
                    </Typography>

                    <div className="space-y-3">
                      <ContactCard
                        icon={<Mail size={18} />}
                        title="Email"
                        value="info@abledigital.site"
                        onClick={handleEmail}
                        isDark={isDark}
                      />
                      <ContactCard
                        icon={<MessageCircle size={18} />}
                        title="WhatsApp / Call"
                        value="+44 7988 373847"
                        onClick={handleWhatsApp}
                        isDark={isDark}
                        accent="#25D366"
                      />
                      <ContactCard
                        icon={<MapPin size={18} />}
                        title="Serving"
                        value="Worldwide (remote)"
                        isDark={isDark}
                      />
                      <ContactCard
                        icon={<Clock size={18} />}
                        title="Response Time"
                        value="Within 1 business day"
                        isDark={isDark}
                      />
                    </div>
                  </Box>
                </motion.div>
              </div>
            </Container>
          </section>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

const ContactCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  value: string;
  onClick?: () => void;
  isDark: boolean;
  accent?: string;
}> = ({ icon, title, value, onClick, isDark, accent = '#D4AF37' }) => {
  const clickable = !!onClick;
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-4 p-4 rounded-xl border transition-colors ${clickable ? 'cursor-pointer' : ''}`}
      style={{
        borderColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
        backgroundColor: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)',
      }}
    >
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: `${accent}22`, color: accent }}
      >
        {icon}
      </div>
      <div>
        <div style={{ color: isDark ? '#a0a0a0' : '#6b7280', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
          {title}
        </div>
        <div style={{ color: isDark ? '#fff' : '#0a0a0a', fontSize: '0.95rem', fontWeight: 600, marginTop: 2 }}>
          {value}
        </div>
      </div>
    </div>
  );
};

export default Contact;
