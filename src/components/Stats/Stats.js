import React from 'react';
import './Stats.css';

const statsData = [
  { number: '50K', suffix: '+', label: 'Active Users' },
  { number: '200', suffix: '+', label: 'Premium Tools' },
  { number: '4.9', suffix: '', label: 'Ratings' },
];

function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-inner">
        {statsData.map((stat, index) => (
          <React.Fragment key={stat.label}>
            <div className="stat-item">
              <span className="stat-number">
                {stat.number}
                <span className="stat-suffix">{stat.suffix}</span>
              </span>
              <p className="stat-label">{stat.label}</p>
            </div>
            {index < statsData.length - 1 && (
              <div className="stat-divider" aria-hidden="true" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default Stats;
