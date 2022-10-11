import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Topic({ topic }) {
  const { logo, id, name, total } = topic;

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/topic/${id}`);
  };
  return (
    <div className="border p-4 rounded-md  shadow-md drop-shadow-sm mx-2 mt-10 relative hover:bg-slate-400 duration-200 hover:cursor-pointer shadow-yellow-400 bg-gradient-to-r  from-transparent via-yellow-300 to-transparent">
      <small className=" absolute top-0 -my-4 mr-2 shadow-xl text-red-600 right-0 p-2 bg-transparent border rounded-lg font-semibold">
        Total Quiz: {total}
      </small>

      <h1 className="text-white font-bold text-xl md:text-2xl text-center mt-2">
        {name}
      </h1>

      <div className="p-8  pt-0 md:p-4 md:pt-0 md:mb-16 rounded-lg mt-4 mb-4 ">
        <img
          className="w-full bg-yellow-300 rounded"
          src={logo}
          alt="topic image"
        />
      </div>

      <button
        onClick={handleNavigate}
        className="absolute bg-yellow-500 w-full py-2 md:py-4 left-0 bottom-0 rounded-b-md drop-shadow  text-white font-semibold"
      >
        <span className="animate-pulse">
          {" "}
          Start Quiz{" "}
          <FontAwesomeIcon
            className=" font-bold bg-transparent ml-2"
            icon={faArrowCircleRight}
          />
        </span>
      </button>
    </div>
  );
}
