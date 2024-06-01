import Image from "next/image";
import ImageContent from "~/components/ImageContent/ImageContent";
import NearbyPlaces from "~/components/NearbyPlaces/NearbyPlaces";

export default function Vridddhashrama() {
  return (
    <main className="w-full px-5 md:px-40">
      <div className="max-w-xl mt-30">
        <h2 className="text-3xl font-bold sm:text-4xl">
          What makes us special
        </h2>
        <p className="mt-4 text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          dolores iure fugit totam iste obcaecati. Consequatur ipsa quod ipsum
          sequi culpa delectus, cumque id tenetur quibusdam, quos fuga minima.
        </p>
      </div>

      <ImageContent />
      <NearbyPlaces />
    </main>
  );
}
