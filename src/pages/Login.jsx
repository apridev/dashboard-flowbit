import React from "react";
import { useNavigate } from "react-router-dom";
import { HiEyeOff } from "react-icons/hi";

const Login = () => {
  const navigate = useNavigate();

  const handleEys = () => {
    console.log("Success");
  };
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full md:max-w-xl custom-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-4" action="#">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white text-center">
              Login
            </h5>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="example@gmail.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="email-address-icon"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="••••••••"
                />
                <div
                  onClick={() => handleEys()}
                  className="absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events"
                >
                  <HiEyeOff />
                </div>
              </div>
            </div>
            <div className="text-right">
              <a
                onClick={() => navigate('/forget-password')}
                className="ms-auto cursor-default text-sm text-blue-700 dark:text-blue-500"
              >
                Forget Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </button>
            <div className="text-sm text-gray-500 dark:text-gray-300 text-center">
              Not registered?{" "}
              <a
                onClick={() => navigate("/register")}
                className="cursor-default text-blue-700 dark:text-blue-500"
              >
                Create account
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
