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

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Alex Morgan | Implementing & Digital Consultant</title>
        <meta name="description" content="Helping businesses scale with smart digital systems, marketing, and automation. Web development, SEO, social media marketing, lead generation, and AI automation services." />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <AboutBrand />
          <ServicesPreview />
          <WhyChooseMe />
          <FeaturedWork />
          <CTASection />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Home;
