import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="flex flex-col justify-center w-full h-screen max-w-[800px] mt-[-96px] mx-auto text-center">
        <p className="text-[#00df9a] font-bold">GROWING WITH DATA ANALYTICS</p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl py-4 font-bold">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center">
          <p className="font-bold text-l sm:text-3xl md:text-4xl md:pl-4">
            Fast, flexible financing for <span></span>
          </p>
          <Typed
            className="font-bold text-l sm:text-3xl md:text-4xl pl-2"
            strings={["BTC.", "SASS.", "BTB."]}
            typeSpeed={100}
            backSpeed={150}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500 py-2">
          Monitor data analytics to increase revenue on all platforms.
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto my-6 py-3 text-slate-800">
          GET STARTED
        </button>
      </div>
    </div>
  );
};

export default Hero;
