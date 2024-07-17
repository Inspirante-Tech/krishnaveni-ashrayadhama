import Reveal from "../Animations/reveal";
import Heading from "../Heading/Heading";
import { useTranslations } from "next-intl";

export default function EventVideos({
  embeddedData,
}: {
  embeddedData: string[];
}) {
  const t = useTranslations("events");
  return (
    <section className="content-container">
      <Heading className="mx-auto">{t("videos")}</Heading>
      <Reveal>
        <div className="flex flex-wrap gap-4 items-center justify-center">
          {embeddedData.map((item, index) => (
            <div key={index}>
              <iframe
                src={item}
                title="YouTube video player"
                referrerPolicy="no-referrer"
                allowFullScreen
                className="rounded-lg aspect-video"
              ></iframe>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
