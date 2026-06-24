import AboutTextSplit from '@/components/sections/about/AboutTextSplit';
import ContactCta from '@/components/sections/contact/ContactCta';
import FeaturesTaggedCards from '@/components/sections/features/FeaturesTaggedCards';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import MetricsMediaCards from '@/components/sections/metrics/MetricsMediaCards';
import SocialProofMarquee from '@/components/sections/social-proof/SocialProofMarquee';
import TestimonialQuoteCards from '@/components/sections/testimonial/TestimonialQuoteCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroOverlay
      tag="Nashville's Premier Chauffeur"
      title="Where Exceptional Driving Meets Luxury"
      description="Experience the pinnacle of black car service. Broadway Black Cars provides unmatched reliability, discretion, and comfort in every mile."
      primaryButton={{
        text: "Reserve Your Ride",
        href: "#contact",
      }}
      secondaryButton={{
        text: "Learn More",
        href: "#about",
      }}
      imageSrc="http://img.b2bpic.net/free-photo/business-woman-car_1303-3812.jpg"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutTextSplit
      title="The Broadway Black Cars Standard"
      descriptions={[
        "Broadway Black Cars brings a bespoke touch to Nashville transportation. With a background in elite service, every journey is curated for maximum comfort and complete punctuality.",
        "Forget ride-share unpredictability. You are guaranteed a pristine vehicle, a professional driver, and a seamless travel experience designed for the discerning individual.",
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="features" data-section="features">
    <SectionErrorBoundary name="features">
          <FeaturesTaggedCards
      tag="Our Commitment"
      title="Uncompromised Quality"
      description="The hallmarks of a luxury chauffeur service."
      items={[
        {
          tag: "Discretion",
          title: "Total Privacy",
          description: "Whether you are traveling for business or leisure, your ride is your private sanctuary.",
          primaryButton: {
            text: "Learn More",
            href: "#",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/woman-enjoying-her-financially-independence-while-buying-car_23-2149434394.jpg",
        },
        {
          tag: "Comfort",
          title: "Pristine Interiors",
          description: "Every vehicle is inspected and detailed to ensure a flawless presentation.",
          primaryButton: {
            text: "Learn More",
            href: "#",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/focused-manly-woman-is-doing-car-diagnostic-with-computer-help-auto-service_613910-17108.jpg",
        },
        {
          tag: "Reliability",
          title: "Punctual Performance",
          description: "We understand that time is your most valuable asset. We are always ready before you.",
          primaryButton: {
            text: "Learn More",
            href: "#",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-standing-with-suitcase-parking_23-2148328862.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsMediaCards
      tag="Proven Track Record"
      title="By The Numbers"
      description="Excellence defined through performance."
      metrics={[
        {
          value: "100%",
          title: "On-Time Arrival",
          description: "Reliability you can stake your schedule on.",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-enjoying-her-financially-independence-while-buying-car_23-2149434364.jpg",
        },
        {
          value: "500+",
          title: "Satisfied Guests",
          description: "Trusted by Nashville's elite professionals.",
          imageSrc: "http://img.b2bpic.net/free-photo/business-woman-with-phone-car_1303-3840.jpg",
        },
        {
          value: "24/7",
          title: "Service Availability",
          description: "Your schedule is our only priority.",
          imageSrc: "http://img.b2bpic.net/free-photo/white-retro-car-new-limousine-ride-along-street-new-york_8353-1464.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="social-proof" data-section="social-proof">
    <SectionErrorBoundary name="social-proof">
          <SocialProofMarquee
      tag="Trusted Partner"
      title="Servicing Nashville's Top Destinations"
      description="We are the preferred choice for business leaders and discerning travelers."
      names={[
        "Opryland Resort",
        "Nashville International",
        "The Gulch",
        "Bridgestone Arena",
        "Music Row",
        "Downtown Nashville",
        "Brentwood",
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialQuoteCards
      tag="Client Experience"
      title="Luxury in Every Detail"
      description="Don't just take our word for it—hear from those who prioritize quality."
      testimonials={[
        {
          name: "James Henderson",
          role: "CEO, TechCorp",
          quote: "Broadway Black Cars has transformed my commute. It's not just a ride; it's a calm moment in a busy schedule.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-adult-businesswoman-smiling_23-2148452640.jpg",
        },
        {
          name: "Elena Rodriguez",
          role: "Venture Capitalist",
          quote: "The professionalism is unmatched in Nashville. I wouldn't dream of using anyone else.",
          imageSrc: "http://img.b2bpic.net/free-photo/joyful-business-woman-with-coffee-cup_23-2148095746.jpg",
        },
        {
          name: "Marcus Thorne",
          role: "Entertainment Attorney",
          quote: "Exceptional driving, spotless vehicle, and the utmost discretion. A true class act.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-mature-businessman-using-digital-tablet-caf_23-2147955292.jpg",
        },
        {
          name: "Sarah Jenkins",
          role: "Design Director",
          quote: "Broadway Black Cars is always on time, polite, and the car is pristine every single time.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-businesswoman-portrait-office_1262-1506.jpg",
        },
        {
          name: "David Wu",
          role: "Consulting Partner",
          quote: "The reliability is stellar. It's the most stress-free way to navigate the city.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-handsome-confident-middle-aged-businessman-black-background_176420-5560.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Book Your Chauffeur"
      text="Secure your private luxury car today. Experience the Broadway Black Cars difference."
      primaryButton={{
        text: "Text Broadway Black Cars Now",
        href: "sms:+16155550123",
      }}
      secondaryButton={{
        text: "Email for Reservations",
        href: "mailto:reservations@safinnashville.com",
      }}
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
