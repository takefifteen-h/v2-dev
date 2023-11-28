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

        {/* About Section */}
        <FadeInSection
          id="about"
          aria-label="about"
          startColor="#fff9f2"
          endColor="rgb(14, 14, 14)"
        >
          <AboutSection />
        </FadeInSection>

        {/* Services Section */}
        <FadeInSection
          id="services"
          aria-label="services"
          startColor="rgb(14, 14, 14)"
          endColor="#fff9f2"
        >
          <ServiceSection />
        </FadeInSection>

        {/* Projects Section */}
        <FadeInSection
          id="projects"
          aria-label="projects"
          startColor="#fff9f2"
          endColor="rgb(14, 14, 14)"
        >
          <ProjectSection />
        </FadeInSection>

        {/* Contact Section */}
        <FadeInSection
          id="contact"
          aria-label="contact"
          startColor="rgb(14, 14, 14)"
          endColor="#fff9f2"
        >
          <ContactSection />
        </FadeInSection>
      </main>
    </>
  );
}
