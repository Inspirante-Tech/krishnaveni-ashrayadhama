"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Separator } from '../ui/separator';
import Image from 'next/image';

const Story: React.FC<{ data: string }> = ({ data }) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (containerRef.current) {
                        observer.unobserve(containerRef.current);
                    }
                }
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        const ref = containerRef.current;
        return () => {
            if (ref) {
                observer.unobserve(ref);
            }
        };
    }, []);

    return (
        <section
            id='story'
            ref={containerRef}
            className={`relative transition-opacity duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } text-justify bg-secondary-100 md:bg-transparent`}
        >
            <div className="h-8 bg-secondary-100 absolute bottom-full w-full md:hidden"></div>
            <div className='content-container flex items-end'>
                <div className="relative xl:max-w-4xl md:shadow-xl rounded-2xl z-0">
                  <div className="relative md:bg-gradient-to-tr md:from-secondary-200 md:to-secondary-100 rounded-2xl flex md:gap-4 gap-2 flex-col xl:p-16 lg:p-24 md:p-12">
                    <h2 className="heading text-gray-900">Our Story</h2>
                    <div className="h-1 w-14 bg-secondary-500 rounded-full"></div>
                    {[data].map((info, index) => (
                      <p className="body" key={index}>
                            {info}
                        </p>
                    ))}
                  </div>
                </div>
                <Image src={"/story.jpg"} alt='Story' height={500} width={500} className='w-[26rem] object-contain -translate-x-6 -translate-y-10 rounded-2xl hidden xl:block z-10 shadow-xl'></Image>
            </div>
        </section>
    );
};

export default Story;
