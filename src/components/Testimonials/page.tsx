"use client";
import Image from "next/image";
import React from "react";
import EmblaCarousel from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { testimonials } from "~/constants";

function Testimonials() {
  return (
    <section className="bg-primary-100 content-container py-12 lg:py-16 w-full relative sm:mt-2 mt-3">
      <h2 className="text-center text-2xl sm:text-5xl font-bold tracking-tight text-gray-900 mt-2 mb-6 pt-12 sm:pt-16">
        Professional Staff Top-Notch Facilities
      </h2>
      <p className="text-center text-sm text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
        quibusdam similique labore fuga impedit, consectetur facilis odit
        accusantium quo, doloribus iste.
      </p>
      <div className="w-full flex justify-center sm:mt-2">
        <Carousel
        opts={{loop:true,dragFree:false,watchDrag:false}}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
          className="w-full mt-4"
        >
          <CarouselContent className="flex ">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="flex-none p-2  lg:basis-1/3  md:basis-1/2 max-w-fit"
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
    </section>
  );
}

export default Testimonials;
// "use client";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import EmblaCarousel from "embla-carousel";
// import Autoplay from "embla-carousel-autoplay";
// import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
// import { testimonials } from "~/constants";

// function Testimonials() {
//   const [visibleItems, setVisibleItems] = useState(3); // Default to 3 items visible

//   useEffect(() => {
//     const updateVisibleItems = () => {
//       if (window.innerWidth < 768) {
//         setVisibleItems(1);
//       } else if (window.innerWidth < 1024) {
//         setVisibleItems(2);
//       } else {
//         setVisibleItems(3);
//       }
//     };

//     updateVisibleItems();
//     window.addEventListener("resize", updateVisibleItems);

//     return () => window.removeEventListener("resize", updateVisibleItems);
//   }, []);

//   return (
//     <section className="bg-primary-100 content-container py-12 lg:py-16 w-full relative sm:mt-2 mt-3">
//       <h2 className="text-center text-2xl sm:text-5xl font-bold tracking-tight text-gray-900 mt-2 mb-6 pt-12 sm:pt-16">
//         Professional Staff Top-Notch Facilities
//       </h2>
//       <p className="text-center text-sm text-gray-700">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
//         quibusdam similique labore fuga impedit, consectetur facilis odit
//         accusantium quo, doloribus iste.
//       </p>
//       <div className="w-full flex justify-center sm:mt-2">
//         <Carousel
//           plugins={[
//             Autoplay({
//               delay: 4000,
//             }),
//           ]}
//           className="w-full mt-4"
//         >
//           <CarouselContent className="flex transition-transform duration-300">
//             {testimonials.map((testimonial, index) => (
//               <CarouselItem
//                 key={index}
//                 className="flex-none p-2"
//                 style={{ flexBasis: `${100 / visibleItems}%` }} // Adjust the flex-basis based on visible items
//               >
//                 <div className="mb-8 sm:break-inside-avoid relative">
//                   <div className="p-1">
//                     <blockquote className="rounded-lg bg-secondary-100 p-6 shadow-sm sm:p-8">
//                       <div className="flex items-center gap-4">
//                         <Image
//                           width={60}
//                           height={60}
//                           alt="testimonialImage"
//                           src={testimonial.image}
//                           className="size-14 rounded-full object-cover"
//                         />
//                         <div>
//                           <p className="mt-0.5 text-lg font-medium text-gray-900">
//                             {testimonial.name}
//                           </p>
//                         </div>
//                       </div>
//                       <p className="mt-4 text-gray-700">
//                         “{testimonial.description}”
//                       </p>
//                     </blockquote>
//                   </div>
//                 </div>
//               </CarouselItem>
//             ))}
//           </CarouselContent>
//         </Carousel>
//       </div>
//     </section>
//   );
// }

// export default Testimonials;

