import React from "react";
import Laptop from "../images/laptop.jpg";
export const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={Laptop} alt="/" className="w-[400px] mx-auto my-4" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS BOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            natus voluptate facere eligendi, velit esse molestias reprehenderit
            cumque, eum aut culpa quae voluptates odit unde deleniti vero dolore
            est rerum.
          </p>
        </div>
      </div>
    </div>
  );
};
