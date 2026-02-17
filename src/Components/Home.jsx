import React from "react";
import "../Components/css/navbar.css";
import BrandsSlider from "./Brandslider";
import InfoBar from "./Infobar";
import Footer from "./Footer";
import Tiles from "./Tiles";
import { useNavigate } from "react-router-dom";
import ramco from "../assets/All_Cements.png";
import steellll from "../assets/Steel_5.png";
import cement from "../assets/Cement_1.png";
import anjini_2 from "../assets/All_Tiles.png";

const Home = () => {
const navigate = useNavigate();

  const products = [
    { name: "Cements", image: ramco },
    { name: "Steels", image: steellll },
    { name: "Cement Bricks", image: cement },
    { name: "Anjini Tek Tiles", image: anjini_2 },
    
  ];

  return (
    <div className="home">

      <section className="banner">
        <div className="overlay">
          <h1>Strong Foundations for the Future</h1>
          <p>Premium Cement & High-Quality Steel for Every Project</p>
        </div>
      </section>


    <section className="products-section">
            <h2 className="section-title">Available Products</h2>

            <div className="products-grid">
              {products.map((item, index) => (
                <div
                  className="product-card"
                  key={index}
                  onClick={() => navigate("/products")}
                >
                  <div className="product-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <h3>{item.name}</h3>
                </div>
              ))}
            </div>
    </section>


      <BrandsSlider />
      <Tiles />
      <InfoBar />
      <section className="stats">
        <div className="stat">
          <h3>5+</h3>
          <p>Years Experience</p>
        </div>
        <div className="stat">
          <h3>500+</h3>
          <p>Projects Supplied</p>
        </div>
        <div className="stat">
          <h3>100%</h3>
          <p>Quality Tested</p>
        </div>
      </section>

      
      <Footer />

    </div>
  );
};

export default Home;
