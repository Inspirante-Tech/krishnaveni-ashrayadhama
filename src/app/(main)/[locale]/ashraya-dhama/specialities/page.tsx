import { getLocale, getTranslations } from "next-intl/server";
import Heading from "~/components/Heading/Heading";
import NearbyPlaces from "~/components/NearbyPlaces/NearbyPlaces";
import RichText from "~/components/RichText/RichText";
import VideoSection from "~/components/VideoSection/VideoSection";
import ZigZag from "~/components/ZigZag/ZigZag";
import { fetchVriddhashramaPage } from "~/lib/queries";

export default async function Vridddhashrama() {
  const locale = await getLocale();
  const t = await getTranslations("vridddhashrama");
  const pageData = await fetchVriddhashramaPage(locale);

  return (
    <main className="content-container mx-auto space-y-16 md:space-y-20 mt-24">
      <section className="flex flex-col gap-2 md:gap-4">
        <Heading seperatorColor='secondary'>
          {pageData.title}
        </Heading>
        <RichText value={pageData.description}/>
      </section>

      <ZigZag contents={pageData.features} />
      <VideoSection videoSrc={pageData.videoLink} />
      <NearbyPlaces
        detail={pageData.surrounding_detail}
        locations={pageData.locations}
      />
    </main>
  );
}
