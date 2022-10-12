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
    toast(`Answer: ${correctAnswer}`);
  };
  console.log(question);
  return (
    <div className="border mb-4 px-4 py-8 rounded shadow-sm bg-gradient-to-r from-yellow-400 via-red-300 to-yellow-400 shadow-yellow-200 relative">
      <div className="mb-4 flex">
        <p className=" text-white font-bold text-xl">{quesNum}. </p>
        <h1
          className="font-bold text-xl text-white ml-1"
          dangerouslySetInnerHTML={{ __html: question }}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mb-4">
        {options.map((option) => {
          optionNum = optionNum + 1;
          return (
            <div className="p-0 border m-2  rounded drop-shadow shadow shadow-yellow-500 cursor-pointer hover:bg-yellow-500  flex items-center">
              <input
                type="radio"
                onChange={() => handleOptionClick(id, option, correctAnswer)}
                value={option}
                className="cursor-pointer ml-2"
                id={optionNum + id}
                name={id}
              />
              <label
                className=" text-white font-bold w-full cursor-pointer p-3"
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
        className="absolute top-0 right-0 mr-2 mt-2 cursor-pointer"
        title="Click to see the answer"
      >
        <FontAwesomeIcon className=" text-xl text-green-600" icon={faEye} />
        {toastContainer}
      </div>
    </div>
  );
}
