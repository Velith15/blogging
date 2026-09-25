import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import './Navbar.css';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" aria-label="Rishabh Tiwari Home">
          <span className="logo-text">Rishabh</span>
        </Link>

        <nav className="navbar-nav">
          <Link 
            to="/#writing" 
            className="nav-link" 
            onClick={() => scrollToSection('writing')}
          >
            Writing
          </Link>
          <Link 
            to="/about" 
            className="nav-link"
          >
            About
          </Link>
          <Link 
            to="/#now" 
            className="nav-link"
            onClick={() => scrollToSection('now')}
          >
            Now
          </Link>

          <button 
            onClick={toggleTheme} 
            className="theme-toggle-btn"
            aria-label={`Toggle ${theme === 'light' ? 'dark' : 'light'} theme`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <Moon size={16} strokeWidth={1.8} />
            ) : (
              <Sun size={16} strokeWidth={1.8} />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};
