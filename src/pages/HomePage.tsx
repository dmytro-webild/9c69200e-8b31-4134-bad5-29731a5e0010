import React from 'react';
import HeroSection from './HomePage/sections/Hero';
import MetricsSection from './HomePage/sections/Metrics';
import SocialProofSection from './HomePage/sections/SocialProof';
import TestimonialsSection from './HomePage/sections/Testimonials';
import ContactSection from './HomePage/sections/Contact';
import FleetGallerySection from './HomePage/sections/FleetGallery';
import PricingSection from './HomePage/sections/Pricing';


import LeadCaptureSection from './HomePage/sections/LeadCapture';
import PartnersSection from './HomePage/sections/Partners';export default function HomePage(): React.JSX.Element {
  return (
    <>
      <HeroSection />
      <PartnersSection />
      <MetricsSection />
      <SocialProofSection />
      <TestimonialsSection />
      <PricingSection />
      <LeadCaptureSection />
      <ContactSection />
      <FleetGallerySection />
    </>
  );
}