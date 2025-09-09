import { render, screen } from '@testing-library/react';
import App from './App';

test('renders restaurant navigation logo', () => {
  render(<App />);
  const restaurantLogo = screen.getByRole('heading', { name: /Saveur/i, level: 2 });
  expect(restaurantLogo).toBeInTheDocument();
});

test('renders hero title', () => {
  render(<App />);
  const heroTitle = screen.getByText(/Welcome to Saveur/i);
  expect(heroTitle).toBeInTheDocument();
});

test('renders navigation menu with nav-link class', () => {
  render(<App />);
  const navMenu = screen.getByRole('navigation');
  const menuButton = navMenu.querySelector('.nav-link:nth-child(3)');
  expect(menuButton).toHaveTextContent('Menu');
});

test('renders reservation button', () => {
  render(<App />);
  const reservationButton = screen.getByText(/Reserve Your Table/i);
  expect(reservationButton).toBeInTheDocument();
});

test('renders about section title', () => {
  render(<App />);
  const aboutSection = screen.getByText(/Our Story/i);
  expect(aboutSection).toBeInTheDocument();
});

test('renders menu section title', () => {
  render(<App />);
  const menuSection = screen.getByText(/Our Menu/i);
  expect(menuSection).toBeInTheDocument();
});

test('renders contact section title', () => {
  render(<App />);
  const contactSection = screen.getByText(/Contact Us/i);
  expect(contactSection).toBeInTheDocument();
});

test('renders footer', () => {
  render(<App />);
  const footer = screen.getByText(/© 2024 Saveur Restaurant/i);
  expect(footer).toBeInTheDocument();
});

test('renders gallery section heading', () => {
  render(<App />);
  const gallerySection = screen.getByRole('heading', { name: /Gallery/i });
  expect(gallerySection).toBeInTheDocument();
});

test('renders testimonials section', () => {
  render(<App />);
  const testimonialsSection = screen.getByText(/What Our Guests Say/i);
  expect(testimonialsSection).toBeInTheDocument();
});

test('renders reservation form section', () => {
  render(<App />);
  const reservationSection = screen.getByText(/Make a Reservation/i);
  expect(reservationSection).toBeInTheDocument();
});
