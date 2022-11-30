import React from "react";
import Single from "../images/single.png";
import Double from "../images/double.png";
import Triple from "../images/triple.png";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className=" max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="bg-[#f7f6f6]  flex flex-col w-full shadow-xl p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            src={Single}
            alt="/"
            className="w-20 mx-auto mt-[-3rem] bg-white "
          />
          <h2 className="text-2xl font-bold text-center py-4">Single</h2>
          <p className="text-center text-3xl font-bold">$45</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Upto 2 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trial
          </button>
        </div>
        <div className="bg-[#f7f6f6]  flex flex-col w-full shadow-xl p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            src={Double}
            alt="/"
            className="w-20 mx-auto mt-[-3rem] bg-white "
          />
          <h2 className="text-2xl font-bold text-center py-4">Double</h2>
          <p className="text-center text-3xl font-bold">$70</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8">1 TBB Storage</p>
            <p className="py-2 border-b mx-8">2 Granted User</p>
            <p className="py-2 border-b mx-8">Upto 5 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trial
          </button>
        </div>
        <div className="bg-[#f7f6f6]  flex flex-col w-full shadow-xl p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            src={Triple}
            alt="/"
            className="w-20 mx-auto mt-[-3rem] bg-white "
          />
          <h2 className="text-2xl font-bold text-center py-4">Multiple</h2>
          <p className="text-center text-3xl font-bold">$99</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8">5 TBB Storage</p>
            <p className="py-2 border-b mx-8">10 Granted User</p>
            <p className="py-2 border-b mx-8">Upto 10 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
