import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import './ProductCard.css';

const TAG_CLASSES = {
  popular: 'tag--popular',
  new: 'tag--new',
  bestseller: 'tag--bestseller',
};

function ProductCard({ product }) {
  const { addToCart, isInCart } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const inCart = isInCart(product.id);

  const handleBuyNow = () => {
    if (inCart) return;
    addToCart(product);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  const tagClass = TAG_CLASSES[product.tagType] || 'tag--popular';

  return (
    <article className="product-card">
      <div className="card-header">
        <div className="card-icon">
          <img src={product.icon} alt={product.name} />
        </div>
        <span className={`card-tag ${tagClass}`}>{product.tag}</span>
      </div>

      <h3 className="card-name">{product.name}</h3>
      <p className="card-desc">{product.description}</p>

      <ul className="card-features" aria-label="Features">
        {product.features.map((feature, index) => (
          <li key={index} className="card-feature-item">
            <span className="feature-check" aria-hidden="true">✓</span>
            {feature}
          </li>
        ))}
      </ul>

      <div className="card-footer">
        <div className="card-price">
          <span className="price-amount">${product.price}</span>
          <span className="price-period">/ {product.period}</span>
        </div>
        <button
          className={`buy-btn ${inCart || justAdded ? 'buy-btn--added' : ''}`}
          onClick={handleBuyNow}
          disabled={inCart}
          aria-label={`Add ${product.name} to cart`}
        >
          {inCart ? '✓ Added' : justAdded ? '✓ Added' : 'Buy Now'}
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
