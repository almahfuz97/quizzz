import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../logo192.png";

export default function Header() {
  return (
    <div>
      <nav className=" my-8 flex justify-between items-center">
        <div className=" flex items-center">
          <img src={logo} alt="logo" className="w-10 mr-2" />
          <h1 className=" font-bold text-2xl text-yellow-500">Quizzz</h1>
        </div>
        <ul className="flex">
          <li className="mr-6 text-yellow-600">
            <NavLink
              to={"/topics"}
              className={({ isActive }) =>
                isActive
                  ? "text-purple-400  ease duration-100"
                  : "ease duration-100"
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
                  ? "text-purple-400  ease duration-100"
                  : "ease duration-100"
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
                  ? "text-purple-400  ease duration-100"
                  : "ease duration-100"
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
