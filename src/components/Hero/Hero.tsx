import Carousel from "./Carousel";
import ScrollDown from "./ScrollDown";
import Image from "next/image";
import LocaleLink from "../ui/LocaleLink";
import styles from "./styles.module.css";
import { Button } from "../ui/button";
function Hero({ carouselImages }: { carouselImages: string[] }) {
  return (
    <div className="relative w-full h-full">
      <Carousel>
        {carouselImages.map((url, index) => (
          <div key={index} className="relative w-full h-full">
            <Image
              width={600}
              height={600}
              className="min-w-[100vw] h-full object-cover snap-center"
              src={url}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </Carousel>
      <div className="absolute bottom-28 md:bottom-28 w-full transform z-10 text-white pointer-events-none">
        <div className="content-container mx-auto flex flex-col gap-4 md:gap-8 items-center text-center">
          <div className="flex flex-col gap-2 md:gap-4">
            <h1 className="title">Krishnaveni Ashrayadhama</h1>
            <p className="text-gray-200 subheading leading-relaxed">
              Nurturing Legacy, Empowering Well-being
            </p>
          </div>
          <LocaleLink href="/contact" className="pointer-events-auto">
            <Button className="body h-12 px-6 rounded-lg bg-primary-700 hover:bg-primary-600">
              Get In Touch
            </Button>
          </LocaleLink>
        </div>
      </div>
      <div
        className={`absolute bg-gradient-to-t from-black/75 from-25% to-transparent w-full h-3/5 bottom-0 pointer-events-none`}
      ></div>
      <ScrollDown />
    </div>
  );
}

export default Hero;
