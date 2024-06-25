import { getTranslations } from "next-intl/server";
import Heading from "~/components/Heading/Heading";
import ZigZag from "~/components/ZigZag/ZigZag";
import { fetchAboutPage } from "~/lib/queries";
import { LocaleParamProp } from "~/lib/types";

async function About({ params }: LocaleParamProp) {
  const t = await getTranslations("aboutUs");
  const data = await fetchAboutPage(params.locale);
  return (
    <main className="flex flex-col md:gap-4 gap-2 min-h-screen content-container mt-24">
      <Heading>{t("heading")}</Heading>

      <div className="space-y-16 md:space-y-20 ">
        <ZigZag contents={data.sections} />
      </div>
    </main>
  );
}
export default About;
