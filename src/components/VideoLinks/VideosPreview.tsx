"use client"
import { VideoType } from "~/lib/types";
import Reveal from "../Animations/reveal";
import { Button } from "../ui/button";
import LocaleLink from "../ui/LocaleLink";
import { useTranslations } from "next-intl";
import { createYoutubeEmbeddedLink } from "~/lib/utils";

export default async function VideosPreview({ videos }: { videos: VideoType[] }) {
  const t = useTranslations("home.video");
  return (
    <section>
      <Reveal>
        <div className="flex gap-4 items-center justify-center flex-wrap">
          {videos.slice(-3).map((item, index) => (
            <iframe
              key={index}
              src={createYoutubeEmbeddedLink(item.video)}
              title="YouTube video player"
              referrerPolicy="no-referrer"
              className="rounded-lg aspect-video h-48"
              allowFullScreen
            ></iframe>
          ))}
        </div>
        <LocaleLink href="/events/1#videos" className="underline body pt-2 flex justify-center md:justify-end">
          <Button>{t("watch")}</Button>
        </LocaleLink>
      </Reveal>
    </section>
  );
}
