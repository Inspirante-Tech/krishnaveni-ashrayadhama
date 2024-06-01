import Image from "next/image";
import React from "react";
import { NearByimages } from "~/constants";

const NearbyPlaces = () => {
  return (
<<<<<<< HEAD
    <section className="bg-primary-100  mt-4">
=======
    <section className="bg-primary-100 text-white">
>>>>>>> aba001c784a63751e6a83e24547b8e71ad6da1e4
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
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
        <div key={index} className="relative group border border-gray-300  rounded-xl overflow-hidden">
        <a href={image.mapLink} target="_blank" rel="noopener noreferrer" className="block">
        
          <Image
            src={image.src}
            alt={image.alt}
            width={1000}
            height={1000}
            className="rounded-t-xl object-cover transition duration-500 group-hover:scale-105 group-hover:shadow-xl"
          />
        </a>
        <div className="p-4">
          <p className="text-gray-800 text-lg font-semibold mb-2">{image.alt}</p>
          <p className="text-gray-600">{image.description}</p>
        </div>
      </div>
  
         
          ))}
        </div>
      </div>
    </section>
  );
};

export default NearbyPlaces;
