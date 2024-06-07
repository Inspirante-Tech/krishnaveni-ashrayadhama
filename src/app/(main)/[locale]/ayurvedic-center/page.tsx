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
    <main className=" pb-12 space-y-16 md:space-y-20 min-h-screen content-container">
      <section className="flex md:gap-4 gap-2 flex-col pt-20">
        <h2 className="text-gray-900 text-left heading" style={{ textTransform: "capitalize" }}>
          {pageData.title}
        </h2>
        <p className="body">
          {pageData.description}
        </p>
      </section>
        <Features data={pageData.features} heading="Services Offered"/>
      <VideoSection videoSrc={pageData.videoLink} />
      {/* <hr /> */}
      <Doctors doctors={pageData.doctors}/>
    </main>
  );
}

export default page;
