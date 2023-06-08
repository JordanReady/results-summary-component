import "./results.css";

function Results() {
  return (
    <div className="results-container">
      <div className="your-result-container">
        <h1 className="your-result-title">Your Result</h1>
        <div className="circle-score-container">
          <span className="circle-score">76</span>
          <p className="circle-score-text">of 100</p>
        </div>
        <div className="your-result-rating-container">
          <h2 className="your-result-rating">Great</h2>
          <p className="your-result-description">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
      </div>
      <div className="summary-container"></div>
    </div>
  );
}

export default Results;
