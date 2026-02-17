import React,{useState} from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import "./css/footer.css";

const Footer = () => {
   const [menuOpen, setMenuOpen] = useState(false);
  return (
    <footer className="footer">
      <div className="footer-container">

        
        <div className="footer-col">
               <h2 style={{ color: "#f4ff1e" }}>Balaram</h2>
               <h5 style={{ color: "#e67e22" }}>Steel & Cement</h5>
          <p>
            Your trusted partner for premium cement and steel products.
            Supplying quality materials for strong foundations.
          </p>
        </div>

        
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>
                <NavLink to="/" end onClick={() => setMenuOpen(false)}>
                  Home
                </NavLink>
            </li>

            <li>
              <NavLink to="/about" onClick={() => setMenuOpen(false)}>
                About
              </NavLink>
            </li>


            <li>
            <NavLink to="/products" onClick={() => setMenuOpen(false)}>
              Products
            </NavLink>
          </li>
           <li>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact Us
            </NavLink>
          </li>
          </ul>
        </div>

      
        <div className="footer-col">
          <h4>Products</h4>
          <ul>
            <li>OPC Cement</li>
            <li>PPC Cement</li>
            <li>TMT Steel Bars</li>
            <li>Construction Materials</li>
          </ul>
        </div>

    
             <div className="footer-col">
                <h4>Contact</h4>
                <p className="business-location">
                  📍{" "}
                  <a
                    href="https://maps.app.goo.gl/tAmwtS2TX8KuXaX29"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="location-text-link"
                  >
                    Balaram Steel & Cement, Kothapet, Srikalahasti, Andhra Pradesh – 517644
                  </a>
                </p>

                          <p>📞 +91 8333940011</p>
                          <p>✉️ Balaramsteelandcement@gmail.com</p>
                        </div>

                      </div>

                      
                      <div className="footer-bottom">
                        <p>
                          © {new Date().getFullYear()} CementShop | All Rights Reserved
                        </p>
              </div>
    </footer>
  );
};

export default Footer;
