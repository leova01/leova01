"use client";

import { useLanguage } from "../../contexts/LanguageContext";

export function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "es" : "en")}
      className="px-3 py-1.5 text-sm font-medium rounded-lg border border-primary-opacity-02 text-text-light hover:bg-primary-opacity-02 transition-all duration-300 flex items-center gap-2"
      aria-label={t.language.toggle}
    >
      <span className="text-primary">
        {language === "en" ? "🇺🇸" : "🇪🇸"}
      </span>
      <span>{language === "en" ? t.language.en : t.language.es}</span>
    </button>
  );
}
