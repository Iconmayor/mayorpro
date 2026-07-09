import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import ProblemSection from '@/components/sections/ProblemSection';
import GrowthEngine from '@/components/sections/GrowthEngine';
import Outcomes from '@/components/sections/Outcomes';
import CaseStudies from '@/components/sections/CaseStudies';
import Comparison from '@/components/sections/Comparison';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import CTASection from '@/components/sections/CTASection';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Able Digital — The Local Growth Engine for Home Service Businesses</title>
        <meta name="description" content="Able Digital is the growth partner for U.S. home service businesses. Websites, Local SEO, Google Business Profile, reviews, and AI visibility — engineered as one system for qualified local leads." />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <TrustBar />
          <ProblemSection />
          <GrowthEngine />
          <Outcomes />
          <CaseStudies />
          <Comparison />
          <Testimonials />
          <FAQ />
          <CTASection />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Home;
