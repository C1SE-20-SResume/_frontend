import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import Avt from "../assets/images/avt_demo.jpg";

function Header() {
  return (
    <header>
      <div className="bg-[#1e1e1e] bg-opacity-10">
        <div className="container flex justify-between items-center flex-wrap text-sm">
          <div className="max-w-full lg:max-w-[50%] flex">
            <div className="py-5 px-2.5 inline-flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              (+84) 344 786 376
            </div>
            <div className="inline-flex items-center py-5 px-2.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <a href="mailto:thang115tp@gmail.com">thang115tp@gmail.com</a>
            </div>
          </div>
          <div className="max-w-full lg:max-w-[50%]">
            <div className="inline-block py-3 px-2.5 border-r">
              <Link to="/login">Login</Link>
            </div>
            <span>or</span>
            <div className="inline-block py-3 px-2.5">
              <Link
                className="border border-[#2f55d4] rounded-md py-2 px-3 bg-[#2f55d4] text-white hover:bg-white hover:text-black"
                to="/signup"
              >
                Signup
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
