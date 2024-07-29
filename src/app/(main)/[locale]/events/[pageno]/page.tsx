import { getLocale } from "next-intl/server";
import { redirect } from "next/navigation";
import Events from "~/components/Events/Events";
import { EVENTS_PER_PAGE } from "~/constants";
import { fetchEvents } from "~/lib/queries";

export default async function page({ params }: { params: { pageno: string } }) {
  let pageNo = parseInt(params.pageno);
  pageNo = Number.isNaN(pageNo) ? 1 : pageNo;

  const locale = await getLocale();
  const { totalEvents, events, videos } = await fetchEvents(locale, pageNo - 1);

  const pageCount = Math.max(1, Math.floor(totalEvents / EVENTS_PER_PAGE));

  if (pageNo > pageCount) {
    redirect(`/${locale}/events/1`)
  }

  return (
    <main className="mt-24 min-h-screen mb-8 ">
      <Events events={events} pageNo={pageNo} pageCount={pageCount} videos={videos} />
    </main>
  );
}
