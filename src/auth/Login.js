import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { Validator } from "../Store";
import "../Styles/Login.css";

function Login() {
  const [cookies, setCookie] = useCookies(["user"]);

  const [message, setMessage] = useState("");

  useEffect(() => {
    Validator({
      form: "#formLogin",
      formGroupSelector: ".form-group",
      errorSelector: ".form-message",
      rules: [
        Validator.isRequired("#email"),
        Validator.isRequired("#password"),
        Validator.isEmail("#email"),
        Validator.minLength("#password", 6),
      ],
      classError: "invalid",
      onSubmit: (e) => {},
    });
  });

  const handleSubmit = (event) => {
    console.log(message);
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    if (email === "" || password === "") {
      alert("Please fill all the fields");
    } else {
      fetch(`${process.env.REACT_APP_API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success && data.api_token) {
            setCookie("user", data.api_token);
            window.location.href = "/";
          } else {
            setMessage(data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="w-full h-screen py-10 bg-gray-300 flex justify-center items-center">
      <div className="container">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="w-full max-w-md">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <h1 className="text-center text-2xl font-bold">Login</h1>
              </div>
              <form className="" onSubmit={handleSubmit} id="formLogin">
                <div className="mb-4 form-group">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email"
                  />

                  <span className="form-message text-red-500 text-sm"></span>
                  <span className="text-red-500 text-sm">
                    {message !== "" && message}
                  </span>
                </div>
                <div className="mb-4 form-group">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Password
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Password"
                  />
                  <span className="form-message text-red-500 text-sm"></span>
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Sign In
                  </button>
                  <a
                    className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                    href="/"
                  >
                    Forgot Password?
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
