import React from "react";
import InfoBar from "./Infobar";
import Footer from "./Footer";
import "../Components/css/Products.css";
import ultratech from "../assets/Ultratech.png";
import acc from "../assets/ACC.png";
import ambuja from "../assets/Ambuja.png";
import bharathi from "../assets/Bharathi.png";
// import coromandal from"../assets/Coromandal.png";
import chitii from "../assets/chitii.png";
import dalmia from"../assets/Dalmia.png";
// import mpbirla from "../assets/MP Birla.png";
import ramco from"../assets/Ramco.png";
import shree from "../assets/Shree.png";
import zuari from "../assets/Zuari.png";
// import ultra from "../assets/Ultratech.png";
import steel from "../assets/Steel_1.png";
import steel_ from "../assets/Steel_2.png";
import steell from"../assets/Steel_3.png";
import steelll from "../assets/Steel_4.png";
import steellll from "../assets/Steel_5.png";
import steelllll from"../assets/Steel_6.png";
import steellllll from "../assets/Steel_7.png";
// import steelllllll from"../assets/Steel_8.png";
import cement from"../assets/Cement_1.png";
import cement_1 from"../assets/Cement_2.png";
import cement_2 from"../assets/Cement_3.png";
import anjini_1 from "../assets/Anjini_Tek1.png";
import anjini_2 from "../assets/Anjini_Tek5.png";
import anjini_3 from "../assets/Anjini_Tek3.png";
import anjini_4 from "../assets/Anjini_Tek4.png";
import anjini_5 from "../assets/Anjini_Tek6.png";

const Products = () => {
  const products = [
    { name: "UltraTech Cement", image: ultratech },
    { name: "ACC Cement", image: acc },
    { name: "Ambuja Cement", image: ambuja },
    { name: "Bharathi Cement", image: bharathi },
    // { name:"Coromandal Cement", image:coromandal},
    { name:"Chettinad Cement", image:chitii},
    { name:"Dalmia Cement", image:dalmia},
    // { name:"MP Birla Cement", image:mpbirla},
    { name:"Ramco Cement", image:ramco},
    { name:"Shree Cement", image:shree},
    { name:"Zuari Cement", image:zuari},
    // { name:"Ultratech Cement", image:ultra},
    { name:"ARS Steel", image:steel},
    { name:"Pul Kit", image:steel_},
    { name:"ARS Steel", image:steell},
    { name:"Pul Kit", image:steelll},
    { name:"ARS Steel", image:steellll},
    { name:"Pul Kit", image:steelllll},
    { name:"ARS Steel", image:steellllll},
    // { name:"", image:steelllllll},
    { name:"Cement Bricks", image:cement},
    { name:"Cement Bricks", image:cement_1},
    { name:"Cement Bricks", image:cement_2},
    { name:"Anjini Tiles",  image:anjini_1},
    { name:"Anjini Tiles",  image:anjini_2},
    { name:"Anjini Tiles",  image:anjini_3},
    { name:"Anjini Tiles",  image:anjini_4},
    { name:"Anjini Tiles",  image:anjini_5},
  ];

  return (
  <div>
      <section id="products" className="section">
      <h2>Our Most Selling Products</h2>

      <div className="product-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
          </div>
        ))}
      </div>
    
    </section>
    <>
     <InfoBar/>
     <Footer/>
    </>

  </div>
    
   
  );
  
};

export default Products;
