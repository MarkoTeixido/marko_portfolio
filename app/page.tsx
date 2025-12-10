"use client";

import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="space-y-20 pb-20">
      <Hero />

      <hr className="border-border/40 max-w-5xl mx-auto" />

      <div className="px-6 md:px-12 max-w-5xl mx-auto">
        <Projects />
      </div>

      <hr className="border-border/40 max-w-5xl mx-auto" />

      <section id="about" className="px-6 md:px-12 max-w-5xl mx-auto">
        <About />
      </section>

      <hr className="border-border/40 max-w-5xl mx-auto" />

      <div className="px-6 md:px-12 max-w-5xl mx-auto">
        <Skills />
      </div>

      <hr className="border-border/40 max-w-5xl mx-auto" />

      <div className="px-6 md:px-12 max-w-5xl mx-auto">
        <Contact />
      </div>
    </div>
  );
}
