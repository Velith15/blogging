import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ARTICLES } from '../data/articles';
import { Newsletter } from '../components/Newsletter';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import './ArticleView.css';

export const ArticleView: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Find current article
  const currentIndex = ARTICLES.findIndex((a) => a.slug === slug);

  if (currentIndex === -1) {
    return <Navigate to="/" replace />;
  }

  const article = ARTICLES[currentIndex];
  const prevArticle = currentIndex > 0 ? ARTICLES[currentIndex - 1] : null;
  const nextArticle = currentIndex < ARTICLES.length - 1 ? ARTICLES[currentIndex + 1] : null;

  return (
    <article className="article-page animate-fade-in">
      <div className="container-narrow">
        <Link to="/" className="back-link">
          <ArrowLeft size={16} />
          <span>Back to writing</span>
        </Link>

        <header className="article-header">
          <span className="article-category-badge">{article.category}</span>
          <h1 className="article-main-title">{article.title}</h1>
          <p className="article-deck">{article.subtitle}</p>
          
          <div className="article-meta-line">
            <span>{article.date}</span>
            <span className="meta-dot">·</span>
            <span>{article.readTime}</span>
          </div>
        </header>

        <div className="article-body">
          {article.content.map((block, index) => {
            if (block.startsWith('## ')) {
              return <h2 key={index} className="article-subheading">{block.replace('## ', '')}</h2>;
            }

            if (block.includes('\n')) {
              const lines = block.split('\n');
              return (
                <div key={index} className="article-list-block">
                  {lines.map((line, lIdx) => (
                    <p key={lIdx} className="article-list-item">{line}</p>
                  ))}
                </div>
              );
            }

            // Regular paragraph formatting
            // Parse bold syntax like **text**
            const parts = block.split(/(\*\*.*?\*\*)/g);
            return (
              <p key={index}>
                {parts.map((part, pIdx) => {
                  if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={pIdx}>{part.slice(2, -2)}</strong>;
                  }
                  return part;
                })}
              </p>
            );
          })}
        </div>

        <div className="article-footer-note">
          <p className="thanks-text">Thanks for reading.</p>
        </div>

        {(prevArticle || nextArticle) && (
          <div className="article-nav-prev-next">
            {prevArticle ? (
              <Link to={`/writing/${prevArticle.slug}`} className="nav-article-card prev">
                <span className="nav-label"><ArrowLeft size={14} /> Previous</span>
                <span className="nav-article-title">{prevArticle.title}</span>
              </Link>
            ) : <div />}

            {nextArticle ? (
              <Link to={`/writing/${nextArticle.slug}`} className="nav-article-card next">
                <span className="nav-label">Next <ArrowRight size={14} /></span>
                <span className="nav-article-title">{nextArticle.title}</span>
              </Link>
            ) : <div />}
          </div>
        )}
      </div>

      <Newsletter />
    </article>
  );
};
