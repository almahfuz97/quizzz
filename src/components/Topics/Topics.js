import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleDown,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";

export default function Topics() {
  const topics = useLoaderData();
  console.log(topics.data);
  return (
    <>
      <div className="flex flex-col md:flex-row mt-20 justify-center items-center mb-20">
        <div className="w-full md:w-1/2 mb-10 md:mb-0 flex justify-center items-center bg-gradient-to-r from-transparent via-yellow-100  to-transparent py-6 ">
          <img src="logo512.png" alt="" className="w-2/4 md:3/4 " />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl p-2 text-white md:text-3xl font-bold mb-2 w-full text-center md:text-start bg-gradient-to-r from-yellow-500">
            Welcome to Quizzz!
          </h1>
          <p className=" opacity-80 text-center md:text-start">
            You can find so many quizzes here. Practice Quiz To Improve Your
            Knowledge On Various Topics.{" "}
          </p>
          <div className="flex justify-center mt-10 animate-bounce">
            <FontAwesomeIcon
              icon={faArrowAltCircleDown}
              className=" font-bold text-4xl text-yellow-500 "
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-20">
        {topics.data.map((topic) => (
          <Topic key={topic.id} topic={topic} />
        ))}
      </div>
    </>
  );
}
