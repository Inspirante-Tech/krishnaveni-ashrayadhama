import { getLocale, getTranslations } from "next-intl/server";
import ImageContent from "~/components/Features/Features";
import NearbyPlaces from "~/components/NearbyPlaces/NearbyPlaces";
import RulesandRegulation from "~/components/RulesandRegulation/RulesandRegulation";
import VideoSection from "~/components/VideoSection/VideoSection";
import { fetchVriddhashramaPage } from "~/lib/queries";

export default async function Vridddhashrama() {
  const locale = await getLocale();
  const t = await getTranslations("vridddhashrama");
  const pageData = await fetchVriddhashramaPage(locale);
  return (
    <main className=" bg-white  content-container">
      <section className="flex md:gap-4 gap-2 flex-col pt-20">
        <h2
          className="text-gray-900 text-left heading"
          style={{ textTransform: "capitalize" }}
        >
          {pageData.title}
        </h2>
        <p className="body">{pageData.description}</p>
      </section>
      <hr/>

      <ImageContent data={pageData.features}  heading="Facilities"/>
      <VideoSection videoSrc={pageData.videoLink} />
      <div>
        <h2 className="text-2xl md:text-3xl uppercase font-bold text-center mt-10  text-action-950">
          {t("rulesAndRegulation.heading")}
        </h2>

        <RulesandRegulation rules={pageData.rules} />
      </div>
      <NearbyPlaces
        detail={pageData.surrounding_detail}
        locations={pageData.locations}
      />
    </main>
  );
}
