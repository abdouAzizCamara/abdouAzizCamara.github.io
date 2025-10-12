"use client";
import Image from "next/image";
import React from "react";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[]; // paths to images
  link?: string | null;
};

const projects: Project[] = [
  {
    id: 2,
    title:
      "Système de gestion des prises en charge IPM (Projet interne – SENELEC)",
    description:
      "Développement d’une application web destinée à automatiser la gestion des demandes de prise en charge médicale des employés et ayants droit de la SENELEC. Le système permet la centralisation des dossiers, le suivi du statut des demandes, la validation par les services concernés et la génération de rapports statistiques.",
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
    title: "DJIMASOU GLOBAL TRADING SERVICE",
    description:
      "Réalisation d’un site web pour Djimasou Global Trading Services, une entreprise spécialisée dans la vente de pièces détachées et accessoires automobiles. Le site permet de présenter les services, les produits, les contacts, et de donner une image professionnelle à l’entreprise en ligne.",
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
    title: "CARIM Imagerie — Cabinet de Radiologie et d’Imagerie Médicale",
    description:
      "Développement d’un site vitrine professionnel pour CARIM Imagerie, un cabinet médical basé à Grand Yoff (Dakar), spécialisé dans la radiologie et l’imagerie médicale. Le site présente les différents examens (IRM, Scanner, Échographie, ECG, etc.), les informations pratiques, et permet aux patients de contacter directement le cabinet.",
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
    title: "Portfolio personnel",
    description:
      "Site personnel réalisé avec Next.js et Tailwind pour présenter mes projets et compétences.",
    image: "/portfolio.png",
    tech: [
      "/technologies/nextjs.svg",
      "/technologies/tailwind.svg",
      "/language_image/ts.svg",
    ],
    link: "https://example.com/portfolio",
  },
];

export default function Projects() {
  return (
    <section className="py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Projets réalisés
          </h2>
          <p className="text-sm text-neutral-500">Quelques projets récents.</p>
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
                aria-label={p.title}
              >
                <div className="w-full h-44 relative rounded-lg overflow-hidden mb-4">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>

                <h3 className="text-lg font-medium mb-2">{p.title}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4">
                  {p.description}
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
                aria-label={`Ouvrir ${p.title} (nouvel onglet)`}
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
