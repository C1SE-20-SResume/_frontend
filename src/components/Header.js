import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import Avt from "../assets/images/avt_demo.jpg";

function Header() {
  const [user, setUser] = useState();
  const [cookies, setCookies] = useCookies(["user"]);

  useEffect(() => {
    if (cookies.user) {
      fetch(`http://_backend.win/api/login?api_token=${cookies.user}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setUser(data.user);
          }
        })
        .catch((err) => {
          console.log(err);
          setCookies("user", "");
        });
    }
  }, [cookies]);
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
          {user ? (
            <div className="flex-shrink">
              <div className="flex items-center">
                <div className="mr-3">
                  <p className="text-sm leading-5 font-medium text-white">
                    {user.full_name}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <img
                    className="rounded-full h-8 w-8"
                    src={Avt}
                    alt="Avatar"
                  />
                </div>
              </div>
            </div>
          ) : (
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
          )}

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
