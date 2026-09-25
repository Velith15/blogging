import React from 'react';
import { ArrowDown } from 'lucide-react';
import './Hero.css';

export const Hero: React.FC = () => {
  const scrollToWriting = () => {
    const writingSection = document.getElementById('writing');
    if (writingSection) {
      writingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <span className="hero-eyebrow animate-fade-in delay-1">
            FOUNDER &amp; CEO, MAPLE · BUILDER · WRITER
          </span>

          <h1 className="hero-headline animate-fade-in delay-2">
            I write about building Maple, AI systems, startups, and figuring things out along the way.
          </h1>

          <p className="hero-supporting animate-fade-in delay-3">
            Notes, architectural experiments, startup lessons, and public progress on projects like Cairn &amp; Outbound.
          </p>

          <div className="hero-actions animate-fade-in delay-4">
            <button 
              onClick={scrollToWriting} 
              className="btn-primary"
            >
              Read my writing <span className="arrow">→</span>
            </button>

            <button 
              onClick={scrollToAbout} 
              className="btn-secondary"
            >
              About me
            </button>
          </div>
        </div>

        <div className="scroll-indicator-wrapper animate-fade-in delay-4">
          <button 
            onClick={scrollToWriting} 
            className="scroll-indicator" 
            aria-label="Scroll to featured writing"
          >
            <ArrowDown size={18} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
};
