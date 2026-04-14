import React from 'react';
import PricingCard from '../PricingCard/PricingCard';
import './PricingSection.css';

const pricingPlans = [
  {
    name: 'Starter',
    subText: 'Perfect for getting started',
    price: '0',
    period: '/Month',
    features: [
      { text: 'Access to 10 free tools', included: true },
      { text: 'Basic templates', included: true },
      { text: 'Community support', included: true },
      { text: '1 project per month', included: true },
    ],
    buttonText: 'Get Started Free',
    featured: false,
  },
  {
    name: 'Pro',
    subText: 'Best for professionals',
    price: '29',
    period: '/Month',
    features: [
      { text: 'Access to all premium tools', included: true },
      { text: 'Unlimited templates', included: true },
      { text: 'Priority support', included: true },
      { text: 'Unlimited projects', included: true },
      { text: 'Cloud sync', included: true },
      { text: 'Advanced analytics', included: true },
    ],
    buttonText: 'Start Pro Trial',
    featured: true,
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    subText: 'For teams and businesses',
    price: '99',
    period: '/Month',
    features: [
      { text: 'Everything in Pro', included: true },
      { text: 'Team collaboration', included: true },
      { text: 'Custom integrations', included: true },
      { text: 'Dedicated support', included: true },
      { text: 'SLA guarantee', included: true },
      { text: 'Custom branding', included: true },
    ],
    buttonText: 'Contact Sales',
    featured: false,
  },
];

function PricingSection() {
  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-container">
        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingSection;