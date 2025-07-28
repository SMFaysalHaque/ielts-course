// components/Title.tsx
import { Lang } from "@/types/product";

export default function Title({ title, lang }: { title: string; lang: Lang }) {
  console.log("Title:", title, lang);
  return <h1 className="text-3xl font-bold">{title}</h1>;
}
