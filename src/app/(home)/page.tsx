'use client'
import HeroSection from "./_components/HeroSection";
import AboutSection from "./_components/AboutSection";
import ServicesSection from "./_components/ServicesSection";
import ContactSection from "./_components/ContactSection";
import dynamic from "next/dynamic";

const DynamicLocation = dynamic(() => import("./_components/LocationSection"), {
    ssr: false,
  });
export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center text-gray-900">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <DynamicLocation />
      <ContactSection />
    </main>
  );
}
