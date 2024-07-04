import React from "react";
import { Alert } from "flowbite-react";

const ForgetPassword = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full md:max-w-xl custom-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-3" action="#">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white text-center">
              Confirm Email
            </h5>
            <div className="text-center">
              <p className="font-medium text-red-600">01:00</p>
            </div>
            <Alert color="success">
              We have sent the verification code to your email. Please check
              your email.
            </Alert>
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

            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Send Code
            </button>
            <div className="flex text-center justify-center text-sm">
              <span>Didn't receive it?</span>
              <p className="font ml-1 text-red-600">Resend Code</p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
