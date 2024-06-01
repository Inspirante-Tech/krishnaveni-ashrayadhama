import React from "react";
const VideoSection = () => {
  return (
    <section>
      <div className="aspect-w-16 ">
        <iframe
          src="https://www.youtube.com/embed/zD43hknPtLc?rel=0&autoplay=1&controls=0"
          title="YouTube video player"
          allowFullScreen
          className="w-full aspect-video"
        ></iframe>
      </div>
    </section>
  );
};

export default VideoSection;
