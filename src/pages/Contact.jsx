import React from "react";
import { useFormik } from "formik";
import Form from "../components/Form";
import Footer from "../Footer/Footer";

const Contact = () => {
  const fromik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  return (
    <>
      <div className="bg-[#eceef6] text-[#004b88] py-5  md:px-28 px-10">
        <h1 className="text-5xl font-bold  py-5">Contact</h1>
        <p className="text-2xl pb-14 md:pr-56">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          dignissimos minima enim error odit at magni laudantium rem expedita
          eius!
        </p>
      </div>

      <div className="bg-[#004b88] w-[100%]  md:w-[60%] grid md:grid-cols-3 absolute md:top-72  md:left-28">
        <div className="py-8 px-8">
          <h1 className="text-[#fcbb69] py-3  text-2xl font-bold">Office</h1>
          <div className="text-xl text-white  ">
            <p>1234 Street, New York,</p>
            <h2>NY 10002</h2>
          </div>
        </div>
        <div className="py-8 px-8">
          <h1 className="text-[#fcbb69] py-3  text-2xl font-bold">Contact</h1>
          <div className="text-xl text-white  ">
            <p className="hover:underline cursor-pointer">555-555-5555</p>
            <h2 className="underline hover:no-underline cursor-pointer">
              info@mydomain.com
            </h2>
          </div>
        </div>
        <div className="py-8 px-8">
          <h1 className="text-[#fcbb69] py-3  text-2xl font-bold">
            Opening Hours
          </h1>
          <div className="text-xl text-white  ">
            <p>Mon - Fri</p>
            <h2>9am - 4pm</h2>
          </div>
        </div>
      </div>

      {/* -------------Form ------------  */}

      <div className="mt-[175%] md:mt-0 md:pt-56 md:pb-20">
        <Form />
      </div>

      {/* ----------Footer -------- */}

      <Footer />
    </>
  );
};

export default Contact;
