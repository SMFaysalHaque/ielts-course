import type { Checklist, Lang } from "@/types/product";
import { t } from "@/utils/translate";
import Image from "next/image";

export default function Checklist({
  checklist,
  lang,
}: {
  checklist: Checklist[];
  lang: Lang;
}) {
  if (!checklist?.length) return null;

  console.log("Check List::", checklist, lang);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">
        {t(lang, "whatIsInThisCourse")}
      </h2>
      <ul className="list-check space-y-1">
        {checklist.map((item) => (
          <li key={item.id} className="">
            <div className="flex items-center gap-3">
              <div className="">
                <Image
                  src={item.icon}
                  alt={item.text}
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <p>{item.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
