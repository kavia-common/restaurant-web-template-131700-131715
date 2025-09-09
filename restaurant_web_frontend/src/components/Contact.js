import React from 'react';

// PUBLIC_INTERFACE
const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">
          Get in touch with us for reservations, inquiries, or special events
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact-details">
                <h4>Address</h4>
                <p>123 Gourmet Street<br />Downtown District<br />New York, NY 10001</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="contact-details">
                <h4>Phone</h4>
                <p>(555) 123-4567</p>
                <p>Reservations: (555) 123-4568</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-details">
                <h4>Email</h4>
                <p>info@saveur-restaurant.com</p>
                <p>reservations@saveur-restaurant.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-clock"></i>
              </div>
              <div className="contact-details">
                <h4>Hours</h4>
                <p>Tuesday - Saturday: 5:00 PM - 10:00 PM</p>
                <p>Sunday: 5:00 PM - 9:00 PM</p>
                <p>Monday: Closed</p>
              </div>
            </div>
          </div>
          
          <div className="contact-map">
            <div className="map-placeholder">
              <i className="fas fa-map"></i>
              <h4>Interactive Map</h4>
              <p>123 Gourmet Street, Downtown District</p>
              <button className="btn btn-secondary">
                Get Directions
              </button>
            </div>
          </div>
        </div>
        
        <div className="contact-social">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#" className="social-link" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-link" aria-label="TripAdvisor">
              <i className="fab fa-tripadvisor"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
