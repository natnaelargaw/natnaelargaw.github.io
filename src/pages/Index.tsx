import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import TeachingSection from "@/components/TeachingSection";
import MediaSection from "@/components/MediaSection";
import EducationSection from "@/components/EducationSection";
import FamilySection from "@/components/FamilySection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <TeachingSection />
      <MediaSection />
      <EducationSection />
      <FamilySection />
      <ContactSection />
    </div>
  );
};

export default Index;
