"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { testimonials } from "~/constants";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(2);

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
    //eslint-disable-next-line
  }, []);

  return (
    <section className="bg-primary-100 flex justify-center items-center h-screen">
      <div className="max-w-5xl px-4 py-12 sm:px-2 lg:px-2 lg:py-16 w-full relative sm:mt-2 mt-3">
        <h2 className="text-center text-2xl   sm:text-5xl font-bold font-poppins tracking-tight text-gray-900  mt-2 mb-6 pt-12 sm:pt-16">
          Professional Staff Top-Notch Facilities
        </h2>
        <p  className="text-center text-sm text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          quibusdam similique labore fuga impedit, consectetur facilis odit
          accusantium quo, doloribus iste.
        </p>

        <div className="w-full flex justify-center sm:mt-2">
          <Carousel className="w-full max-w-5xl justify-center  mt-4">
            <CarouselContent
              className="flex transition-transform duration-300"
              style={{
                transform: `translateX(-${
                  (currentIndex * 100) / visibleItems
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
                              {testimonial.svg}
                              {testimonial.svg}
                              {testimonial.svg}
                              {testimonial.svg}
                              {testimonial.svg}
                            </div>
                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {testimonial.name}
                            </p>
                          </div>
                        </div>
                        <p className="mt-4 text-gray-700">
                          “{testimonial.description}”
                        </p>
                      </blockquote>
                    </div>
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
