import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { useCart } from '../../context/CartContext';
import ProductGrid from '../ProductGrid/ProductGrid';
import CartSection from '../CartSection/CartSection';
import './MainSection.css';

const MainSection = forwardRef((props, ref) => {
  const [activeTab, setActiveTab] = useState('products');
  const { cart } = useCart();

  useImperativeHandle(ref, () => ({
    switchToCart: () => {
      setActiveTab('cart');
    }
  }));

  return (
    <section className="main-section" id="main-section">
      <div className="section-header">
        <h2 className="section-title">Premium Digital Tools</h2>
        <p className="section-desc">
          Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
        </p>
      </div>

      <div className="tab-toggle" role="tablist">
        <button
          className={`tab-btn ${activeTab === 'products' ? 'tab-btn--active' : ''}`}
          onClick={() => setActiveTab('products')}
          role="tab"
          aria-selected={activeTab === 'products'}
        >
          Products
        </button>
        <button
          className={`tab-btn ${activeTab === 'cart' ? 'tab-btn--active' : ''}`}
          onClick={() => setActiveTab('cart')}
          role="tab"
          aria-selected={activeTab === 'cart'}
        >
          Cart ({cart.length})
        </button>
      </div>

      <div role="tabpanel">
        {activeTab === 'products' ? <ProductGrid /> : <CartSection />}
      </div>
    </section>
  );
});

export default MainSection;