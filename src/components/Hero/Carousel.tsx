'use client'
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react'

interface Props {
    children: React.ReactNode
}

function Carousel({ children }: Props) {
    const [_, setCurrentIndex] = useState(0);
    const [timerId, setTimerId] = useState<Timer>();
    const carouselRef = useRef<HTMLDivElement>(null);
    const itemCount = React.Children.count(children);
    function move(prvs: boolean, isButtonClick: boolean = false) {
        setCurrentIndex(currentIndex => {
            let to;
            if (prvs) {
                to = (currentIndex - 1) % itemCount;
            } else {
                to = (currentIndex + 1) % itemCount;
            }
            if (carouselRef.current) {
                carouselRef.current.scrollLeft = carouselRef.current?.clientWidth * to
            }
            return to
        })
        if (isButtonClick) {
            setTimerId((timerId) => {
                clearInterval(timerId);
                return setInterval(() => {
                    move(prvs, false);
                }, 3000)
            });
        }
        
    }

    useEffect(() => {
        setTimerId(setInterval(() => {
            move(false);
        }, 7500));
        return () => clearTimeout(timerId);
    }, []);

    return (
        <div className='relative w-full h-screen max-h-screen'>
            <div className="flex  w-full h-full overflow-x-scroll scroll-smooth snap-mandatory snap-x no-scrollbar relative pointer-events-none" ref={carouselRef}>
                {children}
            </div>
            <button className="bg-opacity-10 rounded-full p-3 aspect-square  bg-gray-50/70 absolute top-[50%] left-4 z-10  -translate-y-[50%] md:scale-100 scale-75" onClick={() => move(true, true)}>
                <ChevronLeft size={32} />
            </button>

            <button className=" bg-opacity-10 rounded-full p-3 aspect-square  bg-gray-50/75 absolute top-[50%] left-full z-10 -translate-x-[150%] -translate-y-[50%] md:scale-100 scale-75" onClick={() => move(false, true)}>
                <ChevronRight size={32} />
            </button>
        </div>
    )
}

export default Carousel;