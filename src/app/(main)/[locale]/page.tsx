import Hero from "~/components/Hero/Hero";
import Story from "~/components/Information/Story";
import Information from "~/components/Information/Information";
import Facilities from "~/components/Information/Facilities";
import Testimonials from "~/components/Testimonials/page";
import Fqas from "~/components/Fqas/Fqas";
import { fetchHomePage } from "~/lib/queries";
import { getLocale } from "next-intl/server";

export default async function Home() {
  const locale = await getLocale();
  const data = await fetchHomePage(locale);

  return (
    <main className="space-y-8">
      <Hero carouselImages={data.carosuel} data={data.announcements} />
      <Story data={data.section1} />
      <Facilities facilities={data.facilities} />
      <Information data={data.section2} />
      <Fqas fqas={data.fqas} />
      <Testimonials testimonials={data.testimonials} />
    </main>
  );
}
