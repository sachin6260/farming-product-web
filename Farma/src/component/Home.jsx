import React from "react";
import icon1 from "../assets/service-icon1.png";
import icon2 from "../assets/service-icon2.png";
import icon3 from "../assets/service-icon3.png";
import icon4 from "../assets/service-icon4.png";
import icon5 from "../assets/service-icon5.png";
import icon6 from "../assets/service-icon6.png";
import plant from "../assets/plant-img.png";
 import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import leaf2 from "../assets/leaf-img2.png";
import "./Home.css";
import Ronde from "./Ronde";
import Carousel from "./Carousel";
import Newscard from "./Newscard";
import Vdoimg from "./Vdoimg";
import Addcard from "./Addcard";
import Imagesection from "./Imagesection";
import ClientLogos from "./ClientLogos";
import FirstSection from "./FirstSection";

const Home = ( ) => {

  

  

  
  const cards = [
    { id: 1, title: "Plants Stands & trys", imageUrl: `${icon1}` },
    { id: 2, title: "Seed Starting Supplies", imageUrl: `${icon2}` },
    { id: 3, title: "Professional Trees Services", imageUrl: `${icon3}` },
    { id: 4, title: "Lawn Maintence", imageUrl: `${icon4}` },
    { id: 5, title: "Watering & Irrigation", imageUrl: `${icon5}` },
    { id: 6, title: "Yard & Garden Decor", imageUrl: `${icon6}` },
    // Add more cards as needed
  ];

  // Slick settings for responsive slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 5,
    slidesToScroll: 1,
     responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true, // Enable center mode
          centerPadding: '50px',
           
         },
      },
    ],
  };
  return (
    <>
      <FirstSection pagename = 'Home'></FirstSection>
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
              <div className="Home-card text-center">
                <img src={card.imageUrl} alt={card.title} />
                <div className="Home-card-content">
                  <h3 className="text-center">{card.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <div className="Home-plant-img">
          <img src={plant} alt="" />
        </div>
      </div>

      {/* Home-ROUNDE-SECTION */}
      <Ronde></Ronde>

       {/* vdo-section */}
       <Vdoimg></Vdoimg>

       <Addcard></Addcard>
       
 
      {/* image-section */}
      <Imagesection></Imagesection>
       {/* Ḥome-slider */}
      <Carousel></Carousel>
 
            {/* News-Card-Section */}
            <Newscard></Newscard>

            

      {/* client-Logo-Section*/}
      <ClientLogos></ClientLogos>
     


 

      
    </>
  );
};

export default Home;
