/* eslint-disable @typescript-eslint/no-explicit-any */
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
          {layout.values.map((value, idx) => {
            if (
              !value ||
              typeof value !== "object" ||
              typeof (value as any).icon !== "string" ||
              typeof (value as any).title !== "string" ||
              typeof (value as any).subtitle !== "string"
            ) {
              return null;
            }

            const item = value as {
              icon: string;
              title: string;
              subtitle: string;
            };

            return (
              <div key={idx} className="flex items-start gap-4">
                <div>
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-[18px] font-medium leading-[26px] text-white">
                    {item.title}
                  </p>
                  <p className="text-[14px] font-normal leading-[22px] text-[#9CA3AF]">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
