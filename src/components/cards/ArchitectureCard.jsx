// src/components/MainView/cards/ArchitectureCard.jsx
import React from 'react';
import { ChevronRight } from 'lucide-react';
import CardWrapper from '../CardWrapper';

const ArchitectureCard = ({ hoveredCard, setHoveredCard, icon }) => {
  const layers = [
    'Presentation Layer',
    'Business Layer',
    'Data Access Layer',
    'Integration Layer'
  ];

  return (
    <CardWrapper
      index={2}
      title="Architecture Layer"
      icon={icon}
      hoveredCard={hoveredCard}
      setHoveredCard={setHoveredCard}
    >
      <div style={{ color: '#a0a0a0' }}>
        {layers.map((layer, i) => (
          <div
            key={i}
            style={{
              padding: '10px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: '8px',
              marginBottom: '10px',
              backgroundColor: hoveredCard === 2 ? '#2a2a2a' : 'transparent',
              transition: 'background-color 0.3s ease',
            }}
          >
            <span>{layer}</span>
            <ChevronRight size={20} />
          </div>
        ))}
      </div>
    </CardWrapper>
  );
};

export default ArchitectureCard;