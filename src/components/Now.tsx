import React from 'react';
import './Now.css';

export const Now: React.FC = () => {
  return (
    <section id="now" className="now-section section-spacing">
      <div className="container">
        <div className="now-wrapper">
          <h2 className="section-heading">Now</h2>

          <div className="now-grid">
            <div className="now-item">
              <span className="now-label">Building</span>
              <div className="now-text">
                <p><strong>Maple</strong> — Founder &amp; CEO building next-generation software products.</p>
                <p className="now-subtext"><strong>Cairn</strong> — The memory layer for autonomous AI agents.</p>
                <p className="now-subtext"><strong>Outbound</strong> — Precision automated outreach platform.</p>
              </div>
            </div>

            <div className="now-item">
              <span className="now-label">Learning</span>
              <p className="now-text">
                AI agent architectures, vector memory synthesis, sales automation workflows, product distribution, and scaling startup execution.
              </p>
            </div>

            <div className="now-item">
              <span className="now-label">Writing</span>
              <p className="now-text">
                Documenting lessons from building Maple, product design trade-offs, and experiments in public.
              </p>
            </div>
          </div>

          <div className="now-timestamp">
            Last updated September 2026
          </div>
        </div>
      </div>
    </section>
  );
};
