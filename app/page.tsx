import HeroSection from "@/components/heroSection/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServiceSection from "@/components/serviceSection/ServiceSection";
import FadeInSection from "@/components/FadeInSection";
import ProjectSection from "@/components/projectsSection/ProjectSection";

export default function Home() {
  return (
    <main className="overflow-x-hidden max-w-full">
      <HeroSection />

      <FadeInSection
        id="about"
        aria-label="about"
        startColor="#fff9f2"
        endColor="rgb(14, 14, 14)"
      >
        <AboutSection />
      </FadeInSection>

      <FadeInSection
        id="services"
        aria-label="services"
        startColor="rgb(14, 14, 14)"
        endColor="#fff9f2"
      >
        <ServiceSection />
      </FadeInSection>

      <FadeInSection
        id="projects"
        aria-label="projects"
        startColor="#fff9f2"
        endColor="rgb(14, 14, 14)"
      >
        <ProjectSection />
      </FadeInSection>
    </main>
  );
}
