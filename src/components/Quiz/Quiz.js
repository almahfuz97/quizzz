import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import QuizLayout from "../QuizLayout/QuizLayout";
import Topic from "../Topic/Topic";

export default function Quiz() {
  const quizes = useLoaderData();
  const [answer, setAnswer] = useState({
    corrAns: 0,
    wrongAns: 0,
  });

  const handleOptionClick = (option, corrAnswer) => {
    if (option === corrAnswer) {
      const newAns = { ...answer };
      newAns.corrAns++;
      setAnswer(newAns);
    } else {
      const newAns = { ...answer };
      newAns.wrongAns++;
      setAnswer(newAns);
    }
  };

  console.log(quizes);
  return (
    <div>
      <div className="my-10 flex justify-between items-center">
        <h1 className="text-center font-bold text-2xl text-red-500">
          {quizes.data.name}
        </h1>
        <div>
          <h1 className=" text-red-500">Correct:{answer.corrAns}</h1>
          <h1 className=" text-red-500">Wrong:{answer.wrongAns} </h1>
        </div>
      </div>
      <div>
        {quizes.data.questions.map((quiz) => (
          <QuizLayout
            key={quiz.id}
            quiz={quiz}
            handleOptionClick={handleOptionClick}
          />
        ))}
      </div>
    </div>
  );
}
