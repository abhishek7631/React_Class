import React from "react";

const YouTubeVideoSection = () => {
  return (
    <div className="video-section">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/hY7m5jjJ9mM?autoplay=1&mute=1"
        title="Cat Video 1"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/tntOCGkgt98?autoplay=1&mute=1"
        title="Cat Video 2"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </div>
  );
};

export default YouTubeVideoSection;
