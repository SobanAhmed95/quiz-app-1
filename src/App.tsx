import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const questions = [
    {
      question: "Html Stands For____________________________",
      options: [
        "Hyper Text Makeup Language",
        "html",
        "Case Cading Style Sheet",
        "Hypertext markup language",
      ],
      correctAns: "Hypertext markup language",
    },
    {
      question: "Css Stands For _______________________",
      options: [
        "Casecading Style Sheet",
        "Java",
        "Ram",
        "Hypertext markup language",
      ],
      correctAns: "Casecading Style Sheet",
    },
    {
      question: "Js Stands For _______________________",
      options: ["Java Style", "Java Script", "Script", "Script Src"],
      correctAns: "Java Script",
    },
    {
      question: "Dom Stands For _______________________",
      options: ["Document Object Model", "html", "Css", "Java"],
      correctAns: "Document Object Model",
    },
    {
      question: "Ram Stands For _______________________",
      options: ["Read Only Memory", "Dom", "Random Acccess Memory", "For Pc"],
      correctAns: "Random Acccess Memory",
    },
    {
      question: "Rom Stands For _______________________",
      options: [
        "Hyper Text Markup Language",
        "html",
        "HTml",
        "Read Only Memory",
      ],
      correctAns: "Read Only Memory",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleOptionClick = (option:any) => {
    if (option === questions[currentQuestionIndex].correctAns) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleQuizStart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizCompleted(false);
  };

  return (
    <div className='container'>
      <div className='div1 m-3 p-3 rounded' id="main1" style={{ display: quizCompleted ? "none" : "block" }}>
        <h1>Quiz App</h1>
        <p className='fs-1 pt-2'>
          <span>{currentQuestionIndex + 1}</span> / <span>{questions.length}</span>
        </p>
      </div>
      <div className='div2 m-3 p-3 rounded' style={{ display: quizCompleted ? "none" : "block" }}>
        <h1>{questions[currentQuestionIndex].question}</h1>
      </div>
      <div className='options' style={{ display: quizCompleted ? "none" : "block" }}>
        {questions[currentQuestionIndex].options.map((option, index) => (
          <button
            key={index}
            className='btn btn-primary m-2'
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <div id='main2' style={{ display: quizCompleted ? "block" : "none" }}>
        <p className='fs-2'>Your score: {score}/{questions.length}</p>
        <button className='btn btn-primary rounded' onClick={handleQuizStart}>Restart Quiz</button>
      </div>
    </div>
  );
}

export default App;
