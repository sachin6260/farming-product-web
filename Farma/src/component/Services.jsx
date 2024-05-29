import React from "react";
   import logo1 from "../assets/client-logo1.png";
import logo2 from "../assets/client-logo2.png";
import logo4 from "../assets/client-logo4.png";
import logo5 from "../assets/client-logo5.png";
import logo6 from "../assets/client-logo6.png";
import logo7 from "../assets/client-logo7.png";
import logo8 from "../assets/client-logo8.png";
 
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import "./Services.css";
import Ronde from "./Ronde";
import Carousel from "./Carousel";
import Newscard from "./Newscard";
import Cards from "./Cards";
import FirstSection from "./FirstSection";

const Services = () => {


  const logos = [logo1, logo2,  logo4, logo5, logo6, logo7, logo8];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000, // Adjust the speed (in milliseconds)
    autoplay: true,
    slidesToShow: 4, // Adjust the number of logos shown at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3, // Adjust the number of logos shown at a time for smaller screens
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2, // Adjust the number of logos shown at a time for mobile screens
        },
      },
    ],
  };

  return (
    <>
    <FirstSection pagename ='Services'></FirstSection>
       
      {/* second part */}
      <Cards></Cards>

 
      {/* rounde section */}
      <Ronde></Ronde>

     {/* Carousel-section */}
     <Carousel></Carousel>
     
      {/* News-Card-Section */}
     <Newscard></Newscard>


     
      {/* client-Logo-Section*/}
<div className="container">
{/* <h2 className="text-center ">our Partner</h2> */}

<div className="logo-carousel-container">
       <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index}>
            <img src={logo} alt={`Logo ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
</div>
 
      </>
  );
};

export default Services;
