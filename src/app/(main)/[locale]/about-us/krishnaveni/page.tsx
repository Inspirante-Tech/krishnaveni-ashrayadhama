import { getLocale, getTranslations } from "next-intl/server";
import Heading from "~/components/Heading/Heading";
import ZigZag from "~/components/ZigZag/ZigZag";
import { fetchAboutPage } from "~/lib/queries";

async function About() {
  const locale = await getLocale();
  const t = await getTranslations("aboutUs");
  const data = await fetchAboutPage(locale);
  return (
    <main className="flex flex-col md:gap-4 gap-2 min-h-screen content-container">
      <div className="pt-20">
        <Heading>
          {t("heading")}
        </Heading>
      </div>

      <div className="space-y-16 md:space-y-20 ">
        <ZigZag contents={data.sections} />
      </div>
    </main>
  );
}
export default About;