import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

export default function Main() {
  return (
    <div className="px-8 lg:px-32">
      <Header />
      <Outlet />
    </div>
  );
}
