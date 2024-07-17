import { VideoType } from "~/lib/types";
import React from "react";
import Heading from "../Heading/Heading";
import { createYoutubeEmbeddedLink } from "~/lib/utils";
import Reveal from "../Animations/reveal";
import Video from "./Video";
import { useTranslations } from "next-intl";

const VideoLinks: React.FC<{ data: VideoType[] }> = ({ data }) => {
  const embeddedData = data.map((item) =>
    createYoutubeEmbeddedLink(item.video)
  );
  const t = useTranslations("home.video");
  return (
    <section className="relative">
      <Reveal>
        <Heading className="mx-auto">{t("heading")}</Heading>
        <div className=" content-container flex flex-wrap gap-4 justify-center w-full px-4 md:px-0 ">
          <Video videos={embeddedData} />
        </div>
      </Reveal>
    </section>
  );
};
export default VideoLinks;
