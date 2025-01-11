"use client";

import { useLanguage } from "../app/languageContext";
import { Language } from "../app/translations";

const languageNames: Record<Language, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
  ru: "Русский",
  // zh: '中文',
  pijin: "Pidgin",
};

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value as Language)}
      className="p-2 rounded-[5px] bg-background text-text cursor-pointer shadow-none dark:hover:bg-[#242f32] outline-none"
      aria-label="Select language"
    >
      {Object.entries(languageNames).map(([code, name]) => (
        <option key={code} value={code} className="shadow-none">
          {name}
        </option>
      ))}
    </select>
  );
}
