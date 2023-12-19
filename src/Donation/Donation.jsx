import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilterCircleDollar, faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons'


const Donation = () => {
  return (
    <>
      <div className="m-auto mt-14 grid container sm:grid-cols-1 md:grid-cols-2 gap-8">
        <div className=" md:ml-[8.5%] ml-5 w-[87.8%] text-center pt-10 py-10 bg-[#004b88]">
          <span className="text-6xl">
          <FontAwesomeIcon icon={faHandHoldingDollar} beatFade />
          </span>
          <h1 className="text-white py-2 text-xl font-bold">Make a Donation</h1>
          <p className="text-white px-20 pb-4">
            Support our community by donating today. Help us be there for them
            in their time of need.
          </p>
          <button className=" border-2 py-2 md:px-20 px-10 border-[#fcbb69] text-[#fcbb69] text-xl font-bold"><a href="/donate">Donate Now</a></button>
        </div>
        
        <div className=" md:ml-[-2%] ml-5 w-[87.8%] text-center py-10  bg-[#004b88]">
          <span className="text-6xl">
          <FontAwesomeIcon icon={faFilterCircleDollar} beatFade />
          </span>
          <h1 className="text-white py-2 text-xl font-bold">Get Involved</h1>
          <p className="text-white px-20 pb-4">
          Help us continue providing our vital services through volunteering or fundraising.
          </p>
          <button className=" border-2  border-[#fcbb69] text-[#fcbb69]  py-2 px-6 text-xl font-bold sm:mb-0 mb-2">Fundraising</button>
          <button className="  border-2  border-[#fcbb69] text-[#fcbb69]  py-2 px-6 ml-3 text-xl font-bold">Volunteering</button>
        </div>
      </div>
    </>
  );
};

export default Donation;
