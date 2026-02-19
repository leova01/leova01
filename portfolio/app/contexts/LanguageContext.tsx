"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import en from "../locales/en.json";
import es from "../locales/es.json";

type Language = "en" | "es";
type Translations = typeof en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en,
  es,
};

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  // Initialize language from localStorage or browser detection
  const getInitialLanguage = (): Language => {
    if (typeof window === "undefined") return "en";

    const savedLang = localStorage.getItem("language") as Language | null;
    if (savedLang) return savedLang;

    const browserLang = navigator.language.toLowerCase();
    return browserLang.startsWith("es") ? "es" : "en";
  };

  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
