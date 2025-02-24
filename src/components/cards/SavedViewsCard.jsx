// src/components/MainView/cards/SavedViewsCard.jsx
import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import CardWrapper from '../CardWrapper';

const SavedViewsCard = ({ hoveredCard, setHoveredCard, icon }) => {
  const [hoveredView, setHoveredView] = useState(null);
  
  const savedViews = [
    { 
      name: 'DCH view',
      author: 'Damien Charlemagne',
      date: 'Feb 21, 2025 15:30',
    },
    {
      name: 'OBO architecture graph',
      author: 'Olivier Bonsignour',
      date: 'Feb 20, 2025 11:45',
    },
    {
      name: 'SKN cloud boosters',
      author: 'Shanshan Kan',
      date: 'Feb 19, 2025 09:15',
    },
  ];

  return (
    <CardWrapper
      index={3}
      title="Saved Views"
      icon={icon}
      hoveredCard={hoveredCard}
      setHoveredCard={setHoveredCard}
      isClickable={false}
    >
      {savedViews.map((view, i) => (
        <div
          key={i}
          style={{
            padding: '12px',
            borderRadius: '8px',
            backgroundColor: '#252531',
            marginBottom: '12px',
            transition: 'all 0.2s ease',
            cursor: 'pointer',
            transform: hoveredView === i ? 'translateX(8px)' : 'none',
          }}
          onMouseEnter={() => setHoveredView(i)}
          onMouseLeave={() => setHoveredView(null)}
          onClick={() => console.log(`Opening view: ${view.name}`)}
        >
          <div style={{ color: 'white', marginBottom: '4px' }}>
            {view.name}
            <ChevronRight 
              size={16} 
              style={{ 
                display: 'inline-block',
                marginLeft: '8px',
                color: '#8b5cf6',
                transition: 'transform 0.2s ease',
                transform: hoveredView === i ? 'translateX(4px)' : 'none'
              }} 
            />
          </div>
          <div style={{ color: '#a0a0a0', fontSize: '14px' }}>
            Saved by {view.author} on {view.date}
          </div>
        </div>
      ))}
    </CardWrapper>
  );
};

export default SavedViewsCard;