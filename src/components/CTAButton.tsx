// components/CTAButton.tsx
import { CTA, Lang } from "@/types/product";

export default function CTAButton({ text, lang }: { text: CTA; lang: Lang }) {
  console.log(text);
  return (
    <button className="w-full bg-[#1cab55] text-white px-6 py-3 rounded-md hover:bg-[#15803d]">
      {text?.name || "Enroll Now for ৳1000"}
    </button>
  );
}
