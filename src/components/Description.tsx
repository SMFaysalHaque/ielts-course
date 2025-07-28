// components/Description.tsx
import { Lang } from "@/types/product";

export default function Description({
  html,
  lang,
}: {
  html: string;
  lang: Lang;
}) {
  console.log("HTML::", html);
  return <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />;
}
