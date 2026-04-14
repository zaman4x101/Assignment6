export const pricingPlans = [
  {
    name: 'Starter',
    price: 9,
    period: '/month',
    featured: false,
    badge: null,
    features: [
      { text: 'Up to 3 tools', included: true },
      { text: 'Basic analytics', included: true },
      { text: 'Email support', included: true },
      { text: 'API access', included: false },
      { text: 'Priority support', included: false },
    ],
  },
  {
    name: 'Professional',
    price: 29,
    period: '/month',
    featured: true,
    badge: 'Most Popular',
    features: [
      { text: 'Unlimited tools', included: true },
      { text: 'Advanced analytics', included: true },
      { text: 'Priority support', included: true },
      { text: 'Full API access', included: true },
      { text: 'Team collaboration', included: false },
    ],
  },
  {
    name: 'Enterprise',
    price: 79,
    period: '/month',
    featured: false,
    badge: null,
    features: [
      { text: 'Unlimited tools', included: true },
      { text: 'Custom analytics', included: true },
      { text: '24/7 dedicated support', included: true },
      { text: 'Full API access', included: true },
      { text: 'Team collaboration', included: true },
    ],
  },
];
