import React from 'react'
import staticimg from "../assets/static-bg-img.jpg";
import './ClientExp.css';


const ClientExp = () => {
  return (
    <>
       <section
        className="client-exp"
        style={{ backgroundImage: `url(${staticimg})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-6 col-sm-6 col-md-6 col-lg-3 gy-4">
              <div className="client-exp-one text-center">
                <div className="client-exp-two">
                  25
                  <small>+</small>
                </div>
                <span>Year Of Experience</span>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-3 gy-4">
              <div className="client-exp-one text-center">
                <div className="client-exp-two">
                  8k
                  <small>+</small>
                </div>
                <span>Satisfied Peoples</span>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-3 gy-4">
              <div className="client-exp-one text-center">
                <div className="client-exp-two">
                  100
                  <small>+</small>
                </div>
                <span> Expert Members</span>
              </div>
            </div>{" "}
            <div className="col-6 col-sm-6 col-md-6 col-lg-3 gy-4">
              <div className="client-exp-one text-center">
                <div className="client-exp-two">
                  69
                  <small>+</small>
                </div>
                <span> Award Winnings</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default ClientExp
