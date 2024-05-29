import React from 'react'
import blogimg1 from "../assets/blog-img1.jpg";
import blogimg2 from "../assets/blog-img2.jpg";
import blogimg3 from "../assets/blog-img3.jpg";
import './Newscard.css';


const Newscard = () => {
  return (
    <>
        <div className="container second-part Neews-section">
        <div className="textera">
          <h3 className="text-center">Lastest News and Blogs</h3>
          <h2 className="text-center">
            Get Every Single Update Article & News
          </h2>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4 py-5 ">
          <div className="col">
            <div class="card">
              <img src={blogimg1} class="card-img-top " alt="..." />
              <div class="card-body">
                <span>Gardening, - Nursery </span>
                <h3 class="card-title span-above">
                  {" "}
                  Get Every Single Update Article,
                  <br /> Tips & News
                </h3>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam.
                </p>
                <a href="#" class="btn btn-primary">
                  Read More
                </a>
              </div>
              <div class="card-footer">
                <small class="text-body-secondary">
                  <span>Admin</span> - Aug 16, 2022 - 08:30 PM
                </small>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card">
              <img src={blogimg2} class="card-img-top " alt="..." />
              <div class="card-body">
                <span>Gardening, - Nursery </span>

                <h3 class="card-title span-above">
                  {" "}
                  Get Every Single Update Article,
                  <br /> Tips & News
                </h3>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam.
                </p>
                <a href="#" class="btn btn-primary">
                  Read More
                </a>
              </div>
              <div class="card-footer">
                <small class="text-body-secondary">
                  <span>Admin</span> - Aug 16, 2022 - 08:30 PM
                </small>
              </div>
            </div>
          </div>{" "}
          <div className="col">
            <div class="card">
              <img src={blogimg3} class="card-img-top" alt="..." />
              <div class="card-body">
                <span>Gardening, - Nursery </span>

                <h3 class="card-title span-above">
                  {" "}
                  Get Every Single Update Article,
                  <br /> Tips & News
                </h3>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam.
                </p>
                <a href="#" class="btn btn-primary">
                  Read More
                </a>
              </div>
              <div class="card-footer">
                <small class="text-body-secondary">
                  {" "}
                  <span>Admin</span> - Aug 16, 2022 - 08:30 PM
                </small>
              </div>
            </div>
          </div>{" "}
        </div>

        {/* more button section */}
        <div className="row   text-center">
          <div className="col-12 more-button">
            <a href="#" class="btn btn-primary">
              More Article
            </a>
          </div>
        </div>
      </div>

    </>
  )
}

export default Newscard
