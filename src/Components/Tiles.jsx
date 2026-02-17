import React from "react";
import { useNavigate } from "react-router-dom";
import "../Components/css/tiles.css";
import anjini_banner from "../assets/Anjini_Banner.png";

const Tiles = () => {
  const navigate = useNavigate();

  return (
    <section
      className="anjini-banner"
      style={{ backgroundImage: `url(${anjini_banner})` }}
    >
      <div className="anjini-overlay">
        <h1>We Are Marketing Anjini Tek Tiles</h1>
        <p>Premium Quality Tiles for Modern & Stylish Spaces</p>

        <button
          className="btn primary"
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </button>

      </div>
    </section>
  );
};

export default Tiles;
