import { getLocale, getTranslations } from "next-intl/server";
import { fetchPricingPage } from "~/lib/queries";

async function page() {
    const locale = await getLocale();
    const data = await fetchPricingPage(locale);
    const t = await getTranslations("pricing");
    return (
        <main className="content-container mx-auto space-y-16 md:space-y-20">
            <h2 className="heading capitalize mt-10  text-action-950 w-fit">
                {t("heading")}
                <div className="h-1 w-full mt-2 bg-secondary-500 rounded-full"></div>
            </h2>

            <section>
                <table>
                    <tr className="grid grid-cols-2">
                        <th>{t("table.title")}</th>
                        <th>{t("table.detail")}</th>
                    </tr>
                    <tbody>
                        {
                            data.rows.map(row => (
                                <tr className="grid grid-cols-2">
                                    <td>{row.title}</td>
                                    <td>{row.detail}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>

        </main>
    );
}

export default page;