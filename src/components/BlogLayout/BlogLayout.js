import React from "react";

export default function BlogLayout({ ques }) {
  const { question, ans } = ques;
  return (
    <div className="p-4 border shadow m-2 mb-4 rounded shadow-yellow-500 drop-shadow">
      <h1 className=" font-bold text-yellow-500 text-xl mb-2">{question} </h1>
      <p className=" opacity-70">
        <strong>Ans:</strong> {ans}{" "}
      </p>
    </div>
  );
}
