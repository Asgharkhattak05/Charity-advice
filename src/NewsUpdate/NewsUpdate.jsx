import React from "react";
import Caresoul from "./Caresoul";

const NewsUpdate = () => {
  return (
    <>
      
      <div className="text-center text-3xl font-extrabold py-10 ">
        <h1>News & Updates</h1>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 px-4 md:px-8 lg:px-16">
        <div  className="md:pr-10">
         <Caresoul />
        </div>

        <div className="mx-auto mt-8 lg:mt-0">
          <div className="space-y-4">
            <h1 className="text-xl lg:text-2xl font-bold">
              High School Diploma Program
            </h1>
            <h3 className="text-purple-200">14.01.2022</h3>
            <p className="text-base md:text-xl lg:pr-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              eget dui non ex eleifend ultricies quis varius lacus. Cras viverra
              nisl eget felis tristique laoreet.
            </p>
          </div>
          <div className="space-y-4 pt-6 md:pt-10">
            <h1 className="text-xl lg:text-2xl font-bold">
              New Partnership with Partner School
            </h1>
            <h3 className="text-purple-200">14.01.2022</h3>
            <p className="text-base md:text-xl lg:pr-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              eget dui non ex eleifend ultricies quis varius lacus.
            </p>
          </div>
          <div className="space-y-4 pt-6 md:pt-10">
            <h1 className="text-xl lg:text-2xl font-bold">Scholars 2021-22</h1>
            <h3 className="text-purple-200">14.01.2022</h3>
            <p className="text-base md:text-xl lg:pr-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              eget dui non ex eleifend ultricies quis varius lacus.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsUpdate;
