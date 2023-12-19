import React from "react";
import ServiceCard from "../components/ServiceCard";
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.png";
import image5 from "../images/image5.png";
import image6 from "../images/image6.png";
import img1 from "../images/01.svg";
import img2 from "../images/02.svg";
import img3 from "../images/03.svg";
import img4 from "../images/04.svg";
import img5 from "../images/05.svg";
import img6 from "../images/06.svg";
import img7 from "../images/07.svg";
import img8 from "../images/08.svg";
import img9 from "../images/09.svg";
import img10 from "../images/10.svg";
import img11 from "../images/11.svg";
import img12 from "../images/12.svg";
import AccreditationsTopCard from "../components/AccreditationsTopCard";
import OurAccreditations from "../components/OurAccreditations";
import NewsUpdate from "../NewsUpdate/NewsUpdate";
import Donation from "../Donation/Donation";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    //   -------------- Hero---Main--Section----------------
    <>
    
      <div className="bg-[#eaedf5] h-fit " id="hero-main-section">
        <div className="container grid md:grid-cols-2 pb-5 mx-auto px-4 sm:px-4 lg:px-6">
          <div className="md:pl-20 md:pt-24">
            <h3 className="text-[#004b88]  text-2xl py-2">More than</h3>
            <h1 className="text-6xl">
              A half  century of <br></br> grant-giving
            </h1>
            <p className="leading-6 my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="bg-[#004b88] px-8 py-3 ml-10 md:ml-24 rounded-md text-white font-bold">
              <span className="mr-2 text-sm">
                <ion-icon name="call-outline"></ion-icon>
              </span>
              555-555-5555
            </button>
          </div>
          <div className="justify-items-center pt-12 ">
            <img
              src="https://static.edit.site/static/581/photo-024.png"
              className="md:w-[90%] mx-auto w-[70%] "
            />
          </div>
        </div>
      </div>

      {/* ---------------Help Section-------------- */}
     
      <div className="help-section bg-[#004b88] py-5">
        <div className="text-white font-bold text-center pb-5 text-2xl">
          <h1>We're Here to Help</h1>
        </div>
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ">
          <div className="mx-auto text-center">
            <div className=" ml-5 mb-2 bg-[#fcbb69] rounded-full w-20 h-20 flex items-center justify-center">
              <i className="text-blue-500 material-icons text-5xl">
                <ion-icon name="checkmark-done-circle-outline"></ion-icon>
              </i>
            </div>
            <div className="text-center text-[#fcbb69] font-semibold pb-8">
              <h2>We are a Charity</h2>
            </div>
          </div>

          <div className="mx-auto grid grid-cols-1  items-center justify-center pb-2">
            <div className="ml-5 mb-2 bg-[#fcbb69] rounded-full w-20 h-20 flex items-center justify-center">
              <i className="text-blue-500 material-icons text-5xl ">
                <ion-icon name="bookmarks-outline"></ion-icon>
              </i>
            </div>
            <div className="text-center text-[#fcbb69]  font-semibold  pb-8">
              <h2>Fully Accredited</h2>
            </div>
          </div>

          <div className="mx-auto grid grid-cols-1 items-center justify-center pb-2 ">
            <div className="ml-10 mb-2 bg-[#fcbb69] rounded-full w-20 h-20 flex items-center justify-center">
              <i className="text-blue-500 material-icons text-5xl ">
                <ion-icon name="man-outline"></ion-icon>
              </i>
            </div>
            <div className="text-center text-[#fcbb69]  font-semibold  pb-8">
              <h2>Experienced Advisors</h2>
            </div>
          </div>

          <div className="mx-auto grid grid-cols-1 items-center justify-center pb-2 ">
            <div className="ml-7 mb-2 bg-[#fcbb69] rounded-full w-20 h-20 flex items-center justify-center">
              <i className="text-blue-500 material-icons text-5xl ">
                <ion-icon name="construct-outline"></ion-icon>
              </i>
            </div>
            <div className="text-center text-[#fcbb69]  font-semibold  pb-8">
              <h2>Free & Confidential</h2>
            </div>
          </div>
        </div>
        <div className="text-white md:text-center  px-10 text-justify">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            eget dui non ex eleifend ultricies quis varius lacus. Cras viverra
            nisl eget felis tristique laoreet. Aliquam metus tortor, interdum
            eget gravida elementum, commodo nec leo.
          </p>
        </div>
      </div>

      {/*------------ Services section--------------------*/}

      <div className="main-service-section px-6 md:px-10 py-8  text-justify ">
        <div className="text-center">
          <h1 className="text-2xl pb-3 font-extrabold">Our Services</h1>
          <p>
            If life is difficult and you're not sure who to ask, we can probably
            help. We can provide advice about housing, employment, welfare
            benefits, debt, family issues, and much more.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-3 ">
        <ServiceCard
          bgImage={image1}
          bgColor="#004b88"
          title="Money Advice"
          detail="If life is difficult and you're not sure who to ask, we can probably
            help. We can provide advice about housing, employment, welfare
            benefits, debt, family issues, and much more."
        />
        <ServiceCard
          bgImage={image2}
          bgColor="#4c4754"
          title="Welfare Benefits"
          detail="If life is difficult and you're not sure who to ask, we can probably
            help. We can provide advice about housing, employment, welfare
            benefits, debt, family issues, and much more."
        />
        <ServiceCard
          bgImage={image1}
          bgColor="#004b88"
          title="Housing"
          detail="If life is difficult and you're not sure who to ask, we can probably
            help. We can provide advice about housing, employment, welfare
            benefits, debt, family issues, and much more."
        />
        <ServiceCard
          bgImage={image2}
          bgColor="#b8c2db"
          title="Community Advice"
          detail="If life is difficult and you're not sure who to ask, we can probably
            help. We can provide advice about housing, employment, welfare
            benefits, debt, family issues, and much more."
        />
        <ServiceCard
          bgImage={image1}
          bgColor="#465884"
          title="Employment Advice"
          detail="If life is difficult and you're not sure who to ask, we can probably
            help. We can provide advice about housing, employment, welfare
            benefits, debt, family issues, and much more."
        />
        <ServiceCard
          bgImage={image2}
          bgColor="#0c280a"
          title="Charity Representative"
          detail="If life is difficult and you're not sure who to ask, we can probably
        help. We can provide advice about housing, employment, welfare
        benefits, debt, family issues, and much more."
        />
      </div>
      <div className="text-center pt-5">
        <button className="bg-[#004b88] py-3 px-6 rounded-md text-white font-bold">
          <a href="">See More Services</a>
        </button>
      </div>

      <div className="Accreditations pt-24">
        <div className="top-image bg-backImage bg-cover grid grid-cols-2 md:grid-cols-6 bg-center ">
          <AccreditationsTopCard percentage="14%" title="Community & Arts" />
          <AccreditationsTopCard percentage="16%" title="Disabled" />
          <AccreditationsTopCard percentage="04%" title="Hospices" />
          <AccreditationsTopCard percentage="13%" title="Sports & Holidays" />
          <AccreditationsTopCard percentage="09%" title="Disadvantaged" />
          <AccreditationsTopCard percentage="10%" title="Educational" />
        </div>
        <div className="bg-[#eaedf5] pl-6 grid grid-cols-2 md:grid-cols-4 py-10 md:px-60">
          <OurAccreditations image={img1} />
          <OurAccreditations image={img2} />
          <OurAccreditations image={img3} />
          <OurAccreditations image={img4} />
          <OurAccreditations image={img5} />
          <OurAccreditations image={img6} />
          <OurAccreditations image={img7} />
          <OurAccreditations image={img8} />
          <OurAccreditations image={img9} />
          <OurAccreditations image={img10} />
          <OurAccreditations image={img11} />
          <OurAccreditations image={img12} />
        </div>
      </div>

      <div className="">
        <NewsUpdate />
      </div>

      {/*------------- Donation-------------  */}
      <div className="Donation my-10">
        <Donation />
      </div>

      <Footer />
    </>
  );
};

export default Home;
