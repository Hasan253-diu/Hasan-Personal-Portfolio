import React, { useState, useEffect } from 'react';
import Sidebar, { navItems } from './components/Sidebar';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import EducationSection from './sections/EducationSection';
import CertificationsSection from './sections/CertificationsSection';
import ResumeSection from './sections/ResumeSection';
import ContactSection from './sections/ContactSection';
import Footer from './sections/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Active section scroll spy using IntersectionObserver
  useEffect(() => {
    const sectionIds = navItems.map(item => item.id);
    const observers = [];

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -40% 0px',
      threshold: [0.25, 0.5]
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-neu-bg dark:bg-neu-darkBg text-slate-800 dark:text-slate-100 transition-colors duration-300">
      
      {/* Sidebar Navigation (Desktop Fixed + Mobile Drawer) */}
      <Sidebar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
      />

      {/* Main Content Area */}
      <main className="lg:pl-72 pt-16 lg:pt-6 px-4 sm:px-6 lg:pr-8 max-w-7xl mx-auto space-y-6">
        
        {/* 1. Home / Hero Section */}
        <HeroSection 
          onContactClick={() => scrollTo('contact')}
          onExploreClick={() => scrollTo('about')}
        />

        {/* 2. About Me Section */}
        <AboutSection 
          onNavigateToEducation={() => scrollTo('education')}
        />

        {/* 3. Skills Section */}
        <SkillsSection />

        {/* 4. Projects Section */}
        <ProjectsSection />

        {/* 5. Education Section */}
        <EducationSection />

        {/* 6. Certifications Section */}
        <CertificationsSection />

        {/* 7. Resume Section */}
        <ResumeSection />

        {/* 8. Contact Section */}
        <ContactSection />

        {/* Footer */}
        <Footer />

      </main>

    </div>
  );
}
