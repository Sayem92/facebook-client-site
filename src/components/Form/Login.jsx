import React, { useState } from "react";
import eyeOpenIcon from "../../image/eye-view-interface.svg";
import eyeClosedIcon from "../../image/eye-password-hide.svg";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <div className=" bg-gradient-to-br  from-blue-50 to-indigo-100 flex justify-center items-center w-full">
        <form>
          <h1 className="mb-4 text-center text-5xl font-bold text-blue-600">
            facebook
          </h1>
          <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
            <div className="space-y-4">
              <h1 className="text-center text-xl font-semibold text-gray-600">
                Log Into Facebook
              </h1>

              <div>
                <input
                  type="text"
                  placeholder="Email or phone number"
                  className=" px-4 py-4 border border-gray-300 outline-none rounded-md w-full"
                />
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="px-4 py-4 border border-gray-300 outline-none rounded-md w-full pr-10"
                />
                <img
                  src={showPassword ? eyeClosedIcon : eyeOpenIcon}
                  alt={showPassword ? "Hide Password" : "Show Password"}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer w-6 h-6"
                  onClick={togglePasswordVisibility}
                />
              </div>
              <p className="text-blue-500 text-center">Forgot account?</p>
            </div>
            <button className="mt-4 w-full bg-blue-600  text-white py-3 rounded-md text-lg tracking-wide font-semibold">
              Log In
            </button>
            <div className="text-center divider py-4">OR</div>
            <div className="flex justify-center">
              <button className="mt-4  bg-[#42B72a] text-white p-3 rounded-md text-lg tracking-wide font-semibold">
                Create new account
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
