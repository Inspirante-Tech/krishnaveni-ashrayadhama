"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Separator } from '../ui/separator';
import Image from 'next/image';
import Reveal from '../Animations/reveal';

const Story: React.FC<{ data: string }> = ({ data }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    return (
        <section
            id='story'
            ref={containerRef}
            className={`relative text-justify bg-secondary-100 md:bg-transparent`}
        >
            <div className="h-8 bg-secondary-100 absolute bottom-full w-full md:hidden"></div>
            <div className='content-container flex items-end'>
                <Reveal>
                  <div className="xl:max-w-4xl md:shadow-xl rounded-2xl">
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
                </Reveal>
                <Image src={"/story.jpg"} alt='Story' height={500} width={500} className='w-[26rem] object-contain -translate-x-6 -translate-y-10 rounded-2xl hidden xl:block z-10 shadow-xl'></Image>
            </div>
        </section>
    );
};

export default Story;
