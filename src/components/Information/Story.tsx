"use client";
import React, { useEffect, useRef, useState } from 'react';

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
            className={`transition-opacity duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } text-justify`}
        >
            <div className='content-container flex md:gap-4 gap-2 flex-col'>
                <h2 className="heading text-gray-900">Our Story</h2>
                {[data].map((info, index) => (
                    <p className="body" key={index}>
                        {info}
                    </p>
                ))}
            </div>
        </section>
    );
};

export default Story;
