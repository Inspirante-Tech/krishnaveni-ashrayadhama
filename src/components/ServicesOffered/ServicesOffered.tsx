import Image from "next/image";
import React from "react";
import { ServicesOffer } from "~/constants";

const ServicesOffered = () => {
  return (
    <section className="bg-white content-container mt-4">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-2xl text-center md:text-center font-bold text-action-950 md:text-4xl">
            SERVISES OFFERED
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {ServicesOffer.map((image, index) => (
            <div
              key={index}
              className=" hover:text-xl relative group border border-gray-300  rounded-xl overflow-hidden"
            >
              <a
                href={image.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block "
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1000}
                  height={1000}
                  className="rounded-t-xl object-cover transition duration-500 group-hover:scale-105 group-hover:shadow-xl"
                />
              </a>
              <div className="p-4">
                <p className="text-gray-800 text-lg  font-semibold mb-2">
                  {image.alt}
                </p>
                <p className="text-gray-600">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOffered;
