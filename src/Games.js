import React, { useState } from 'react';
import './Games.css';

const triviaQuestions = [
  {
    question: "What is the name of Ross's second wife?",
    options: ["Carol", "Emily", "Rachel", "Susan"],
    answer: "Emily",
  },
  {
    question: "What is the name of Joey's stuffed penguin?",
    options: ["Hugsy", "Waddles", "Snowy", "Fluffy"],
    answer: "Hugsy",
  },
  {
    question: "Which character famously said, 'We were on a break!'?",
    options: ["Monica", "Phoebe", "Ross", "Chandler"],
    answer: "Ross",
  },
  {
    question: "What was the name of Rachel's hairless cat?",
    options: ["Whiskers", "Baldy", "Mrs. Whiskerson", "Hairless"],
    answer: "Mrs. Whiskerson",
  },
  {
    question: "What is Chandler's middle name?",
    options: ["Muriel", "Matthew", "Marcel", "Michael"],
    answer: "Muriel",
  },
];

const Games = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [showScore, setShowScore] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === triviaQuestions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < triviaQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption("");
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedOption("");
    setShowScore(false);
  };

  return (
    <div className="games-container">
      <h1 className="retro-title">🎮 Friends Trivia Game!</h1>

      {showScore ? (
        <div className="score-area">
          <h2 className="score-title">Your Score: {score} / {triviaQuestions.length}</h2>
          <button onClick={handleRestart} className="game-button restart">
            Play Again
          </button>
        </div>
      ) : (
        <div className="question-area">
          <h2 className="question-title">
            {triviaQuestions[currentQuestionIndex].question}
          </h2>
          <div className="options-container">
            {triviaQuestions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option)}
                className={`option-button ${
                  selectedOption === option ? "selected" : ""
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          <button
            onClick={handleNextQuestion}
            className="game-button next"
            disabled={!selectedOption}
          >
            {currentQuestionIndex < triviaQuestions.length - 1
              ? "Next Question"
              : "Show Score"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Games;
