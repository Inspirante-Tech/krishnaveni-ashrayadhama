"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Reveal from "../Animations/reveal";

interface PhotoProps {
  url: string;
  alt: string;
  callback: () => void;
}

const Photo: React.FC<PhotoProps> = ({ url, alt, callback }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const imageRef = useRef<HTMLImageElement>(null);

  return (
    <Reveal className="w-full">
      <div
        className="relative rounded-xl shadow-lg cursor-pointer overflow-clip"
        onClick={callback}
      >
        <Image
          ref={imageRef}
          className={`transition-opacity duration-1000 transform ${
            isVisible ? "opacity-100" : "opacity-0"
          } w-full`}
          src={url}
          alt={alt}
          width={232}
          height={290}
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center opacity-0 hover:opacity-100 cursor-pointer">
          <span className="text-white text-lg font-bold">View</span>
        </div>
      </div>
    </Reveal>
  );
};

export default Photo;
