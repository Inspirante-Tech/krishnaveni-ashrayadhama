import { getLocale, getTranslations } from "next-intl/server";
import Features from "~/components/Features/Features";
import VideoSection from "~/components/VideoSection/VideoSection";
import { AyurvedicImageContentsImageContents, AyurvedicPagePageVideo } from "~/constants";
import { fetchAyrvedicCenterPage } from "~/lib/queries";

async function page() {
  const loacle = await getLocale();
  const pageData = await fetchAyrvedicCenterPage(loacle);

  return (
    <main  className="bg-white  page-container">
      <section className="content-container">
        <h2 className="text-3xl   md:text-5xl font-bold mt-12 p-6 text-action-950 ">
          {pageData.title}
        </h2>
        <p className="mt-1 text-gray-800 p-6">
          {pageData.description}
        </p>
      </section>
      <Features data={pageData.features} />
      <VideoSection  videoSrc={pageData.videoLink} />
    </main>
  );
}

export default page;
