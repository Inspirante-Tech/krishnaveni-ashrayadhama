"use client";
import { useEffect, useRef } from "react";
import style from "./heading.module.css";
import { Separator } from "../ui/separator";

interface Props extends React.HTMLProps<HTMLDivElement> {
  delay?: number;
  seperatorColor?: "primary" | "secondary";
}

const Heading = ({ delay = 0, seperatorColor, ...props }: Props) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          containerRef.current?.classList.add(style.ressurate);
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
    <div className={` pb-4 w-fit ${props.className} group`}>
      <h1 ref={containerRef} className="heading pb-2  pr-2 text-left" >{props.children}</h1>
      <Separator color={seperatorColor}/>
    </div>
  );
};

export default Heading;
