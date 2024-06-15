import Image from "next/image";
import React, { FC } from "react";
import type { FacilityType } from "~/lib/types";
import Reveal from "../Animations/reveal";

const FacilityCard = ({
  facility,
  index,
}: {
  facility: FacilityType;
  index: number;
}) => {
  return (
    <Reveal
      className="w-full basis-auto md:basis-[45%] lg:basis-auto lg:max-w-64 transition duration-200 ease-out group hover:-translate-y-2"
      delay={0.25 * index}
    >
      <div className="h-full flex justify-evenly bg-gradient-to-tr from-secondary-200 to-secondary-100 shadow-lg group-hover:shadow-2xl transition duration-200 ease-out rounded-lg overflow-clip">
        <div className="relative p-6 lg:p-12 py-8 gap-4 flex flex-col">
          <Image
            src={facility.image}
            alt="facility-img"
            className="w-40 h-40 md:w-36 md:h-36 rounded-full object-cover object-center mx-auto"
            height={200}
            width={200}
          />
          <h1 className="text-center text-lg font-semibold text-wrap max-w-40">{facility.title}</h1>
        </div>
      </div>
    </Reveal>
  );
};

export default FacilityCard;
