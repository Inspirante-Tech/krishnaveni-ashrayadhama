"use client";
import Image from "next/image";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { DoctorType } from "~/lib/types";
import { useTranslations } from "next-intl";

function Doctors({ doctors }: { doctors: DoctorType[] }) {
  const t = useTranslations("ayurvedicCenter.doctors");
  return (
    <section className="content-container  w-full relative">
      <h2 className="text-center text-gray-900 heading">{t("heading")}</h2>
      <p className="text-center text-sm text-gray-700">{t("description")}</p>
      <div className="w-full flex justify-center sm:mt-2">
        <Carousel
          opts={{ loop: true, dragFree: false, watchDrag: false }}
          plugins={[AutoScroll()]}
          className="w-full mt-4 "
        >
          <CarouselContent className="flex">
            {doctors.map((doctor, index) => (
              <CarouselItem
                key={index}
                className="flex-none p-2 md:p-3 lg:p-4 xl:p-6"
              >
                <div className="flex flex-col gap-3 items-center justify-center">
                  <div className="">
                    <Image
                      width={120}
                      height={120}
                      alt="doctorImage"
                      src={doctor.image}
                      className="rounded-full object-cover aspect-square"
                    />
                  </div>
                  <div className="flex flex-col gap-2 items-center">
                    <p className="body">{doctor.name}</p>
                    <p className="caption">{doctor.qualification}</p>
                  </div>
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
