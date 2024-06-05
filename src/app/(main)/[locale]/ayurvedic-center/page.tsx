import { getLocale } from "next-intl/server";
import Doctors from "~/components/Doctors/Doctors";
import Features from "~/components/Features/Features";
import ServicesOffered from "~/components/ServicesOffered/ServicesOffered";
import VideoSection from "~/components/VideoSection/VideoSection";
import { fetchAyrvedicCenterPage } from "~/lib/queries";

async function page() {
  const loacle = await getLocale();
  const pageData = await fetchAyrvedicCenterPage(loacle);
  return (
    <main className="bg-white  pb-12">
      <section className="content-container">
        <h2 className="text-3xl   md:text-5xl font-bold mt-12 p-6 text-action-950 capitalize">
          {pageData.title}
        </h2>
        <p className="mt-1 text-gray-800 p-6">
          {pageData.description}
        </p>
      </section>
        <Features data={pageData.features} heading="Services Offered"/>
      <VideoSection videoSrc={pageData.videoLink} />
      <hr />
      <Doctors doctors={pageData.doctors}/>
    </main>
  );
}

export default page;
