"use client";
import Image from "next/image";
import React from "react";
import EmblaCarousel from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { DoctorsDetails } from "~/constants";
import AutoScroll from 'embla-carousel-auto-scroll'

function Doctors() {
  return (
    <section className="bg-primary-100 content-container py-12 lg:py-16 w-full relative sm:mt-2 mt-3 border-black">
      <h2 className="text-center text-2xl sm:text-5xl font-bold tracking-tight text-gray-900 mt-2 mb-6 pt-12 sm:pt-16">
        Our Outstanding Doctors
      </h2>
      <p className="text-center text-sm text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quibusdam
        similique labore fuga impedit, consectetur facilis odit accusantium quo,
        doloribus iste.
      </p>
      <div className="w-full flex justify-center sm:mt-2">
        <Carousel
          opts={{ loop: true, dragFree: false, watchDrag: false }}
          plugins={[AutoScroll()]}
          className="w-full mt-4 "
        >
          <CarouselContent className="flex">
            {DoctorsDetails.map((doctor, index) => (
              <CarouselItem
                key={index}
                className="flex-none p-2 md:p-3 lg:p-4 xl:p-6"
              >
                <div className="flex flex-col items-center justify-center">
                  <div className="mb-3">
                    <Image
                      width={120}
                      height={120}
                      alt="doctorImage"
                      src={doctor.iamge}
                      className="rounded-full"
                    />
                  </div>
                  <p className="text-sm sm:text-base font-medium text-gray-900">
                    {doctor.name}
                  </p>
                 
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}

export default Doctors;
