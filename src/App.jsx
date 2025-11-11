import { Navbar } from "./components/Navbar";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { Toaster } from "@/components/ui/toaster";
import BlurryCursor from "@/components/ui/BlurryCursor";

function App() {
  return (
    <>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Blurry Cursor */}
        <BlurryCursor />


        {/* Toaster */}
        <Toaster />

        {/* Background Effects */}
        <StarBackground />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
