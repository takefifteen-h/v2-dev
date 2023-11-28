import Navbar from "@/components/navbar/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServiceSection from "@/components/service/ServiceSection";
import FadeInSection from "@/components/FadeInSection";
import ProjectSection from "@/components/projects/ProjectSection";
import ContactSection from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="max-w-full overflow-x-hidden">
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
    </>
  );
}
