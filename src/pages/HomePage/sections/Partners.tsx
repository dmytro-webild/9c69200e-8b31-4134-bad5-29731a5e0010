import LoopCarousel from '@/components/ui/LoopCarousel';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { ShieldCheck, Award, Star } from 'lucide-react';

export default function PartnersSection() {
  return (
    <div data-webild-section="partners" id="partners" className="relative w-full py-12 bg-background border-y border-foreground/10 z-10 min-h-[200px] flex items-center">
      <div className="w-content-width mx-auto">
        <ScrollReveal variant="fade">
          <p className="text-center text-sm font-medium text-accent mb-8 uppercase tracking-widest">
            Trusted Partners & Safety Certifications
          </p>
          <LoopCarousel>
            <div className="flex items-center gap-12 md:gap-24 px-6">
              {[
                { name: "Opryland Resort", icon: Star },
                { name: "Nashville International", icon: Award },
                { name: "The Gulch", icon: Star },
                { name: "Bridgestone Arena", icon: Award },
                { name: "Music Row", icon: Star },
                { name: "Fully Insured & Licensed", icon: ShieldCheck },
                { name: "5-Star Safety Rated", icon: ShieldCheck },
              ].map((partner, idx) => {
                const Icon = partner.icon;
                return (
                  <div key={idx} className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity">
                    <Icon className="w-6 h-6 text-foreground" />
                    <span className="text-xl font-semibold text-foreground whitespace-nowrap">
                      {partner.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </LoopCarousel>
        </ScrollReveal>
      </div>
    </div>
  );
}
