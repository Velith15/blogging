import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../data/articles';
import './FeaturedArticle.css';

interface FeaturedArticleProps {
  article: Article;
}

export const FeaturedArticle: React.FC<FeaturedArticleProps> = ({ article }) => {
  return (
    <section className="featured-section">
      <div className="container">
        <span className="section-label">FEATURED</span>
        
        <Link to={`/writing/${article.slug}`} className="featured-card">
          <div className="featured-content">
            <h2 className="featured-title">
              {article.title}
            </h2>

            <div className="featured-meta">
              <span>{article.date}</span>
              <span className="dot">·</span>
              <span>{article.readTime}</span>
            </div>

            <p className="featured-description">
              {article.subtitle}
            </p>

            <div className="featured-link">
              <span>Read article</span>
              <span className="arrow">→</span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};
