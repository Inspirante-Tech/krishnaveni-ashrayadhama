import { getLocale, getTranslations } from "next-intl/server";
import NearbyPlaces from "~/components/NearbyPlaces/NearbyPlaces";
import VideoSection from "~/components/VideoSection/VideoSection";
import ZigZag from "~/components/ZigZag/ZigZag";
import { fetchVriddhashramaPage } from "~/lib/queries";

export default async function Vridddhashrama() {
  const locale = await getLocale();
  const t = await getTranslations("vridddhashrama");
  const pageData = await fetchVriddhashramaPage(locale);

  return (
    <main className="content-container mx-auto space-y-16 md:space-y-20">
      <section className="mt-12 flex flex-col gap-2 md:gap-4">
        <div
          className="heading text-gray-900"
          style={{ textTransform: "capitalize" }}
        >
          {pageData.title}
        </div>
        <p className="body">{pageData.description}</p>
      </section>
      <hr />
      
      <ZigZag contents={pageData.features} />
      <VideoSection videoSrc={pageData.videoLink} />
      <NearbyPlaces
        detail={pageData.surrounding_detail}
        locations={pageData.locations}
      />
    </main>
  );
}
