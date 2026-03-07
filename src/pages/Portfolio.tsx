import Navbar from '../components/Navbar';
import SkillsSection from '../components/SkillsSection';
import HomeSection from '../components/HomeSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Portfolio() {
  return (
    <div className="font-display text-slate-900 bg-white overflow-x-hidden pt-[73px]">
      <Navbar />
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

