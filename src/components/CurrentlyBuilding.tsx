import React from 'react';
import './CurrentlyBuilding.css';

export const CurrentlyBuilding: React.FC = () => {
  return (
    <section className="building-section section-spacing">
      <div className="container">
        <span className="section-label">CURRENTLY BUILDING</span>

        <div className="building-grid">
          {/* Main Startup - Maple */}
          <div className="building-card featured-building-card">
            <div className="building-badge">STARTUP</div>
            <div className="building-header">
              <h2 className="project-title">Maple</h2>
              <span className="project-role">Founder &amp; CEO</span>
            </div>
            <p className="project-tagline">Building next-generation software products and intelligence tools.</p>
            <p className="project-description">
              As Founder &amp; CEO of Maple, I lead product vision, strategy, and engineering. We are focused on building thoughtful software products, experimenting with AI capabilities, and creating tools that empower modern software builders and teams.
            </p>
          </div>

          {/* Project 1 - Cairn */}
          <div className="building-card">
            <div className="building-badge">PROJECT</div>
            <div className="building-header">
              <h3 className="project-title-sub">Cairn</h3>
              <span className="project-tagline-sub">The memory layer for AI agents</span>
            </div>
            <p className="project-description">
              An ongoing exploration into how autonomous AI agents can store, index, and retrieve distilled experiences across tasks—transforming them from stateless prompt handlers into persistent software collaborators.
            </p>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-link animated-link"
            >
              <span>Explore Cairn</span>
              <span>→</span>
            </a>
          </div>

          {/* Project 2 - Outbound */}
          <div className="building-card">
            <div className="building-badge">PROJECT</div>
            <div className="building-header">
              <h3 className="project-title-sub">Outbound</h3>
              <span className="project-tagline-sub">Precision automated outreach engine</span>
            </div>
            <p className="project-description">
              A high-precision platform designed to automate intelligent prospect research, personalization, and outreach workflows without sacrificing authenticity or sender reputation.
            </p>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-link animated-link"
            >
              <span>Explore Outbound</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
