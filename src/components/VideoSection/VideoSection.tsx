import React from 'react';

interface VideoSectionProps {
  videoSrc: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({ videoSrc }) => {
  const finalVideoSrc = `${videoSrc}?rel=0&autoplay=1&controls=0`;

  return (
    <section className="content-container">
      <iframe
        src={finalVideoSrc}
        title="YouTube video player"
        allowFullScreen
        className="w-full aspect-video"
      ></iframe>
    </section>
  );
};

export default VideoSection;
