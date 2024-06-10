"use client";
import Image from "next/image";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { TestimonialType } from "~/lib/types";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { useTranslations } from "next-intl";
import { Separator } from "../ui/separator";

function Testimonials({ testimonials }: { testimonials: TestimonialType[] }) {
  const t = useTranslations("home.testimonials");
  return (
    <section className="relative">
      <div className="content-container flex flex-col gap-8">
        <div className="flex flex-col md:gap-4 gap-2">
          <h2 className="heading text-gray-900">{t("heading")}</h2>
        </div>
        <div className="w-full flex justify-center">
          <Carousel
            opts={{ loop: true, dragFree: false, watchDrag: false }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            className="w-full mt-4"
          >
            <CarouselContent className="flex gap-4 px-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="lg:basis-1/3 md:basis-1/2 max-w-fit"
                >
                  <div className="p-4 md:p-8  flex flex-col gap-4 bg-secondary-200 shadow-lg rounded-2xl ">
                    <div className="flex items-center gap-4">
                      <Image
                        width={60}
                        height={60}
                        alt="testimonialImage"
                        src={testimonial.image}
                        className="size-14 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-lg font-medium text-gray-900">
                          {testimonial.name}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-loose">
                      “{testimonial.statement}”
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
