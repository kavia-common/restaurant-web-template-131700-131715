import React from 'react';

// Sample gallery data with placeholder images
const galleryImages = [
  { id: 1, alt: 'Elegant dining room', category: 'interior' },
  { id: 2, alt: 'Signature dish presentation', category: 'food' },
  { id: 3, alt: 'Wine cellar', category: 'interior' },
  { id: 4, alt: 'Chef preparing meal', category: 'kitchen' },
  { id: 5, alt: 'Dessert plating', category: 'food' },
  { id: 6, alt: 'Bar area', category: 'interior' },
  { id: 7, alt: 'Fresh ingredients', category: 'food' },
  { id: 8, alt: 'Private dining room', category: 'interior' }
];

// PUBLIC_INTERFACE
const Gallery = () => {
  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <h2 className="section-title">Gallery</h2>
        <p className="section-subtitle">
          Take a glimpse into our restaurant's atmosphere and culinary artistry
        </p>
        
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div key={image.id} className="gallery-item">
              <div className="gallery-image-placeholder">
                <i className={`fas ${
                  image.category === 'food' ? 'fa-utensils' :
                  image.category === 'kitchen' ? 'fa-fire' :
                  'fa-home'
                }`}></i>
                <p>{image.alt}</p>
              </div>
              <div className="gallery-overlay">
                <i className="fas fa-search-plus"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
