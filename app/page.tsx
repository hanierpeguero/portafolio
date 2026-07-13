"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import CursorGlow from "@/components/CursorGlow";
import StarryBackground from "@/components/StarryBackground";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <StarryBackground />
      <CursorGlow />
      <Navbar />
      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <footer style={{ position: "relative", zIndex: 1, padding: "2rem", textAlign: "center", color: "var(--text-secondary)", borderTop: "1px solid var(--glass-border)", marginTop: "4rem" }}>
        <p>&copy; {new Date().getFullYear()} {t.footer.rights}</p>
      </footer>
    </>
  );
}
