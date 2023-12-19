import React from "react";

const CarouselCard = (props) => {
  return (
    <div className="bg-[#eaedf5] text-center mx-auto " >
      <h1 className="font-bold text-2xl text-[#004b88] py-6" >{props.title}</h1>
      <img src={props.image} className="w-[50%] md:w-[70%] mx-auto" />
      <h2 className="py-5 px-10">{props.desc}</h2>
      <p className="font-bold pb-4" >{props.names}</p>
    </div>
  );
};

export default CarouselCard;
