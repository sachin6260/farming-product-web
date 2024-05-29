import React from 'react'
import leaf from "../assets/leaf-img3.png";
import './FirstSection.css';

const FirstSection = (props) => {
  return (
    <>
      <div className="container-fluid text-center Home-section-first ">
        <div className="row">
          <div className="col-4 men">
            <div className="div1">
              <img src={leaf} />
            </div>
          </div>

          <div className="col-4">
            <div className="Home-div2">
              <h4>Welcome to UrbanLawns</h4>

             
              <h1>{props.pagename}</h1>

            
            </div>
          </div>
          <div className="col-4">
            <div className="div3">
              <img src={leaf} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FirstSection
