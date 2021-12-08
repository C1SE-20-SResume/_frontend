import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [user, setUser] = useState({
    full_name: "",
    email: "",
    password: "",
    gender: "",
    date_birth: "",
    phone_number: "",
  });

  const [assetToken, setAssetToken] = useState("");

  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let date = e.target.date_birth.value,
      gender = e.target.gender.value;

    setUser((prev) => ({
      ...prev,
      date_birth: date,
      gender: gender,
    }));

    console.log(user);

    fetch(`${process.env.REACT_APP_API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setAssetToken(data.access_token);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleResend = (e) => {
    e.preventDefault();
    fetch(
      `${process.env.REACT_APP_API_URL}/email/verify/resend?api_token=${assetToken}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setMessage(data.message);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-full h-screen py-10 bg-gray-300 flex justify-center items-center relative">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="min-w-[500px] max-w-md">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
            <div className="mb-4">
              <h1 className="text-center text-2xl font-bold">Register</h1>
            </div>
            {assetToken === "" ? (
              <form
                onSubmit={handleSubmit}
                id="formLogin"
                className="grid grid-cols-2 gap-4"
              >
                <div className="col-span-1 mb-4 form-group">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Full Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="full_name"
                    type="text"
                    placeholder="Full Name"
                    name="full_name"
                    onInput={(e) =>
                      setUser({ ...user, full_name: e.target.value })
                    }
                  />
                  <span className="form-message"></span>
                </div>
                <div className="col-span-1 mb-4 form-group">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email"
                    name="email"
                    onInput={(e) => setUser({ ...user, email: e.target.value })}
                  />
                  <span className="form-message"></span>
                </div>
                <div className="col-span-1 mb-4 form-group">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Password
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Password"
                    name="password"
                    onInput={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                  />
                  <span className="form-message"></span>
                </div>
                <div className="col-span-1 mb-4 form-group">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Confirm Password
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="confirm_password"
                    type="password"
                    placeholder="Confirm Password"
                    name="confirm_password"
                  />
                  <span className="form-message"></span>
                </div>
                <div className="col-span-2 mb-4 form-group">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Gender
                  </label>
                  <div className="flex items-center">
                    <div className="mr-4">
                      <label htmlFor="gender" className="mr-2">
                        Female
                      </label>
                      <input type="radio" name="gender" value="f" />
                    </div>
                    <div className="mr-4">
                      <label htmlFor="gender" className="mr-2">
                        Male
                      </label>
                      <input type="radio" name="gender" value="m" />
                    </div>
                    <div>
                      <label htmlFor="gender" className="mr-2">
                        Other
                      </label>
                      <input type="radio" name="gender" value="o" />
                    </div>
                  </div>
                  <span className="form-message"></span>
                </div>
                <div className="col-span-1">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Date of Birth
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="date_birth"
                    type="date"
                    placeholder="Date of Birth"
                    name="date_birth"
                  />
                </div>
                <div className="col-span-1">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Phone Number
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="phone_number"
                    type="text"
                    placeholder="Phone Number"
                    name="phone_number"
                    onInput={(e) =>
                      setUser({ ...user, phone_number: e.target.value })
                    }
                  />
                </div>
                <div className="col-span-2 flex items-center justify-between">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Sign In
                  </button>
                  <Link
                    to="/login"
                    className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  >
                    Already have an account?
                  </Link>
                </div>
              </form>
            ) : (
              <div className="text-center">
                <h1>Verify Email</h1>

                {message === "" ? (
                  <>
                    <p>Please check your email to verify your account</p>
                    <p>
                      If you did not receive the email, please click{" "}
                      <span
                        onClick={handleResend}
                        className="cursor-pointer text-prihover"
                      >
                        here
                      </span>{" "}
                      to resend
                    </p>
                  </>
                ) : (
                  <p>{message}</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
