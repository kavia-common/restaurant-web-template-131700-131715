import React from 'react';

// PUBLIC_INTERFACE
const Footer = () => {
  // PUBLIC_INTERFACE
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">Saveur</h3>
            <p className="footer-description">
              Fine dining experience with exquisite cuisine, exceptional service, 
              and an elegant atmosphere for memorable occasions.
            </p>
            <div className="footer-social">
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
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>About Us</button></li>
              <li><button onClick={() => document.getElementById('menu').scrollIntoView({ behavior: 'smooth' })}>Menu</button></li>
              <li><button onClick={() => document.getElementById('reservations').scrollIntoView({ behavior: 'smooth' })}>Reservations</button></li>
              <li><button onClick={() => document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' })}>Gallery</button></li>
              <li><button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Contact</button></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="footer-contact">
              <p><i className="fas fa-map-marker-alt"></i> 123 Gourmet Street, New York, NY 10001</p>
              <p><i className="fas fa-phone"></i> (555) 123-4567</p>
              <p><i className="fas fa-envelope"></i> info@saveur-restaurant.com</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Hours</h4>
            <div className="footer-hours">
              <p>Tuesday - Saturday<br /><span>5:00 PM - 10:00 PM</span></p>
              <p>Sunday<br /><span>5:00 PM - 9:00 PM</span></p>
              <p>Monday<br /><span>Closed</span></p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Saveur Restaurant. All rights reserved.</p>
          <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
            <i className="fas fa-chevron-up"></i>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
