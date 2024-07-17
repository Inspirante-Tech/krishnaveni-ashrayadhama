import { VideoType } from "~/lib/types";
import React from "react";
import Heading from "../Heading/Heading";
import { createYoutubeEmbeddedLink } from "~/lib/utils";
import Reveal from "../Animations/reveal";
import Video from "./Video";
import { getTranslations } from "next-intl/server";

const VideoLinks: React.FC<{ data: VideoType[] }> = async ({ data }) => {
  const embeddedData = data.map((item) =>
    createYoutubeEmbeddedLink(item.video)
  );
  const t = await getTranslations("home.video");
  return (
    <section className="relative">
      <Reveal>
        <Heading className="mx-auto">{t("heading")}</Heading>
        <div className="content-container flex flex-col md:gap-4 gap-2 items-center">
          <div className="flex flex-wrap gap-4 justify-center w-full px-4 md:px-0 ">
            <Video videos={embeddedData} />
          </div>
        </div>
      </Reveal>
    </section>
  );
};
export default VideoLinks;
