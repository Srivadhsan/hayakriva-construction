import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/RadhalakshmiPalace.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> "Brick by Brick, We Build Your Happiness"</h1>
        {/* <p> CRAFTING EXCELLENCE</p> */}
        <Link to="/menu">
          <button>Our Showcase</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
