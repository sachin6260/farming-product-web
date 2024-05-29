import React from 'react'
import img1 from "../assets/service-blog-img1.jpg";
import img2 from "../assets/service-blog-img2.jpg";
import img3 from "../assets/service-blog-img3.jpg";
import img4 from "../assets/service-blog-img4.jpg";
import img5 from "../assets/service-blog-img5.jpg";
import img6 from "../assets/service-blog-img6.jpg";
import icon1 from "../assets/service-icon1.png";
import icon2 from "../assets/service-icon2.png";
import icon3 from "../assets/service-icon3.png";
import icon4 from "../assets/service-icon4.png";
import icon5 from "../assets/service-icon5.png";
import icon6 from "../assets/service-icon6.png";
import plant from "../assets/plant-img.png";
import './Cards.css' ;


const Cards = () => {
  return (
    <>
            <div className="container second-part">
        <div className="textera">
          <h3 className="text-center">Services of VardhmanChemicals</h3>
          <h2 className="text-center">
            Exlpore Our Best Offer For Gardening
          </h2>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4 py-5 text-center">
          <div className="col">
            <div class="card">
              <img src={img1} class="card-img-top img-fluid" alt="..." />,
              <img src={icon1} className="icons img-fluid" alt=""  />
              <div class="card-body">
                <h3 class="card-title">Watering & Irrigation</h3>
                <p class="card-text">
                  Nam libero tempore, cum soluta nois <br /> est eligendi optio cumque
                  nihil impedit <br /> quo minus id ruod maxime.
                </p>
                <a href="#" class="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card">
              <img src={img2} class="card-img-top img-fluid" alt="..." />,
              <img src={icon2} className="icons img-fluid" alt="" />
              <div class="card-body">
                <h3 class="card-title">Watering & Irrigation</h3>
                <p class="card-text">
                  Nam libero tempore, cum soluta nois <br />
                  est eligendi optio cumque nihil impedit <br /> quo minus id
                  ruod maxime.
                </p>
                <a href="#" class="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>{" "}
          <div className="col">
            <div class="card">
              <img src={img3} class="card-img-top img-fluid" alt="..." />,
              <img src={icon3} className="icons img-fluid" alt="" />
              <div class="card-body">
                <h3 class="card-title">Watering & Irrigation</h3>
                <p class="card-text">
                  Nam libero tempore, cum soluta nois <br />
                  est eligendi optio cumque nihil impedit <br /> quo minus id
                  ruod maxime.
                </p>
                <a href="#" class="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>{" "}
          <div className="col">
            <div class="card">
              <img src={img4} class="card-img-top img-fluid" alt="..." />,
              <img src={icon4} className="icons img-fluid" alt="" />
              <div class="card-body">
                <h3 class="card-title">Watering & Irrigation</h3>
                <p class="card-text">
                  Nam libero tempore, cum soluta nois <br />
                  est eligendi optio cumque nihil impedit <br /> quo minus id
                  ruod maxime.
                </p>
                <a href="#" class="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>{" "}
          <div className="col">
            <div class="card">
              <img src={img5} class="card-img-top img-fluid" alt="..." />,
              <img src={icon5} className="icons img-fluid" alt="" />
              <div class="card-body">
                <h3 class="card-title">Watering & Irrigation</h3>
                <p class="card-text">
                  Nam libero tempore, cum soluta nois <br />
                  est eligendi optio cumque nihil impedit <br /> quo minus id
                  ruod maxime.
                </p>
                <a href="#" class="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>{" "}
          <div className="col">
            <div class="card">
              <img src={img6} class="card-img-top img-fluid" alt="..." />,
              <img src={icon6} className="icons img-fluid" alt="" />
              <div class="card-body">
                <h3 class="card-title">Watering & Irrigation</h3>
                <p class="card-text">
                  Nam libero tempore, cum soluta nois <br />
                  est eligendi optio cumque nihil impedit <br /> quo minus id
                  ruod maxime.
                </p>

                <a href="#" class="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="plant-img">
          <img src={plant} alt="" />
        </div>
      </div>

    </>
  )
}

export default Cards
