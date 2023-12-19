import React from "react";
import abouthero from "../images/abouthero.jpg";
import Footer from "../Footer/Footer";

const Aboutus = () => {
  return (
    <>
      <div className="bg-[#eceef6] text-[#004b88] py-5 md:px-28 px-10">
        <h1 className="text-5xl font-bold  py-5">About Us</h1>
        <p className="text-2xl pb-14">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          dignissimos minima enim error odit at magni laudantium rem expedita
          eius!
        </p>
      </div>

      <div className="hero_section">
        <div className="img-div text-center my-10">
          <img
            src={abouthero}
            alt=""
            className="w-[90%] inline-block vertical-align-middle"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 px-14 ">
        <div className="pb-10 md:pr-20">
          <h1 className="text-2xl">Our Mission is to:</h1>
          <ul className="list-disc pl-5 pt-5 space-y-3  marker:text-[#fcbb69]">
            <li>
              Provide a service that is independent, impartial, confidential,
              and free at the point of delivery
            </li>
            <li>Provide the advice people need for the problems they face</li>
            <li>
              Improve the policies and practices that affect people’s lives
            </li>
          </ul>
        </div>
        <div className="pb-10 md:pr-20">
          <h1 className="text-2xl">Our Vision is to:</h1>
          <p className="py-5">
            Provide access to the highest quality advice and support services
            that people need, via the channel they choose, regardless of where
            they live.
          </p>
          <p>
            We value diversity, promote{" "}
            <span className="text-lg font-bold">equality</span>, and{" "}
            <span className="text-lg font-bold">challenge discrimination</span>.
          </p>
        </div>
      </div>

      <div className="support_our_community mx-14 bg-[#004b88] text-white text-center py-10">
        <h1 className="text-3xl pb-5 font-bold">Supporting Our Community</h1>
        <p className="md:px-14 px-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget
          dui non ex eleifend ultricies quis varius lacus. Cras viverra nisl
          eget felis tristique laoreet. Aliquam metus tortor, interdum eget
          gravida elementum, commodo nec leo.
        </p>
      </div>

      <div className="py-12">
        <div className="grid justify-center text-3xl font-bold pb-5">
          <h1>Our Strategy</h1>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 px-10">
          <div className="px-8">
            <h1 className="text-xl text-[#004b88] pb-3">
              1.Improve patient experience and help to deliver truly
              patient-centered care
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a
              volutpat metus. Nullam vitae consequat augue. Nulla pulvinar
              sapien at eros hendrerit, sit amet pellentesque mi tincidunt.
              Vestibulum at tristique massa, in ultricies neque.
            </p>
          </div>
          <div className="px-8">
            <h1 className="text-xl text-[#004b88] pb-3">
              2. Develop the careers and enhance the wellbeing of Trust staff
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a
              volutpat metus. Nullam vitae consequat augue. Nulla pulvinar
              sapien at eros hendrerit, sit amet pellentesque mi tincidunt.
              Vestibulum at tristique massa, in ultricies neque.
            </p>
          </div>
          <div className="px-8">
            <h1 className="text-xl text-[#004b88] pb-3">
              3. Enable innovation in health and care within the Trust and the
              wider health system
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a
              volutpat metus. Nullam vitae consequat augue. Nulla pulvinar
              sapien at eros hendrerit, sit amet pellentesque mi tincidunt.
              Vestibulum at tristique massa, in ultricies neque.
            </p>
          </div>
        </div>
      </div>
      
      <div className=" grid md:grid-cols-2 grid-cols-1 bg-[#004b88] py-10">
        <div className=" text-center sm:text-left text-white md:pl-32">
          <h1 className="text-2xl font-bold pb-2">Make a Donation</h1>
          <p>Support our community by donating today. Help us be there for them in their time of need.</p>
        </div>
        <div className="text-center pt-8" >
          <button className="border-2 border-[#fcbb69] py-1.5 md:px-24 px-10 rounded-md text-[#fcbb69] font-semibold text-2xl"><a href="/donate">Donate Now</a></button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Aboutus;
