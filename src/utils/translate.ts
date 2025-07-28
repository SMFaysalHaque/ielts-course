import bn from "@/locales/bn/common.json";
import en from "@/locales/en/common.json";
import type { Lang } from "@/types/product";

const translations = { en, bn };

export function t(lang: Lang, key: string): string {
  return translations[lang]?.[key] || translations["en"]?.[key] || key;
}
