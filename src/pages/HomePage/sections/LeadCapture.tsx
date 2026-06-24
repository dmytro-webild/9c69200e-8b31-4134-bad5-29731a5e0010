import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Tag from '@/components/ui/Tag';
import TextAnimation from '@/components/ui/TextAnimation';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function LeadCaptureSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the email to a backend
    console.log('Email captured:', email);
    alert('Thank you! Your guide is on its way to your inbox.');
    setEmail('');
  };

  return (
    <div data-webild-section="lead-capture" id="lead-capture" className="relative w-full py-24 bg-background">
      <div className="w-content-width mx-auto">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <ScrollReveal variant="fade">
            <div className="flex flex-col items-center space-y-6">
              <Tag text="Free Download" />
              <TextAnimation
                text="Get Our Luxury Transportation Planning Guide"
                variant="slide-up"
                tag="h2"
                gradientText={false}
                className="text-4xl md:text-5xl font-bold text-foreground"
              />
              <p className="text-lg text-accent">
                Not ready to book yet? Download our comprehensive guide to planning the perfect luxury transportation for your next Nashville event. Enter your email below to receive your free copy.
              </p>

              <form className="w-full max-w-md flex flex-col sm:flex-row gap-4 mt-4" onSubmit={handleSubmit}>
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow"
                />
                <Button
                  text="Download Guide"
                  variant="primary"
                  className="w-full sm:w-auto"
                />
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
