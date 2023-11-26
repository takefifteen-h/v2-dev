import HeroSection from "@/components/heroSection/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServiceSection from "@/components/serviceSection/ServiceSection";
import FadeInSection from "@/components/serviceSection/FadeInSection";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <FadeInSection
        id="about"
        aria-label="about"
        startColor="hsl(0, 0%, 100%)"
        endColor="rgb(14 14 14)"
      >
        <AboutSection />
      </FadeInSection>

      <FadeInSection
        id="services"
        aria-label="services"
        startColor="rgb(14 14 14)"
        endColor="hsl(0, 0%, 100%)"
      >
        <ServiceSection />
      </FadeInSection>
    </main>
  );
}
