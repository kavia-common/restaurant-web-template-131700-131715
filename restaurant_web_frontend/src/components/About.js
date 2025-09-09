import React from 'react';

// PUBLIC_INTERFACE
const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">Our Story</h2>
            <p className="about-description">
              Founded in 2015, Saveur has been dedicated to creating extraordinary dining experiences 
              that celebrate the art of fine cuisine. Our chef-driven approach combines traditional 
              techniques with modern innovation to craft dishes that delight and inspire.
            </p>
            <p className="about-description">
              We source the finest ingredients from local farms and artisanal producers, ensuring 
              that every plate reflects our commitment to quality, sustainability, and exceptional flavor.
            </p>
            <div className="about-values">
              <div className="value-item">
                <i className="fas fa-leaf"></i>
                <h4>Fresh Ingredients</h4>
                <p>Locally sourced, seasonal produce</p>
              </div>
              <div className="value-item">
                <i className="fas fa-award"></i>
                <h4>Award Winning</h4>
                <p>Recognized for culinary excellence</p>
              </div>
              <div className="value-item">
                <i className="fas fa-heart"></i>
                <h4>Passionate Service</h4>
                <p>Dedicated to creating memorable experiences</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <i className="fas fa-utensils"></i>
              <p>Restaurant Interior</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
