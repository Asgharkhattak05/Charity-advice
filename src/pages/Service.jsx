import React from 'react'
import Footer from '../Footer/Footer'
import moneyadvice from "../images/moneyadvice.jpg"
import ServicesCard from './ServicesCard'
import WelfareBenefits from "../images/welfarebenefits.jpg"
import housing from "../images/housing.jpg"
import communityAdvice from "../images/communityadvice.jpg"
import employement from "../images/employementadvice.jpg"
import charity from "../images/charityrespresn.jpg"

const Service = () => {
  return (
    <>
       <div className="bg-[#eceef6] text-[#004b88] py-5 md:px-28 px-10">
        <h1 className="text-5xl font-bold  py-5">Services</h1>
        <p className="text-2xl pb-14">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          dignissimos minima enim error odit at magni laudantium rem expedita
          eius!
        </p>
      </div>
      
       <div className=''>
              <ServicesCard image={moneyadvice} title="Money Advice" />
            
       </div>
       <hr class="border-2 border-blue-500 cursor-pointer hover:border-red-500 duration-500 mx-20" />
       
       <div className=''>
              <ServicesCard image={housing} title="Housing" />
       </div>
       <hr class="border-2 hover:border-blue-500 cursor-pointer border-red-500 duration-500 mx-20" />

       <div className=''>
              <ServicesCard image={communityAdvice} title="Community Advice" />
       </div>
       <hr class="border-2 hover:border-blue-500 cursor-pointer border-blue-950 duration-500 mx-20" />
      
       <div className=''>
              <ServicesCard image={employement} title="Employment Advice" />
       </div>
       <hr class="border-2 hover:border-gray-400 cursor-pointer border-green-500 duration-500 mx-20" />

       <div className=''>
              <ServicesCard image={charity} title="Charity' Representative" />
       </div>
       <hr class="border-2 hover:border-blue-500 cursor-pointer border-[#B55847] duration-500 mx-20" />

       <div className=''>
              <ServicesCard image={WelfareBenefits} title="Welfare Benefits" />
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

      <Footer/>

    </>
  )
}

export default Service