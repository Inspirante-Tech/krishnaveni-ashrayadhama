import { getLocale } from "next-intl/server";
import Events from "~/components/Events/Events";
import { fetchEvents } from "~/lib/queries";
import { fetchHomePage } from "~/lib/queries";

export default async function page() {
  const locale = await getLocale();
  const events = await fetchEvents(locale);
  const data = await fetchHomePage(locale);
  return (
    <main className="mt-24 min-h-screen mb-8 ">
      <Events events={events} data={data.videos} />
    </main>
  );
}
