import HeroSection from "@/components/heroSection/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServiceSection from "@/components/serviceSection/ServiceSection";
import FadeInSection from "@/components/serviceSection/FadeInSection";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <FadeInSection
        startColor="hsl(0, 0%, 100%)"
        endColor="rgb(14 14 14)"
        aria-label="about"
      >
        <AboutSection />
      </FadeInSection>

      <FadeInSection
        startColor="rgb(14 14 14)"
        endColor="hsl(0, 0%, 100%)"
        aria-label="services"
      >
        <ServiceSection />
      </FadeInSection>
    </main>
  );
}
