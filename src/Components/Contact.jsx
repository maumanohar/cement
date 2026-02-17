import React, { useState } from "react";
import "../Components/css/contact.css";
import Footer from "./Footer";
import InfoBar from "./Infobar";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

    const handleSubmit = async (e) => {
     e.preventDefault();
    
    const dataToSend = {
      ...formData,
      submittedDate: new Date().toISOString(), 
    };
    console.log(dataToSend);
    
    try {
      const response = await fetch("http://192.168.0.9:8080/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          city: "",
          message: "",
        });
      } else {
        alert("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Server error");
    }
  };

  return (
    <>
      <section className="contact-section">
        <div className="contact-grid">
          <div className="form-box">
            <h2 className="contact-title">Get in touch with us!</h2>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Mail"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="city"
                  placeholder="Your City"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>

              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <button type="submit">REGISTER</button>
            </form>
          </div>
        </div>
      </section>

      <InfoBar />
      <Footer />
    </>
  );
}

export default Contact;
