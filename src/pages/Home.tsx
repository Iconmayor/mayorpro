import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Alex Morgan | Implementing & Digital Consultant</title>
        <meta name="description" content="Transform your digital presence with expert web development, SEO, marketing, and AI automation services. Let's build something amazing together." />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Hero />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
