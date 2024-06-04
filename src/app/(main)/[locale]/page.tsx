import Hero from "~/components/Hero/Hero";
import Story from "~/components/Information/Story";
import Information from "~/components/Information/Information";
import Facilities from "~/components/Information/Facilities";
import Testimonials from "~/components/Testimonials/page";
import Fqas from "~/components/Fqas/Fqas";
import GetInTouch from "~/components/GetInTouch/GetInTouch";
import { fetchHomePage } from "~/lib/queries";
import { getLocale } from "next-intl/server";

export default async function Home() {
  const locale = await getLocale();
  const data = await fetchHomePage(locale);
  return (
    <>
      <Hero />
      <main 
      // className="my-12"
      >
        <Story data={data.story}/>
        <Facilities facilities={data.facilities}/>
        <Information data={data.whoweare}/>
        <Fqas fqas={data.fqas}/>
        <Testimonials testimonials={data.testimonials} />
      </main>
    </>
  );
}
