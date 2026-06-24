import { motion } from "motion/react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import Tag from "@/components/ui/Tag";

export default function FleetGallery() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=2070",
      alt: "Spacious Interior"
    },
    {
      src: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=2070",
      alt: "Sleek Exterior"
    },
    {
      src: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=2070",
      alt: "Executive Comfort"
    },
    {
      src: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&q=80&w=2070",
      alt: "Ample Luggage Space"
    }
  ];

  return (
    <section data-webild-section="fleet-gallery" id="fleet-gallery" className="relative w-full py-24 bg-background">
      <div className="w-content-width mx-auto">
        <div className="text-center mb-16 flex flex-col items-center">
          <ScrollReveal variant="fade">
            <Tag text="Our Fleet" className="mb-4" />
          </ScrollReveal>
          <TextAnimation
            text="2025 Cadillac Escalade & Chevy Suburban"
            variant="fade-blur"
            tag="h2"
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            gradientText={false}
          />
          <ScrollReveal variant="fade" delay={0.2}>
            <p className="text-lg text-accent max-w-2xl mx-auto">
              Experience the ultimate in luxury and space with our brand new 2025 Black Cadillac Escalade and Chevy Suburban. Perfect for executive travel, airport transfers, and group transportation.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal variant="slide-up" delay={0.3}>
          <div className="w-full rounded-lg overflow-hidden shadow-2xl">
            <ImageOrVideo 
              imageSrc="https://picsum.photos/seed/48505342/1200/800" 
              className="w-full h-[600px] object-cover" 
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}