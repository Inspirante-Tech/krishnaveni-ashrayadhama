//story on how we started and why we started
"use client";
import {content} from '~/constants';

import React, { useEffect, useRef, useState } from 'react';

const Information: React.FC = () => {
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
        <div
            ref={containerRef}
            className={`transition-opacity duration-1000 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }  p-3 md:p-4 bg-secondary-400 text-justify`}
        >
           <h2 className="text-center text-4xl md:text-5xl font-bold font-poppins tracking-tight text-gray-900   pt-8">Who are we</h2>
            <div className='page-container'>
            
                {content.map(info=>(
                    <p className="text-base mb-2 px-2 md:mb-4 md:px-14" key={info.id}>
                    {info.para}
                </p>
                ))}   

            </div>
        </div>
    );
};

export default Information;
