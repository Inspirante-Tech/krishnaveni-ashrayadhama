import Image from "next/image";
import React from "react";
import { NearByimages } from "~/constants";

const NearbyPlaces = () => {
  return (
    <section className="bg-primary-100 text-white content-container py-8 sm:px-6 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-lg text-center">
        <h2 className="text-3xl font-bold  text-action-950 sm:text-4xl">
          NEARBY PLACES TO VISIT:
        </h2>

        <p className="mt-4 text-gray-800">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam
          fugit consequuntur saepe laborum.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {NearByimages.map((image, index) => (
          <div key={index} className="relative group">
            <Image
              src={image.src}
              alt={image.alt}
              width={1000}
              height={1000}
              className="rounded-xl object-cover transform transition duration-500 group-hover:scale-105 group-hover:shadow-xl"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default NearbyPlaces;
