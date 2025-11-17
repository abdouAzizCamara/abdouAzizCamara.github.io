"use client";

import { Molengo } from "next/font/google";
import Image from "next/image";
import React from "react";
import { useTranslation } from "@/lib/i18n";

type Technologies = {
  id: string;
  name: string;
  img: string;
};

const technologies: Technologies[] = [
  {
    //react
    id: "react",
    name: "React",
    img: "/technologies/react.svg",
  },
  {
    //nextjs
    id: "nextjs",
    name: "Next.js",
    img: "/technologies/nextjs.svg",
  },
  {
    //node js
    id: "nodejs",
    name: "Node.js",
    img: "/technologies/nodejs.svg",
  },
  {
    //node js
    id: "nest js",
    name: "NestJS",
    img: "/technologies/nestjs.svg",
  },
  //angular
  {
    id: "angular",
    name: "Angular",
    img: "/technologies/angular.svg",
  },
  //spring
  {
    id: "springBoot",
    name: "SpringBoot",
    img: "/technologies/spring.svg",
  },
  // tailwind
  {
    id: "tailwind",
    name: "Tailwind CSS",
    img: "/technologies/tailwind.svg",
  },
  //mongo
  {
    id: "mongo",
    name: "MongoDB",
    img: "/technologies/mongo.svg",
  },
  // mysql
  {
    id: "mysql",
    name: "MySQL",
    img: "/technologies/mysql.svg",
  },
  //wordpress
  {
    id: "wordpress",
    name: "WordPress",
    img: "/technologies/wordpress.svg",
  },
];

export default function Technologies() {
  const { t } = useTranslation();

  return (
    <section className="w-full">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-2">
            {t("technologies.title")}
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            {t("technologies.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies.map((tech) => (
            <div
              key={tech.id}
              className="flex flex-col items-center gap-3 bg-white/5 dark:bg-white/3 rounded-xl p-4 hover:scale-105 transform transition-shadow duration-200 shadow-sm"
            >
              <div className="relative w-16 h-16">
                <Image
                  src={tech.img}
                  alt={tech.name}
                  sizes="64px"
                  fill={false}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <span className="text-sm font-medium text-center">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
