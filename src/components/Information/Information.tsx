"use client";
import Image from "next/image";
import Reveal from "../Animations/reveal";
import ScrollLag from "../Animations/scrollLag";
import { useTranslations } from "next-intl";
import Heading from "../Heading/Heading";
import RichText from "../RichText/RichText";

const Information: React.FC<{ data: [any] }> = ({ data }) => {
  const t = useTranslations("home")
  return (
    <section
      className={`transition-opacity duration-1000 transform bg-secondary-100 md:bg-transparent text-justify`}
    >
      <div className="content-container flex items-start flex-row-reverse">
        <Reveal>
          <div className="relative xl:max-w-4xl md:shadow-xl rounded-2xl z-0">
            <div className="relative md:bg-gradient-to-tl md:from-secondary-200 md:to-secondary-100 rounded-2xl flex md:gap-4 gap-2 flex-col xl:p-16 lg:p-24 md:p-12">
              <Heading seperatorColor="secondary">
                {t("whoweare")}
              </Heading>
              <RichText value={data}/>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.35}>
          <ScrollLag speed={50}>
            <Image
              src={"/whoweare.jpg"}
              alt="Story"
              height={500}
              width={500}
              className="w-[26rem] relative shadow-xl object-contain translate-x-6 top-10 rounded-2xl hidden xl:block z-10"
            ></Image>
          </ScrollLag>
        </Reveal>
      </div>
    </section>
  );
};

export default Information;
