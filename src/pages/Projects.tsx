import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Typography, Box, Grid, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CTASection from '@/components/sections/CTASection';
import { caseStudies } from '@/data/caseStudies';
import { useTheme } from '@/context/ThemeContext';

const Projects: React.FC = () => {
  const { mode } = useTheme();
  const isDark = mode === 'dark';

  return (
    <>
      <Helmet>
        <title>Case Studies | Able Digital — Local Growth for Home Services</title>
        <meta name="description" content="Real home service operators. Real results. See how Able Digital's Local Growth Engine turned local search into booked jobs." />
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
            <Container maxWidth="md" className="text-center">
              <Typography sx={{ color: '#D4AF37', fontWeight: 700, letterSpacing: 2, fontSize: '0.75rem', textTransform: 'uppercase', mb: 2 }}>
                Case Studies
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
                Home service operators <span className="text-primary">winning locally.</span>
              </Typography>
              <Typography sx={{ color: isDark ? '#b5b5b5' : '#4b5563', fontSize: '1.1rem', lineHeight: 1.6, maxWidth: 620, mx: 'auto' }}>
                Every engagement is measured. Every result is real. Here's what the Local Growth Engine looks like in production.
              </Typography>
            </Container>
          </section>

          <section className="section-padding">
            <Container maxWidth="lg">
              <div className="space-y-16 md:space-y-24">
                {caseStudies.map((c, i) => {
                  const flip = i % 2 === 1;
                  return (
                    <motion.article
                      key={c.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ duration: 0.5 }}
                      className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
                    >
                      <div className={`lg:col-span-6 ${flip ? 'lg:order-2' : ''}`}>
                        <div
                          className="rounded-2xl overflow-hidden border"
                          style={{
                            borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
                            boxShadow: '0 30px 60px -30px rgba(0,0,0,0.35)',
                          }}
                        >
                          <img
                            src={c.image}
                            alt={c.title}
                            loading="lazy"
                            className="w-full h-auto aspect-[16/10] object-cover"
                          />
                        </div>
                      </div>

                      <div className={`lg:col-span-6 ${flip ? 'lg:order-1' : ''}`}>
                        <div className="flex gap-2 mb-4">
                          <Chip label={c.industry} size="small" sx={{ backgroundColor: 'rgba(212,175,55,0.15)', color: '#D4AF37', fontWeight: 700 }} />
                          <Chip label={c.location} size="small" sx={{ backgroundColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)', color: isDark ? '#d0d0d0' : '#4b5563' }} />
                        </div>
                        <Typography
                          className="font-display"
                          sx={{
                            fontSize: { xs: '1.75rem', md: '2.25rem' },
                            fontWeight: 700,
                            letterSpacing: '-0.02em',
                            lineHeight: 1.1,
                            color: isDark ? '#fff' : '#0a0a0a',
                            mb: 2,
                          }}
                        >
                          {c.title}
                        </Typography>
                        <Typography sx={{ color: isDark ? '#a0a0a0' : '#4b5563', fontSize: '1.05rem', lineHeight: 1.6, mb: 4 }}>
                          {c.headline}
                        </Typography>

                        <div className="space-y-4 mb-6">
                          <div>
                            <Typography sx={{ color: '#D4AF37', fontWeight: 700, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.12em', mb: 1 }}>
                              Challenge
                            </Typography>
                            <Typography sx={{ color: isDark ? '#c7c7c7' : '#374151', fontSize: '0.95rem', lineHeight: 1.65 }}>
                              {c.challenge}
                            </Typography>
                          </div>
                          <div>
                            <Typography sx={{ color: '#D4AF37', fontWeight: 700, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.12em', mb: 1 }}>
                              Strategy
                            </Typography>
                            <ul className="space-y-1.5">
                              {c.strategy.map((s) => (
                                <li key={s} style={{ color: isDark ? '#c7c7c7' : '#374151', fontSize: '0.95rem', lineHeight: 1.55 }}>
                                  — {s}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div
                          className="rounded-xl p-5 grid grid-cols-3 gap-4 border"
                          style={{
                            borderColor: isDark ? 'rgba(212,175,55,0.25)' : 'rgba(212,175,55,0.3)',
                            backgroundColor: isDark ? 'rgba(212,175,55,0.06)' : 'rgba(212,175,55,0.08)',
                          }}
                        >
                          {c.results.map((r) => (
                            <div key={r.label}>
                              <div style={{ color: '#D4AF37', fontWeight: 700, fontSize: '1.5rem', letterSpacing: '-0.02em', lineHeight: 1 }}>{r.metric}</div>
                              <div style={{ color: isDark ? '#b5b5b5' : '#4b5563', fontSize: '0.75rem', marginTop: 6, lineHeight: 1.4 }}>{r.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </Container>
          </section>

          <CTASection />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Projects;
