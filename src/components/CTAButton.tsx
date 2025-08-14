import { CTA } from "@/types/product";

export default function CTAButton({ text }: { text: CTA }) {
  return (
    <>
      <p className="text-2xl text-center md:text-start font-semibold mb-3">
        ৳1000
      </p>
      <button className="w-full bg-[#1cab55] text-white px-6 py-3 rounded-md hover:bg-[#15803d]">
        {text?.name || "Enroll Now for ৳1000"}
      </button>
    </>
  );
}
