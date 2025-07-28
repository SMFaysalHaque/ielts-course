// types/product.ts

export interface ProductData {
  slug: string;
  id: number;
  title: string;
  description: string;
  media: Media[];
  checklist: Checklist[];
  seo: Seo;
  cta_text: CTA;
  sections: Section[];
  lang: "en" | "bn";
}

export interface Lang {
  lang: string | string;
}

export interface HomeProps {
  data: ProductData;
  lang: "en" | "bn";
}

export interface Media {
  name: string;
  resource_type: "video" | "image";
  resource_value: string; // YouTube ID or image URL
  thumbnail_url?: string;
}

export interface Checklist {
  color: string;
  icon: string;
  id: string;
  text: string;
}

export interface Seo {
  title: string;
  description: string;
  keywords?: string[];
  defaultMeta?: {
    type: string; // "property" or "name"
    value: string; // "og:title", "og:image", etc.
    content: string;
  }[];
  schema?: {
    meta_name: string; // "ld-json"
    meta_value: string; // JSON string for schema.org
    type: string; // "ld-json"
  }[];
}

export interface Section {
  type: string;
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: any[]; // or create a more strict type for instructor if needed
}

export interface CTA {
  name: string;
  value: string;
}
