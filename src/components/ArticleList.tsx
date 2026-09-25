import React from 'react';
import { Article } from '../data/articles';
import { ArticleCard } from './ArticleCard';
import './ArticleList.css';

interface ArticleListProps {
  articles: Article[];
}

export const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
  return (
    <section id="writing" className="article-list-section section-spacing">
      <div className="container">
        <div className="article-list-header">
          <h2 className="section-heading">Latest writing</h2>
          <p className="section-subheading">Things I've been thinking about lately.</p>
        </div>

        <div className="article-rows-wrapper">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};
