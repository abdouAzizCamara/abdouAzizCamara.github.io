"use client";
import React, { useState } from "react";
import { useTranslation } from "@/lib/i18n";
import { motion } from "framer-motion";
import {
  FiMail,
  FiUser,
  FiMessageSquare,
  FiSend,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    // Vérifier que les clés EmailJS sont configurées
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setErrorMessage(
        "Configuration EmailJS manquante. Veuillez vérifier vos variables d'environnement."
      );
      setIsSubmitting(false);
      return;
    }

    try {
      // Envoyer l'email via EmailJS
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: "Abdou Aziz", // Changez ceci avec votre nom
        },
        publicKey
      );

      console.log("Email envoyé avec succès:", result);
      setIsSuccess(true);

      // Réinitialiser le formulaire après 3 secondes
      setTimeout(() => {
        setFormData({ name: "", email: "", subject: "", message: "" });
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email:", error);
      setErrorMessage(
        "Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            {t("contact.title")}
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        {/* Conteneur principal */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Formulaire à gauche */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 border border-purple-500/20 shadow-2xl relative overflow-hidden">
              {/* Effet de brillance */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-cyan-500/5 rounded-3xl" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-1 h-8 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full" />
                  {t("contact.formTitle")}
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Message d'erreur */}
                  {errorMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-red-400 text-sm"
                    >
                      {errorMessage}
                    </motion.div>
                  )}

                  {/* Nom */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2 text-neutral-300"
                    >
                      {t("contact.form.name")}
                    </label>
                    <div className="relative">
                      <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                        placeholder={t("contact.form.namePlaceholder")}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2 text-neutral-300"
                    >
                      {t("contact.form.email")}
                    </label>
                    <div className="relative">
                      <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                        placeholder={t("contact.form.emailPlaceholder")}
                      />
                    </div>
                  </div>

                  {/* Sujet */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-2 text-neutral-300"
                    >
                      {t("contact.form.subject")}
                    </label>
                    <div className="relative">
                      <FiMessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" />
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                        placeholder={t("contact.form.subjectPlaceholder")}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2 text-neutral-300"
                    >
                      {t("contact.form.message")}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all resize-none"
                      placeholder={t("contact.form.messagePlaceholder")}
                    />
                  </div>

                  {/* Bouton Submit */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting || isSuccess}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-3 transition-all ${
                      isSuccess
                        ? "bg-green-500 text-white"
                        : "bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:from-purple-600 hover:to-cyan-600"
                    } disabled:opacity-50 disabled:cursor-not-allowed shadow-lg`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        {t("contact.form.sending")}
                      </>
                    ) : isSuccess ? (
                      <>
                        <FaCheckCircle className="text-xl" />
                        {t("contact.form.success")}
                      </>
                    ) : (
                      <>
                        <FiSend />
                        {t("contact.form.submit")}
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </div>

            {/* Informations de contact rapide */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <motion.a
                href="mailto:aambengue13@gmail.com"
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 rounded-xl p-4 text-center group hover:border-purple-500/40 transition-all"
              >
                <FiMail className="text-2xl text-purple-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <p className="text-xs text-neutral-400">{t("contact.email")}</p>
              </motion.a>

              <motion.a
                href="tel:+221707066175"
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/20 rounded-xl p-4 text-center group hover:border-cyan-500/40 transition-all"
              >
                <FiPhone className="text-2xl text-cyan-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <p className="text-xs text-neutral-400">{t("contact.phone")}</p>
              </motion.a>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-indigo-500/10 to-indigo-500/5 border border-indigo-500/20 rounded-xl p-4 text-center group hover:border-indigo-500/40 transition-all"
              >
                <FiMapPin className="text-2xl text-indigo-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <p className="text-xs text-neutral-400">
                  {t("contact.location")}
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Image à droite */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px] lg:h-[700px] bg-gradient-to-br from-slate-900 via-purple-900/20 to-cyan-900/20 border border-purple-500/20">
              {/* Effet de gradient overlay animé */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 z-10" />

              {/* Grille de fond */}
              <div className="absolute inset-0 opacity-10">
                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage: `
                    linear-gradient(to right, rgb(147 51 234 / 0.1) 1px, transparent 1px),
                    linear-gradient(to bottom, rgb(147 51 234 / 0.1) 1px, transparent 1px)
                  `,
                    backgroundSize: "50px 50px",
                  }}
                />
              </div>

              {/* Éléments décoratifs animés */}
              <motion.div
                animate={{
                  y: [0, -30, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-purple-500 to-purple-700 rounded-3xl opacity-20 blur-2xl"
              />
              <motion.div
                animate={{
                  y: [0, 40, 0],
                  rotate: [0, -180, -360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-32 left-20 w-40 h-40 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-full opacity-20 blur-3xl"
              />
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-3xl opacity-10 blur-3xl"
              />

              {/* Icônes flottantes */}
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Cercle central */}
                  <motion.div
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="relative w-80 h-80"
                  >
                    {/* Icônes Email */}
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-purple-500/30 to-purple-600/30 rounded-2xl backdrop-blur-sm border border-purple-400/30 flex items-center justify-center shadow-lg"
                    >
                      <FiMail className="text-3xl text-purple-300" />
                    </motion.div>

                    {/* Icône Message */}
                    <motion.div
                      animate={{
                        y: [0, -15, 0],
                      }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5,
                      }}
                      className="absolute top-1/4 right-0 w-14 h-14 bg-gradient-to-br from-cyan-500/30 to-cyan-600/30 rounded-2xl backdrop-blur-sm border border-cyan-400/30 flex items-center justify-center shadow-lg"
                    >
                      <FiMessageSquare className="text-2xl text-cyan-300" />
                    </motion.div>

                    {/* Icône Send */}
                    <motion.div
                      animate={{
                        y: [0, -12, 0],
                      }}
                      transition={{
                        duration: 3.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                      }}
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-indigo-500/30 to-indigo-600/30 rounded-2xl backdrop-blur-sm border border-indigo-400/30 flex items-center justify-center shadow-lg"
                    >
                      <FiSend className="text-3xl text-indigo-300" />
                    </motion.div>

                    {/* Icône User */}
                    <motion.div
                      animate={{
                        y: [0, -8, 0],
                      }}
                      transition={{
                        duration: 2.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1.5,
                      }}
                      className="absolute top-1/4 left-0 w-14 h-14 bg-gradient-to-br from-pink-500/30 to-pink-600/30 rounded-2xl backdrop-blur-sm border border-pink-400/30 flex items-center justify-center shadow-lg"
                    >
                      <FiUser className="text-2xl text-pink-300" />
                    </motion.div>
                  </motion.div>

                  {/* Texte central */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
                  >
                    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8 shadow-2xl">
                      <motion.div
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <FiMail className="text-6xl text-purple-400 mx-auto mb-4" />
                      </motion.div>
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                        {t("contact.title")}
                      </h3>
                      <p className="text-neutral-400 mt-2 text-sm">
                        {t("contact.subtitle")}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Particules flottantes */}
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -100, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                    ease: "easeInOut",
                  }}
                  className="absolute w-1 h-1 bg-purple-400 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    bottom: 0,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
