import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  Bar,
  BarChart,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function Stats() {
  const data = useLoaderData();
  console.log(data.data);
  return (
    <div className="flex justify-center mt-32">
      <div className="w-full md:w-3/4 lg:w-2/4 flex flex-col items-center bg-gradient-to-l from-yellow-100 via-yellow-500 to-yellow-100 shadow-lg p-2 rounded">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mt-2 text-white drop-shadow">
            Statistics
          </h1>
        </div>
        <div className="w-full h-96 mb-4 flex justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart width={50} data={data.data}>
              <XAxis dataKey={"name"} />
              <YAxis />
              <Tooltip />
              <Bar dataKey={"total"} fill={"#dddddd"}></Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div>
          <strong className=" text-white drop-shadow">
            Fig: Number of Quizzes
          </strong>
        </div>
      </div>
    </div>
  );
}
