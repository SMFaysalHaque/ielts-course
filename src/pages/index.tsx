import CoursePage from "@/components/CoursePage";
import { Lang, ProductData } from "@/types/product";
import { fetchProductData } from "@/utils/api";
import { t } from "@/utils/translate";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

const Home = ({ data, lang }: { data: ProductData; lang: Lang }) => {
  const course = data.data;
  const router = useRouter();

  const changeLanguage = (value: string) => {
    if (value === "en" || value === "bn") {
      router.push(`/?lang=${value}`);
    }
  };

  return (
    <>
      <Head>
        <title>{course.seo?.title ?? t(lang, "title")}</title>
        {course.seo?.description && (
          <meta name="description" content={course.seo.description} />
        )}
        {course.seo?.keywords?.length && (
          <meta name="keywords" content={course.seo.keywords.join(", ")} />
        )}
        {course.seo?.defaultMeta?.map((meta, i) => {
          const tagProps: Record<string, string> = { content: meta.content };
          tagProps[meta.type] = meta.value;
          return <meta key={i} {...tagProps} />;
        })}
        {course.seo?.schema?.map((schema, i) =>
          schema.meta_name === "ld-json" && schema.meta_value ? (
            <script
              key={i}
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: schema.meta_value }}
            />
          ) : null
        )}
      </Head>

      <nav className="sticky top-0 z-50 bg-white shadow flex items-center justify-between p-4">
        <p>{t(lang, "school")}</p>
        <select
          className="border p-2 rounded outline-none hover:cursor-pointer"
          defaultValue={String(lang)}
          onChange={(e) => changeLanguage(e.target.value as "en" | "bn")}
        >
          <option value="en">English</option>
          <option value="bn">বাংলা</option>
        </select>
      </nav>

      {data ? (
        <CoursePage data={data} lang={lang} />
      ) : (
        <p>{t(lang, "noData")}</p>
      )}
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const langQuery = context.query.lang;
    const lang = langQuery === "en" || langQuery === "bn" ? langQuery : "en";

    const result = await fetchProductData(lang);

    return { props: { data: result, lang } };
  } catch (error) {
    return { props: { data: null, lang: "en" } };
  }
};
