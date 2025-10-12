"use client";
import Image from "next/image";
import React from "react";
import { useTranslation } from "@/lib/i18n";

type Project = {
  id: number;
  titleKey: string;
  descriptionKey: string;
  image: string;
  tech: string[]; // paths to images
  link?: string | null;
};

const projects: Project[] = [
  {
    id: 2,
    titleKey: "projects.items.senelec.title",
    descriptionKey: "projects.items.senelec.description",
    image: "/senelec.png",
    tech: [
      "/technologies/angular.svg",
      "/language_image/figma.svg",
      "/technologies/spring.svg",
      "/language_image/github.svg",
      "/language_image/docker.svg",
    ],
    link: null,
  },
  {
    id: 3,
    titleKey: "projects.items.djimasou.title",
    descriptionKey: "projects.items.djimasou.description",
    image: "/djimasou.png",
    tech: [
      "/technologies/wordpress.svg",
      "/language_image/figma.svg",
      "/language_image/jira.svg",
    ],
    link: "https://www.djimasou-global-trading-services.com/",
  },
  {
    id: 4,
    titleKey: "projects.items.carim.title",
    descriptionKey: "projects.items.carim.description",
    image: "/carim.png",
    tech: [
      "/technologies/wordpress.svg",
      "/language_image/figma.svg",
      "/language_image/jira.svg",
    ],

    link: "https://carim-imagerie.com/",
  },
  {
    id: 1,
    titleKey: "projects.items.portfolio.title",
    descriptionKey: "projects.items.portfolio.description",
    image: "/portfolio.png",
    tech: [
      "/technologies/nextjs.svg",
      "/technologies/tailwind.svg",
      "/language_image/ts.svg",
    ],
    link: "https://github.com/AbdouAziz13/My-Portfolio",
  },
];

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section className="py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">
            {t("projects.title")}
          </h2>
          <p className="text-sm text-neutral-500">{t("projects.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => {
            const isClickable = Boolean(p.link);
            const card = (
              <article
                key={p.id}
                className={`bg-white/5 dark:bg-slate-900/60 rounded-2xl p-4 shadow transition ${
                  isClickable
                    ? "hover:shadow-lg hover:-translate-y-1 transform cursor-pointer"
                    : ""
                }`}
                aria-label={t(p.titleKey)}
              >
                <div className="w-full h-44 relative rounded-lg overflow-hidden mb-4">
                  <Image
                    src={p.image}
                    alt={t(p.titleKey)}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>

                <h3 className="text-lg font-medium mb-2">{t(p.titleKey)}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4">
                  {t(p.descriptionKey)}
                </p>

                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <div key={t} className="w-6 h-6 relative">
                      <Image
                        src={t}
                        alt={t}
                        fill
                        sizes="32px"
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
              </article>
            );

            return p.link ? (
              <a
                key={p.id}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                aria-label={`${t(p.titleKey)}`}
              >
                {card}
              </a>
            ) : (
              <div key={p.id}>{card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
