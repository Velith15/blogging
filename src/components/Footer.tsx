import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-name">Rishabh Tiwari</h3>
            <p className="footer-tagline">Building things. Writing things down.</p>
          </div>

          <div className="footer-links-grid">
            <div className="footer-column">
              <span className="footer-column-title">Navigation</span>
              <Link to="/#writing" onClick={() => scrollToSection('writing')} className="footer-link">Writing</Link>
              <Link to="/#about" onClick={() => scrollToSection('about')} className="footer-link">About</Link>
              <Link to="/#now" onClick={() => scrollToSection('now')} className="footer-link">Now</Link>
            </div>

            <div className="footer-column">
              <span className="footer-column-title">Connect</span>
              <a href="https://x.com/Rishabh_tii" target="_blank" rel="noopener noreferrer" className="footer-link">X</a>
              <a href="https://www.linkedin.com/in/rishabhhti/" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
              <a href="https://github.com/Velith15" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
              <a href="https://www.instagram.com/rishabhh.exee/" target="_blank" rel="noopener noreferrer" className="footer-link">Instagram</a>
              <a href="mailto:rishabhh.exe@gmail.com" className="footer-link">Email</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Rishabh Tiwari</span>
        </div>
      </div>
    </footer>
  );
};
