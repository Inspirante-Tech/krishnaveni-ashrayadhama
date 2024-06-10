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
      <div className="flex justify-evenly w-full bg-gradient-to-t from-primary-400 to-primary-200 shadow-lg group-hover:shadow-2xl transition duration-200 ease-out rounded-lg overflow-clip">
        <div className="relative p-6 py-8 gap-4 flex flex-col">
          <Image
            src={facility.image}
            alt="facility-img"
            className="w-40 h-40 md:w-36 md:h-36 rounded-full object-cover object-center mx-auto"
            height={200}
            width={200}
          />
          <div className="text-center flex flex-col gap-4">
            <h1 className="text-lg font-semibold">{facility.title}</h1>
            {/* <h3 className="text-md ">{facility.description}</h3> */}
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default FacilityCard;
