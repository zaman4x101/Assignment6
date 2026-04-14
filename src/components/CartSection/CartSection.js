import React from 'react';
import { useCart } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import './CartSection.css';

function CartSection() {
  const { cart, clearCart, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <div className="cart-empty-icon" aria-hidden="true">🛒</div>
        <h3 className="cart-empty-title">Your Cart is Empty</h3>
        <p className="cart-empty-desc">
          Browse our digital tools and click "Buy Now" to add them here!
        </p>
      </div>
    );
  }

  return (
    <div className="cart-section">
      <div className="cart-list">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className="cart-summary">
        <div className="cart-total-row">
          <span className="cart-total-label">
            Total ({cart.length} {cart.length === 1 ? 'item' : 'items'})
          </span>
          <span className="cart-total-amount">${cartTotal}</span>
        </div>

        <button className="checkout-btn" onClick={clearCart}>
          🚀 Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default CartSection;
