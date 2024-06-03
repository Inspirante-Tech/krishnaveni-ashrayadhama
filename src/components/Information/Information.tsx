"use client";

import React, { useEffect, useRef, useState } from 'react';

const Information: React.FC<{ data: string }> = ({ data }) => {
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
            className={`transition-opacity duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } text-justify`}
        >
            <div className='content-container flex flex-col gap-8'>
                <h2 className="text-gray-900 heading">Who are we</h2>
                {[data].map((info, index) => (
                    <p className="text-base mb-2 px-2 md:mb-4 md:px-18" key={index}>
                        {info}
                    </p>
                ))}
            </div>
        </section>
    );
};

export default Information;
