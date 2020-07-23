import React from "react";
//Components
import QuestionCard from "./components/questionCard";

function App() {
  const startQuiz = async () => {};

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};
  return (
    <div className="App">
      <h1>React Quiz</h1>
      <button className="start" onClick={startQuiz}></button>
      <p className="score">Score: </p>
      <p>Loading Questions...</p>
      <QuestionCard />
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
}

export default App;
