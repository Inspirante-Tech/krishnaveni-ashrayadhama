"use client";
import Carousel from "./Carousel";
import ScrollDown from "./ScrollDown";
import Image from "next/image";
import LocaleLink from "../ui/LocaleLink";
import "./styles.module.css";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
import Marquee from "react-fast-marquee";
import { BadgeAlert } from "lucide-react";
import Link from "next/link";
import { AnnouncementType } from "~/lib/types";

function Hero({
  carouselImages,
  data,
}: {
  carouselImages: string[];
  data: AnnouncementType[];
}) {
  const t = useTranslations("home");
  const a = "";
  return (
    <div className="relative w-full h-full mb-14">
      <Carousel>
        {carouselImages.map((url, index) => (
          <div key={index} className="relative w-full h-full">
            <Image
              width={1000}
              height={Math.floor((1000 * 9) / 16)}
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
            <h1 className="title">{t("hero.heading")}</h1>
            <p className="text-gray-200 subheading leading-relaxed text-center">
              {t("hero.content")}
            </p>
          </div>
          <LocaleLink href="/contact" className="pointer-events-auto">
            <Button className="body h-12 px-6 rounded-lg bg-primary-700 hover:bg-primary-600">
              {t("hero.cta")}
            </Button>
          </LocaleLink>
        </div>
      </div>
      <div
        className={`absolute bg-gradient-to-t from-black/75 from-25% to-transparent w-full h-3/5 bottom-0 pointer-events-none`}
      ></div>
      <ScrollDown targetId="story" />
      <div className="bg-secondary-200 flex gap-4 justify-center absolute top-full w-full">
        <div className="text-sm flex md:text-xl font-extrabold px-4 bg-secondary-500 items-center text-white">
          {t("announcements.heading")}
        </div>
        <Marquee className="body py-4" pauseOnHover>
          {data.map((announcement) => (
            <span className="flex gap-2 items-center mx-4 md:mx-6 font-semibold">
              <BadgeAlert size={24} color="#8a0000" />
              <span>
                <Link
                  href={announcement.link ? announcement.link : " "}
                  className={
                    announcement.link
                      ? "underline decoration-secondary-300 hover:decoration-secondary-600"
                      : "no-underline cursor-default"
                  }
                >
                  {announcement.title}
                </Link>
              </span>
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Hero;
