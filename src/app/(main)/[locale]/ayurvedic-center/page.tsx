import { getLocale, getTranslations } from "next-intl/server";
import Doctors from "~/components/Doctors/Doctors";
import VideoSection from "~/components/VideoSection/VideoSection";
import ZigZag from "~/components/ZigZag/ZigZag";
import { fetchAyrvedicCenterPage } from "~/lib/queries";

async function page() {
  const loacle = await getLocale();
  const pageData = await fetchAyrvedicCenterPage(loacle);
  const t = await getTranslations("ayurvedicCenter");
  return (
    <main className="content-container space-y-8">
      <section className="flex md:gap-4 gap-2 flex-col pt-20">
        <h2
          className="text-gray-900 text-left heading"
          style={{ textTransform: "capitalize" }}
        >
          {pageData.title}
        </h2>
        <p className="body">{pageData.description}</p>
      </section>
      <div className="flex flex-col md:gap-4 gap-2">
        <p className="heading capitalize">{t("features.heading")}</p>
        <ZigZag contents={pageData.features} />
      </div>
      <VideoSection videoSrc={pageData.videoLink} />
      <Doctors doctors={pageData.doctors} />
    </main>
  );
}

export default page;
