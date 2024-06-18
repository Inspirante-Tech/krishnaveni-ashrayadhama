"use client"
import Carousel from "./Carousel";
import ScrollDown from "./ScrollDown";
import Image from "next/image";
import LocaleLink from "../ui/LocaleLink";
import  "./styles.module.css";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";

function Hero({ carouselImages }: { carouselImages: string[] }) {
  const t= useTranslations("home.hero")
  return (
    <div className="relative w-full h-full">
      <Carousel>
        {carouselImages.map((url, index) => (
          <div key={index} className="relative w-full h-full">
            <Image
              width={1000}
              height={Math.floor(1000*9/16)}
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
            <h1 className="title">{t("heading")}</h1>
            <p className="text-gray-200 subheading leading-relaxed text-center">
            {t("content")}
            </p>
          </div>
          <LocaleLink href="/contact" className="pointer-events-auto">
            <Button className="body h-12 px-6 rounded-lg bg-primary-700 hover:bg-primary-600">
            {t("cta")}
            </Button>
          </LocaleLink>
        </div>
      </div>
      <div
        className={`absolute bg-gradient-to-t from-black/75 from-25% to-transparent w-full h-3/5 bottom-0 pointer-events-none`}
      ></div>
      <ScrollDown targetId="story"/>
    </div>
  );
}

export default Hero;
