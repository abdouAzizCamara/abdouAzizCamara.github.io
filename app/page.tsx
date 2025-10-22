"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import MyServices from "@/components/MyServices";
import LinguisticSkills from "@/components/LinguisticSkills";
import Languages from "@/components/Languages";
import Technologies from "@/components/Technologies";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <section id="about">
          <MyServices />
          <LinguisticSkills />
          <Languages />
          <Technologies />
          <Education />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
          <Footer />
        </section>
      </div>
    </main>
  );
};

export default Home;
