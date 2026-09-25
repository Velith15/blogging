import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../data/articles';
import './ArticleCard.css';

interface ArticleCardProps {
  article: Article;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <Link to={`/writing/${article.slug}`} className="article-row">
      <div className="article-number">{article.number}</div>

      <div className="article-main">
        <h3 className="article-row-title">{article.title}</h3>
        <p className="article-row-description">{article.subtitle}</p>
        <div className="article-row-meta">
          <span>{article.date}</span>
          <span className="meta-dot">·</span>
          <span>{article.readTime}</span>
          <span className="meta-dot">·</span>
          <span className="article-row-category">{article.category}</span>
        </div>
      </div>

      <div className="article-row-arrow">
        <span>→</span>
      </div>
    </Link>
  );
};
