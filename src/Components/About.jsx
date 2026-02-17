import React from 'react'
import "../Components/css/about.css";
import shopImage from "../assets/Shop_pic.png";
import InfoBar from './Infobar';
import Footer from './Footer';
import { Phone, Mail, MapPin } from "react-feather";

function About() {
  const handlePhoneClick = (e) => {
    e.preventDefault();
    window.location.href = "tel:+91 8333940011";
  };

  const handleLocationClick = (e) => {
    e.preventDefault();
    window.open(
      "https://maps.app.goo.gl/tAmwtS2TX8KuXaX29",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div >

      <section className="about-section">
        <div className="about-container">



          <div className="about-content">
            <h2>Balaram Steel & Cement</h2>

            <p>
              Balaram Steel & Cement is a trusted supplier of high-quality
              construction materials, serving builders, contractors, and
              homeowners with reliability and transparency.
            </p>

            <p>
              We specialize in premium cement, steel, and essential building
              materials to ensure strong, durable, and long-lasting construction
              projects.
            </p>

            <ul>
              <li>Genuine branded cement & steel</li>
              <li>Competitive pricing</li>
              <li>Reliable local supplier</li>
              <li>Quick service & ready stock</li>
              <li>Trusted by builders & contractors</li>
            </ul>
          </div>

          <div className="about-image">
            <img src={shopImage} alt="Balaram Steel & Cement Store" />
          </div>
        </div>

      </section>


      <div className="contact-container" style={{ justifyItems: "center" }}>
        <div className="contact-wrapper single-container">

          <div className="profile-card">
            <img
              src={require("../assets/Pavan_pic.png")}
              alt="Balaram Steel & Cement Owner"
              className="profile-image"
            />

            <div className="profile-details">
              <h3 className="profile-name">Mr. Ch. Praneeth Kumar</h3>
              <p className="profile-role">
                Owner – Balaram Cement & Steel
              </p>
              <p className="profile-role">
                Profession - Anjani Tiles Sales Executive
              </p>
              <p className="profile-experience">
                Over <strong>5+ years</strong> of experience in steel, cement,
                and tiles supply, providing quality materials and trusted
                service to customers in and around Srikalahasti.
              </p>
            </div>
          </div>


          <div className="content">
            <h2>Contact Information</h2>

            <ul className="info-list">
              <li>
                <a
                  href="tel:+91 8333940011"
                  onClick={handlePhoneClick}
                  className="contact-link"
                >
                  <Phone size={20} color="#0056a0" className="contact-icons" />
                  <strong>+91 8333940011</strong>
                </a>
              </li>

              <li>
                <a
                  href="mailto:Balaramsteelandcement@gmail.com"
                  className="contact-link"
                >
                  <Mail size={20} color="#0056a0" className="contact-icons" />
                  <strong>Balaramsteelandcement@gmail.com</strong>
                </a>
              </li>

              <li>
                <a
                  href="https://maps.app.goo.gl/tAmwtS2TX8KuXaX29"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link location-link"
                >
                  <MapPin size={22} className="contact-icons" />
                  <span className="location-text">
                    <h4> Balaram Steel & Cement, Kothapet, Srikalahasti,
                      Andhra Pradesh – 517644</h4>
                  </span>
                </a>
              </li>

            </ul>
          </div>

        </div>
      </div>

      <>
        <InfoBar />
        <Footer />
      </>
    </div>



  );

};
export default About;
