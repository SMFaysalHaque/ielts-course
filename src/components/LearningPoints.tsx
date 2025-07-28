/* eslint-disable @typescript-eslint/no-explicit-any */
import { Section } from "@/types/product";

export default function LearningPoints({ sections }: { sections: Section[] }) {
  const pointers = sections?.find((s) => s.type === "pointers");
  if (!pointers) return null;

  return (
    <>
      <h2 className="text-[#0A1629] text-xl font-semibold mb-4">
        {pointers.name}
      </h2>
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
          {pointers.values.map((pointer: any, ind: number) => (
            <div key={ind} className="flex gap-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#6294F8"
                >
                  <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                </svg>
              </div>
              <p className="text-[#0A1629] leading-relaxed">{pointer.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
