// components/CoursePage.tsx
import CourseDetails from "@/components/CourseDetails";
import CourseLayout from "@/components/CourseLayout";
import Description from "@/components/Description";
import Instructors from "@/components/Instructors";
import LearningPoints from "@/components/LearningPoints";
import Title from "@/components/Title";
import type { Lang, ProductData } from "@/types/product";
import CoursePreview from "./CoursePreview";

export default function CoursePage({
  data,
  lang,
}: {
  data: ProductData;
  lang: Lang;
}) {
  // No need to access data.data — data is already the product info
  console.log("[CoursePage] props:", data);

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 p-4">
      <div className="lg:col-span-8 md:col-span-7 col-span-12 space-y-6">
        <Title title={data.title} lang={lang} />
        <Description html={data.description} lang={lang} />
        <Instructors sections={data.sections} lang={lang} />
        <CourseLayout sections={data.sections} lang={lang} />
        <LearningPoints sections={data.sections} lang={lang} />
        <CourseDetails sections={data.sections} lang={lang} />
      </div>
      <div className="lg:col-span-4 md:col-span-5 col-span-12">
        <CoursePreview data={data} lang={lang} />
      </div>
    </div>
  );
}
