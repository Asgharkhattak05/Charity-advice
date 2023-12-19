import React from "react";
import logo from "../images/logo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-8/12 w-full border p-4">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-6/12 w-full flex items-center justify-center md:justify-start md:pl-4 md:pr-8">
              <img src={logo} alt="" className="w-12 md:w-20 lg:w-20 xl:w-24" />
              <span className="text-xl md:text-2xl lg:text-3xl pl-2 md:pl-4 font-bold">Charity Advice</span>
            </div>
            <div className="md:w-6/12 w-full mt-4 md:mt-0">
              <h1 className="pb-3 text-lg md:text-xl lg:text-2xl font-bold text-[#004b88]">
                Sign Up to Our Newsletter
              </h1>
              <div className="flex items-center">
                <input
                  className="shadow appearance-none border rounded w-full md:w-[60%] lg:w-[50%] xl:w-[40%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Email"
                />
                <button className="bg-[#9a1d4e] hover:bg-[#721b3c] ml-3 text-white font-bold py-2 px-6 rounded">
                  Sign up
                </button>
              </div>
            </div>
          </div>
          <h3 className="mt-4 md:mt-8 md:pl-4 md:pr-8 text-sm md:text-base lg:text-lg">
            We will occasionally send you updates on our work and campaigns. We will not share your details. View our privacy statement.
          </h3>
          <p className="pt-2 md:pt-4 md:pl-4 md:pr-8 text-sm md:text-base lg:text-lg">Copyright © All rights reserved.</p>
        </div>
        <div className="md:w-4/12 w-full border space-y-4 p-4 mt-4 md:mt-0">
          <div className="icons flex space-x-4 md:space-x-10 text-3xl">
            <FontAwesomeIcon icon={faFacebook} className="hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer" />
            <FontAwesomeIcon icon={faTwitter} className="hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer" />
            <FontAwesomeIcon icon={faInstagram} className="hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer" />
            <FontAwesomeIcon icon={faLinkedin} className="hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer" />
          </div>
          <h2 className="text-sm md:text-base lg:text-lg">Opening Hours: 9 am - 4 pm, Mon - Fri</h2>
          <h2 className="text-sm md:text-base lg:text-lg">Call: <span className="font-bold">555-555-5555</span></h2>
          <h2 className="text-sm md:text-base lg:text-lg">Email: <span className="font-bold">info@mydomain.com</span></h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
