import type { CourseData, Lang } from "@/types/product";
import Checklist from "./Checklist";
import CTAButton from "./CTAButton";
import Trailer from "./Trailer";

export default function CoursePreview({
  data,
  lang
}: {
  data: CourseData;
  lang: Lang;
}) {
  const response: CourseData = data;
  return (
    <div className="md:max-w-[330px] lg:max-w-[400px] mx-auto rounded-xl shadow-lg border p-4 bg-white">
      <Trailer media={response.media} />

      <div className="w-full">
        <CTAButton text={response.cta_text} />
      </div>

      <div className="mt-6">
        <Checklist checklist={response.checklist} lang={lang} />
      </div>
    </div>
  );
}
