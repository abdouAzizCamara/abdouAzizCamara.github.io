"use client";
import React from "react";
import Image from "next/image";
import { FiGlobe } from "react-icons/fi";
import { useTranslation } from "@/lib/i18n";
import { motion } from "framer-motion";

export default function LinguisticSkills() {
  const { t } = useTranslation();

  return (
    <section className="w-full py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-2">
            {t("linguisticSkills.title")}
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            {t("linguisticSkills.subtitle")}
          </p>
        </motion.div>

        {/* Carte de compétence anglaise */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-gradient-to-br from-indigo-600 via-indigo-500 to-cyan-400 text-white rounded-3xl p-8 shadow-2xl border border-indigo-400/20 relative overflow-hidden">
            {/* Effet de brillance en arrière-plan */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/5 rounded-3xl" />

            <div className="relative z-10 flex items-start gap-6">
              {/* Icône */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="flex-shrink-0 w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 shadow-lg"
              >
                <FiGlobe className="text-4xl" />
              </motion.div>

              {/* Contenu */}
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">
                      {t("linguisticSkills.english.name")}
                    </h3>
                    <p className="text-sm opacity-95">
                      {t("linguisticSkills.english.proficiency")}
                    </p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/30">
                    <div className="text-xs opacity-90">
                      {t("linguisticSkills.english.levelLabel")}
                    </div>
                    <div className="text-xl font-bold">C1</div>
                  </div>
                </div>

                {/* Barre de progression */}
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs opacity-90">
                      {t("linguisticSkills.english.progressLabel")}
                    </span>
                    <span className="text-xs font-semibold">85%</span>
                  </div>
                  <div className="h-3 bg-white/30 rounded-full overflow-hidden shadow-inner">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-3 bg-white rounded-full shadow-lg"
                    />
                  </div>
                </div>

                {/* Compétences détaillées */}
                <div className="grid grid-cols-2 gap-3 mt-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20"
                  >
                    <div className="text-xs opacity-90 mb-1">
                      {t("linguisticSkills.english.skills.reading")}
                    </div>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="w-2 h-2 bg-white rounded-full"
                        />
                      ))}
                      <div className="w-2 h-2 bg-white/40 rounded-full" />
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20"
                  >
                    <div className="text-xs opacity-90 mb-1">
                      {t("linguisticSkills.english.skills.writing")}
                    </div>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="w-2 h-2 bg-white rounded-full"
                        />
                      ))}
                      <div className="w-2 h-2 bg-white/40 rounded-full" />
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20"
                  >
                    <div className="text-xs opacity-90 mb-1">
                      {t("linguisticSkills.english.skills.speaking")}
                    </div>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="w-2 h-2 bg-white rounded-full"
                        />
                      ))}
                      <div className="w-2 h-2 bg-white/40 rounded-full" />
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20"
                  >
                    <div className="text-xs opacity-90 mb-1">
                      {t("linguisticSkills.english.skills.listening")}
                    </div>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div
                          key={i}
                          className="w-2 h-2 bg-white rounded-full"
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
