//story on how we started and why we started
"use client";
import {information} from '~/constants';

import React, { useEffect, useRef, useState } from 'react';

const Story: React.FC = () => {
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

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    return (
        <section
            ref={containerRef}
            className={`transition-opacity duration-1000 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } text-justify`}
        >
            <div className='content-container flex gap-8 flex-col'>
                <h2 className="heading text-gray-900">Our Story</h2>
                <div className="">
                  {information.map(info=>(
                      <p className="body" key={info.id}>
                      {info.para}
                  </p>
                  ))}   
                </div>
            </div>
        </section>
    );
};

export default Story;
