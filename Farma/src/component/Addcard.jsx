import React from 'react'
import product1 from "../assets/product-img1.png";
 import plants from "../assets/plant-img.png";
import product5 from "../assets/product-img5 - Copy.png";
import star from "../assets/star-icon.png";
import './Addcard.css';

const Addcard = ({ productImage, productName, productPrice }) => {
     // wtspp handle method
  const handleAddToCart = () => {
    const message = `I would like to add "${productName}" to my cart. Price: ${productPrice}`;
    const phoneNumber = '1234567890'; // Replace with your WhatsApp phone number

    // Construct the pre-filled message link
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp chat with pre-filled message when "Add to Cart" button is clicked
    window.open(whatsappLink, '_blank');
  };
  return (
    <>
            {/* Add-Card-section  */}
            <div className="container Home-second-part">
        <div className="Home-textera">
          <h3 className="text-center">Live Gardning Shop</h3>
          <h2 className="text-center">Popular Products</h2>
        </div>

        <div className="row addcard-row">
          <div className="col-7 col-sm-6 col-md-4 col-lg-3 ">
            <div className="product-item text-center">
              <div className="product-image">
                <img src={product1} alt="" />

                <div className="cart-btn">
                  <a href="#" onClick={handleAddToCart}>Add to Cart</a>
                </div>
              </div>

              <div className="product-detail">
                <div className=" star-img ">
                  <img src={star} alt="" />
                </div>
                <h3>The Garden Tool</h3>
                <div className="product-price">
                  <span>$45.55 $66.65</span>
                </div> 
              </div>
            </div>
          </div>
          <div className="col-7 col-sm-6 col-md-4 col-lg-3">
            <div className="product-item text-center">
              <div className="product-image">
                <img src={product1} alt="" />

                <div className="cart-btn">
                  <a href="#" onClick={handleAddToCart}>Add to Cart</a>
                </div>
              </div>

              <div className="product-detail">
                <div className=" star-img ">
                  <img src={star} alt="" />
                </div>
                <h3>The Garden Tool</h3>
                <div className="product-price">
                  <span>$45.55 $66.65</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-7 col-sm-6 col-md-4 col-lg-3">
            <div className="product-item text-center">
              <div className="product-image">
                <img src={product1} alt="" />

                <div className="cart-btn">
                  <a href="#" onClick={handleAddToCart}>Add to Cart</a>
                </div>
              </div>

              <div className="product-detail">
                <div className=" star-img ">
                  <img src={star} alt="" />
                </div>
                <h3>The Garden Tool</h3>
                <div className="product-price">
                  <span>$45.55 $66.65</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-7 col-sm-6 col-md-4 col-lg-3">
            <div className="product-item text-center">
              <div className="product-image">
                <img src={product1} alt="" />

                <div className="cart-btn">
                  <a href="#" onClick={handleAddToCart}>Add to Cart</a>
                </div>
              </div>

              <div className="product-detail">
                <div className=" star-img ">
                  <img src={star} alt="" />
                </div>
                <h3>The Garden Tool</h3>
                <div className="product-price">
                  <span>$45.55 $66.65</span>
                </div>
              </div>
            </div>
          </div>
           <div className="col-7 col-sm-6 col-md-4 col-lg-3">
            <div className="product-item text-center">
              <div className="product-image">
                <img src={product5} alt="" />

                <div className="cart-btn">
                  <a href="#" onClick={handleAddToCart}>Add to Cart</a>
                </div>
              </div>

              <div className="product-detail">
                <div className=" star-img ">
                  <img src={star} alt="" />
                </div>
                <h3>The Garden Tool</h3>
                <div className="product-price">
                  <span>$45.55 $66.65</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-7 col-sm-6 col-md-4 col-lg-3">
            <div className="product-item text-center">
              <div className="product-image">
                <img src={product5} alt="" />

                <div className="cart-btn">
                  <a href="#" onClick={handleAddToCart}>Add to Cart</a>
                </div>
              </div>

              <div className="product-detail">
                <div className=" star-img ">
                  <img src={star} alt="" />
                </div>
                <h3>The Garden Tool</h3>
                <div className="product-price">
                  <span>$45.55 $66.65</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-7 col-sm-6 col-md-4 col-lg-3">
            <div className="product-item text-center">
              <div className="product-image">
                <img src={product5} alt="" />

                <div className="cart-btn">
                  <a href="#" onClick={handleAddToCart}>Add to Cart</a>
                </div>
              </div>

              <div className="product-detail">
                <div className=" star-img ">
                  <img src={star} alt="" />
                </div>
                <h3>The Garden Tool</h3>
                <div className="product-price">
                  <span>$45.55 $66.65</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-7 col-sm-6 col-md-4 col-lg-3">
            <div className="product-item text-center">
              <div className="product-image">
                <img src={product5} alt="" />

                <div className="cart-btn">
                  <a href="#" onClick={handleAddToCart}>Add to Cart</a>
                </div>
              </div>

              <div className="product-detail">
                <div className=" star-img ">
                  <img src={star} alt="" />
                </div>
                <h3>The Garden Tool</h3>
                <div className="product-price">
                  <span>$45.55 $66.65</span>
                </div>
              </div>
            </div>
          </div>

          </div>
               

        <div className="Home-plant-img">
          <img src={plants} alt="" />
        </div>
      </div>

    </>
  )
}

export default Addcard
