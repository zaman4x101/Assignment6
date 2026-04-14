import React from 'react';
import { bannerImg, playImg } from '../../data/products';
import './Banner.css';

function Banner() {
  return (
    <section className="banner" id="home">
      <div className="banner-content">
        <div className="banner-badge">
          <span className="badge-dot" />
          New: AI-Powered Tools Available
        </div>

        <h1 className="banner-heading">
          Supercharge Your <br />
          <span className="banner-heading--highlight">Digital Workflow</span>
        </h1>

        <p className="banner-desc">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today.Explore Products

        </p>

        <div className="banner-actions">
          <button className="btn-primary">
            <img src={playImg} alt="" className="btn-icon" />
            Explore Tools
          </button>
          <button className="btn-secondary">Watch Demo</button>
        </div>
      </div>

      <div className="banner-image-wrap">
        <div className="banner-image-glow" />
        <img src={bannerImg} alt="Digital tools visualization" className="banner-image" />
      </div>
    </section>
  );
}

export default Banner;
