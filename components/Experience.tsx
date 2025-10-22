"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useTranslation } from "@/lib/i18n";
import {
  FaBriefcase,
  FaCalendar,
  FaTimes,
  FaChevronRight,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

type ExperienceItem = {
  id: number;
  companyKey: string;
  roleKey: string;
  startDate: string;
  endDate: string;
  image: string;
  descriptionKey: string;
  tasksKey: string[];
  technologies: string[];
};

const experiences: ExperienceItem[] = [
  {
    id: 1,
    companyKey: "experience.items.senelec.company",
    roleKey: "experience.items.senelec.role",
    startDate: "2025-09",
    endDate: "2025-11",
    image: "/logoSenelec.png",
    descriptionKey: "experience.items.senelec.description",
    tasksKey: [
      "experience.items.senelec.tasks.0",
      "experience.items.senelec.tasks.1",
      "experience.items.senelec.tasks.2",
      "experience.items.senelec.tasks.3",
    ],
    technologies: [
      "/technologies/angular.svg",
      "/technologies/fastApi.svg",
      "/language_image/docker.svg",
      "/language_image/github.svg",
    ],
  },

  {
    id: 2,
    companyKey: "experience.items.senelec2.company",
    roleKey: "experience.items.senelec2.role",
    startDate: "2025-06",
    endDate: "2025-07",
    image: "/logoSenelec.png",
    descriptionKey: "experience.items.senelec2.description",
    tasksKey: [
      "experience.items.senelec2.tasks.0",
      "experience.items.senelec2.tasks.1",
      "experience.items.senelec2.tasks.2",
      "experience.items.senelec2.tasks.3",
    ],
    technologies: [
      "/technologies/angular.svg",
      "/technologies/spring.svg",
      "/language_image/docker.svg",
      "/language_image/github.svg",
    ],
  },

  {
    id: 3,
    companyKey: "experience.items.gs7s.company",
    roleKey: "experience.items.gs7s.role",
    startDate: "2023-02",
    endDate: "2023-06",
    image: "/gs7s.png",
    descriptionKey: "experience.items.gs7s.description",
    tasksKey: [
      "experience.items.gs7s.tasks.0",
      "experience.items.gs7s.tasks.1",
      "experience.items.gs7s.tasks.2",
      "experience.items.gs7s.tasks.3",
      "experience.items.gs7s.tasks.4",
    ],
    technologies: [
      "/technologies/react.svg",
      "/technologies/nodejs.svg",
      "/technologies/mongo.svg",
      "/technologies/SonarQube.svg",
    ],
  },
];


export default function Experience() {
  const { t, lang } = useTranslation();
  const [selectedExp, setSelectedExp] = useState<ExperienceItem | null>(null);

  const formatDate = (dateStr: string) => {
    const [year, month] = dateStr.split("-");
    const date = new Date(parseInt(year), parseInt(month) - 1);
    // Utiliser directement la locale basée sur la langue actuelle
    const locale = lang === "fr" ? "fr-FR" : "en-US";
    return date.toLocaleDateString(locale, {
      month: "long",
      year: "numeric",
    });
  };

  const closeModal = () => setSelectedExp(null);

  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header avec animations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-4">
            <FaBriefcase className="text-purple-400" />
            <span className="text-sm font-medium">
              {t("experience.subtitle")}
            </span>
          </div>
          <h2 className="text-3xl text-white md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            {t("experience.title")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setSelectedExp(exp)}
              className="group relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all cursor-pointer border border-white/5 overflow-hidden"
            >
              {/* Effet de brillance au survol */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Contenu */}
              <div className="relative z-10">
                {/* Logo de l'entreprise */}
                <div className="w-full h-32 relative rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-105 transition-transform border border-white/10">
                  <Image
                    src={exp.image}
                    alt={t(exp.companyKey)}
                    width={120}
                    height={80}
                    className="object-contain"
                  />
                </div>

                {/* Informations */}
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                    {t(exp.roleKey)}
                  </h3>
                  <p className="text-sm font-medium bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    {t(exp.companyKey)}
                  </p>

                  <div className="flex items-center gap-2 text-xs text-neutral-400">
                    <FaCalendar className="text-purple-400" />
                    <span>
                      {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                    </span>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/10">
                    {exp.technologies.slice(0, 4).map((tech, idx) => (
                      <div
                        key={idx}
                        className="w-8 h-8 relative bg-white/5 rounded-lg p-1 hover:bg-white/10 transition-colors border border-white/10"
                      >
                        <Image
                          src={tech}
                          alt="tech"
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Indicateur "Voir plus" */}
                <div className="mt-6 flex items-center justify-between text-sm">
                  <span className="text-purple-400 font-medium group-hover:text-cyan-400 transition-colors">
                    {t("experience.viewDetails")}
                  </span>
                  <FaChevronRight className="text-purple-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Modal avec animations */}
        <AnimatePresence>
          {selectedExp && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-purple-500/20"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Effet de brillance en arrière-plan */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-cyan-500/10 rounded-3xl" />

                {/* Header du modal */}
                <div className="sticky top-0 bg-slate-900/95 backdrop-blur-xl border-b border-purple-500/20 p-6 flex justify-between items-start rounded-t-3xl z-10">
                  <div className="flex gap-4 items-start flex-1">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-20 h-20 relative rounded-xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center flex-shrink-0 border border-white/10 shadow-lg"
                    >
                      <Image
                        src={selectedExp.image}
                        alt={t(selectedExp.companyKey)}
                        width={80}
                        height={60}
                        className="object-contain"
                      />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-1 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                        {t(selectedExp.roleKey)}
                      </h3>
                      <p className="text-lg text-white font-medium mb-2">
                        {t(selectedExp.companyKey)}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-neutral-400">
                        <FaCalendar className="text-purple-400" />
                        <span>
                          {formatDate(selectedExp.startDate)} -{" "}
                          {formatDate(selectedExp.endDate)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={closeModal}
                    className="text-neutral-400 hover:text-white transition p-2 hover:bg-purple-500/20 rounded-full border border-white/10"
                    aria-label="Fermer"
                  >
                    <FaTimes size={20} />
                  </motion.button>
                </div>

                {/* Contenu du modal */}
                <div className="relative z-10 p-6 space-y-6">
                  {/* Description */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-xl p-5 border border-purple-500/10"
                  >
                    <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                      <span className="w-1 h-6 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full" />
                      {t("experience.modal.description")}
                    </h4>
                    <p className="text-neutral-300 leading-relaxed">
                      {t(selectedExp.descriptionKey)}
                    </p>
                  </motion.div>

                  {/* Missions / Tâches */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-xl p-5 border border-cyan-500/10"
                  >
                    <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <span className="w-1 h-6 bg-gradient-to-b from-cyan-500 to-purple-500 rounded-full" />
                      {t("experience.modal.tasks")}
                    </h4>
                    <ul className="space-y-3">
                      {selectedExp.tasksKey.map((taskKey, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + idx * 0.1 }}
                          className="flex items-start gap-3 text-neutral-300 group"
                        >
                          <span className="text-cyan-400 mt-1 text-xl group-hover:scale-125 transition-transform">
                            →
                          </span>
                          <span className="flex-1">{t(taskKey)}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Technologies utilisées */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-xl p-5 border border-purple-500/10"
                  >
                    <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <span className="w-1 h-6 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full" />
                      {t("experience.modal.technologies")}
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedExp.technologies.map((tech, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            delay: 0.5 + idx * 0.05,
                            type: "spring",
                          }}
                          whileHover={{ scale: 1.1, y: -5 }}
                          className="flex items-center gap-2 bg-gradient-to-r from-white/5 to-white/10 hover:from-purple-500/20 hover:to-cyan-500/20 rounded-xl px-4 py-3 border border-white/10 hover:border-purple-500/30 transition-all shadow-lg"
                        >
                          <Image
                            src={tech}
                            alt="tech"
                            width={28}
                            height={28}
                            className="object-contain"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
