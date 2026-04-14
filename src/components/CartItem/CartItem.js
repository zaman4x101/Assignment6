import React from 'react';
import { useCart } from '../../context/CartContext';
import './CartItem.css';

function CartItem({ item }) {
  const { removeFromCart } = useCart();

  return (
    <div className="cart-item">
      <div className="cart-item-icon">
        <img src={item.icon} alt={item.name} />
      </div>

      <div className="cart-item-info">
        <p className="cart-item-name">{item.name}</p>
        <p className="cart-item-price">
          ${item.price} <span className="cart-item-period">/ {item.period}</span>
        </p>
      </div>

      <button
        className="remove-btn"
        onClick={() => removeFromCart(item.id)}
        aria-label={`Remove ${item.name} from cart`}
      >
        Remove
      </button>
    </div>
  );
}

export default CartItem;
