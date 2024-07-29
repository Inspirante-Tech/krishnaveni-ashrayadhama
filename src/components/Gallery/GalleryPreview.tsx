import { getLocale, getTranslations } from "next-intl/server";
import { fetchGallery, fetchVideos } from "~/lib/queries";
import Image from "next/image";
import Heading from "../Heading/Heading";
import VideosPreview from "~/components/VideoLinks/VideosPreview"
import Reveal from "../Animations/reveal";
import LocaleLink from "../ui/LocaleLink";
import { Button } from "../ui/button";

export default async function GalleryPreview() {
  const locale = await getLocale();
  const t = await getTranslations("home.video");
  const { gallery } = await fetchGallery(locale, 0);
  const videos = await fetchVideos(3);
  return (
    <section className="content-container">
      <div className="flex flex-col justify-center items-center space-y-8 rounded-2xl md:bg-gradient-radial xl:p-16 sm:p-12 p-4">
        <Heading>{t("heading")}</Heading>
        <Reveal>
          <div className="flex flex-wrap gap-3 justify-center w-full px-4 md:px-0">
            {gallery.slice(0, 4).map((item, index) => (
              <div key={index}>
                <Image
                  src={item.image}
                  alt={item.description}
                  height={240}
                  width={240}
                  className="hover:scale-105 transform transition-transform duration-500  rounded-lg aspect-video shadow-lg h-48 object-cover"
                />
              </div>
            ))}
          </div>
          <LocaleLink href="/gallery/1" className="underline body pt-2 flex justify-center md:justify-end">
            <Button>{t("view")}</Button>
          </LocaleLink>
        </Reveal>
        <VideosPreview videos={videos} />
      </div>
    </section>
  );
}
