import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScrollSequence from './components/ScrollSequence';
import Marquee from './components/Marquee';
import Services from './components/Services';
import AdditionalServices from './components/AdditionalServices';
import Works from './components/Works';
import ProcessTimeline from './components/Process';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Pricing from './components/Pricing';
import Comparison from './components/Comparison';
import Testimonials from './components/Testimonials';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-wrapper light-theme">
      <Navbar />
      <main>
        <Hero />
        <ScrollSequence />
        <Marquee />
        <Services />
        <AdditionalServices />
        <Works />
        <ProcessTimeline />
        <Testimonials />
        <Comparison />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;
