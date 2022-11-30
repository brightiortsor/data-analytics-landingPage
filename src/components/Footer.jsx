import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
  FaWhatsappSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">BRIGHT.</h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
          voluptatem iste perferendis cupiditate ipsum eum est numquam adipisci
          necessitatibus vel.
        </p>
        <div className="flex justify-between my-6 md:w-[75%]">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaWhatsappSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h5 className="font-medium text-gray-500">Solutions</h5>
          <ul>
            <li className="py-2 text-sm cursor-pointer">Analytics</li>
            <li className="py-2 text-sm cursor-pointer">Marketing</li>
            <li className="py-2 text-sm cursor-pointer">Commerce</li>
            <li className="py-2 text-sm cursor-pointer">Insights</li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium text-gray-500">Support</h5>
          <ul>
            <li className="py-2 text-sm cursor-pointer">Pricing</li>
            <li className="py-2 text-sm cursor-pointer">Documentation</li>
            <li className="py-2 text-sm cursor-pointer">Guides</li>
            <li className="py-2 text-sm cursor-pointer">APIs</li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium text-gray-500">Company</h5>
          <ul>
            <li className="py-2 text-sm cursor-pointer">About</li>
            <li className="py-2 text-sm cursor-pointer">Blog</li>
            <li className="py-2 text-sm cursor-pointer">Career</li>
            <li className="py-2 text-sm cursor-pointer">Services</li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium text-gray-500">Legal</h5>
          <ul>
            <li className="py-2 text-sm cursor-pointer">Claims</li>
            <li className="py-2 text-sm cursor-pointer">Policy</li>
            <li className="py-2 text-sm cursor-pointer">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
