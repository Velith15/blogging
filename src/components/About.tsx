import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

export const About: React.FC = () => {
  return (
    <section id="about" className="about-section section-spacing">
      <div className="container">
        <div className="about-wrapper">
          <h2 className="section-heading">A little about me</h2>
          
          <div className="about-copy">
            <p>
              I'm Rishabh — Founder &amp; CEO of <strong>Maple</strong>, a student, and a builder fascinated by AI architecture, product development, and turning ideas into software people actually use.
            </p>
            <p>
              Currently leading Maple and spearheading engineering on projects like <strong>Cairn</strong> (agent memory layer) and <strong>Outbound</strong> (precision outreach automation). This site is where I document notes, experiments, lessons, and thoughts along the way.
            </p>
          </div>

          <div className="about-link-wrapper">
            <Link to="/about" className="animated-link about-link">
              <span>More about me</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
