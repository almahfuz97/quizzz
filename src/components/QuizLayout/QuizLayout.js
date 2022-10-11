import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
// import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import React from "react";
import { toast, ToastContainer } from "react-toastify";

export default function QuizLayout({ quiz, handleOptionClick, quesNum }) {
  const { question, id, correctAnswer, options } = quiz;

  let optionNum = 0;
  let toastContainer;
  const handleEyeClick = () => {
    toastContainer = <ToastContainer autoClose={3000} />;
    toast(`Correct answer: ${correctAnswer}`);
  };
  console.log(question);
  return (
    <div className="border mb-4 px-4 py-8 rounded shadow-sm bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 shadow-slate-200 relative">
      <div className="mb-4">
        <h1 className="font-bold text-xl text-blue-500">
          {quesNum}: {question}
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mb-4">
        {options.map((option) => {
          optionNum = optionNum + 1;
          return (
            <div className="p-3 border m-2 rounded drop-shadow-sm shadow-sm shadow-yellow-500 cursor-pointer hover:bg-yellow-500  flex items-center">
              <input
                type="radio"
                onChange={() => handleOptionClick(id, option, correctAnswer)}
                value={option}
                id={optionNum + id}
                name={id}
              />
              <label
                className="ml-2 text-white font-bold w-full"
                htmlFor={optionNum + id}
              >
                <p>{option} </p>
              </label>
            </div>
          );
        })}
      </div>
      <div
        onClick={handleEyeClick}
        className="absolute top-0 right-0 mr-2 mt-2"
      >
        <FontAwesomeIcon className=" text-red-500" icon={faEye} />
        {toastContainer}
      </div>
    </div>
  );
}
