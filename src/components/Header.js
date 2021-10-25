import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.png";

function Header() {
  return (
    <header className="bg-[#333]">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex-shrink lg:max-w-[50px] m-2 text-white max-w-[35px] mr-4">
            <Link to="/" className="flex items-center">
              <img src={Logo} alt="Logo" />
            </Link>
          </div>
          <nav className="text-white lg:block hidden">
            <ul className="flex items-center">
              <li className="mx-2 capitalize">
                <NavLink
                  exact
                  to="/"
                  className="py-2 px-4 hover:text-prihover"
                  activeClassName="text-prihover"
                >
                  Home
                </NavLink>
              </li>
              <li className="mx-2 capitalize">
                <NavLink
                  exact
                  to="/about"
                  className="py-2 px-4 hover:text-prihover"
                  activeClassName="text-prihover"
                >
                  About us
                </NavLink>
              </li>
              <li className="mx-2 capitalize">
                <NavLink
                  exact
                  to="/contact"
                  className="py-2 px-4 hover:text-prihover"
                  activeClassName="text-prihover"
                >
                  Contact us
                </NavLink>
              </li>
              <li className="mx-2">
                <form className="relative">
                  <input
                    type="text"
                    placeholder="Search"
                    className="py-1 px-3 text-black rounded-md bg-gray-300 focus:scale-110 transition-all duration-500"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 absolute right-0 top-1/2 -translate-y-1/2 text-black cursor-pointer hover:text-prihover transition-colors duration-300 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </form>
              </li>
            </ul>
          </nav>
          <div className="flex-shrink text-white">
            <NavLink to="/login">
              <button className="py-1 px-6 border border-gray-200 rounded-md hover:bg-prihover hover:border-prihover">
                Login
              </button>
            </NavLink>
            <span className="ml-4">or</span>
            <NavLink to="/register">
              <button className="py-1 px-4  hover:text-prihover">
                Sign up
              </button>
            </NavLink>
          </div>
          <div className="text-white lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
