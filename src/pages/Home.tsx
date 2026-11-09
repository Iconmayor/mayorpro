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
import WorkShowcase from '@/components/sections/WorkShowcase';
import WebsitePortfolio from '@/components/sections/WebsitePortfolio';

import Comparison from '@/components/sections/Comparison';
import AcquisitionServices from '@/components/sections/AcquisitionServices';
import FAQ from '@/components/sections/FAQ';
import CTASection from '@/components/sections/CTASection';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Able Digital | Qualified Leads, Booked Jobs & Business Growth</title>
        <meta name="description" content="Able Digital helps service businesses generate qualified enquiries through Google Ads, Local SEO, high-converting websites, CRM follow-up, and customer review growth." />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <TrustBar />
          <ProblemSection />
          <AcquisitionServices />
          <GrowthEngine />
          <Outcomes />
          <WebsitePortfolio limit={6} />
          <WorkShowcase compact />
          <Comparison />
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
