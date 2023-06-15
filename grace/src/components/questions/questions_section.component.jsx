import React, { useEffect, useState } from "react";
import "./questions_section.styles.scss";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

function CustomAlert({ result, onClose }) {
  return (
    <div className="custom-alert">
      <h3>
        Based on your answers, it's possible that you're suffering from {result}
        .
      </h3>
      <p>Click "Go to Articles" to learn more about {result}.</p>
      <button onClick={onClose}>Close</button>
      <Link to={"/articles"}>Go to Articles</Link>
    </div>
  );
}

function Questions({ questions }) {
  const [answers, setAnswers] = useState([]);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [result, setResult] = useState("");
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const navigate = useNavigate();

  // const handleAnswer = (e, index, answer) => {
  //   // if (e.target.classList.contains("no-button")) {
  //   //   e.target.classList.add("isNo");
  //   // } else {
  //   //   e.target.classList.add("isYes");
  //   // }

  //   const newAnswers = [...answers];
  //   newAnswers[index] = answer;
  //   setAnswers(newAnswers);
  //   setSelectedAnswerIndex(index);
  // };
  const handleAnswer = (e, index, answer) => {
    const yesButton = e.target
      .closest(".answer-options")
      .querySelector(".yes-button");
    const noButton = e.target
      .closest(".answer-options")
      .querySelector(".no-button");
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
    setSelectedAnswerIndex(index);
    if (answer === "yes") {
      if (yesButton.classList.contains("isYes")) {
        // Remove isYes class and enable both buttons
        yesButton.classList.remove("isYes");
        noButton.classList.remove("isNo");
        return;
      } else if (noButton.classList.contains("isNo")) {
        // Toggle isYes class and disable noButton
        yesButton.classList.add("isYes");
        noButton.classList.remove("isNo");
        // noButton.disabled = true;
      } else {
        // Add isYes class and enable both buttons
        yesButton.classList.add("isYes");
        noButton.classList.remove("isNo");
      }
    } else {
      if (noButton.classList.contains("isNo")) {
        // Remove isNo class and enable both buttons
        noButton.classList.remove("isNo");
        yesButton.classList.remove("isYes");
        return;
      } else if (yesButton.classList.contains("isYes")) {
        // Toggle isNo class and disable yesButton
        noButton.classList.add("isNo");
        yesButton.classList.remove("isYes");
        // yesButton.disabled = true;
      } else {
        // Add isNo class and enable both buttons
        noButton.classList.add("isNo");
        yesButton.classList.remove("isYes");
        // yesButton.disabled = false;
      }
    }
  };  

  const evaluateAnswers = () => {
    let depressionScore = 0;
    let anxietyScore = 0;
    let ptsdScore = 0;
    let bpdScore = 0;

    answers.forEach((answer, index) => {
      if (index >= 0 && index <= 3) {
        if (answer === "yes") {
          depressionScore++;
        }
      } else if (index >= 4 && index <= 7) {
        if (answer === "yes") {
          anxietyScore++;
        }
      } else if (index >= 8 && index <= 11) {
        if (answer === "yes") {
          ptsdScore++;
        }
      } else if (index >= 12 && index <= 15) {
        if (answer === "yes") {
          bpdScore++;
        }
      }
    });

    const scores = [
      { illness: "Depression", score: depressionScore },
      { illness: "Anxiety disorders", score: anxietyScore },
      { illness: "PTSD", score: ptsdScore },
      { illness: "BPD", score: bpdScore },
    ];

    scores.sort((a, b) => b.score - a.score);

    const topIllness = scores[0].illness;

    return topIllness;
  };

  const handleFinish = () => {
    const result = evaluateAnswers();
    setAnswers([]);
    setIsAlertOpen(true);
    console.log(result)
    setResult(result);
    let { user } = jwt_decode(localStorage.getItem("token"));
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const body = {
      disease: result,
    };
    axios
      .put(`http://localhost:5000/users/${user._id}`, body, config)
      .then((res) => {
        console.log("done");
        localStorage.setItem('answerQuestuions',true)
        localStorage.setItem('type',result)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="questions-section">
      <h2>Please answer the following questions:</h2>
      {questions.map((q, index) => (
        <div key={index} className="question">
          <p>{q.question}</p>
          <div className="answer-options">
            <button
              onClick={(e) => handleAnswer(e, index, "yes")}
              className="yes-button"
            >
              Yes
            </button>
            <button
              onClick={(e) => handleAnswer(e, index, "no")}
              className="no-button"
            >
              No
            </button>
          </div>
        </div>
      ))}
      <button  onClick={handleFinish}>Submit</button>
      {isAlertOpen && (
        <CustomAlert result={result} onClose={() => setIsAlertOpen(false)} />
      )}
    </div>
  );
}

export default Questions;