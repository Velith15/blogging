import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { FeaturedArticle } from '../components/FeaturedArticle';
import { ArticleList } from '../components/ArticleList';
import { TopicList } from '../components/TopicList';
import { CurrentlyBuilding } from '../components/CurrentlyBuilding';
import { About } from '../components/About';
import { Now } from '../components/Now';
import { Newsletter } from '../components/Newsletter';
import { ARTICLES, TOPICS } from '../data/articles';

export const Home: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<string>('All');

  const featuredArticle = ARTICLES.find((a) => a.featured) || ARTICLES[0];
  // Since this is our inaugural article, we display it as featured and in the list
  const filteredArticles = selectedTopic === 'All'
    ? ARTICLES
    : ARTICLES.filter((a) => a.category === selectedTopic);

  return (
    <main>
      <Hero />
      <FeaturedArticle article={featuredArticle} />
      <TopicList 
        topics={TOPICS} 
        activeTopic={selectedTopic} 
        onSelectTopic={setSelectedTopic} 
      />
      <ArticleList articles={filteredArticles} />
      <CurrentlyBuilding />
      <About />
      <Now />
      <Newsletter />
    </main>
  );
};
