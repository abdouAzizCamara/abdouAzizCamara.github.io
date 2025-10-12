"use client";
import React from "react";
import { FaGraduationCap } from "react-icons/fa6";

type EducationItem = {
  id: number;
  period: string;
  degree: string;
  institution: string;
  description?: string;
};

// NOTE: J'ai utilisé les informations que tu as fournies :
// - 2021 → 2023 : à l'ESP jusqu'à la licence
// - Actuellement : Master 2 Génie Logiciel à Supdeco (indiqué comme "Présent")
// Si tu veux des années exactes différentes, dis-le moi et j'ajuste.

const education: EducationItem[] = [
  {
    id: 0,
    period: "2023 — Présent",
    degree: "Master 2 Génie Logiciel",
    institution: "Supdeco",
  },
  {
    id: 1,
    period: "2022 — 2023",
    degree: "Licence en Génie Logiciel et Systèmes d'Information",
    institution: "École Supérieure Polytechnique de Dakar (ESP)",
  },
  {
    id: 2,
    period: "2020 — 2022",
    degree:
      "Diplôme Supérieur de Technologie en Informatique (DST) — Informatique",
    institution: "École Supérieure Polytechnique de Dakar (ESP)",
  },
];

export default function Education() {
  return (
    <section className="py-12 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Parcours académique
          </h2>
          <p className="text-sm text-neutral-500">Timeline de mes études</p>
        </div>

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-neutral-200 dark:bg-neutral-700 hidden sm:block" />

          <ul className="space-y-8">
            {education.map((e) => (
              <li key={e.id} className="relative pl-12 sm:pl-16">
                <div className="absolute -left-1 top-1 sm:left-2 sm:top-0 w-8 h-8 rounded-full bg-white/90 dark:bg-slate-900/90 flex items-center justify-center shadow">
                  <FaGraduationCap className="text-indigo-600" />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 className="text-md font-medium">{e.degree}</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">
                      {e.institution}
                    </p>
                  </div>

                  <time className="text-sm text-neutral-500">{e.period}</time>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
