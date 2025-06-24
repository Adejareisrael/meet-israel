
import { useEffect, useState } from "react";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Projects from "@/components/portfolio/Projects";
import Skills from "@/components/portfolio/Skills";
import Testimonials from "@/components/portfolio/Testimonials";
import Contact from "@/components/portfolio/Contact";
import Navigation from "@/components/portfolio/Navigation";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-cream dark:bg-midnight">
      <Navigation />
      <div style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
        <Hero />
      </div>
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Index;
