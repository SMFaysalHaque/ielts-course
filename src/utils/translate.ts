import bn from "@/locales/bn/common.json";
import en from "@/locales/en/common.json";

const translations = { en, bn };

export function t(lang: "en" | "bn", key: string): string {
  return translations[lang]?.[key] || translations["en"]?.[key] || key;
}
