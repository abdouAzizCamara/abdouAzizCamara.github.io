"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { FiGlobe, FiDownload } from "react-icons/fi";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Image from "next/image";
import { useTranslation } from "@/lib/i18n";

const Hero = () => {
  const { t } = useTranslation();

  const handleScrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById(sectionId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <div className="w-[150px] h-[150px] rounded-full overflow-hidden mb-6 shadow-lg shadow-blue-700">
            <Image
              src="/profile.jpg"
              alt="Abdou Aziz Mbengue"
              width={150}
              height={150}
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="text-xl xl:text-2xl my-2  font-bold text-blue-600">
            Abdou Aziz Mbengue
          </h1>

          <p className="  border p-3 rounded-md border-blue-400 tracking-widest text-xl font-bold text-center text-blue-100 ">
            {t("hero.subtitle")}
          </p>

          <h2 className="text-center text-[40px] text-blue-700 font-serif font-bold lg:my-4 md:text-5xl lg:text-6xl">
            {t("hero.title")}
          </h2>

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            {t("hero.description")}
          </p>

          <div className="flex flex-col md:flex-row gap-4 items-center">
            <a
              href="#projects"
              onClick={(e) => handleScrollToSection(e, "projects")}
            >
              <MagicButton
                title={t("hero.cta")}
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>

            <a href="/cv.pdf" download="CV_Abdou_Aziz_Mbengue.pdf">
              <MagicButton
                title={t("hero.cta2")}
                icon={<FiDownload />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
