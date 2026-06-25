import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Tag from '@/components/ui/Tag';
import TextAnimation from '@/components/ui/TextAnimation';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function LeadCaptureSection() {
  const [email, setEmail] = useState('');

  return (
    <div data-webild-section="lead-capture" id="lead-capture" className="relative w-full py-24 bg-background">
      <div className="w-content-width mx-auto">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <ScrollReveal variant="fade">
            <div className="flex flex-col items-center space-y-6">
              <Tag text="Book Your Chauffeur" />
              <TextAnimation
                text="Text Broadway Black Cars Now"
                variant="slide-up"
                tag="h2"
                gradientText={false}
                className="text-4xl md:text-5xl font-bold text-foreground"
              />
              <p className="text-lg text-accent">
                Contact us today to reserve your premium black car service in Nashville.
              </p>

              <div className="mt-8">
                <Button
                  text="Text Broadway Black Cars Now: 615-339-2522"
                  variant="primary"
                  href="sms:6153392522"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
