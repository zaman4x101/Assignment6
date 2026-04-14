import React from 'react';
import './PricingCard.css';

function PricingCard({ plan }) {
  return (
    <div className={`pricing-card ${plan.featured ? 'pricing-card--featured' : ''}`}>
      {plan.badge && (
        <div className="pricing-badge">{plan.badge}</div>
      )}

      <div className="pricing-card-header">
        <h3 className="pricing-name">{plan.name}</h3>
        <p className="pricing-subtext">{plan.subText}</p>
      </div>

      <div className="pricing-price-box">
        <span className="pricing-currency">$</span>
        <span className="pricing-amount">{plan.price}</span>
        <span className="pricing-period">{plan.period}</span>
      </div>

      <ul className="pricing-features">
        {plan.features.map((feature, index) => (
          <li key={index} className="pricing-feature-item">
            <span className="feature-check-icon">✓</span>
            {feature.text}
          </li>
        ))}
      </ul>

      <button className={`pricing-action-btn ${plan.featured ? 'btn--featured' : 'btn--standard'}`}>
        {plan.buttonText}
      </button>
    </div>
  );
}

export default PricingCard;