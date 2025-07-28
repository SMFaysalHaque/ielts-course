import bn from "@/locales/bn/common.json";
import en from "@/locales/en/common.json";
import type { Lang } from "@/types/product";

type TranslationKeys = keyof typeof en;

const translations: Record<Lang, Record<TranslationKeys, string>> = {
  en,
  bn,
};

export const t = (lang: Lang, key: string): string => {
  return (
    translations[lang]?.[key as TranslationKeys] ||
    translations["en"]?.[key as TranslationKeys] ||
    key
  );
};
