import React from "react";

const Auth = () => {
  return (
    <div className=" flex items-center justify-center h-screen">
      <div className="bg-blue-950 text-white  shadow-3xl rounded-3xl flex flex-row-reverse w-3/4 max-w-4xl mb-60">
        {/* Left Side Image */}
        <div className="w-1/2 h-[30rem] ">
          <img
            src="https://img.freepik.com/free-vector/gradient-connection-background_52683-118592.jpg"
            alt="Login"
            className="h-full w-full object-cover rounded-r-2xl"
          />
        </div>
        {/* Right Side Form */}
        <div className="w-1/2 p-10 flex flex-col gap-5">
          <h2 className="text-3xl text-center font-bold  mb-4 tracking-wide">
            Login
          </h2>
          <form className="text-white flex flex-col gap-2">
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1 ">
                Email/Username
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 text-black focus:ring-blue-600"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-1  ">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2  text-black  focus:ring-blue-600"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
