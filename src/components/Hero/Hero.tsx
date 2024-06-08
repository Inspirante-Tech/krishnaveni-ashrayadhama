import Carousel from "./Carousel";
import ScrollDown from "./ScrollDown";
import Image from "next/image";
import LocaleLink from "../ui/LocaleLink";
import styles from "./styles.module.css";
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
      <div className="absolute bottom-1/4 left-3 md:left-16 lg:left-24 transform translate-y-1/2 z-10 text-white">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold md:mb-4 mb-1 mt-3 ">
          Krishnaveni Ashrayadhama
        </h1>
        <p className="mb-2 md:mb-4 text-gray-200 text-sm md:text-base lg:text-lg leading-relaxed">
          The Salmara Govinda Bhat Trust preserves their legacy
        </p>
        <LocaleLink href="/contact">
          <button className="bg-primary-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Get In Touch
          </button>
        </LocaleLink>
      </div>
      <ScrollDown />
      <div className={`absolute bg-gradient-to-t   to-transparent`}></div>
    </div>
  );
}

export default Hero;
