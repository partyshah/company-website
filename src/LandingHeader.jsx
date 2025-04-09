import React from "react";
import stock1 from "./images/stockimages/stock1.png";
import stock2 from "./images/stockimages/stock2.png";
import stock3 from "./images/stockimages/stock3.png";
import stock4 from "./images/stockimages/stock4.png";
import "./LandingHeader.css";

const LandingHeader = () => {
  return (
    <header className="header">
      <div className="content">
        <h1>Push Your Limits. Build Something Great.</h1>
        <p className="header-description">
          Join the nation's top 150 high school coders in an intense 6-week battle to build real products. Get coached by Google, Amazon, and Atlassian engineers as they push you to your limits. Are you ready to prove yourself?
        </p>
        <div className="cta-container">
          <a 
            href="https://airtable.com/appjy9bfsSpDxkkdH/shr5y5oD3jxQyAWye" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cta-button"
          >
            Join the waitlist
          </a>
        </div>
      </div>
      <div className="imageContainer">
        <div className="imageColumn">
          <div 
            className="gridImage"
            style={{ backgroundImage: `url(${stock2})` }}
          />
          <div 
            className="gridImage"
            style={{ backgroundImage: `url(${stock3})` }}
          />
        </div>
        <div className="imageColumn">
          <div 
            className="gridImage"
            style={{ backgroundImage: `url(${stock1})` }}
          />
          <div 
            className="gridImage"
            style={{ backgroundImage: `url(${stock4})` }}
          />
        </div>
      </div>
    </header>
  );
};

export default LandingHeader;
