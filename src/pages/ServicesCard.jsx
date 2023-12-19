import React from "react";

const ServicesCard = (props) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 my-10 gap-7 md:px-20 px-8">
        <div>
          <img src={props.image} className="h-[80%] mt-3" />
          <h1 className="pt-5 text-2xl font-semibold">{props.title}</h1>
        </div>
        <div>
          <p className="md:leading-8 md:px-10 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            eget dui non ex eleifend ultricies quis varius lacus. Cras viverra
            nisl eget felis tristique laoreet. Aliquam metus tortor, interdum
            eget gravida elementum, commodo nec leo. Nam suscipit malesuada
            odio, vel lacinia dolor commodo eget. Suspendisse mattis porttitor
            leo, a gravida nisl maximus a.Suspendisse mattis porttitor
            leo, a gravida nisl maximus a.
          </p>
        </div>
        <div>
          <p className="md:leading-8 md:px-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            eget dui non ex eleifend ultricies quis varius lacus. Cras viverra
            nisl eget felis tristique laoreet. Aliquam metus tortor, interdum
            eget gravida elementum, commodo nec leo. Nam suscipit malesuada
            odio, vel lacinia dolor commodo eget. Suspendisse mattis porttitor
            leo, a gravida nisl maximus a.Suspendisse mattis porttitor
            leo, a gravida nisl maximus a.
          </p>
        </div>
      </div>
    </>
  );
};

export default ServicesCard;
