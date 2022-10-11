import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
// import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import React from "react";
import { toast, ToastContainer } from "react-toastify";

export default function QuizLayout({ quiz, handleOptionClick }) {
  const { question, id, correctAnswer, options } = quiz;
  let optionNum = 0;
  let toastContainer;
  const handleEyeClick = () => {
    toastContainer = <ToastContainer autoClose={2000} />;
    toast(correctAnswer);
  };
  console.log(question);
  return (
    <div className="border mb-4 px-4 py-8 rounded shadow-sm shadow-yellow-500 relative">
      <div className="mb-4">
        <h1 className="font-bold text-xl">{question}</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mb-4">
        {options.map((option) => {
          optionNum = optionNum + 1;
          return (
            <div>
              <input
                type="radio"
                onChange={() => handleOptionClick(id, option, correctAnswer)}
                className="p-3 border m-2 rounded drop-shadow-sm shadow-sm shadow-yellow-500 cursor-pointer hover:bg-slate-100"
                value={option}
                id={optionNum + id}
                name={id}
              />
              <label htmlFor={optionNum + id}>{option} </label>
            </div>
          );
        })}
      </div>
      <div onClick={handleEyeClick} className="absolute top-0 right-0 mr-1">
        <FontAwesomeIcon icon={faEye} />
        {toastContainer}
      </div>
    </div>
  );
}
