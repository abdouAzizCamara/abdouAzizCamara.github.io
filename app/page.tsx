"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import MyServices from "@/components/MyServices";
import Languages from "@/components/Languages";
import Technologies from "@/components/Technologies";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <MyServices />
        <Languages />
        <Technologies />
        <Education />
        <Projects />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
