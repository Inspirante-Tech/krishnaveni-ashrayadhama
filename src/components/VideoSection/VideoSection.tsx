import React from "react";
const VideoSection = () => {
  return (
    <div className="p-4">
      <div className="aspect-w-16 ">
        <iframe
          src="https://www.youtube.com/embed/zD43hknPtLc?rel=0&autoplay=1&controls=0"
          title="YouTube video player"
          allowFullScreen
          className="w-full h-96"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoSection;
