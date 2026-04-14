import React from 'react';
import './Ready.css';

function Ready() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2 className="cta-title">Ready To Transform Your Workflow?</h2>
        <p className="cta-description">
          Join thousands of professionals who are already using Digitools to work smarter.
          Start your free trial today.
        </p>

        <div className="cta-button-group">
          <button className="cta-btn-primary">Explore Products</button>
          <button className="cta-btn-secondary">View Pricing</button>
        </div>

        <p className="cta-footer-text">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
}

export default Ready;
