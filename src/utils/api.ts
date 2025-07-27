import { ProductData } from "@/types/product";
import axios from "axios";

export async function fetchProductData(
  lang: "en" | "bn"
): Promise<ProductData> {
  const response = await axios.get<ProductData>(
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

// import { ProductData } from "@/types/product";

// export async function fetchProductData(
//   lang: "en" | "bn"
// ): Promise<ProductData> {
//   const response = await fetch(
//     `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`,
//     {
//       method: "GET",
//       headers: {
//         "X-TENMS-SOURCE-PLATFORM": "web",
//         accept: "application/json",
//       },
//     }
//   );

//   if (!response.ok) {
//     throw new Error(`HTTP error! Status: ${response.status}`);
//   }

//   const data: ProductData = await response.json();
//   console.log("Fetched Data:", data); // ✅ For debugging

//   return data;
// }
