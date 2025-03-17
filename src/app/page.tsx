"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/hero";
import AboutSection from "@/components/aboutme";
import Experience from "@/components/experience";
import Skills from "@/components/Skills";
import ProjectsSection from "@/components/projects";
import Education from "@/components/education";
import ContactSection from "@/components/contact";

export default function Home() {
  // Remove the unused state or use it somewhere
  // const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-[#0d1224] text-white overflow-x-hidden">
      <Navbar />
      <main className="max-w-screen-xl mx-auto py-4 px-4 sm:px-6">
        <HeroSection />
        <AboutSection />
        <Experience />
        <Skills /> 
        <ProjectsSection />
        <Education />
        <ContactSection />
      </main>
      
      <footer className="border-t border-gray-700 mt-20 w-full">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              COPYRIGHT © {new Date().getFullYear()}.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}