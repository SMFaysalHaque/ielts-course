export interface ProductData {
  code: number;
  data: CourseData;
  error: unknown[];
  message: string;
  payload: unknown[];
  status_code: number;
}

export interface CourseData {
  slug: string;
  id: number;
  title: string;
  description: string;
  media: Media[];
  checklist: Checklist[];
  seo: Seo;
  cta_text: CTA;
  sections: Section[];
}

export type Lang = "en" | "bn";

export interface HomeProps {
  data: CourseData;
  lang: "en" | "bn";
}

export interface Media {
  name: string;
  resource_type: "video" | "image";
  resource_value: string;
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
    type: string;
    value: string;
    content: string;
  }[];
  schema?: {
    meta_name: string;
    meta_value: string;
    type: string;
  }[];
}

export interface Section {
  type: string;
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: unknown[];
}

export interface CTA {
  name: string;
  value: string;
}
