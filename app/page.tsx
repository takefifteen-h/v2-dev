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
          textColor="text-white"
          initialColor="#fff9f2"
          finalColor="rgb(14, 14, 14)"
        >
          <AboutSection />
        </FadeInSection>

        {/* Services Section */}
        <FadeInSection
          id="services"
          aria-label="services"
          initialColor="rgb(14, 14, 14)"
          finalColor="#fff9f2"
          textColor="text-[#5d3b14]"
        >
          <ServiceSection />
        </FadeInSection>

        {/* Projects Section */}
        <FadeInSection
          id="projects"
          aria-label="projects"
          initialColor="#fff9f2"
          finalColor="rgb(14, 14, 14)"
          textColor="text-white"
        >
          <ProjectSection />
        </FadeInSection>

        {/* Contact Section */}
        <FadeInSection
          id="contact"
          aria-label="contact"
          initialColor="rgb(14, 14, 14)"
          finalColor="#ffd400"
          textColor="text-black"
        >
          <ContactSection />
        </FadeInSection>
      </main>
    </>
  );
}
