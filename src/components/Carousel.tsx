'use client'
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react'

interface Props {
    children: React.ReactNode
}

function Carousel({ children }: Props) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);
    const itemCount = React.Children.count(children);
    function move(prvs: boolean) {
        setCurrentIndex(currentIndex => {
            let to;
            if (prvs) {
                to = (currentIndex + itemCount - 1) % itemCount;
            } else {
                to = (currentIndex + itemCount + 1) % itemCount;
            }
            if (carouselRef.current) {
                carouselRef.current.scrollLeft = carouselRef.current?.clientWidth * to
            }
            return to
        })
    }

    useEffect(() => {
        const timeoutId = setInterval(() => {
            console.log(currentIndex)
            move(false)
        }, 3000);
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div className='relative w-full h-screen max-h-screen'>
            <div className="flex  w-full h-full overflow-x-scroll scroll-smooth snap-mandatory snap-x no-scrollbar relative" ref={carouselRef}>
                {children}
            </div>
            <button className="rounded-full p-4 aspect-square  bg-slate-900/50 absolute top-[50%] left-4 z-10 " onClick={() => move(true)}>
                <ChevronLeft />
            </button>

            <button className="rounded-full p-4 aspect-square  bg-slate-900/50 absolute top-[50%] right-4 z-10 " onClick={() => move(false)}>
                <ChevronRight />
            </button>
        </div>
    )
}

export default Carousel;