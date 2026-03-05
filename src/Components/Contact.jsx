import React, { useState } from "react";
import "../Components/css/contact.css";
import Footer from "./Footer";
import InfoBar from "./Infobar";

function Contact() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
  });


  const [errors, setErrors] = useState({});



  const validateField = (name, value) => {
  let error = "";

  if (name === "fullName") {
    if (!value.trim()) error = "Full name is required";
  }

  if (name === "email") {
    if (!value) error = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(value)) error = "Enter a valid email";
  }

  if (name === "phone") {
    if (!value) error = "Phone number is required";
    else if (!/^[0-9]{10}$/.test(value)) error = "Phone must be 10 digits";
  }

  if (name === "city") {
    if (!value.trim()) error = "City is required";
  }

  return error;
};

  // const handleChange = (e) => {
  //   console.log(e.target.name);

  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData({
    ...formData,
    [name]: value,
  });

  const error = validateField(name, value);

  setErrors((prev) => ({
    ...prev,
    [name]: error,
  }));
};



  const validate = () => {
    let newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    if (!validate()) {
      return;
    }

    setLoading(true);
    console.log(formData);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwCrwe5Ovt5cVxjm0dZ3GUl5St_GQTQ6RM4cZtW3yKtmga7_T5jXpWifFMKbAhJsN3o6w/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify(formData),
        }
      );

      console.log(response);

      if (!response.ok) {
        setLoading(false);
        console.log(formData);

        setFormData({
          fullName: "",
          email: "",
          phone: "",
          city: "",
        });
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
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
                <div>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                  {errors.fullName && (
                    <p className="error">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Mail"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {errors.email && <p className="error">{errors.email}</p>}
                </div>
              </div>

              <div className="form-row">
                <div>
                 <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength="10"
                />
                  {errors.phone && <p className="error">{errors.phone}</p>}
                </div>

                <div>
                  <input
                    type="text"
                    name="city"
                    placeholder="Your City"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                  {errors.city && <p className="error">{errors.city}</p>}
                </div>
                
              </div>

              <button type="submit">
                {loading ? "Loading..." : "Registration"}
              </button>
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