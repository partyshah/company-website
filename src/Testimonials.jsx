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
      content: "As a parent watching my daughter dive into the AI Financial Products track, I was blown away by the real-world skills she developed. Her team created a mobile app for financial literacy under the mentorship of a Google engineer, and I've never seen her more confident and inspired. The sparkle in her eyes when she talks about her project makes every moment worth it.",
      author: "Sarah",
      role: "10th grade parent",
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
      content: "When my son joined the Advanced AI track, I honestly wasn't sure if he was ready for such a challenge. But seeing him collaborate with his team and their Atlassian mentor to develop an AI-powered environmental monitoring system was incredible. The growth in his problem-solving abilities and leadership skills has been remarkable – this program truly prepares students for the real world of tech.",
      author: "David",
      role: "11th grade parent",
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
      content: "Before joining the Python Games track, coding felt intimidating and distant. Working alongside engineers from Amazon changed everything! Our team developed a multiplayer educational game that's now being used in three local schools, and I've discovered a passion I never knew I had. This competition didn't just teach me to code – it showed me I could build things that matter.",
      author: "Marcus",
      role: "10th grader",
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
                  <div className="author-avatar">
                    {/* Add avatar image later */}
                  </div>
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