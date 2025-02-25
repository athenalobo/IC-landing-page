import React, { useState, useEffect } from 'react';
import CardWrapper from '../CardWrapper';
import { styles } from '../styles';

const SummaryCard = ({ hoveredCard, setHoveredCard, icon, id }) => {
  const [animatedValue, setAnimatedValue] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimatedValue(prev => (prev < 572.7 ? prev + 5 : 572.7));
    }, 20);
    return () => clearInterval(timer);
  }, []);
  
  const stats = [
    { label: 'Total Files', value: '5,610' },
    { label: 'Lines of Code', value: `${animatedValue.toFixed(1)}K` },
    { label: 'CAST Coverage', value: '92.3%' },
    { label: 'File Size', value: '847 MB' },
    { label: 'Application Size', value: 'XXL' }
  ];
  
  return (
    <CardWrapper
      id={id}
      title="Summary"
      icon={icon}
      hoveredCard={hoveredCard}
      setHoveredCard={setHoveredCard}
    >
      <div>
        {stats.map((stat, index) => (
          <div key={index} style={styles.stat}>
            <span>{stat.label}</span>
            <span style={styles.statValue}>{stat.value}</span>
          </div>
        ))}
      </div>
    </CardWrapper>
  );
};

export default SummaryCard;