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
  title: string;
}

export interface Seo {
  title: string;
  description: string;
  og_title?: string;
  og_description?: string;
  og_image?: string;
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
