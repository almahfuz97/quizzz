import React from "react";

export default function Topic({ topic }) {
  const { logo, id, name, total } = topic;
  return (
    <div className="border p-4 rounded-md bg-white shadow-md drop-shadow-sm mx-2 mt-10 relative hover:bg-slate-100 duration-200 hover:cursor-pointer">
      <div className=" ">
        <img
          className="w-full bg-slate-50  rounded p-5"
          src={logo}
          alt="topic image"
        />
      </div>
      <h1 className="text-yellow-600 font-bold text-center mt-2 mb-10">
        {name}
      </h1>
      <small className=" absolute top-0 -my-4 mr-2 shadow-xl text-red-600 right-0 p-2 bg-transparent border rounded-lg font-semibold">
        Total Quiz: {total}
      </small>
      <button className="absolute bg-yellow-500 w-full p-2 left-0 bottom-0 rounded-b-md drop-shadow text-white font-semibold">
        Start Quiz
      </button>
    </div>
  );
}
