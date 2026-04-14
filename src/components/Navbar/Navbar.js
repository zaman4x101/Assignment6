import React from 'react';
import { useCart } from '../../context/CartContext';
import { shoppingCartImg } from '../../data/products';
import './Navbar.css';

function Navbar({ onCartClick }) {
  const { cart } = useCart();

  const handleCartClick = () => {
    if (onCartClick) {
      onCartClick();
    }
  };

  return (
    <header className="navbar">
      <a href="#home" className="nav-logo">
        <span>DigiTools</span>
      </a>

      <nav className="nav-links" aria-label="Main navigation">
        <a href="#products">Products</a>
        <a href="#products">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#steps">Testimonials</a>
        <a href="#contact">Contact</a>
        <a href="#contact">FAQ</a>
      </nav>

      <div className="nav-right">
        <button
          className="cart-icon-btn"
          aria-label={`Cart with ${cart.length} items`}
          onClick={handleCartClick}
        >
          <img src={shoppingCartImg} alt="Cart" className="cart-img" />
          {cart.length > 0 && (
            <span className="cart-badge" aria-live="polite">
              {cart.length}
            </span>
          )}
        </button>
        <div className="nav-links" aria-label="Main navigation">
          <a href="#products">Login</a>
        </div>

        <button className="nav-cta">Get Started</button>
      </div>
    </header>
  );
}

export default Navbar;