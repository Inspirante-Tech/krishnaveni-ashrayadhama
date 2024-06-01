import Image from "next/image";
import ImageContent from "~/components/ImageContent/ImageContent";
import NearbyPlaces from "~/components/NearbyPlaces/NearbyPlaces";
import VideoSection from "~/components/VideoSection/VideoSection";

export default function Vridddhashrama() {
  return (
    <main className="bg-primary-100 space-y-16">
      <section>
        <h2 className="text-3xl  md:text-5xl font-bold mt-20 text-action-950 sm:text-4xl">
          Vriddhashrama
        </h2>
        <p className="mt-4 text-gray-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          dolores iure fugit totam iste obcaecati. Consequatur ipsa quod ipsum
          sequi culpa delectus, cumque id tenetur quibusdam, quos fuga minima.
        </p>
      </section>

      <ImageContent />
      <VideoSection />
      <NearbyPlaces />
    </main>
  );
}
