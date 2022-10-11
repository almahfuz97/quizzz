import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import QuizLayout from "../QuizLayout/QuizLayout";
import "react-toastify/dist/ReactToastify.css";

export default function Quiz() {
  const quizes = useLoaderData();
  const [answer, setAnswer] = useState({});
  const [_id, setId] = useState();

  let quesNum = 1;
  const handleOptionClick = (id, option, corrAnswer) => {
    //checking if the answer is correct or
    option === corrAnswer ? showToast(0) : showToast(1);
  };

  const showToast = (x) => {
    x === 0
      ? toast("Correct Answer", { position: toast.POSITION.TOP_CENTER })
      : toast("Wrong Answer", { position: toast.POSITION.TOP_CENTER });
  };

  console.log(quizes);
  return (
    <div>
      <ToastContainer autoClose={1500} />
      <div className="my-10 flex justify-between items-center">
        <h1 className="text-center font-bold text-xl  md:text-2xl text-yellow-600">
          Quiz for {quizes.data.name}
        </h1>
        <div>
          <h1 className=" text-red-500">Correct:</h1>
          <h1 className=" text-red-500">Wrong: </h1>
        </div>
      </div>
      <form>
        {quizes.data.questions.map((quiz) => (
          <QuizLayout
            key={quiz.id}
            quiz={quiz}
            quesNum={quesNum++}
            handleOptionClick={handleOptionClick}
          />
        ))}
      </form>
    </div>
  );
}
