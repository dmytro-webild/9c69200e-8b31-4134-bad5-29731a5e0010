import FooterMinimal from '@/components/sections/footer/FooterMinimal';
import NavbarCentered from '@/components/ui/NavbarCentered';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Instagram, Twitter } from "lucide-react";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";
import Button from "@/components/ui/Button";

export default function Layout() {
  const navItems = [
  {
    "name": "Home",
    "href": "#hero"
  },
  {
    "name": "Experience",
    "href": "#about"
  },
  {
    "name": "Testimonials",
    "href": "#testimonials"
  },
  {
    "name": "Contact",
    "href": "#contact"
  },
  {
    "name": "Features",
    "href": "#features"
  },
  {
    "name": "Metrics",
    "href": "#metrics"
  },
  {
    "name": "Social Proof",
    "href": "#social-proof"
  }
];

  return (
    <StyleProvider buttonVariant="elastic" siteBackground="noise" heroBackground="cornerGlow">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarCentered
      logo="Broadway Black Cars"
      ctaButton={{
        text: "Book Now",
        href: "tel:6153392522",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <div className="flex justify-center w-full py-8 bg-background">
          <Button text="Text Broadway Black Cars Now" href="sms:6153392522" variant="primary" />
        </div>
        <FooterMinimal
      brand="Broadway Black Cars"
      copyright="© 2024 Broadway Black Cars. All rights reserved."
      socialLinks={[
        {
          icon: Instagram,
          href: "#",
        },
        {
          icon: Twitter,
          href: "#",
        },
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}