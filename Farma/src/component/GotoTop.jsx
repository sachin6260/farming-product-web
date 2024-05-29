import React, { useEffect, useState } from 'react'
import { FaArrowUp } from "react-icons/fa";

import "./GotoTop.css";

const GotoTop = () => {

 const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      if (window.pageYOffset > 250) { // Check if user has scrolled 250 pixels from top
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add event listener to scroll event
    window.addEventListener('scroll', handleScroll);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional: Smooth scrolling animation
    });
  };

  return (
    <div className={`scroll-to-top-button ${isVisible ? 'visible' : 'hidden'}`} onClick={scrollToTop}>
      <i><FaArrowUp /></i> {/* Font Awesome icon for scroll to top */}
    </div>
  );
 }

export default GotoTop
