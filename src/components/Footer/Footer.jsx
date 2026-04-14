import React from 'react';
import './Footer.css';

const footerLinks = {
  Product: ['Features', 'Pricing', 'Templates', 'Integrations'],
  Company: ['About', 'Blog', 'Careers', 'Press'],
  Resources: ['Documentation', 'Help Center', 'Community', 'Contact'],
};

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2 className="footer-logo">DigiTools</h2>
            <p className="footer-brand-desc">
              Premium digital tools for creators, professionals, and businesses. 
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div className="footer-col" key={heading}>
              <h4 className="footer-col-title">{heading}</h4>
              <ul className="footer-link-list">
                {links.map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="footer-link">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="footer-col">
            <h4 className="footer-col-title">Social Links</h4>
            <div className="footer-socials">
              <a href="#" className="social-link" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="social-link" aria-label="Facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="social-link" aria-label="X">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p className="footer-copy">© 2026 Digitools. All rights reserved.</p>
          </div>
          <div className="footer-bottom-right">
            <a href="#" className="footer-bottom-link">Privacy Policy</a>
            <a href="#" className="footer-bottom-link">Terms of Service</a>
            <a href="#" className="footer-bottom-link">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;