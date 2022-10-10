import React from "react";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";

export default function Topics() {
  const topics = useLoaderData();
  console.log(topics.data);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {topics.data.map((topic) => (
        <Topic key={topic.id} topic={topic} />
      ))}
    </div>
  );
}
