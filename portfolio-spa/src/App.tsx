import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import CapabilitiesSection from '@/components/CapabilitiesSection';
import ContactSection from '@/components/ContactSection';

const sections = ['hero', 'about', 'projects', 'capabilities', 'contact'];

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-on-background font-body-md selection:bg-primary-container selection:text-on-primary-container">
      <Navbar activeSection={activeSection} />
      <Sidebar />
      <main className="lg:ml-16">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <CapabilitiesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
