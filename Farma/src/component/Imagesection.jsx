import React from 'react'
import differentimg from "../assets/different-section-img.jpg";
import loveleaf from "../assets/love-leaf-icon.png";
import expert from "../assets/experts-icon.png";
import './Imagesection.css';


const Imagesection = () => {
  return (
    <>
          <section className="differentimg-section">
        <div className="container">
          <div className="row exp-row">
            <div className="col-lg-5 col-md-5 col-12 col-sm-12">
              <div className="img-part text-start">
                <img src={differentimg} alt="" />
              </div>
            </div>
            <div className="col-lg-7  col-md-7 col-sm-12 col-12 different-txt-section">
              <span>Why Choose UrbanLawns</span>
              <h2>We Are Different From Other Gardening.</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliquauis
                  ipsum suspendisse ultrices gravida.
              </p>
              <div className="different-cart-section">
              <div className="box-service-item text-center">
                <img src={expert} alt="" />
                <h3>We Are Professional  and Experts</h3>

              </div>
              <div className="box-service-item text-center">
                    <img src={loveleaf} alt="" />
                    <h3>We Love Takes Your  Challenges</h3>
              </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>


     </>
  )
}

export default Imagesection
