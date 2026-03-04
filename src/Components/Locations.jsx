import React from "react";
import "./css/locations.css";

const Locations = () => {
  const data = [
    {
      title: "Cement",
      className: "cement",
      locations: [
        "Srikalahasti",
        "Tirupati",
        "Puttur",
        "Naidupeta",
        "Varadhayyapalem",
        "Renigunta",
        "Chittoor",
      ],
    },
    {
      title: "Tiles",
      className: "tiles",
      locations: [
        "Srikalahasti",
        "Tirupati",
        "Puttur",
        "Naidupeta",
        "Varadhayyapalem",
        "Renigunta",
        "Chittoor",
      ],
    },
    {
      title: "Steel",
      className: "steel",
      locations: [
        "Srikalahasti",
        "Tirupati",
        "Puttur",
        "Naidupeta",
        "Varadhayyapalem",
        "Renigunta",
        "Chittoor",
      ],
    },
  ];

  return (
    <section className="locations-section">
      <div className="container">
        <h1 className="section-title">Our Marketing Locations</h1>
        <p className="section-subtitle">
          We proudly serve across major regions with quality Cement, Tiles, and Steel products.
        </p>

        <div className="locations-grid">
          {data.map((item, index) => (
            <div key={index} className={`location-card ${item.className}`}>
              <div className="card-header">
                <h2>{item.title}</h2>
              </div>
              <div className="card-body">
                <ul>
                  {item.locations.map((loc, i) => (
                    <li key={i}>{loc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;