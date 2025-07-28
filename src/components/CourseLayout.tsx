// components/CourseLayout.tsx
import { Section } from "@/types/product";
import Image from "next/image";

export default function CourseLayout({ sections }: { sections: Section[] }) {
  const layout = sections?.find((s) => s.type === "features");
  if (!layout) return null;

  return (
    <>
      <h2 className="text-black text-xl font-semibold mb-4">{layout.name}</h2>
      <div className="bg-[#0A1629] rounded-xl p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 text-white">
          {layout.values.map((value, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="">
                <Image
                  src={value.icon}
                  alt={value.title}
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[18px] font-[500px] leading-[26px] text-white ">
                  {value.title}
                </p>
                <p className="text-[14px] font-[400px] leading-[22px] text-[#9CA3AF]">
                  {value.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
