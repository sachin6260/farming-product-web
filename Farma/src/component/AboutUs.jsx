import React from "react";
 import team1 from "../assets/team-img1.jpg";
import team2 from "../assets/team-img2.jpg";
import team3 from "../assets/team-img3.jpg";
import team4 from "../assets/team-img4.jpg";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import plant from "../assets/plant-img.png";
import logo1 from "../assets/client-logo1.png";
import logo2 from "../assets/client-logo2.png";
import logo4 from "../assets/client-logo4.png";
import logo5 from "../assets/client-logo5.png";
import logo6 from "../assets/client-logo6.png";
import logo7 from "../assets/client-logo7.png";
import logo8 from "../assets/client-logo8.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./AboutUs.css";
import Newscard from "./Newscard";
import Vdoimg from "./Vdoimg";
import ExpSection from "./ExpSection";
import ClientExp from "./ClientExp";
import Ronde from "./Ronde";
import FirstSection from "./FirstSection";

const AboutUs = () => {
  const logos = [logo1, logo2, logo4, logo5, logo6, logo7, logo8];

  const settingss = {
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

  const cards = [
    {
      id: 1,
      title: "Victoria Hyde",
      content: "Senior Farmer",
      imageUrl: `${team1}`,
    },
    {
      id: 2,
      title: "Luic claton",
      content: "Senior Farmer",
      imageUrl: `${team2}`,
    },
    {
      id: 3,
      title: "Emily Greenwood",
      content: "Senior Farmer",
      imageUrl: `${team3}`,
    },
    {
      id: 4,
      title: "joshua Bevan",
      content: "Senior Farmer",
      imageUrl: `${team4}`,
    },
  ];

  // Slick settings for responsive slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
    <FirstSection pagename ='About Us'></FirstSection>
 
      {/* Exp-section */}
      <ExpSection></ExpSection>

      {/* rounde section */}
      <Ronde></Ronde>

      {/* vdo-section */}
      <Vdoimg></Vdoimg>

      {/* Home-second-part */}
      <div className="container Home-second-part">
        <div className="Home-textera">
          <h3 className="text-center">Services of VardhmanChemicals</h3>
          <h2 className="text-center">Exlpore Our Best Offer For Gardening</h2>
        </div>

        {/* slider-part */}
        <Slider {...settings}>
          {cards.map((card) => (
            <div key={card.id}>
              <div className="product-item text-center">
                <div className="team-box-image">
                  <img src={card.imageUrl} alt="" />

                  <div className="cart-btns">
                    <a href="">
                      <i className="icon" href="#">
                        <TiSocialFacebookCircular />
                      </i>
                      <i className="icon" href="#">
                        <TiSocialTwitterCircular />
                      </i>
                      <i className="icon" href="#">
                        <TiSocialLinkedinCircular />
                      </i>
                    </a>
                  </div>
                </div>

                <div className="product-detail">
                  <h3>{card.title}</h3>
                  <div className="product-price">
                    <span>{card.content}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <div className="Home-plant-img">
          <img src={plant} alt="" />
        </div>
      </div>

      {/* client-experience-section  */}
      <ClientExp></ClientExp>

      {/* News-Card-Section */}
      <Newscard></Newscard>

      {/* client-Logo-Section*/}
      <div className="container">
        {/* <h2 className="text-center ">our Partner</h2> */}

        <div className="logo-carousel-container">
          <Slider {...settingss}>
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

export default AboutUs;
