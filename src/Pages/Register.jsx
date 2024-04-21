import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import ele from "../Assets/logo_only.svg";
import { BsArrowRight } from "react-icons/bs";

const Register = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <main className="w-full h-screen flex self-center place-content-center place-items-center">
        <div className=" text-custom-grey ">
          <div className="text-center mb-6">
            <img src={ele} className="w-14 h-14 mx-auto" alt="" />
            <div className="mt-2">
              <h3 className="text-heading-color text-xl font-semibold sm:text-lg">
                Create your account
              </h3>
            </div>
          </div>
          <form onSubmit={onSubmit} className="space-y-1">
            <button
              className={`w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg text-sm font-medium `}
            >
              <FcGoogle />
              Sign up with Google
            </button>
            <div className="flex flex-row text-center w-full">
              <div className="border-b-2 my-2.5 py-2 mx-2.5 w-full"></div>
              <div className="text-sm py-2  font-bold w-fit">OR</div>
              <div className="border-b-2 mb-2.5 ml-2 w-full"></div>
            </div>
            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="text-sm text-gray-600 font-md">
                  First Name
                </label>
                <input
                  type="text"
                  autoComplete="fname"
                  required
                  placeholder="Your Firstname"
                  value={fname}
                  onChange={(e) => {
                    setFname(e.target.value);
                  }}
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:indigo-600 shadow-sm rounded-lg transition duration-300"
                />
              </div>
              <div className="flex-1">
                <label className="text-sm text-gray-600 font-md">
                  Last Name
                </label>
                <input
                  type="text"
                  autoComplete="lname"
                  placeholder="Your Lastname"

                  required
                  value={lname}
                  onChange={(e) => {
                    setLname(e.target.value);
                  }}
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:indigo-600 shadow-sm rounded-lg transition duration-300"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-600 font-md">
                Your email
              </label>
              <input
                type="email"
                autoComplete="email"
                required
                placeholder="youremail@gmail.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:indigo-600 shadow-sm rounded-lg transition duration-300"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600 font-md">
                Phone number
              </label>
              <input
                type="text"
                autoComplete="phone"
                placeholder="your phone"
                required
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:indigo-600 shadow-sm rounded-lg transition duration-300"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 font-md">Password</label>
              <input
                disabled={isRegistering}
                type="password"
                autoComplete="new-password"
                required
                placeholder="your password"               
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 font-md">
                Confirm Password
              </label>
              <input
                disabled={isRegistering}
                type="password"
                autoComplete="off"
                required
                placeholder="confirm your password"           
                value={confirmPassword}
                onChange={(e) => {
                  setconfirmPassword(e.target.value);
                }}
                className="w-full mt-2 mb-8 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
              />
            </div>

            {errorMessage && (
              <span className="text-red-600 font-bold">{errorMessage}</span>
            )}

            <button
              type="submit"
              disabled={isRegistering}
              className={`w-full px-4 py-2 mt-5  text-white font-medium rounded-md ${
                isRegistering
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-heading-color hover:shadow-xl transition duration-300"
              }`}
            >
              {isRegistering ? "Signing Up..." : "Sign Up"}
            </button>
            <div className="text-sm gap-x-72 flex mx-2 py-3">
              <div>
                <Link
                  to={"/"}
                  className="text-indigo-600 hover:underline font-semibold"
                >
                  Back To Home
                </Link>
              </div>
              <div className="flex gap-x-1">
                Have an account? {"   "}
                <Link
                  to={"/login"}
                  className="text-indigo-600 text-sm  items-center  gap-x-1 flex hover:underline font-semibold"
                >
                  Sign In  <BsArrowRight />
                </Link>
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Register;
