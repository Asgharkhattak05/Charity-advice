import React from "react";

const AccreditationsTopCard = (props) => {
  return (
    <>
      <div className="text-white font-semibold text-center md:py-28">
        <h1 className="font-extrabold md:text-3xl text-2xl">{props.percentage}</h1>
        <h2>{props.title}</h2>
      </div>
    </>
  );
};

export default AccreditationsTopCard;
