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
        <table className="border-2 border-black border-collapse rounded-md">
          <thead>
            <tr className="grid grid-cols-2 group">
              <th className="heading border border-black border-collapse p-4 group-hover:text-4xl transition-all duration-300 ease-in-out">
                {t("table.title")}
              </th>
              <th className="heading border border-black border-collapse p-4 group-hover:text-4xl transition-all duration-300 ease-in-out">
                {t("table.detail")}
              </th>
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row, idx) => (
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
    </main>
  );
}

export default page;
