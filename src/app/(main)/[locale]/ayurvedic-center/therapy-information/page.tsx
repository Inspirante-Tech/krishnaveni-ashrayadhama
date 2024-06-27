import { getLocale, getTranslations } from "next-intl/server";
import Heading from "~/components/Heading/Heading";
import { fetchTherapyPage } from "~/lib/queries";

async function page() {
  const locale = await getLocale();
  const data = await fetchTherapyPage(locale);
  const t = await getTranslations("therapyinfo");
  return (
    <main className="content-container mx-auto space-y-5 md:space-y-15 mt-24 ">
      
      <section>
        <Heading>{t("heading")}</Heading>
        <table className="border-2 border-black border-collapse rounded-md group">
          <thead>
            <tr className="grid grid-cols-2">
              <th className="heading border border-black border-collapse p-4 group-hover:bg-primary-400 transition-all duration-300 ease-in-out">
                {t("table.title")}
              </th>
              <th className="heading border border-black border-collapse p-4 group-hover:bg-primary-400 transition-all duration-300 ease-in-out">
                {t("table.detail")}
              </th>
            </tr>
          </thead>
          <tbody>
            {data.therapy.map((row, idx) => (
              <tr
                className="grid grid-cols-2 hover:bg-primary-200 transition-colors duration-300 ease-in-out"
                key={idx}
              >
                <td className="border border-black border-collapse p-4">
                  {row.title}
                </td>
                <td className="border border-black border-collapse p-4">
                  {row.detail}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <Heading>{t("heading")}</Heading>
        <table className="border-2 border-black border-collapse rounded-md group">
          <thead>
            <tr className="grid grid-cols-3">
              <th className="heading border border-black border-collapse p-4 group-hover:bg-primary-400 transition-all duration-300 ease-in-out">
                {t("table.package")}
              </th>
              <th className="heading border border-black border-collapse p-4 group-hover:bg-primary-400 transition-all duration-300 ease-in-out">
                {t("table.detail")}
              </th>
              <th className="heading border border-black border-collapse p-4 group-hover:bg-primary-400 transition-all duration-300 ease-in-out">
                {t("table.days")}
              </th>
            </tr>
          </thead>
          <tbody>
            {data.treatmentPackages.map((row, idx) => (
              <tr
                className="grid grid-cols-3 hover:bg-primary-200 transition-colors duration-300 ease-in-out"
                key={idx}
              >
                <td className="border border-black border-collapse p-4">
                  {row.title}
                </td>
                <td className="border border-black border-collapse p-4">
                  {row.detail}
                </td>
                <td className="border border-black border-collapse p-4">
                  {row.days}
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
