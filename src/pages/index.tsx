import CoursePage from "@/components/CoursePage";
import { ProductData } from "@/types/product";
import { fetchProductData } from "@/utils/api";
import { t } from "@/utils/translate";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

const Home = ({ data }: { data: ProductData }) => {
  const lang = data.lang;
  const router = useRouter();

  const changeLanguage = (lang: "en" | "bn") => {
    router.push(`/?lang=${lang}`);
  };

  return (
    <>
      <Head>
        <title>{data.seo?.title ?? t(lang, "title")}</title>

        {data.seo?.description && (
          <meta name="description" content={data.seo.description} />
        )}

        {data.seo?.keywords && Array.isArray(data.seo.keywords) && (
          <meta name="keywords" content={data.seo.keywords.join(", ")} />
        )}

        {data.seo?.defaultMeta?.map((meta, index) => {
          const tagProps: Record<string, string> = {
            content: meta.content,
          };
          tagProps[meta.type] = meta.value;
          return <meta key={index} {...tagProps} />;
        })}

        {data.seo?.schema?.map((schema, index) =>
          schema.meta_name === "ld-json" && schema.meta_value ? (
            <script
              key={index}
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: schema.meta_value }}
            />
          ) : null
        )}
      </Head>

      <nav className="flex items-center justify-between p-4">
        <p>{t(lang, "school")}</p>
        <select
          className="border p-2 rounded"
          defaultValue={lang}
          onChange={(e) => changeLanguage(e.target.value as "en" | "bn")}
        >
          <option value="en">English</option>
          <option value="bn">বাংলা</option>
        </select>
      </nav>

      {data ? <CoursePage data={data} /> : <p>{t(lang, "noData")}</p>}
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const lang = (context.query.lang as "en" | "bn") || "en";
    const data = await fetchProductData(lang);

    // Add `lang` to the ProductData object so it's available in components
    return { props: { data: { ...data, lang } } };
  } catch (error) {
    console.error("SSR fetch error:", error);
    return { props: { data: null } };
  }
};
