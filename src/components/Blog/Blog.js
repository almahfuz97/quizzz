import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import BlogLayout from "../BlogLayout/BlogLayout";

export default function Blog() {
  const [questionAns, setQuestionAns] = useState([]);
  useEffect(() => {
    fetch("questionAns.json")
      .then((res) => res.json())
      .then((data) => setQuestionAns(data));
  }, []);
  // console.log(questionAns);
  return (
    <div className="mt-16">
      <h1 className=" font-bold text-2xl text-center mb-8 p-2 text-red-500 bg-gradient-to-r from-transparent via-yellow-200 to-transparent">
        Questions:
      </h1>
      {questionAns.map((qA) => (
        <BlogLayout key={qA.id} ques={qA} />
      ))}
    </div>
  );
}
