import React from 'react';
import './Testimonials.css';
import testimonial1Video from './images/testimonial1.mp4';
import testimonial2Video from './images/testimonial2.mp4';
import testimonial3Video from './images/testimonial3.mp4';
import parentTestimonial from './images/Testimonial.parent.mp4';
import danielleProfile from './images/danielle-pitts.jpeg';
import scottProfile from './images/scott-photo.jpeg';
import bryceProfile from './images/Bryce.png';
import steveProfile from './images/Steve.jpeg';
import michaelProfile from './images/vinayprofile.jpg';

const Testimonials = () => {
  const testimonials = [
    {
      type: 'text',
      content: "Pike Teams provided a fun space to not only learn more about coding and gain experience but also have fun doing it! <strong>I can see myself doing similar projects on my own time once I am in college.</strong>",
      author: "Bryson",
      role: "12th grader, North Carolina",
      backgroundColor: "#DC92F5",  // Purple
      profileImage: bryceProfile
    },
    {
      type: 'video',
      videoId: 'video4',
      videoSrc: parentTestimonial,
      backgroundColor: "#44E4A7"  // Green
    },
    {
      type: 'text',
      content: "<strong>I have only glowing things to say about Pike Teams.</strong> They've provided a fantastic opportunity for my kid in an extremely valuable area!",
      author: "Scott Stafford",
      role: "11th grade parent, Washington D.C.",
      backgroundColor: "#FDE35D",  // Yellow
      profileImage: scottProfile
    },
    {
      type: 'video',
      videoId: 'video2',
      videoSrc: testimonial2Video,
      backgroundColor: "#DC92F5"  // Purple
    },
    {
      type: 'text',
      content: "I'm thankful for Pike's guidance and teaching because <strong>they didn't just teach me code but how to code in the right way and the fun way</strong>",
      author: "Zac",
      role: "12th grader, New York",
      backgroundColor: "#44E4A7",  // Green
      profileImage: michaelProfile
    },
    {
      type: 'video',
      videoId: 'video3',
      videoSrc: testimonial3Video,
      backgroundColor: "#FDE35D"  // Yellow
    },
    {
      type: 'text',
      content: "Pike Teams has been an exceptional computer science program for my son, who is highly selective about the extracurriculars he commits to. <strong>Pike Teams' approach to learning together is a great alternative to traditional computer science classes.</strong>",
      author: "Steve Chuang",
      role: "12th grade parent, New York",
      backgroundColor: "#DC92F5",  // Purple
      profileImage: steveProfile
    },
    {
      type: 'video',
      videoId: 'video1',
      videoSrc: testimonial1Video,
      backgroundColor: "#44E4A7"  // Green
    },
    {
      type: 'text',
      content: "Pike Teams has given our son <strong>experience collaborating in groups, problem solving and producing competitive projects</strong> while increasing his knowledge of coding. We are really enjoying the experience!",
      author: "Danielle Pitts",
      role: "9th grade parent, Connecticut",
      backgroundColor: "#FDE35D",  // Yellow
      profileImage: danielleProfile
    }
  ];

  return (
    <div className="testimonials-container">
      <h2 className="testimonials-header">Words from our community</h2>
      <p className="testimonials-subheader">Find out why 60+ families love Pike Teams</p>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className={`testimonial-card ${testimonial.type === 'video' ? 'video-card' : 'text-card'}`}
            style={{ backgroundColor: testimonial.backgroundColor }}
          >
            {testimonial.type === 'text' ? (
              <div className="text-card-content">
                <p className="testimonial-content" dangerouslySetInnerHTML={{ __html: testimonial.content }}></p>
                <div className="testimonial-author">
                  {testimonial.profileImage && (
                    <img 
                      src={testimonial.profileImage} 
                      alt={`${testimonial.author} profile`}
                      className="author-avatar"
                    />
                  )}
                  <div className="author-info">
                    <span className="author-name">{testimonial.author}</span>
                    <span className="author-role">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="video-placeholder">
                <video
                  src={testimonial.videoSrc}
                  className="video-element"
                  playsInline
                  preload="auto"
                  controls
                  crossOrigin="anonymous"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;