import React from "react";
import footerbg from "../assets/footer-bg-img.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import footerimg from "../assets/footer-slider-img1.jpg";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      {/* Footer-section */}
      <section
        className="footer-section"
        style={{
          backgroundImage: `url(${footerbg} )`,
        }}
      >
        <div className="container footer-container">
          <div className="row">
            <div className="col-12 col-md-12  col-lg-4 part-1">
              <h3 className="logo">VardhmanChemicals</h3>
              <p className="pera">
                Lorem ipsum dolor sit amet, conse cte tuer adipiscing elenean co
                mm odo ligula eget doloan massa.
              </p>
              <span>
                Copyright 2024, VardhmanChemicals.com <br />
                All Rights Reserved.
              </span>
              <div className="social-logo">
                <ul>
                  <li className="facebook">
                    <a href="#">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li className="google">
                    <a href="#">
                      <FaGoogle />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaPinterestP />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-4 part-2">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">contact</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4 col-4 part-3">
              <h4>Contact Info</h4>
              <div className="address">
                <span className="d-block">Address:</span>
                121 King Street Melbourne, 3000, Australia
              </div>

              <div className="email">
                <span className="d-block">Email:</span>
                <a href="#">info@vardhmanchemicals.com</a>
              </div>

              <div className="phone">
                <span className="d-block">Phone</span>
                +123456789
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-4 part-3">
              <h4>Our Gallery</h4>

              <div>
                <div
                  id="carouselExample"
                  className="carousel slide "
                  data-bs-ride="true"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src={footerimg}
                        className="d-block w-100 img-fluid footer1 footer-slid"
                        alt=".../"
                      />
                    </div>
                    <div className="carousel-item ">
                      <img
                        src={footerimg}
                        className="d-block w-100 img-fluid footer1 footer-slid"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item ">
                      <img
                        src={footerimg}
                        className="d-block w-100 img-fluid  footer1 footer-slid"
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
