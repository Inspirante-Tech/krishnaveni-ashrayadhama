import { getLocale, getTranslations } from "next-intl/server";
import Heading from "~/components/Heading/Heading";
import RulesandRegulation from "~/components/RulesandRegulation/RulesandRegulation";
import { fetchRules } from "~/lib/queries";

async function page() {
  const locale = await getLocale();
  const rules = await fetchRules(locale);
  const t = await getTranslations("vridddhashrama.rulesAndRegulation");
  return (
    <main className="content-container space-y-16 md:space-y-20 mt-20 ">
      <Heading>
        {t("heading")}
      </Heading>

      <RulesandRegulation rules={rules} />
    </main>
  );
}

export default page;
