import { useState, useEffect } from "react";
import "./results.css";
import ReactionIcon from "../assets/icon-reaction.png";
import MemoryIcon from "../assets/icon-memory.png";
import VerbalIcon from "../assets/icon-verbal.png";
import VisualIcon from "../assets/icon-visual.png";

function Results() {
  const [circleScore, setCircleScore] = useState(0);
  const [resultRating, setResultRating] = useState("Great");
  const [resultPercentage, setResultPercentage] = useState(0);
  const [reactionScore, setReactionScore] = useState<number | null>(null);
  const [memoryScore, setMemoryScore] = useState<number | null>(null);
  const [verbalScore, setVerbalScore] = useState<number | null>(null);
  const [visualScore, setVisualScore] = useState<number | null>(null);
  const [data, setData] = useState<Array<{ scores: Array<{ score: number }> }>>(
    []
  );

  const [person, setPerson] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (data && data[person] && data[person].scores) {
      setReactionScore(data[person].scores[0].score);
      setMemoryScore(data[person].scores[1].score);
      setVerbalScore(data[person].scores[2].score);
      setVisualScore(data[person].scores[3].score);
      calculateCircleScore();
    }
  }, [data, person]);

  const fetchData = async () => {
    try {
      const response = await fetch("src/components/data.json");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error(error);
    }
  };

  function getNewData() {
    if (person < data.length - 1) {
      setPerson(person + 1);
    } else {
      setPerson(0);
    }

    if (data) {
      // set the state
      setReactionScore(data[person].scores[0].score);
      setMemoryScore(data[person].scores[1].score);
      setVerbalScore(data[person].scores[2].score);
      setVisualScore(data[person].scores[3].score);
      calculateCircleScore();
    } else {
      console.log("no data");
    }
  }

  function calculateCircleScore() {
    if (!data) {
      return;
    }
    const scoresLength = data[person].scores.length;
    let averageScore = 0;
    let averageScoreRounded = Math.round(averageScore);
    for (let i = 0; i < scoresLength; i++) {
      let totalScore = 0;
      totalScore += data[person].scores[0].score;
      totalScore += data[person].scores[1].score;
      totalScore += data[person].scores[2].score;
      totalScore += data[person].scores[3].score;
      averageScore = totalScore / scoresLength;
      averageScoreRounded = Math.round(averageScore);
    }

    // calculate animation increment
    let increment = (averageScoreRounded - circleScore) / 60;

    let count = circleScore;
    const timer = setInterval(() => {
      count += increment;

      if (Math.round(count) === averageScoreRounded) {
        count = averageScoreRounded;
        clearInterval(timer);
      }

      setCircleScore(Math.round(count));
    }, 1000 / 40);

    if (averageScore >= 90) {
      setResultRating("Fantastic");
      setResultPercentage(95);
    } else if (averageScore >= 80) {
      setResultRating("Excellent");
      setResultPercentage(83);
    } else if (averageScore >= 70) {
      setResultRating("Great");
      setResultPercentage(65);
    } else {
      setResultRating("Poor");
      setResultPercentage(42);
    }
  }

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
              src={ReactionIcon + "?sanitize=true"}
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
              src={MemoryIcon + "?sanitize=true"}
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
              src={VerbalIcon + "?sanitize=true"}
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
              src={VisualIcon + "?sanitize=true"}
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
        <button
          className="continue-button"
          onClick={() => {
            getNewData();
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default Results;
