import React from 'react'
import bgs from "../assets/tastimonials-bg-image.jpg";
import hero1 from "../assets/miss-annabel-img.jpg";
import hero2 from "../assets/nicholasboyer-img.jpg";
 import quats from "../assets/quate-icon.png";
 import "./Carousel.css";




const Carousel = () => {
  return (
    <>
           {/* carousal  section*/}
           <section
        className="carousal-section "
        style={{
          backgroundImage: `url(${bgs} )`,
          width: "100vw",
          height: "840px",
          paddingTop: "160px",
        }}
      >
        <div className="container">
          <div className="text-section">
            <h3 className="text-center"> Clients Testimonials</h3>
            <h2 className="text-center"> What People Say About us</h2>
          </div>

          {/* sliders */}

          <div id="carouselExampleFade" class="carousel slide  ">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div className="row">
                  <div className="col-12 col-sm-4 col-md-3 col-lg-2  heros1">
                     <img src={hero1} alt=""/>   
                     <div class="border-circle"></div>                                 
                  </div>
                  <div className="col-12 col-sm-8  col-md-9 col-lg-4 quats-section">
                    <img src={quats} alt="" />
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Velit deleniti cupiditate adipisci, quae error hic Velit
                      deleniti.
                    </p>
                    <span>miss annabel Farell</span>
                    <br />
                    <small>CEO-company</small>
                  </div>
                  <div className="col-12 col-sm-4 col-md-3 col-lg-2 d-none d-lg-block heros2">
                     <img src={hero2} alt="" />
                  </div>
                  <div className="col-12 col-sm-8 col-md-9 col-lg-4 d-none d-lg-block quats-section">
                    <img src={quats} alt="" />
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Velit deleniti cupiditate adipisci, quae error hic Velit
                      deleniti.
                    </p>
                    <span>nicholas boyer</span>
                    <br />
                    <small>ceo-company</small>
                  </div>
                </div>
              </div>

              <div class="carousel-item">
                <div className="row">
                  <div className="col-12 col-sm-4 col-md-3 col-lg-2 heros1">
                     <img src={hero1} alt=""  />
                  </div>
                  <div className="col-12 col-sm-8 col-md-9 col-lg-4  quats-section">
                    <img src={quats} alt="" />
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Velit deleniti cupiditate adipisci, quae error hic Velit
                      deleniti.
                    </p>
                    <span>miss annabel Farell</span>
                    <br />
                    <small>CEO-company</small>
                  </div>
                  <div className="col-12 col-sm-4 col-md-3 col-lg-2 d-none d-lg-block heros2">
                     <img src={hero2} alt=""/>
                  </div>
                  <div className="col-12 col-sm-8 col-lg-4 col-md-9 d-none d-lg-block quats-section">
                    <img src={quats} alt="" />
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Velit deleniti cupiditate adipisci, quae error hic Velit
                      deleniti.
                    </p>
                    <span>nicholas boyer</span>
                    <br />
                    <small>ceo-company</small>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className="row">
                  <div className="col-12 col-sm-4 col-md-3 col-lg-2 heros1">
                     <img src={hero1} alt=""/>
                  </div>
                  <div className="col-12 col-sm-8 col-md-9 col-lg-4 quats-section">
                    <img src={quats} alt="" />
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Velit deleniti cupiditate adipisci, quae error hic Velit
                      deleniti.
                    </p>
                    <span>miss annabel Farell</span>
                    <br />
                    <small>CEO-company</small>
                  </div>
                  <div className="col-12 col-sm-4 col-md-3 col-lg-2 d-none d-lg-block heros2">
                     <img src={hero2} alt="" />
                  </div>
                  <div className="col-12 col-sm-8 col-md-9 col-lg-4 d-none d-lg-block quats-section">
                    <img src={quats} alt="" />
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Velit deleniti cupiditate adipisci, quae error hic Velit
                      deleniti.
                    </p>
                    <span>nicholas boyer</span>
                    <br />
                    <small>ceo-company</small>
                  </div>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
 
    </>
  )
}

export default Carousel
