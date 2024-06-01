import Image from "next/image";
import React from "react";
import { ImageContents } from "~/constants";

const ImageContent = () => {
  return (
    <section className="space-y-8 mt-20 ">
    {ImageContents.map((section, index) => (
      <div
        key={index}
        className={`flex flex-col md:flex-row  border-b-orange-300 ${
          index % 2 !== 0 ? "md:flex-row-reverse" : ""
        } items-center`}
      >
        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl font-bold  mb-4">{section.heading}</h2>
          <p className="text-lg text-gray-700">{section.content}</p>
        </div>
        <div className="md:w-1/2 p-4">
          <Image
            src={section.imageSrc}
            alt={section.imageAlt}
            width={600}
            height={400}
            className="rounded-xl object-cover w-full h-full"
          />
        </div>
      </div>
    ))}
  </section>
  );
};

export default ImageContent;
