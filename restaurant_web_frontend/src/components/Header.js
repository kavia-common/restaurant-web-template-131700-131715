import React from 'react';

// PUBLIC_INTERFACE
const Header = () => {
  // PUBLIC_INTERFACE
  const scrollToReservations = () => {
    const element = document.getElementById('reservations');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header id="home" className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Saveur</h1>
        <p className="hero-subtitle">Fine Dining Experience with Exquisite Cuisine</p>
        <p className="hero-description">
          Discover our passion for culinary excellence in an elegant atmosphere. 
          Every dish tells a story of tradition, innovation, and exceptional taste.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={scrollToReservations}>
            Reserve Your Table
          </button>
          <button className="btn btn-secondary" onClick={() => document.getElementById('menu').scrollIntoView({ behavior: 'smooth' })}>
            View Menu
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
