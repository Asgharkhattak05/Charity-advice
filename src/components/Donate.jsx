import React from "react";
import Footer from "../Footer/Footer";

const Donate = () => {
  return (
    <>
      <div className="bg-[#eceef6] text-[#004b88] py-5 md:px-28 px-10">
        <h1 className="text-5xl font-bold  py-5">Make a Donation</h1>
        <p className="text-2xl pb-14">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget
          dui non ex eleifend ultricies quis varius lacus. Cras viverra nisl
          eget felis tristique laoreet.
        </p>
      </div>

      {/* Donation Plan  */}

      <div className="bg-[#004b88]">
        <div className="grid md:grid-cols-4 grid-cols-2  md:px-24 pb-20">
          <div className="space-y-3 md:pr-7 px-6">
            <h1 className="text-[#fcbb69] pt-16 text-4xl font-bold">$5</h1>
            <h3 className="text-[#fcbb69] text-2xl font-semibold">/Month</h3>
            <p className="text-white text-xl">
              A physical rehabilitation session for someone injured in the line
              of duty ($60 a year).
            </p>
          </div>

          <div className="space-y-3 md:pr-7 px-6">
            <h1 className="text-[#fcbb69] pt-16 text-4xl font-bold">$10</h1>
            <h3 className="text-[#fcbb69] text-2xl font-semibold">/Month</h3>
            <p className="text-white text-xl">
              A rehabilitation session for someone injured in the line of duty
              ($120 a year).
            </p>
          </div>

          <div className="space-y-3 md:pr-7 px-6">
            <h1 className="text-[#fcbb69] pt-16 text-4xl font-bold">$20</h1>
            <h3 className="text-[#fcbb69] text-2xl font-semibold">/Month</h3>
            <p className="text-white text-xl">
              Three counselling sessions for someone struggling with their
              mental health ($240 a year).
            </p>
          </div>

          <div className="space-y-3 md:pr-7 px-6">
            <h1 className="text-[#fcbb69] pt-16 text-4xl font-bold">$25</h1>
            <h3 className="text-[#fcbb69] text-2xl font-semibold">/Month</h3>
            <p className="text-white text-xl">
              5 specialist counseling sessions for someone suffering from PTSD
              after a traumatic event ($300 a year).
            </p>
          </div>
        </div>
      </div>

      {/* MAke a Single Donation  */}

      <div className="py-20 md:px-20 px-5">
        <div className="grid md:grid-cols-2 pb-10">
          <div>
            <h1 className="text-4xl font-bold">Make a Single Donation</h1>
          </div>
          <div>
            <h3 className="text-2xl">
              Make a one-off donation or choose to donate to us regularly.
            </h3>
          </div>
        </div>
        <p className="leading-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          congue odio eu turpis vehicula interdum. Proin semper mollis nulla, et
          mollis turpis molestie vitae. Pellentesque lobortis dui quis metus
          lacinia lacinia. Sed euismod, purus vitae faucibus cursus, enim erat
          blandit felis, vel dictum erat arcu nec purus. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Duis eu sem nisl.
        </p>
        <p className="italic pt-4">
          If you would prefer to make your donation by speaking to a member of
          our fundraising team, please call us at{" "}
          <span className="hover:underline font-bold cursor-pointer">
            555-555-5555
          </span>
        </p>
      </div>
      <hr className="border-2 border-gray-800 cursor-pointer hover:border-gray-400 mx-20 duration-500" />

      <div className="grid md:grid-cols-3 md:px-20 px-2 py-10">
        <div className="md:pr-16">
          <h1 className="bg-[#004b88] text-white text-center text-xl font-bold py-3 ">
            Donate by Text
          </h1>
          <p className="text-lg py-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            congue odio eu turpis vehicula interdum
          </p>
          <ul className="list-disc marker:text-[#004b88] pl-4 text-lg  ">
            <li>‘DONATE’ to 12305 to donate $5</li>
            <li>‘DONATE’ to 12310 to donate $10</li>
            <li>‘DONATE’ to 12320 to donate $20</li>
            <li>‘DONATE’ to 12330 to donate $25</li>
          </ul>
        </div>

        <div className="md:pr-16">
          <h1 className="bg-[#004b88] text-white text-center text-xl font-bold py-3 ">
            Donate by Hand
          </h1>
          <p className="text-lg py-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            congue odio eu turpis vehicula interdum. Proin semper mollis nulla,
            et mollis turpis molestie vitae. Pellentesque lobortis dui quis
            metus lacinia lacinia. Sed euismod, purus vitae faucibus cursus,
            enim erat blandit felis, vel dictum erat arcu nec purus.
          </p>
        </div>

        <div className="md:pr-16">
          <h1 className="bg-[#004b88] text-white text-center text-xl font-bold py-3 ">
            Donate by Bank
          </h1>
          <p className="text-lg py-5">
            You can donate by credit or debit card on our donation line:
            <span className="font-bold cursor-pointer hover:underline">
              555-555-5555
            </span>
          </p>
          <p className="text-lg py-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            congue odio eu turpis vehicula interdum. Proin semper mollis nulla,
            et mollis turpis molestie vitae.
          </p>
        </div>
      </div>


      <Footer/>
    </>
  );
};

export default Donate;
