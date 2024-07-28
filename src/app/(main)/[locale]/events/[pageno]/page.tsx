import { getLocale } from "next-intl/server";
import Events from "~/components/Events/Events";
import { fetchEvents2 } from "~/lib/queries";
import { fetchHomePage } from "~/lib/queries";

export default async function page({ params }: { params: { pageno: string } }) {
  let pageNo = parseInt(params.pageno);
  pageNo = Number.isNaN(pageNo)?1:pageNo;

  const locale = await getLocale();
  const events = await fetchEvents2(locale,pageNo-1);
  const data = await fetchHomePage(locale);

  return (
    <main className="mt-24 min-h-screen mb-8 ">
      <Events events={events.events} pageNo={pageNo} pageCount={events.totalEvents} data={data.videos} />
    </main>
  );
}
