import CourseDetails from "@/components/CourseDetails";
import CourseLayout from "@/components/CourseLayout";
import Description from "@/components/Description";
import Instructors from "@/components/Instructors";
import LearningPoints from "@/components/LearningPoints";
import Title from "@/components/Title";
import type { Lang, ProductData } from "@/types/product";
import Checklist from "./Checklist";
import CoursePreview from "./CoursePreview";
import CTAButton from "./CTAButton";
import Trailer from "./Trailer";

export default function CoursePage({
  data,
  lang,
}: {
  data: ProductData;
  lang: Lang;
}) {
  const response = data.data;

  console.log("[CoursePage] props:", typeof response);

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 px-4 pt-10 pb-36 md:pb-10">
      <div className="lg:col-span-8 md:col-span-7 col-span-12 space-y-6">
        <Title title={response.title} />
        <Description html={response.description} />
        <Instructors sections={response.sections} />
        <div className="md:hidden block">
          <Trailer media={response.media} />
        </div>
        <div className="md:hidden fixed bottom-0 left-0 w-full bg-white p-4 z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] rounded-t-xl border">
          <CTAButton text={response.cta_text} />
        </div>

        <div className="md:hidden block">
          <Checklist checklist={response.checklist} lang={lang} />
        </div>
        <CourseLayout sections={response.sections} />
        <LearningPoints sections={response.sections} />
        <CourseDetails sections={response.sections} />
      </div>

      <div className="hidden md:block lg:col-span-4 md:col-span-5 col-span-12 sticky top-20 self-start">
        <CoursePreview data={response} lang={lang} />
      </div>
    </div>
  );
}
