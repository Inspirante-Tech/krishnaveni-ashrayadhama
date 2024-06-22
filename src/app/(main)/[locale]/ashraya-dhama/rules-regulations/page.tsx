import { getLocale, getTranslations } from "next-intl/server";
import Heading from "~/components/Heading/Heading";
import RulesandRegulation from "~/components/RulesandRegulation/RulesandRegulation";
import { fetchRules } from "~/lib/queries";

async function page() {
  const locale = await getLocale();
  const data = await fetchRules(locale);
  const t = await getTranslations("vridddhashrama.rulesAndRegulation");
  return (
    <main className="content-container space-y-5 md:space-y-15 mt-24 ">
      <Heading>
        {t("heading")}
      </Heading>

      <RulesandRegulation rules={data.rules} />
    </main>
  );
}

export default page;
