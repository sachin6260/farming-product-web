import React from 'react'
import circle1 from "../assets/work-icon1.png";
import circle2 from "../assets/work-icon2.png";
import circle3 from "../assets/work-icon3.png";
import "./Rounde.css";


const Ronde = () => {
  return (
    <>
            {/* rounde section */}

            <section className="rounde-section">
        <div className="container">
          <div className="head-section">
            <h3 className=" text-center">Our Working Process</h3>
            <h2 className="text-center">How Does We Works.</h2>
          </div>

          <div className="row round-row " >
            <div className="col-lg-4 col-md-4 col-sm-6 col-7 ">
              <div className="circle-1">
                <div className="circle-2 text-center">
                  <img src={circle1} alt="" className="img-fluid"/>
                  <h3>Make Gardening</h3>
                  <span>
                    Lorem ipsum dolor sit <br /> amet, consectetur seddo.
                  </span>
                </div>
              </div>
            </div>
            <div className="  col-lg-4 col-md-4 col-sm-6 col-7   ">
              <div className="circle-1">
                <div className="circle-2 text-center">
                  <img src={circle2} alt="" className="img-fluid" />
                  <h3>Soil Test & Making</h3>
                  <span>
                    Lorem ipsum dolor sit <br /> amet, consectetur seddo.
                  </span>
                </div>
              </div>
            </div>
            <div className=" col-lg-4 col-md-4 col-sm-6 col-7 ">
              <div className="circle-1">
                <div className="circle-2 text-center">
                  <img src={circle3} alt="" className="img-fluid" />
                  <h3>Garden Watering</h3>
                  <span>
                    Lorem ipsum dolor sit <br /> amet, consectetur seddo.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Ronde
