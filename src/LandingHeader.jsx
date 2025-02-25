import React from "react";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";
import "./LandingHeader.css";

const LandingHeader = () => {
  return (
    <header className="header">
      <div className="content">
        <h1>Build real software products, in a team</h1>
        <p className="header-description">
          The Pike App Challenge is an intense 6-week competition for top
          high school computer science students. Join a team led by engineers
          from Google, Amazon, and Atlassian.
        </p>
        <div className="cta-container">
          <p className="date">Summer 2025</p>
          <a href="#apply" className="cta-button">
            Apply now
          </a>
        </div>
      </div>
      <div className="imageContainer">
        <div className="imageColumn">
          <div 
            className="gridImage"
            style={{ backgroundImage: `url(${img1})` }}
          />
          <div 
            className="gridImage"
            style={{ backgroundImage: `url(${img3})` }}
          />
        </div>
        <div className="imageColumn">
          <div 
            className="gridImage"
            style={{ backgroundImage: `url(${img2})` }}
          />
          <div 
            className="gridImage"
            style={{ backgroundImage: `url(${img4})` }}
          />
        </div>
      </div>
    </header>
  );
};

export default LandingHeader;
