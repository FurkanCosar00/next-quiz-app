"use client";

import { useState, useEffect } from "react";
import data from "/app/data.json";
import FinishPage from "/app/finishpage/page.jsx";
import Image from "next/image";

export default function DataCategory({ params }) {
  const { category } = params;
  
  const [dataCategory, setDataCategory] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [answer, setAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [isSelected, setIsSelected] = useState(true);

  function handleNextQuestion() {
    if (currentQuestion < dataCategory.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinished(true);
    }

    setSubmitted(false);
    setAnswer(null);
  }

  function handleAnswer(x) {
    if (!submitted) {
      setAnswer(x);
    }
  }

  function handleSubmit() {
    if (answer === null) {
      setIsSelected(false);
      return;
    }

    const correctAnswer = dataCategory.questions[currentQuestion].answer;
    setSubmitted(true);
    
    if (correctAnswer === answer) {
      setScore(score + 1);
    }

    setIsSelected(true);
  }
  
  useEffect(() => {
    const categoryData = data.questionAndAnswers.find(x => x.category === category);
    setDataCategory(categoryData);
  }, [category]);

  if (!dataCategory) {
    return;
  }

  return (
    <>
      {finished ?
        (<FinishPage score={score} dataCategory={dataCategory} />) 
        :
        (
        <>
          <div className="questions">
            <p>Question {currentQuestion} of 10</p>
            <h3>{dataCategory.questions[currentQuestion].question}</h3>
          </div>
          
          <div className="options">
            <div className="optionSection">
              {dataCategory.questions[currentQuestion].options.map((x, i) => (
                <button onClick={() => handleAnswer(x)} key={i}>
                  <span>{i === 0 && "A" || i === 1 && "B" || i === 2 && "C" || i === 3 && "D"}</span>
                  {x}
                </button>
              ))}
            </div>
            
            <div className="submitSection">
              {!submitted ? 
                (<button onClick={handleSubmit}>Submit Answer</button>)
                : 
                (<button onClick={handleNextQuestion}>Next Question</button>)
              }

              {!isSelected ?
                <div className="error">
                  <Image src="/images/select-error.png" alt="" width={30} height={30}></Image>
                  <p>Please select an answer</p>
                </div>
                :
                <div className="error"></div>
              }
            </div>
          </div>
        </>
        )
      }
    </>
  );
}