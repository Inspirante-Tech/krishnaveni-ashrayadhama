import { getLocale, getTranslations } from "next-intl/server";
import ImageContent from "~/components/Features/Features";
import NearbyPlaces from "~/components/NearbyPlaces/NearbyPlaces";
import RulesandRegulation from "~/components/RulesandRegulation/RulesandRegulation";
import VideoSection from "~/components/VideoSection/VideoSection";
import { fetchVriddhashramaPage } from "~/lib/queries";


export default async function Vridddhashrama() {
  const locale = await getLocale();
  const t = await getTranslations("vridddhashrama")
  const pageData = await fetchVriddhashramaPage(locale);
  return (
    <main className="bg-white  page-container ">
      <section className="content-container">
        
        <h2 className="text-3xl   md:text-5xl font-bold mt-12 p-6 text-action-950 ">
          {pageData.title}
        </h2>
        <p className="mt-1 text-gray-800 p-6">
          {pageData.description}
        </p>
      </section>

      <ImageContent  data={pageData.features}/>
      <VideoSection  videoSrc={pageData.videoLink} />
      <div>
        <h2 className="text-2xl md:text-3xl uppercase font-bold text-center mt-10  text-action-950">
          {t("rulesAndRegulation.heading")}
        </h2>

        <RulesandRegulation rules={pageData.rules}/>
      </div>
      <NearbyPlaces detail={pageData.surrounding_detail} locations={pageData.locations}/>
    </main>
  );
}
