import React, { useState, useRef } from "react";
import "./HowItWorks.css";
import videoPoster from "./images/img1.png";
import videoSource from "./images/video.mp4";

const HowItWorks = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
  };

  return (
    <section className="howitworks-container">
      <h2 className="howitworks-header">How It Works</h2>
      <p className="howitworks-subheader">
        The Coding Games is a 5-week summer coding competition for high school
        students with any level of experience.
      </p>
      <div className="howitworks-video-container">
        <div className="video-wrapper">
          <video
            ref={videoRef}
            className="howitworks-video"
            poster={videoPoster}
            onClick={handleVideoClick}
            onPlay={handleVideoPlay}
            onPause={handleVideoPause}
          >
            <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {!isPlaying && (
            <div className="custom-play-button" onClick={handleVideoClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="91"
                height="90"
                viewBox="0 0 91 90"
                fill="none"
              >
                <circle
                  cx="45.5"
                  cy="45"
                  r="44"
                  fill="#44E4A7"
                  stroke="#0C1120"
                  strokeWidth="2"
                />
              </svg>
              <div className="play-triangle">▶</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
