import React, { useState, useRef } from 'react';
import './Testimonials.css';
import testimonial1Video from './images/testimonial1.mp4';
import testimonial2Video from './images/testimonial2.mp4';
import testimonial3Video from './images/testimonial3.mp4';

const Testimonials = () => {
  const [playingVideo, setPlayingVideo] = useState(null);
  const videoRefs = useRef({});

  const handleVideoClick = (videoId) => {
    const video = videoRefs.current[videoId];
    
    if (playingVideo === videoId) {
      // Pause if clicking the currently playing video
      video.paused ? video.play() : video.pause();
    } else {
      // Pause any currently playing video
      if (playingVideo) {
        videoRefs.current[playingVideo].pause();
      }
      // Play the clicked video
      video.play();
      setPlayingVideo(videoId);
    }
  };

  const testimonials = [
    {
      type: 'text',
      content: "Pike Teams has given our son experience collaborating in groups, problem solving and producing competitive projects while increasing his knowledge of coding. We are really enjoying the experience!",
      author: "Danielle Pitts",
      role: "9th grade parent, Connecticut",
      backgroundColor: "#DC92F5"  // Purple
    },
    {
      type: 'video',
      videoId: 'video1',
      videoSrc: testimonial1Video,
      backgroundColor: "#44E4A7"  // Green
    },
    {
      type: 'text',
      content: "I have only glowing things to say about Pike Teams. They've provided a fantastic opportunity for my kid in an extremely valuable area!",
      author: "Scott Stafford",
      role: "11th grade parent, Washington D.C.",
      backgroundColor: "#FDE35D"  // Yellow
    },
    {
      type: 'video',
      videoId: 'video2',
      videoSrc: testimonial2Video,
      backgroundColor: "#DC92F5"  // Purple
    },
    {
      type: 'text',
      content: "Pike Teams provided a fun space to not only learn more about coding and gain experience but also have fun doing it! I can see myself doing similar projects on my own time once I am in college.",
      author: "Bryson Parker",
      role: "12th grader, North Carolina",
      backgroundColor: "#44E4A7"  // Green
    },
    {
      type: 'video',
      videoId: 'video3',
      videoSrc: testimonial3Video,
      backgroundColor: "#FDE35D"  // Yellow
    }
  ];

  return (
    <div className="testimonials-container">
      <h2 className="testimonials-header">Words from the community</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className={`testimonial-card ${testimonial.type === 'video' ? 'video-card' : 'text-card'}`}
            style={{ backgroundColor: testimonial.backgroundColor }}
          >
            {testimonial.type === 'text' ? (
              <div className="text-card-content">
                <p className="testimonial-content">{testimonial.content}</p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <span className="author-name">{testimonial.author}</span>
                    <span className="author-role">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div 
                className="video-placeholder"
                onClick={() => handleVideoClick(testimonial.videoId)}
              >
                <video
                  ref={el => videoRefs.current[testimonial.videoId] = el}
                  src={testimonial.videoSrc}
                  className="video-element"
                  playsInline
                />
                {(!playingVideo || playingVideo !== testimonial.videoId) && (
                  <div className="play-button">
                    <div className="play-icon"></div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials; 