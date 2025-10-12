"use client";
import React from "react";
import { FaGraduationCap } from "react-icons/fa6";
import { useTranslation } from "@/lib/i18n";

type EducationItem = {
  id: number;
  periodKey: string;
  degreeKey: string;
  institutionKey: string;
  description?: string;
};

// NOTE: J'ai utilisé les informations que tu as fournies :
// - 2021 → 2023 : à l'ESP jusqu'à la licence
// - Actuellement : Master 2 Génie Logiciel à Supdeco (indiqué comme "Présent")
// Si tu veux des années exactes différentes, dis-le moi et j'ajuste.

const getEducation = (t: any): EducationItem[] => [
  {
    id: 0,
    periodKey: "2023 — " + t("education.present"),
    degreeKey: "education.degrees.master",
    institutionKey: "education.institutions.supdeco",
  },
  {
    id: 1,
    periodKey: "2022 — 2023",
    degreeKey: "education.degrees.license",
    institutionKey: "education.institutions.esp",
  },
  {
    id: 2,
    periodKey: "2020 — 2022",
    degreeKey: "education.degrees.dst",
    institutionKey: "education.institutions.esp",
  },
];

export default function Education() {
  const { t } = useTranslation();
  const education = getEducation(t);

  return (
    <section className="py-12 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">
            {t("education.title")}
          </h2>
          <p className="text-sm text-neutral-500">{t("education.subtitle")}</p>
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
                    <h3 className="text-md font-medium">{t(e.degreeKey)}</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">
                      {t(e.institutionKey)}
                    </p>
                  </div>

                  <time className="text-sm text-neutral-500">
                    {e.periodKey}
                  </time>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
