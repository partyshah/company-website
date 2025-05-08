import React from 'react';
import nlp from '../images/nlp.png';
import './NLPTeamHeader.css';

const NLPTeamHeader = () => {
  return (
    <div className="team-header">
      <div className="header-content">
        <div className="level-badge intro">Advanced</div>
        <h1>Natural Language Processing Program</h1>
        <p>Join a 15 person team of experienced <a className="level-badge-href" href="https://www.piketeams.com/">high school computer science students</a>, get coached by a Google Software Engineer and current Engineering Director, and build a complex language processing application with a team to win the end of season competition.</p>
        <p className="level-badge-content-new">This is more than just a project — it’s a hands-on natural language processing course for ambitious high schoolers looking to get real-world experience in AI and machine learning.</p>
		<div className="outcome-section">
          <h2>Outcome</h2>
          <p>By the end of the 6 weeks, you will work with a team of experienced coders to build and publish an NLP application (AI summarizer for newsletters, essay comparison tool for homework, complex chatbots).</p>
		  <p className="outcome-content-new">This unique experience allows students to immerse themselves in a natural language processing course setting, combining theory, practical coding, and real product development.</p>
        </div>
      </div>
      <div className="header-image"> 
        <img src={nlp} alt="GameDev Games" />
      </div>
    </div>
  );
}; 

export default NLPTeamHeader; 