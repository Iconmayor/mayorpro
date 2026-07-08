import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Hero from '@/components/sections/Hero';
import AboutBrand from '@/components/sections/AboutBrand';
import ServicesPreview from '@/components/sections/ServicesPreview';
import WhyChooseMe from '@/components/sections/WhyChooseMe';
import FeaturedWork from '@/components/sections/FeaturedWork';
import CTASection from '@/components/sections/CTASection';
import Testimonials from '@/components/sections/Testimonials';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Adebayo Oluwamayowa | Helping Service Businesses Generate More Leads Online</title>
        <meta name="description" content="WordPress Websites, Local SEO, Google Business Profile optimization, and Lead Generation for service businesses." />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <AboutBrand />
          <ServicesPreview />
          <WhyChooseMe />
          <FeaturedWork />
          <Testimonials />
          <CTASection />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Home;
