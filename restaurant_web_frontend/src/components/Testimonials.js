import React from 'react';

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    rating: 5,
    text: 'An absolutely incredible dining experience! The attention to detail in every dish was remarkable. The ambiance is perfect for special occasions.',
    date: '2 weeks ago'
  },
  {
    id: 2,
    name: 'Michael Chen',
    rating: 5,
    text: 'The best restaurant in the city! Every course was a masterpiece. The service was impeccable and the wine pairing was exceptional.',
    date: '1 month ago'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    rating: 5,
    text: 'Celebrated our anniversary here and it exceeded all expectations. The chef\'s tasting menu was innovative and delicious. Will definitely return!',
    date: '3 weeks ago'
  },
  {
    id: 4,
    name: 'David Thompson',
    rating: 5,
    text: 'Outstanding food and service. The staff was knowledgeable and friendly. Each dish was beautifully presented and bursting with flavor.',
    date: '1 week ago'
  }
];

// PUBLIC_INTERFACE
const Testimonials = () => {
  // PUBLIC_INTERFACE
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i 
        key={index} 
        className={`fas fa-star ${index < rating ? 'filled' : ''}`}
      ></i>
    ));
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <h2 className="section-title">What Our Guests Say</h2>
        <p className="section-subtitle">
          Hear from our valued customers about their dining experiences
        </p>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-rating">
                {renderStars(testimonial.rating)}
              </div>
              <p className="testimonial-text">
                "{testimonial.text}"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <i className="fas fa-user"></i>
                </div>
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-date">{testimonial.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="testimonials-stats">
          <div className="stat-item">
            <h3>4.9/5</h3>
            <p>Average Rating</p>
          </div>
          <div className="stat-item">
            <h3>500+</h3>
            <p>Happy Customers</p>
          </div>
          <div className="stat-item">
            <h3>8+</h3>
            <p>Years of Excellence</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
