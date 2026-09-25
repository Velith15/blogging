import React from 'react';
import './TopicList.css';

interface TopicListProps {
  topics: readonly string[];
  activeTopic: string;
  onSelectTopic: (topic: string) => void;
}

export const TopicList: React.FC<TopicListProps> = ({
  topics,
  activeTopic,
  onSelectTopic,
}) => {
  return (
    <section className="topics-section">
      <div className="container">
        <span className="section-label">EXPLORE</span>
        
        <div className="topics-pills">
          {topics.map((topic) => (
            <button
              key={topic}
              onClick={() => onSelectTopic(topic)}
              className={`topic-pill ${activeTopic === topic ? 'active' : ''}`}
            >
              {topic}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
