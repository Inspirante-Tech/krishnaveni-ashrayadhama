//information about who we are 
"use client";

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
            } shadow-lg p-3 mt-8 md:p-4 md:mt-10 bg-secondary-50 rounded-lg text-justify `}
        >
           <h2 className="text-center text-4xl md:text-5xl font-bold font-poppins tracking-tight text-gray-900  mb-8  pt-6">Who are we</h2>
            <div>
            
                <p className="body mb-2 px-5 md:mb-4 md:px-10 indent-10">
                
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, sapiente. Odit et at non tenetur est architecto itaque illum harum quia. Accusamus quae labore debitis, autem porro esse, enim nesciunt maxime obcaecati quod non distinctio! Exercitationem, beatae repellat, nisi possimus optio nobis minus sed accusamus aliquid amet doloribus nulla cum? Laudantium officia, illum ipsa a, earum rem fuga reprehenderit consequatur assumenda veritatis vero placeat iusto ut mollitia atque obcaecati aliquam laborum doloribus! Assumenda placeat eos dicta numquam, rerum omnis nihil tenetur nemo deleniti. Vel consequuntur ut nemo facilis libero aliquid suscipit quas, maxime optio, voluptatum eaque rem a ipsa ab.
                </p>
                <br/>
            
                <p className="body  mb-2 px-5 md:mb-4 md:px-10 indent-10">
                
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, sapiente. Odit et at non tenetur est architecto itaque illum harum quia. Accusamus quae labore debitis, autem porro esse, enim nesciunt maxime obcaecati quod non distinctio! Exercitationem, beatae repellat, nisi possimus optio nobis minus sed accusamus aliquid amet doloribus nulla cum? Laudantium officia, illum ipsa a, earum rem fuga reprehenderit consequatur assumenda veritatis vero placeat iusto ut mollitia atque obcaecati aliquam laborum doloribus! Assumenda placeat eos dicta numquam, rerum omnis nihil tenetur nemo deleniti. Vel consequuntur ut nemo facilis libero aliquid suscipit quas, maxime optio, voluptatum eaque rem a ipsa ab.
                </p>
            </div>
        </div>
    );
};

export default Information;
