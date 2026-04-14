import bannerImg from '../assets/banner.png';
import designToolImg from '../assets/design-tool.png';
import operationImg from '../assets/operation.png';
import packageImg from '../assets/package.png';
import portfolioImg from '../assets/portfolio.png';
import rocketImg from '../assets/rocket.png';
import shoppingCartImg from '../assets/shopping-cart.png';
import socialMediaImg from '../assets/social-media.png';
import userImg from '../assets/user.png';
import writingImg from '../assets/writing.png';
import playImg from '../assets/Play.png';

export { bannerImg, shoppingCartImg, playImg, operationImg, rocketImg };

export const products = [
  {
    id: 1,
    name: 'ResumeAI Pro',
    description:
      'Craft ATS-optimized resumes in minutes with AI-powered suggestions and 100+ professional templates.',
    price: 12,
    period: 'monthly',
    tag: 'Popular',
    tagType: 'popular',
    features: [
      '100+ professional templates',
      'ATS optimization engine',
      'Export to PDF & Word',
      'AI content suggestions',
    ],
    icon: writingImg,
  },
  {
    id: 2,
    name: 'DesignCraft Suite',
    description:
      'All-in-one design toolkit for creating stunning visuals, logos, and marketing materials with ease.',
    price: 19,
    period: 'monthly',
    tag: 'New',
    tagType: 'new',
    features: [
      '10,000+ design assets',
      'Brand kit management',
      'One-click export',
      'Team collaboration',
    ],
    icon: designToolImg,
  },
  {
    id: 3,
    name: 'SocialBoost Manager',
    description:
      'Schedule, analyze, and grow your social media presence across all major platforms automatically.',
    price: 29,
    period: 'monthly',
    tag: 'Best Seller',
    tagType: 'bestseller',
    features: [
      'Multi-platform scheduling',
      'AI caption generator',
      'Analytics dashboard',
      'Competitor analysis',
    ],
    icon: socialMediaImg,
  },
  {
    id: 4,
    name: 'PortfolioHub',
    description:
      'Showcase your work with a stunning portfolio website. No coding required — go live in minutes.',
    price: 49,
    period: 'one-time',
    tag: 'Popular',
    tagType: 'popular',
    features: [
      'Drag & drop builder',
      'Custom domain support',
      'SEO optimization',
      'Contact form built-in',
    ],
    icon: portfolioImg,
  },
  {
    id: 5,
    name: 'LaunchPad CRM',
    description:
      'Manage leads, automate follow-ups, and close more deals with our smart CRM for growing teams.',
    price: 39,
    period: 'monthly',
    tag: 'New',
    tagType: 'new',
    features: [
      'Visual pipeline management',
      'Email automation',
      'Lead scoring AI',
      '250+ integrations',
    ],
    icon: rocketImg,
  },
  {
    id: 6,
    name: 'PackageFlow Pro',
    description:
      'Streamline product delivery and inventory management with real-time tracking and smart insights.',
    price: 99,
    period: 'yearly',
    tag: 'Best Seller',
    tagType: 'bestseller',
    features: [
      'Real-time tracking',
      'Inventory analytics',
      'Bulk order processing',
      'Full API access',
    ],
    icon: packageImg,
  },
  {
    id: 7,
    name: 'TeamOps Hub',
    description:
      'All your team operations in one place — tasks, wikis, docs, and meetings seamlessly integrated.',
    price: 15,
    period: 'monthly',
    tag: 'Popular',
    tagType: 'popular',
    features: [
      'Task & project management',
      'Knowledge base wiki',
      'Meeting scheduler',
      'Time tracking',
    ],
    icon: operationImg,
  },
  {
    id: 8,
    name: 'UserInsight Analytics',
    description:
      'Understand your users deeply with heatmaps, session recordings, and powerful funnel analysis.',
    price: 59,
    period: 'monthly',
    tag: 'New',
    tagType: 'new',
    features: [
      'Heatmaps & recordings',
      'Conversion funnels',
      'Behavioral analytics',
      'GDPR compliant',
    ],
    icon: userImg,
  },
];
