import React from "react";
import stock1 from "./images/stock1.jpg";
import stock2 from "./images/stock2.jpg";
import stock3 from "./images/stock3.jpg";
import stock4 from "./images/stock4.jpg";
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
            style={{ backgroundImage: `url(${stock3})` }}
          />
          <div 
            className="gridImage"
            style={{ backgroundImage: `url(${stock2})` }}
          />
        </div>
        <div className="imageColumn">
          <div 
            className="gridImage"
            style={{ backgroundImage: `url(${stock4})` }}
          />
          <div 
            className="gridImage"
            style={{ backgroundImage: `url(${stock1})` }}
          />
        </div>
      </div>
    </header>
  );
};

export default LandingHeader;
