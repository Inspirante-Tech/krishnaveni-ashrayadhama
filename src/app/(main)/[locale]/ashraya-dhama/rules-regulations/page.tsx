import { getLocale, getTranslations } from 'next-intl/server';
import RulesandRegulation from '~/components/RulesandRegulation/RulesandRegulation'
import { fetchVriddhashramaPage } from '~/lib/queries';

async function page() {
    const locale = await getLocale();
    const pageData = await fetchVriddhashramaPage(locale);
    const t = await getTranslations("vridddhashrama");
    return (

        <main  className="content-container mx-auto space-y-16 md:space-y-20">
            <h2 className="heading capitalize mt-10  text-action-950">
                {t("rulesAndRegulation.heading")}
            </h2>

            <RulesandRegulation rules={pageData.rules} />
        </main>
    )
}

export default page