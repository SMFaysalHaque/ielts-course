// components/Description.tsx
export default function Description({ html }: { html: string }) {
  console.log("HTML::", html);
  return <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />;
}
