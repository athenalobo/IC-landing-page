import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import CardWrapper from '../CardWrapper';

const DataManagementCard = ({ hoveredCard, setHoveredCard, icon, id}) => {
  const items = ['Data Model', 'Data Access'];
  const [hoveredItem, setHoveredItem] = useState(null);
  
  const handleItemClick = (item) => {
    console.log(`Clicked on ${item}`);
    // Add your navigation or action logic here
  };

  return (
    <CardWrapper
      id={id}
      title="Data Management"
      icon={icon}
      hoveredCard={hoveredCard}
      setHoveredCard={setHoveredCard}
      isClickable={false} // Add this prop to CardWrapper and use it to disable card-level clicks
    >
      <div style={{ color: '#a0a0a0' }}>
        {items.map((item, i) => (
          <div
            key={i}
            style={{
              color: 'white',
              padding: '10px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: '8px',
              marginBottom: '10px',
              backgroundColor: hoveredCard === 5 ? '#252531' : '#252531',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              transform: hoveredItem === i ? 'translateX(8px)' : 'translateX(0)',
            }}
            onClick={() => handleItemClick(item)}
            onMouseEnter={() => setHoveredItem(i)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <span>{item}</span>
            <ChevronRight 
              size={20} 
              color={hoveredItem === i ? '#8a2be2' : 'currentColor'} 
              style={{ 
                transition: 'color 0.3s ease, transform 0.3s ease',
                transform: hoveredItem === i ? 'translateX(3px)' : 'translateX(0)'
              }}
            />
          </div>
        ))}
      </div>
    </CardWrapper>
  );
};

export default DataManagementCard;