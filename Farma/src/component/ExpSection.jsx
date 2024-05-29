import React from 'react'
import differentimg from "../assets/different-section-img.jpg";
import './ExpSection.css';


const ExpSection = () => {
  return (
    <>
            <section className="differentimg-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-12 col-sm-1">
              <div className="img-part text-start">
                <img src={differentimg} alt="" />
              </div>
              <div className="experience-box ">
                <div className="number-part  ">25</div>

                <small>+</small>
                <span className=" text-center">
                  YEAR OF <br /> EXPERIENCE
                </span>
              </div>
            </div>
            <div className="col-lg-7  col-md-7 col-sm-12 col-12 different-txt-section">
              <span>Why Choose UrbanLawns</span>
              <h2>We Are Different From Other Gardening.</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
                <br />
                eiusmod tempor incididunt ut labore et dolore magna aliquauis
                <br />
                ipsum suspendisse ultrices gravida.
              </p>
              <ul>
                <li>Accessible Inclusiveness Beyond Patterns</li>
                <li>Creating Secure Password Flows With Node</li>
                <li>Building An E-Commerce Site October</li>
              </ul>

              <div className="row   text-start">
                <div className="col-12 more-button">
                  <a href="#" class="btn btn-primary">
                    Get a Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default ExpSection
