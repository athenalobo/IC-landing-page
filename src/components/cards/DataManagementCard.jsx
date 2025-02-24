// src/components/MainView/cards/DataManagementCard.jsx
import React from 'react';
import { ChevronRight } from 'lucide-react';
import CardWrapper from '../CardWrapper';

const DataManagementCard = ({ hoveredCard, setHoveredCard, icon }) => {
  const items = ['Data Model', 'Data Access'];

  return (
    <CardWrapper
      index={5}
      title="Data Management"
      icon={icon}
      hoveredCard={hoveredCard}
      setHoveredCard={setHoveredCard}
    >
      <div style={{ color: '#a0a0a0' }}>
        {items.map((item, i) => (
          <div
            key={i}
            style={{
              padding: '10px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: '8px',
              marginBottom: '10px',
              backgroundColor: hoveredCard === 5 ? '#252531' : '#252531',
              transition: 'background-color 0.3s ease',
            }}
          >
            <span>{item}</span>
            <ChevronRight size={20} />
          </div>
        ))}
      </div>
    </CardWrapper>
  );
};

export default DataManagementCard;