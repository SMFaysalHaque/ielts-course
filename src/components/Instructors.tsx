import { Section } from "@/types/product";

export default function Instructors({ sections }: { sections: Section[] }) {
  const instructorsSection = sections?.find((s) => s.type === "instructors");

  if (!instructorsSection || !instructorsSection.values?.length) return null;

  return (
    <div className="my-8">
      <h2 className="text-2xl font-semibold mb-4">
        {instructorsSection.name || "Course Instructors"}
      </h2>

      <div className="gap-6">
        {instructorsSection.values.map((inst, idx) => (
          <div
            key={idx}
            className="flex items-center bg-white p-4 gap-5 border rounded-lg"
          >
            <img
              src={inst.image}
              alt={inst.name}
              className="w-[73px] h-[73px] h-52 object-cover rounded-[50%] mb-4"
            />
            <div>
              <h3 className="text-lg font-bold">{inst.name}</h3>
              <p className="text-sm text-gray-600 mb-2">
                {inst.short_description}
              </p>
              <div
                className="text-sm text-gray-700"
                dangerouslySetInnerHTML={{ __html: inst.description }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
