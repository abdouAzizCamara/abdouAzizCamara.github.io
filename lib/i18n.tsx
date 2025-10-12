"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Translations = Record<string, any>;

type I18nContextType = {
  lang: string;
  setLang: (l: string) => void;
  t: (path: string, vars?: Record<string, string | number>) => string;
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

async function loadLocale(lang: string): Promise<Translations> {
  try {
    const res = await fetch(`/locales/${lang}.json`);
    if (!res.ok) throw new Error("Locale not found");
    return await res.json();
  } catch (e) {
    console.error(e);
    return {};
  }
}

function getValue(obj: any, path: string) {
  return path.split(".").reduce((o, k) => (o ? o[k] : undefined), obj);
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("siteLang") ||
        document.documentElement.lang ||
        "fr"
      );
    }
    return "fr";
  });
  const [dict, setDict] = useState<Translations>({});

  useEffect(() => {
    let mounted = true;
    loadLocale(lang).then((d) => {
      if (mounted) setDict(d);
    });
    return () => {
      mounted = false;
    };
  }, [lang]);

  const setLang = (l: string) => {
    setLangState(l);
    localStorage.setItem("siteLang", l);
    if (typeof document !== "undefined") {
      document.documentElement.lang = l;
    }
  };

  const t = (path: string, vars?: Record<string, string | number>) => {
    const val = getValue(dict, path) ?? path;
    if (!vars) return String(val);
    return String(val).replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ""));
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useTranslation must be used within I18nProvider");
  return ctx;
}
