import { getLocale, getTranslations } from "next-intl/server";
import { fetchGalleryImages, fetchHomePage } from "~/lib/queries";
import Image from "next/image";
import Heading from "../Heading/Heading";
import VideoLinks from "../VideoLinks/VideoLinks";
import Reveal from "../Animations/reveal";
import LocaleLink from "../ui/LocaleLink";
import { Button } from "../ui/button";

export default async function GalleryPreview() {
  const locale = await getLocale();
  const t = await getTranslations("home.video");
  const images = await fetchGalleryImages(locale);
  const data = await fetchHomePage(locale);
  return (
    <section className="content-container">
      <div className="flex flex-col justify-center items-center space-y-8 rounded-2xl md:bg-gradient-radial xl:p-16 sm:p-12 p-4">
        <Heading>{t("heading")}</Heading>
        <Reveal>
          <div className="flex flex-wrap gap-3 justify-center w-full px-4 md:px-0">
            {images.slice(0, 4).map((item, index) => (
              <div key={index}>
                <div className="aspect-video shadow-lg">
                  <Image
                    src={item.image}
                    alt={item.description}
                    height={240}
                    width={240}
                    className="hover:scale-105 transform transition-transform duration-500  rounded-lg"
                  />
                </div>

                {index === 3 && (
                  <div className="flex justify-center md:justify-end">
                    <LocaleLink href="/gallery" className="underline body pt-2">
                      <Button>{t("view")}</Button>
                    </LocaleLink>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Reveal>
        <VideoLinks data={data.videos} />
      </div>
    </section>
  );
}
