<<<<<<< HEAD

=======
>>>>>>> 95664eeb0a952891a55ffdf7d1ee29285faf15fa
import ImageContent from "~/components/ImageContent/ImageContent";
import NearbyPlaces from "~/components/NearbyPlaces/NearbyPlaces";
import RulesandRegulation from "~/components/RulesandRegulation/RulesandRegulation";
import VideoSection from "~/components/VideoSection/VideoSection";

export default function Vridddhashrama() {
  return (
<<<<<<< HEAD
    <main className="bg-primary-100  page-container ">
      <section>
        <h2 className="text-3xl  md:text-5xl font-bold mt-20 p-2 text-action-950 sm:text-4xl">
=======
    <main className="bg-primary-100 space-y-16">
      <section className="content-container">
        <h2 className="text-3xl  md:text-5xl font-bold mt-20 text-action-950 sm:text-4xl">
>>>>>>> 95664eeb0a952891a55ffdf7d1ee29285faf15fa
          Vriddhashrama
        </h2>
        <p className="mt-4 text-gray-800 p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          dolores iure fugit totam iste obcaecati. Consequatur ipsa quod ipsum
          sequi culpa delectus, cumque id tenetur quibusdam, quos fuga minima.
        </p>
      </section>

      <ImageContent />
      <VideoSection />
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-center mt-10 ">
          Vriddhashram Rules And Regulations
        </h2>

        <RulesandRegulation />
      </div>
      <NearbyPlaces />
    </main>
  );
}
