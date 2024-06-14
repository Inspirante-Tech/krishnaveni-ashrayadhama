"use client";
import { useEffect, useRef } from "react";
import style from "./reveal.module.css"

interface Props extends React.HTMLProps<HTMLDivElement> {
  delay?: number;
}

const Reveal = ({ delay = 0, ...props }: Props) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          containerRef.current?.classList.add(style.reveal)
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
    <div ref={containerRef} className={style.revealContainer} style={{transitionDelay:`${delay}s`}}>
      {props.children}
    </div>
  );
};

export default Reveal;
