import Navbar from "@/components/navbar/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/about/AboutSection";
import ServiceSection from "@/components/service/ServiceSection";
import FadeInSection from "@/components/FadeInSection";
import ProjectSection from "@/components/projects/ProjectSection";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="max-w-full overflow-x-hidden">
        <HeroSection />

        {/* About Section */}
          <AboutSection />

        {/* Services Section */}
          <ServiceSection />

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

      {/* Footer Section */}
      <FadeInSection
        id="footer"
        aria-label="footer"
        initialColor="#fff9f2"
        finalColor="#0d0d0d"
        textColor="text-white"
      >
        <Footer />
      </FadeInSection>
    </>
  );
}
