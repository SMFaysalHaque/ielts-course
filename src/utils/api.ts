import { CourseData } from "@/types/product";
import axios from "axios";

export async function fetchProductData(lang: "en" | "bn"): Promise<CourseData> {
  const response = await axios.get<CourseData>(
    "https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course",
    {
      params: { lang },
      headers: {
        "X-TENMS-SOURCE-PLATFORM": "web",
        accept: "application/json",
      },
    }
  );

  console.log("Fetched Data:", response.data); // ✅ Add this

  return response.data;
}
