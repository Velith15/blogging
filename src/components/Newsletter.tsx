import React, { useState } from 'react';
import './Newsletter.css';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 800);
  };

  return (
    <section className="newsletter-section section-spacing">
      <div className="container">
        <div className="newsletter-card">
          <div className="newsletter-content">
            <h2 className="newsletter-heading">Occasional notes. No noise.</h2>
            <p className="newsletter-description">
              I send essays, experiments, and things I'm thinking about. Usually when I have something worth saying.
            </p>

            {status === 'success' ? (
              <div className="newsletter-success">
                <span>✓ Thank you for subscribing. You'll hear from me soon.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="newsletter-form">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="newsletter-input"
                  aria-label="Email address for newsletter"
                />
                <button 
                  type="submit" 
                  disabled={status === 'submitting'} 
                  className="newsletter-button"
                >
                  {status === 'submitting' ? 'Subscribing...' : 'Subscribe →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
