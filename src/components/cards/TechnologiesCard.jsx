// src/components/MainView/cards/TechnologiesCard.jsx
import React from 'react';
import CardWrapper from '../CardWrapper';

const TechnologiesCard = ({ hoveredCard, setHoveredCard, icon }) => {
  const technologies = [
    { name: 'Java', percentage: 45.8, color: '#f97316' },
    { name: 'JavaScript', percentage: 22.3, color: '#eab308' },
    { name: 'XML', percentage: 12.7, color: '#a855f7' },
    { name: 'SQL', percentage: 8.4, color: '#ec4899' },
    { name: 'HTML', percentage: 6.2, color: '#06b6d4' },
    { name: 'CSS', percentage: 4.6, color: '#3b82f6' },
  ];

  return (
    <CardWrapper
      index={1}
      title="Programming Technologies"
      icon={icon}
      hoveredCard={hoveredCard}
      setHoveredCard={setHoveredCard}
    >
      <div style={{
        height: '30px',
        backgroundColor: '#2a2a2a',
        borderRadius: '15px',
        overflow: 'hidden',
        display: 'flex',
        marginBottom: '20px',
      }}>
        {technologies.map((tech, i) => (
          <div
            key={i}
            style={{
              width: `${tech.percentage}%`,
              backgroundColor: tech.color,
              transition: 'width 0.5s ease',
            }}
          />
        ))}
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '12px',
        marginTop: '16px',
      }}>
        {technologies.map((tech, i) => (
          <div key={i} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: '#a0a0a0',
            fontSize: '14px',
          }}>
            <div style={{ 
              width: '12px', 
              height: '12px', 
              borderRadius: '50%', 
              backgroundColor: tech.color 
            }} />
            <span>{tech.name} ({tech.percentage}%)</span>
          </div>
        ))}
      </div>
    </CardWrapper>
  );
};

export default TechnologiesCard;