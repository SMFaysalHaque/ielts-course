// components/CoursePreview.tsx
import CTAButton from "./CTAButton";
import Checklist from "./Checklist";
import Trailer from "./Trailer";

import { CTA, Media } from "@/types/product";

export default function CoursePreview({
  data,
  lang,
}: {
  data: {
    media: Media[];
    checklist: Checklist[];
    cta_text: CTA;
  };
}) {
  return (
    <div className="md:max-w-[330px] lg:max-w-[400px] mx-auto rounded-xl shadow-lg border p-4 bg-white">
      {/* Course Trailer Section */}
      <Trailer media={data.data.media} lang={lang} />

      {/* Price Display */}
      <p className="inline-block text-2xl font-semibold mb-3">৳1000</p>

      {/* CTA Button */}
      <div className="w-full">
        <CTAButton text={data.data.cta_text} lang={lang} />
      </div>

      {/* Checklist Section */}
      <div className="mt-6">
        <Checklist checklist={data.data.checklist} lang={lang} />
      </div>
    </div>
  );
}
