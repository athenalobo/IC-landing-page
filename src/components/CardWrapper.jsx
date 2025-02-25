import React from 'react';
import { Card, CardContent } from '@mui/material';
import { ChevronRight } from 'lucide-react';
import { styles } from './styles';

const CardWrapper = ({
  children,
  index,
  title,
  icon: Icon,
  isClickable = true,
  hoveredCard,
  setHoveredCard,
  themeColor = '#8b5cf6',
  id
}) => {
  const isHovered = hoveredCard === id;
  
  return (
    <Card
      sx={{
        ...styles.card,
        ...(isClickable && isHovered ? styles.cardHover : {}),
        cursor: isClickable ? 'pointer' : 'default',
        position: 'relative', // Ensure overlay is positioned relative to card
      }}
      onMouseEnter={() => isClickable && setHoveredCard(id)}
      onMouseLeave={() => isClickable && setHoveredCard(null)}
    >
      {isClickable && isHovered && (
        <div style={{
          ...styles.cardOverlay,
          color: themeColor,
          position: 'absolute',
          top: '10px',
          right: '10px',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          zIndex: 2
        }}>
          <span>View Details</span>
          <ChevronRight size={16} />
        </div>
      )}
      <CardContent sx={{ padding: '20px' }}>
        <h2 style={{
          ...styles.title,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '16px'
        }}>
          <Icon size={24} color={themeColor} />
          {title}
        </h2>
        {children}
      </CardContent>
    </Card>
  );
};

export default CardWrapper;