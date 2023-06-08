import React, { useState } from "react";
import "./results.css";

function Results() {
  const [circleScore, setCircleScore] = useState(76);
  const [resultRating, setResultRating] = useState("Great");
  const [resultPercentage, setResultPercentage] = useState(65);
  const [reactionScore, setReactionScore] = useState(80);
  const [memoryScore, setMemoryScore] = useState(92);
  const [verbalScore, setVerbalScore] = useState(61);
  const [visualScore, setVisualScore] = useState(72);

  return (
    <div className="results-summary-container">
      <div className="result-container">
        <h1 className="result-title">Your Result</h1>
        <div className="circle-score-container">
          <span className="circle-score">{circleScore}</span>
          <p className="circle-score-text">of 100</p>
        </div>
        <div className="result-rating-container">
          <h2 className="result-rating">{resultRating}</h2>
          <p className="result-description">
            You scored higher than {resultPercentage}% of the people who have
            taken these tests.
          </p>
        </div>
      </div>
      <div className="summary-container">
        <h1 className="summary-title">Summary</h1>
        <div className="skill-container reaction">
          <span className="top-left-corner-accent corner-accent"></span>
          <span className="top-right-corner-accent corner-accent"></span>
          <span className="bottom-left-corner-accent corner-accent"></span>
          <span className="bottom-right-corner-accent corner-accent"></span>
          <div className="skill-type">
            <img
              src="src\assets\icon-reaction.svg"
              alt="reaction icon"
              className="skill-icon"
            />
            <p className="skill-title">Reaction</p>
          </div>
          <div className="skill-score">
            <span className="your-score">{reactionScore}</span>
            <span className="total-score"> / 100</span>
          </div>
        </div>
        <div className="skill-container memory">
          <span className="top-left-corner-accent corner-accent"></span>
          <span className="top-right-corner-accent corner-accent"></span>
          <span className="bottom-left-corner-accent corner-accent"></span>
          <span className="bottom-right-corner-accent corner-accent"></span>
          <div className="skill-type">
            <img
              src="src\assets\icon-memory.svg"
              alt="memory icon"
              className="skill-icon"
            />
            <p className="skill-title">Memory</p>
          </div>
          <div className="skill-score">
            <span className="your-score">{memoryScore}</span>
            <span className="total-score"> / 100</span>
          </div>
        </div>
        <div className="skill-container verbal">
          <span className="top-left-corner-accent corner-accent"></span>
          <span className="top-right-corner-accent corner-accent"></span>
          <span className="bottom-left-corner-accent corner-accent"></span>
          <span className="bottom-right-corner-accent corner-accent"></span>
          <div className="skill-type">
            <img
              src="src\assets\icon-verbal.svg"
              alt="verbal icon"
              className="skill-icon"
            />
            <p className="skill-title">Verbal</p>
          </div>
          <div className="skill-score">
            <span className="your-score">{verbalScore}</span>
            <span className="total-score"> / 100</span>
          </div>
        </div>
        <div className="skill-container visual">
          <span className="top-left-corner-accent corner-accent"></span>
          <span className="top-right-corner-accent corner-accent"></span>
          <span className="bottom-left-corner-accent corner-accent"></span>
          <span className="bottom-right-corner-accent corner-accent"></span>
          <div className="skill-type">
            <img
              src="src\assets\icon-visual.svg"
              alt="visual icon"
              className="skill-icon"
            />
            <p className="skill-title">Visual</p>
          </div>
          <div className="skill-score">
            <span className="your-score">{visualScore}</span>
            <span className="total-score"> / 100</span>
          </div>
        </div>
        <button className="continue-button">Continue</button>
      </div>
    </div>
  );
}

export default Results;
