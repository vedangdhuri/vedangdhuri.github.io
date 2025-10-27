// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Home } from "./pages/Home";
// import { NotFound } from "./pages/NotFound";
// import { Toaster } from "@/components/ui/toaster";

import { Navbar } from "./components/Navbar";
// import { ThemeToggle } from "./components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

function App() {
  return (
    // <>
    //   <Toaster />
    //   <BrowserRouter>
    //     <Routes>
    //       <Route index element={<Home />} />
    //       <Route path="*" element={<NotFound />} />
    //     </Routes>
    //   </BrowserRouter>
    // </>

    <>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme Toggle */}
            {/* <ThemeToggle /> */}
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
