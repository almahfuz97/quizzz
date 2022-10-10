import React from "react";

export default function QuizLayout({ quiz, handleOptionClick }) {
  const { question, id, correctAnswer, options } = quiz;
  let optionNum = 0;

  console.log(question);
  return (
    <div className="border mb-4 px-4 py-8 rounded shadow-sm shadow-yellow-500">
      <div className="mb-4">
        <h1 className="font-bold text-xl">{question}</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mb-4">
        {options.map((option) => {
          optionNum = optionNum + 1;
          return (
            <div>
              <p
                onClick={() => handleOptionClick(option, correctAnswer)}
                className="p-3 border m-2 rounded drop-shadow-sm shadow-sm shadow-yellow-500 cursor-pointer hover:bg-slate-100"
              >
                {optionNum}. {option}{" "}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
