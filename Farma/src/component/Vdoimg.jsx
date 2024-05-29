import React from "react";
import workbg from "../assets/work-bg-img.jpg";
import headphone from "../assets/headephone-icon.png";
import vdoimg from "../assets/vedio-img.jpg";
import "./Vdoimg.css";

const Vdoimg = () => {
  return (
    <>
      <section
        className="vdo-section"
        style={{
          backgroundImage: `url(${workbg} )`,
        }}
      >
        <div className="container   ">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 headphone-txt-section  order-2 order-sm-2 order-md-1  order-lg-1 order-xl-1   ">
              <span>We are Professional & Experts</span>
              <h2>We Want to Help You to Grow Plant.</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliquauis
                ipsum suspendisse ultrices gravida.
              </p>
              <div className="headphone-btn  ">
                <a href="#">
                  <img src={headphone} alt="" />
                  <div className="headphone-txt">
                    <span>Contact For Support</span>
                    <small>+123456789</small>
                  </div>
                </a>
              </div>
            </div>

            {/* videio-circle */}
            <div className="col-12 col-sm-12 col-md-6 col-lg-6  order-1 order-sm-1 order-md-2 order-lg-2 order-xl-2">
              <div className="video-img">
                <img src={vdoimg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Vdoimg;
