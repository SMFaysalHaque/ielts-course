// components/Title.tsx
export default function Title({ title }: { title: string }) {
  console.log("Title:", title);
  return <h1 className="text-3xl font-bold">{title}</h1>;
}
