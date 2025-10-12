"use client";

import React from "react";
import { useTranslation } from "@/lib/i18n";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const { lang, setLang } = useTranslation();

  const toggleLanguage = () => {
    const newLang = lang === "fr" ? "en" : "fr";
    setLang(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-5 right-5 z-50 flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full transition-all hover:scale-105"
      aria-label="Change language"
    >
      <Globe size={18} className="text-white" />
      <span className="text-white text-sm font-medium uppercase">
        {lang === "fr" ? "EN" : "FR"}
      </span>
    </button>
  );
};

export default LanguageSwitcher;
