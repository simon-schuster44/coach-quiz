import "./Question.css";
import Counter from "../Counter/Counter";

import { data } from "../../data";
import { useState } from "react";

export default function Question({ id, setQuestionId }) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [startCounter, setStartCounter] = useState(false);

  function handleNextQuestion(id) {
    setShowAnswer(false);
    setTimeout(() => {
      setQuestionId(0);
    }, 2000);

    setTimeout(() => setQuestionId(id + 1), 2000);
  }

  return (
    <div className={`card ${id === 0 ? "hide" : ""}`}>
      <h2 className="question">FRAGE NUMMER {id}:</h2>
      <h2 className={`question--text`}>
        {data.find((item) => item.id === id).frage}
      </h2>
      <button
        className="button--answer"
        onClick={() => {
          setStartCounter(false);
          setShowAnswer(true);
        }}
      >
        Antwort
      </button>
      <h2 className={`answer ${showAnswer ? "" : "hide"}`}>
        {data.find((item) => item.id === id).antwort}
      </h2>
      <button
        className={`button--next ${showAnswer ? "" : "hide"}`}
        onClick={() => handleNextQuestion(id)}
      >
        NEXT
      </button>
      {startCounter ? (
        <Counter startCounter={startCounter} />
      ) : (
        <button className="button--start" onClick={() => setStartCounter(true)}>
          Start!
        </button>
      )}
    </div>
  );
}
