import { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { EducationSection } from '@/components/EducationSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { LanguagesSection } from '@/components/LanguagesSection';
import { CertificatesSection } from '@/components/CertificatesSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';
import { SplashScreen } from '@/components/SplashScreen';
import { ChatBot } from '@/components/ChatBot';

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <SplashScreen isVisible={showSplash} />
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificatesSection />
      <LanguagesSection />
      <ContactSection />
      <Footer />
      <ChatBot />
    </main>
  );
};

export default Index;
