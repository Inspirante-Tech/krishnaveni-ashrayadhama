import { HeroimageUrls } from "~/constants";
import Carousel from "./Carousel";
import { Button } from "./ui/button";
import Image from "next/image";

function Hero() {
  return (
    <div className="">
      <Carousel>
        {HeroimageUrls.map((url, index) => (
          <Image
            key={index}
            width={100}
            height={100}
            className="min-w-[100vw] h-full object-cover snap-center"
            src={url}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </Carousel>
    </div>
  );
}

export default Hero;
