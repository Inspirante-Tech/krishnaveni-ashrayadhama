import { getLocale, getTranslations } from "next-intl/server";
import ZigZag from "~/components/ZigZag/ZigZag";
import { fetchAboutPage } from "~/lib/queries";

async function About() {
  const locale = await getLocale();
  const t = await getTranslations("aboutUs");
  const data = await fetchAboutPage(locale);
  return (
    <main className="space-y-16 md:space-y-20 min-h-screen content-container">
      <section className="flex md:gap-4 gap-2 flex-col pt-20">
        <div
          className="text-gray-900 text-left heading"
          style={{ textTransform: "capitalize" }}
        >
          {t("heading")}
        </h1>
      </section>
      <ZigZag contents={data.sections} />
    </main>
  );
}
export default About;
