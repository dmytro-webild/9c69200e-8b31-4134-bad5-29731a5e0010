import React from 'react';
import HeroSection from './HomePage/sections/Hero';
import MetricsSection from './HomePage/sections/Metrics';
import SocialProofSection from './HomePage/sections/SocialProof';
import TestimonialsSection from './HomePage/sections/Testimonials';
import ContactSection from './HomePage/sections/Contact';
import FleetGallerySection from './HomePage/sections/FleetGallery';
import PricingSection from './HomePage/sections/Pricing';

export default function HomePage(): React.JSX.Element {
  return (
    <>
      <HeroSection />
      <MetricsSection />
      <SocialProofSection />
      <TestimonialsSection />
      <PricingSection />
      <ContactSection />
      <FleetGallerySection />
    </>
  );
}