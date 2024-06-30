import { getLocale, getTranslations } from "next-intl/server";
import Heading from "~/components/Heading/Heading";
import RichText from "~/components/RichText/RichText";
import { fetchTariffPage } from "~/lib/queries";

async function page() {
  const locale = await getLocale();
  const data = await fetchTariffPage(locale);
  const t = await getTranslations("tariff");
  return (
    <main className="content-container mx-auto space-y-5 md:space-y-15 mt-24 ">
      <section>
        <Heading>{t("heading")}</Heading>

        <RichText value={data.info} className="mb-10" />

        <table className="border-2 border-black border-collapse rounded-md group">
          <thead>
            <tr className="grid grid-cols-4">
              <th className="text-lg md:text-3xl border border-black border-collapse p-4 group-hover:bg-primary-400 transition-all duration-300 ease-in-out">
                {t("table.procedure")}
              </th>
              <th className="text-lg md:text-3xl border border-black border-collapse p-4 group-hover:bg-primary-400 transition-all duration-300 ease-in-out">
                {t("table.duration")}
              </th>
              <th className="text-lg md:text-3xl border border-black border-collapse p-4 group-hover:bg-primary-400 transition-all duration-300 ease-in-out">
                {t("table.charges")}
              </th>
              <th className="text-lg md:text-3xl border border-black border-collapse p-4 group-hover:bg-primary-400 transition-all duration-300 ease-in-out break-words">
                {t("table.discount")}
              </th>
            </tr>
          </thead>
          <tbody>
            {data.tariff.map((row, idx) => (
              <tr
                className="grid grid-cols-4 hover:bg-primary-200 transition-colors duration-300 ease-in-out break-words"
                key={idx}
              >
                <td className="border border-black border-collapse p-4">
                  {row.procedure}
                </td>
                <td className="border border-black border-collapse p-4">
                  {row.duration}
                </td>
                <td className="border border-black border-collapse p-4">
                  {row.charges}/-
                </td>
                <td className="border border-black border-collapse p-4">
                  {row.discount}/-
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default page;
