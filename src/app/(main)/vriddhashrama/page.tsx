import ImageContent from "~/components/ImageContent/ImageContent";
import NearbyPlaces from "~/components/NearbyPlaces/NearbyPlaces";
import RulesandRegulation from "~/components/RulesandRegulation/RulesandRegulation";
import VideoSection from "~/components/VideoSection/VideoSection";
import { VridddhashramaImageContentsImageContents } from "~/constants";


export default function Vridddhashrama() {
  return (
    <main className="bg-white  page-container ">
      <section className="content-container">
        
        <h2 className="text-3xl   md:text-5xl font-bold mt-12 p-6 text-action-950 ">
          Vriddhashrama
        </h2>
        <p className="mt-1 text-gray-800 p-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          dolores iure fugit totam iste obcaecati. Consequatur ipsa quod ipsum
          sequi culpa delectus, cumque id tenetur quibusdam, quos fuga minima.
        </p>
      </section>

      <ImageContent  data={VridddhashramaImageContentsImageContents}/>
      <VideoSection />
      <div>
        <h2 className="text-2xl md:text-3xl uppercase font-bold text-center mt-10  text-action-950">
          Vriddhashram Rules And Regulations
        </h2>

        <RulesandRegulation />
      </div>
      <NearbyPlaces />
    </main>
  );
}
