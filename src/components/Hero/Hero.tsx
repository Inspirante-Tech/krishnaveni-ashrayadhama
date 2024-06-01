import { HeroimageUrls } from "~/constants";
import Carousel from "./Carousel";
import ScrollDown from "./ScrollDown";

import Image from "next/image";

function Hero() {
  return (
    <div className="relative w-full h-full">
      <Carousel>
        {HeroimageUrls.map((url, index) => (
          <Image
            key={index}
            width={600}
            height={600}
            className="h-full object-cover snap-center"
            src={url}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </Carousel>

      <ScrollDown />
    </div>
  );
}

export default Hero;
