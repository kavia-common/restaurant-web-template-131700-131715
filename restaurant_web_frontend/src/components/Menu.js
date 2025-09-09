import React, { useState } from 'react';

// Sample menu data
const menuData = {
  appetizers: [
    { name: 'Pan-Seared Scallops', description: 'With cauliflower purée and crispy pancetta', price: '$18' },
    { name: 'Burrata Caprese', description: 'Fresh burrata, heirloom tomatoes, basil oil', price: '$16' },
    { name: 'Tuna Tartare', description: 'Sesame-crusted tuna, avocado, citrus vinaigrette', price: '$22' }
  ],
  mains: [
    { name: 'Wagyu Beef Tenderloin', description: 'With truffle mashed potatoes and red wine reduction', price: '$45' },
    { name: 'Atlantic Salmon', description: 'Cedar plank roasted with seasonal vegetables', price: '$32' },
    { name: 'Duck Breast', description: 'Cherry glaze, wild rice, roasted root vegetables', price: '$38' },
    { name: 'Lobster Risotto', description: 'Maine lobster, saffron risotto, micro greens', price: '$42' }
  ],
  desserts: [
    { name: 'Chocolate Soufflé', description: 'Dark chocolate, vanilla bean ice cream', price: '$14' },
    { name: 'Crème Brûlée', description: 'Classic vanilla custard with caramelized sugar', price: '$12' },
    { name: 'Seasonal Fruit Tart', description: 'Pastry cream, fresh berries, honey glaze', price: '$13' }
  ]
};

// PUBLIC_INTERFACE
const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('appetizers');

  // PUBLIC_INTERFACE
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <section id="menu" className="menu-section">
      <div className="container">
        <h2 className="section-title">Our Menu</h2>
        <p className="section-subtitle">
          Discover our carefully crafted dishes made with the finest ingredients
        </p>
        
        <div className="menu-tabs">
          <button 
            className={`menu-tab ${activeCategory === 'appetizers' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('appetizers')}
          >
            Appetizers
          </button>
          <button 
            className={`menu-tab ${activeCategory === 'mains' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('mains')}
          >
            Main Courses
          </button>
          <button 
            className={`menu-tab ${activeCategory === 'desserts' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('desserts')}
          >
            Desserts
          </button>
        </div>

        <div className="menu-content">
          <div className="menu-items">
            {menuData[activeCategory].map((item, index) => (
              <div key={index} className="menu-item">
                <div className="menu-item-header">
                  <h4 className="menu-item-name">{item.name}</h4>
                  <span className="menu-item-price">{item.price}</span>
                </div>
                <p className="menu-item-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
