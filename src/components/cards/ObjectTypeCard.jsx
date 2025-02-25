// src/components/MainView/cards/ObjectTypeCard.jsx
import React from 'react';
import CardWrapper from '../CardWrapper';
import { Typography } from '@mui/material';

const ObjectTypeCard = ({ hoveredCard, setHoveredCard, icon, id }) => {
  const objectTypes = [
    { name: 'Controllers', count: 125 },
    { name: 'Services', count: 243 },
    { name: 'Repositories', count: 98 }
  ];

  return (
    <CardWrapper
      id={id}
      title="Object Type Taxonomy"
      icon={icon}
      hoveredCard={hoveredCard}
      setHoveredCard={setHoveredCard}
    >
      {/* {objectTypes.map((type, i) => (
        <div
          key={i}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px',
            borderRadius: '8px',
            marginBottom: '8px',
            backgroundColor: hoveredCard === 4 ? '#252531' : '#252531',
            transition: 'background-color 0.3s ease',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ 
              width: '8px', 
              height: '8px', 
              borderRadius: '50%', 
              backgroundColor: '#8b5cf6' 
            }} />
            <span style={{ color: '#a0a0a0' }}>{type.name}</span>
          </div>
          <span style={{ color: 'white', fontWeight: 500 }}>{type.count}</span>
        </div>
      ))} */}
      <Typography color='#a0a0a0'>{'This view elegantly categorizes objects by type, offering an intuitive way to explore and understand your application\'s structure with remarkable clarity.'}</Typography>
    </CardWrapper>
  );
};

export default ObjectTypeCard;