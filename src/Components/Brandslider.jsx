import React from "react";
import "./css/brandslider.css";
import Brand1 from "../assets/Brand_1.png";
import Brand2 from "../assets/Brand_2.png";
import Brand3 from "../assets/Brand_3.png";
import Brand4 from "../assets/Brand_4.png";
import Brand5 from "../assets/Brand_5.png";
import Brand6 from "../assets/Brand_6.png";

const brands = [
  { id: 1, img: Brand1, name: "Penna Cement" },
  { id: 2, img: Brand2, name: "Ramco Cement" },
  { id: 3, img: Brand3, name: "Bharathi Cement"},
  { id: 4, img: Brand4, name: "Birla Cement"},
  { id: 5, img: Brand5, name: "Maha Cement"},
  { id:6, img: Brand6, name:"JSW Cement"},
];



const BrandsSlider = () => {
  return (
    <section className="brands-section">
      
      <h2>Brands we stock</h2>
      <p className="brands-subtitle">
        We pick the very best so you can be assured of the quality.There can be no compromises when it comes to materials, ease of wear, and durability.
      </p>

      <div className="brands-slider">
        <div className="brands-track">
          {[...brands, ...brands].map((brand, index) => (
            <div className="brand-card" key={index}>
              <img src={brand.img} alt={brand.name} />
            </div>
          ))}
        </div>
      </div>

      
    </section>

    

    
  );
};
export default BrandsSlider;
