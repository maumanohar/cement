import React from "react";
import "./css/infobar.css";

const InfoBar = () => {
  return (
    <div className="info-bar">

      <div className="info-item">
        <span className="icon">🌍</span>
        <div>
          <h4>Lowest Price</h4>
          <p>All Products at Wholesale Price.</p>
        </div>
      </div>

      <div className="info-item">
        <span className="icon">🔒</span>
        <div>
          <h4>100% Secure Checkout</h4>
          <p>COD / MasterCard / Visa</p>
        </div>
      </div>
    

      <div className="info-item">
        <span className="icon">↩️</span>
        <div>
          <h4>No Return</h4>
          <p>We Don't Return Once Delivered.</p>
        </div>
      </div>

      
    </div>
  );
};

export default InfoBar;
