// src/components/MainView/cards/CallGraphsCard.jsx
import React from 'react';
import { ChevronRight } from 'lucide-react';
import CardWrapper from '../CardWrapper';

const CallGraphsCard = ({ hoveredCard, setHoveredCard, icon, id }) => {
  const items = ['Transactions', 'Data Call Graphs'];

  return (
    <CardWrapper
      id={id}
      title="End to End Call Graphs"
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
              backgroundColor: hoveredCard === 6 ? '#252531' : '#252531',
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

export default CallGraphsCard;