import HeroSection from "@/components/heroSection/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServiceSection from "@/components/serviceSection/ServiceSection";
import FadeInSection from "@/components/FadeInSection";
import ProjectsSection from "@/components/projectsSection/ProjectsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <FadeInSection
        id="about"
        aria-label="about"
        startColor="rgb(255, 255, 255)"
        endColor="rgb(14, 14, 14)"
      >
        <AboutSection />
      </FadeInSection>

      <FadeInSection
        id="services"
        aria-label="services"
        startColor="rgb(14, 14, 14)"
        endColor="rgb(255, 255, 255)"
      >
        <ServiceSection />
      </FadeInSection>

      <FadeInSection
        id="projects"
        aria-label="projects"
        startColor="rgb(255, 255, 255)"
        endColor="rgb(14, 14, 14)"
      >
        <ProjectsSection />
      </FadeInSection>
    </main>
  );
}
