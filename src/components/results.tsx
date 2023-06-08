import "./results.css";

function Results() {
  return (
    <div className="results-container">
      <div className="result-container">
        <h1 className="result-title">Your Result</h1>
        <div className="circle-score-container">
          <span className="circle-score">76</span>
          <p className="circle-score-text">of 100</p>
        </div>
        <div className="result-rating-container">
          <h2 className="result-rating">Great</h2>
          <p className="result-description">
            You scored higher than 65% of the people who have taken these tests.
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
            <span className="your-score">80</span>
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
            <span className="your-score">92</span>
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
            <span className="your-score">61</span>
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
            <span className="your-score">72</span>
            <span className="total-score"> / 100</span>
          </div>
        </div>
        <button className="continue-button">Continue</button>
      </div>
    </div>
  );
}

export default Results;
