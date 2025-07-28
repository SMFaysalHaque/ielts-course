/* eslint-disable @typescript-eslint/no-explicit-any */
import { Section } from "@/types/product";
import { useState } from "react";

export default function CourseDetails({ sections }: { sections: Section[] }) {
  const about = sections?.find((s) => s.type === "about");
  const [openIndex, setOpenIndex] = useState<number>(0); // open first section

  if (!about || !about.values?.length) return null;

  const toggleSection = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="my-8">
      <h2 className="text-[#0A1629] text-2xl font-bold mb-4">{about.name}</h2>

      <div className="border border-gray-200 rounded-xl overflow-hidden">
        {about.values.map((value, index) => {
          const hasTitle = value && typeof (value as any).title === "string";
          const hasDescription =
            value && typeof (value as any).description === "string";

          if (!hasTitle || !hasDescription) {
            return null;
          }

          const isOpen = index === openIndex;
          const isLast = index === about.values.length - 1;

          return (
            <div
              key={index}
              className={`overflow-hidden transition-all duration-200 border border-t-0 border-l-0 border-r-0 border-gray-200 ${
                isOpen && isLast ? "rounded-bl-xl rounded-br-xl" : ""
              }`}
            >
              <button
                onClick={() => toggleSection(index)}
                className="w-full flex justify-between items-center text-left px-5 py-4 transition font-semibold text-[15px] text-[#0A1629]"
              >
                <span
                  className="text-left"
                  dangerouslySetInnerHTML={{ __html: (value as any).title }}
                />
                <span
                  className={`text-xl text-gray-500 transform transition-transform duration-500 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#434343"
                  >
                    <path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" />
                  </svg>
                </span>
              </button>

              <div
                className={`transition-all duration-500 ease-in-out px-5 overflow-hidden ${
                  isOpen ? "max-h-[1000px] py-3" : "max-h-0"
                }`}
              >
                <div
                  className="text-[#0A1629] text-sm leading-relaxed list-disc pl-5"
                  dangerouslySetInnerHTML={{
                    __html: (value as any).description,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
