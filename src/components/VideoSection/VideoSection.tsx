import React from "react";
import { createYoutubeEmbeddedLink } from "~/lib/utils"
interface VideoSectionProps {
  videoSrc: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({ videoSrc }) => {
  if (!videoSrc) return null
  const finalVideoSrc = `${createYoutubeEmbeddedLink(videoSrc)}?rel=0&autoplay=1&controls=0`;
  return (
    <section className="content-container">
      <iframe
        src={finalVideoSrc}
        title="YouTube video player"
        allowFullScreen
        className="w-full aspect-video rounded-2xl"
      ></iframe>
    </section>
  );
};

export default VideoSection;
