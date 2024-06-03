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
    <main className="bg-white  page-container">
      <section className="content-container">
        <h2 className="text-3xl   md:text-5xl font-bold mt-12 p-6 text-action-950 ">
          {pageData.title}
        </h2>
        <p className="mt-1 text-gray-800 p-6">
          {pageData.description}
        </p>
      </section>
      <Features data={pageData.features} />
      <VideoSection videoSrc={pageData.videoLink} />
      <hr />
      <ServicesOffered />
      <Doctors />
      <hr />
      <div className="max-w-xl mt-1 border-t-2 border-black content-container">
        <h2 className="text-3xl font-bold sm:text-4xl">
          How can you avail our services
        </h2>
        <p className="mt-4 text-gray-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          dolores iure fugit totam iste obcaecati. Consequatur ipsa quod ipsum
          sequi culpa delectus, cumque id tenetur quibusdam, quos fuga minima.
        </p>
      </div>
    </main>
  );
}

export default page;
