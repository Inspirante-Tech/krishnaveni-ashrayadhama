"use client";
import { useEffect, useRef } from "react";
import style from "./resurration.module.css"

interface Props extends React.HTMLProps<HTMLDivElement> {
  delay?: number;
}

const Heading = ({ delay = 0, ...props }: Props) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          containerRef.current?.classList.add(style.ressurate)
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <h1  ref={containerRef} className={`max-w-min pr-2 ${props.className}`} >{props.children}</h1>
  );
};

export default Heading;
