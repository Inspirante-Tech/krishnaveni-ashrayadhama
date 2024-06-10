import { getLocale, getTranslations } from "next-intl/server";
import ZigZag from "~/components/ZigZag/ZigZag";
import { fetchAboutPage } from "~/lib/queries";

async function About() {
  const locale = await getLocale();
  const t = await getTranslations("aboutUs");
  const data = await fetchAboutPage(locale);
  return (
    <main className="flex flex-col md:gap-4 gap-2 min-h-screen content-container">
      <div className="pt-20">
        <div
          className="text-gray-900 text-left heading"
          style={{ textTransform: "capitalize" }}
        >
          {t("heading")}
        </div>
      </div>
      <div className="h-1 w-14 bg-secondary-500 rounded-full"></div>
      <div className="space-y-16 md:space-y-20 ">
        <ZigZag contents={data.sections} />
      </div>
    </main>
  );
}
export default About;
