import React, { useState } from "react";

const Register = () => {
  //   const [customGender, setCustomGender] = useState("");
  const [selectedGender, setSelectedGender] = useState("");

  return (
    <div className=" bg-gradient-to-br  from-blue-50 to-indigo-100 flex justify-center items-center w-full pt-6 pb-20">
      <form>
        <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-lg">
          <div className="">
            <h1 className=" text-4xl font-bold text-blue-600">Sign Up</h1>
            <p>It’s quick and easy.</p>
            <div className="border border-b mt-2"></div>
            {/* Name  */}
            <div className="flex justify-between gap-4 my-4">
              <div>
                <input
                  placeholder="First name"
                  className="px-4 py-2 border border-gray-300 outline-none rounded-md w-full pr-10"
                />
              </div>
              <div>
                <input
                  placeholder="Last Name"
                  className="px-4 py-2 border border-gray-300 outline-none rounded-md w-full pr-10"
                />
              </div>
            </div>
            {/* email and phone  */}
            <div>
              <input
                type="text"
                placeholder="Email or phone number"
                className=" px-4 py-2 border border-gray-300 outline-none rounded-md w-full"
              />
            </div>
            {/* password  */}
            <div className="my-4">
              <input
                placeholder="New Password"
                className="px-4 py-2 border border-gray-300 outline-none rounded-md w-full pr-10"
              />
            </div>
            {/* Birthday field */}
            <p>Birthday?</p>
            <div className="flex justify-between mb-4 ">
              <input
                type="number"
                placeholder="Day"
                className="px-4 py-2 border border-gray-300 outline-none rounded-md mr-2"
                min="1"
                max="31"
                step="1"
              />
              <select
                className="px-4 py-2 border border-gray-300 outline-none rounded-md mr-2"
                placeholder="Month"
              >
                <option value="">Month</option>
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
              <input
                type="number"
                placeholder="Year"
                className="px-4 py-2 border border-gray-300 outline-none rounded-md"
                min="1900"
                max="2100"
                step="1"
              />
            </div>
            {/* gender */}
            <p>Gender?</p>
            <div className="flex justify-between">
              <div
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  borderRadius: "5px",
                  marginBottom: "10px",
                }}
              >
                <div>
                  <input
                    type="radio"
                    className="mr-4"
                    id="female"
                    name="gender"
                    value="female"
                    checked={selectedGender === "female"}
                    onChange={() => setSelectedGender("female")}
                  />
                  <label htmlFor="female">Female</label>
                </div>
              </div>

              <div
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  borderRadius: "5px",
                  marginBottom: "10px",
                }}
              >
                <div>
                  <input
                    type="radio"
                    className="mr-4"
                    id="male"
                    name="gender"
                    value="male"
                    checked={selectedGender === "male"}
                    onChange={() => setSelectedGender("male")}
                  />
                  <label htmlFor="male">Male</label>
                </div>
              </div>

              <div
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  borderRadius: "5px",
                  marginBottom: "10px",
                }}
              >
                <div>
                  <input
                    type="radio"
                    id="custom"
                    className="mr-4"
                    name="gender"
                    value="custom"
                    checked={selectedGender === "custom"}
                    onChange={() => setSelectedGender("custom")}
                  />
                  <label htmlFor="custom">Custom</label>
                </div>
              </div>
            </div>
            {/* custom field  */}
            {selectedGender === "custom" && (
              <div
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  borderRadius: "5px",
                  marginTop: "10px",
                }}
              >
                <select
                  className="w-full outline-none"
                  placeholder="Select your pronoun"
                >
                  <option value="">Select your pronoun</option>
                  <option value="01">She: "Wish her a Happy Birthday!"</option>
                  <option value="02">He: "Wish him a Happy Birthday!"</option>
                  <option value="03">She: "Wish them a Happy Birthday!"</option>
                </select>
              </div>
            )}

            {/* other */}
          </div>

          <div className="flex justify-center">
            <button className="mt-4  bg-[#42B72a] text-white p-3 px-16 rounded-md text-lg tracking-wide font-semibold">
              Sign Up
            </button>
          </div>
          <p className="text-blue-500 text-center my-3 underline">
            I have already an account?
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
