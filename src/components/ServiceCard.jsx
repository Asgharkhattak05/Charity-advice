import React from 'react';


const ServiceCard = (props) => {
  console.log('bgColor:', props.bgColor);
  return (
    <div style={{ backgroundColor: props.bgColor }} className='relative mx-5 my-5'>
      <div className='text-justify px-10 text-white py-4 mx-5 my-5 relative z-10'>
        <h1 className='text-xl font-bold pb-3'>{props.title}</h1>
        <h4 className='font-semibold'>{props.detail}</h4>
        <p className='pt-4 font-bold cursor-pointer'>
          <a href="">Read More</a>
        </p>
      </div>
      <img src={props.bgImage} className='absolute top-0 right-0 w-full h-full object-cover z-0' alt='Service Image' />
    </div>
  );
};

export default ServiceCard;


