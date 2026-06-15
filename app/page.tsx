import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import CursorGlow from "@/components/CursorGlow";
import StarryBackground from "@/components/StarryBackground";

export default function Home() {
  return (
    <>
      <StarryBackground />
      <CursorGlow />
      <Navbar />
      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer style={{ position: "relative", zIndex: 1, padding: "2rem", textAlign: "center", color: "var(--text-secondary)", borderTop: "1px solid var(--glass-border)", marginTop: "4rem" }}>
        <p>&copy; {new Date().getFullYear()} Hanier Peguero. All rights reserved.</p>
      </footer>
    </>
  );
}
