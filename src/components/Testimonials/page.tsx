"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { fetchTestimonials } from "~/lib/queries";
import { ResolvedType, delayAsyncFunction } from "~/lib/utils";

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(2);
  const [isLoading, setIsLoading] = useState(true);
  const [testimonials, setTestimonials] = useState<ResolvedType<ReturnType<typeof fetchTestimonials>>>([]);

  useEffect(() => {
    (async () => {
      setTestimonials(await delayAsyncFunction(fetchTestimonials, 4000))
      setIsLoading(false)
    })()
  })

  useEffect(() => {
    const updateVisibleItems = () => {
      if (window.innerWidth < 768) {
        setVisibleItems(1);
      } else {
        setVisibleItems(3);
      }
    };

    updateVisibleItems();

    window.addEventListener("resize", updateVisibleItems);

    return () => window.removeEventListener("resize", updateVisibleItems);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex + visibleItems >= testimonials.length) {
          return 0;
        } else {
          return prevIndex + 1;
        }
      });
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-primary-100 content-container py-12 lg:py-16 w-full relative sm:mt-2 mt-3">
      <h2 className="text-center text-2xl   sm:text-5xl font-bold font-poppins tracking-tight text-gray-900  mt-2 mb-6 pt-12 sm:pt-16">
        Professional Staff Top-Notch Facilities
      </h2>
      <p className="text-center text-sm text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
        quibusdam similique labore fuga impedit, consectetur facilis odit
        accusantium quo, doloribus iste.
      </p>

      {
        isLoading ? (
          <span>
            loadng
          </span>
        ) : (
          <div className="w-full flex justify-center sm:mt-2">
            <Carousel className="w-full mt-4">
              <CarouselContent
                className="flex transition-transform duration-300"
                style={{
                  transform: `translateX(-${(currentIndex * 100) / visibleItems
                    }%)`,
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="flex-none p-2"
                    style={{ flexBasis: `${100 / visibleItems}%` }}
                  >
                    <div className="mb-8 sm:break-inside-avoid relative">
                      <div className="p-1">
                        <blockquote className="rounded-lg bg-secondary-100 p-6 shadow-sm sm:p-8">
                          <div className="flex items-center gap-4">
                            <Image
                              width={60}
                              height={60}
                              alt="testimonialImage"
                              src={testimonial.image}
                              className="size-14 rounded-full object-cover"
                            />
                            <div>
                              <div className="flex justify-center gap-0.5 text-green-500">

                              </div>
                              <p className="mt-0.5 text-lg font-medium text-gray-900">
                                {testimonial.name}
                              </p>
                            </div>
                          </div>
                          <p className="mt-4 text-gray-700">
                            “{testimonial.statement}”
                          </p>
                        </blockquote>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        )
      }
    </section>
  );
}

export default Testimonials;