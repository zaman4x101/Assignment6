import React from 'react';
import './StepsSection.css';

// Import your icons from assets
import userIcon from '../../assets/user.png'; 
import boxIcon from '../../assets/package.png';
import rocketIcon from '../../assets/rocket.png';

const steps = [
  {
    number: '01',
    title: 'Create Account',
    description: 'Sign up for free in seconds. No credit card required to get started.',
    icon: userIcon,
  },
  {
    number: '02',
    title: 'Choose Products',
    description: 'Browse our catalog and select the tools that fit your needs.',
    icon: boxIcon,
  },
  {
    number: '03',
    title: 'Start Creating',
    description: 'Download and start using your premium tools immediately.',
    icon: rocketIcon,
  },
];

function StepsSection() {
  return (
    <section className="steps-section" id="steps">
      <div className="steps-container">
        <div className="section-header">
          <h2 className="section-title">Get Started in 3 Steps</h2>
          <p className="section-desc">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step) => (
            <div className="step-card" key={step.number}>
              {/* Badge positioned at top right */}
              <div className="step-number-badge">{step.number}</div>
              
              {/* Icon with light purple circular background */}
              <div className="step-icon-container">
                <div className="step-icon-bg">
                  <img src={step.icon} alt={step.title} className="step-icon" />
                </div>
              </div>

              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StepsSection;