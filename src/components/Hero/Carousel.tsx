"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
}

function Carousel({ children }: Props) {
  const currentIndex = useRef(0);
  const timerId = useRef<Timer>();
  const carouselRef = useRef<HTMLDivElement>(null);
  const itemCount = React.Children.count(children);

  function move(prvs: boolean, isButtonClick: boolean = false) {
    let to;
    if (prvs) {
      to = (currentIndex.current - 1) % itemCount;
    } else {
      to = (currentIndex.current + 1) % itemCount;
    }
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = carouselRef.current?.clientWidth * to;
    }
    currentIndex.current = to;
    if (isButtonClick) {
      clearInterval(timerId.current);
      timerId.current = setInterval(() => {
        move(prvs, false);
      }, 3000);
    }
  }

  useEffect(() => {
    timerId.current = setInterval(() => {
      move(false);
    }, 7500)

    return () => clearTimeout(timerId.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative w-screen h-screen max-h-screen overflow-x-hidden">
      <div
        className="flex  w-full h-full overflow-x-scroll scroll-smooth snap-mandatory snap-x no-scrollbar relative pointer-events-none"
        ref={carouselRef}
      >
        {children}
      </div>
      <button
        className="rounded-full p-3 aspect-square  bg-primary-700/95 transition-colors duration-300 hover:bg-primary-600/90 cursor-pointer absolute top-1/2 left-4 z-10 -translate-y-full md:-translate-y-1/2 md:scale-100 scale-75"
        onClick={() => move(true, true)}
      >
        <ChevronLeft size={32} className="text-primary-50" />
      </button>

      <button
        className=" rounded-full p-3 aspect-square  bg-primary-700/95 transition-colors duration-300 hover:bg-primary-600/90 cursor-pointer absolute top-1/2 right-4 z-10 -translate-y-full md:-translate-y-1/2 md:scale-100 scale-75"
        onClick={() => move(false, true)}
      >
        <ChevronRight size={32} className="text-primary-50" />
      </button>
    </div>
  );
}

export default Carousel;
