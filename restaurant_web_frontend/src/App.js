import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Reservations from './components/Reservations';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

// PUBLIC_INTERFACE
function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <About />
      <Menu />
      <Gallery />
      <Reservations />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
