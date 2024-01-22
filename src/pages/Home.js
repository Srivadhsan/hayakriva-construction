import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BannerImage1 from "../assets/RadhalakshmiPalace.jpg";
import BannerImage2 from "../assets/anadhkumar.jpg"; 
import BannerImage3 from "../assets/kathirvelu.jpg";
import "../styles/Home.css";

function Home() {
  const bannerImages = [BannerImage1, BannerImage2,BannerImage3]; // Add more banner images to the array
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + bannerImages.length) % bannerImages.length);
  };

  useEffect(() => {
    // Set up an interval to switch images automatically every 5 seconds (adjust as needed)
    const autoSliderIntervalId = setInterval(handleNext, 5000); // Change interval time as needed

    // Clear the interval when the component is unmounted
    return () => clearInterval(autoSliderIntervalId);
  }, [bannerImages.length]); // Re-run effect when the number of banner images changes

  return (
    <div className="home" style={{ backgroundImage: `url(${bannerImages[currentImageIndex]})` }}>
      <div className="headerContainer">
        <h1>"Brick by Brick, We Build Your Happiness"</h1>
        {/* <p> CRAFTING EXCELLENCE</p> */}
        <Link to="/menu">
          <button>Our Showcase</button>
        </Link>
      </div>
      <div className="arrowButtons">
        <button className="arrowButton" onClick={handlePrev}>
          &lt;
        </button>
        <button className="arrowButton" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Home;
