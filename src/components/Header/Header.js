import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav className="mx-16 my-8 flex justify-between">
        <div className=" flex items-center">
          <img src="logo192.png" alt="logo" className="w-10 mr-2" />
          <h1 className=" font-bold text-2xl text-yellow-500">Quizzz</h1>
        </div>
        <ul className="flex">
          <li className="mr-6 text-yellow-600">
            <NavLink
              to={"/topics"}
              className={({ isActive }) =>
                isActive
                  ? "text-purple-400 font-semibold ease duration-200 text-lg"
                  : "ease duration-200"
              }
            >
              Topics
            </NavLink>{" "}
          </li>

          <li className="mr-6 text-yellow-600">
            <NavLink
              to={"/stats"}
              className={({ isActive }) =>
                isActive
                  ? "text-purple-400 font-semibold ease duration-200 text-lg"
                  : "ease duration-200"
              }
            >
              Statistics
            </NavLink>{" "}
          </li>

          <li className="mr-6 text-yellow-600">
            <NavLink
              to={"/blog"}
              className={({ isActive }) =>
                isActive
                  ? "text-purple-400 font-semibold ease duration-200 text-lg"
                  : "ease duration-200"
              }
            >
              Blog
            </NavLink>{" "}
          </li>
        </ul>
      </nav>
    </div>
  );
}
