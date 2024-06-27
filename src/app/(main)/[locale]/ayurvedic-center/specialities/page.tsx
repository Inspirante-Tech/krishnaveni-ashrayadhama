import { getLocale, getTranslations } from "next-intl/server";
import Heading from "~/components/Heading/Heading";
import RichText from "~/components/RichText/RichText";
import VideoSection from "~/components/VideoSection/VideoSection";
import ZigZag from "~/components/ZigZag/ZigZag";
import { fetchAyrvedicCenterPage } from "~/lib/queries";

async function page() {
  const loacle = await getLocale();
  const pageData = await fetchAyrvedicCenterPage(loacle);
  const t = await getTranslations("ayurvedicCenter");
  return (
    <main className="content-container space-y-8 mt-24">
      <section className="flex md:gap-4 gap-2 flex-col">
        <Heading seperatorColor="secondary">{pageData.title}</Heading>
        <RichText value={pageData.description} />
      </section>
      <div className="flex flex-col md:gap-12 gap-6">
        <Heading seperatorColor="secondary">{t("features.heading")}</Heading>
        <ZigZag contents={pageData.features} />
      </div>
      <VideoSection videoSrc={pageData.videoLink} />
    </main>
  );
}

export default page;
