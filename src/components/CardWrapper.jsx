// src/components/MainView/CardWrapper.jsx
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
  themeColor = '#8b5cf6'
}) => {
  return (
    <Card
      sx={{
        ...styles.card,
        ...(isClickable && hoveredCard === index ? styles.cardHover : {}),
        cursor: isClickable ? 'pointer' : 'default',
      }}
      onMouseEnter={() => isClickable && setHoveredCard(index)}
      onMouseLeave={() => isClickable && setHoveredCard(null)}
    >
      {isClickable && (
        <div style={{
          ...styles.cardOverlay,
          color: themeColor
        }}>
          <span>View Details</span>
          <ChevronRight size={16} />
        </div>
      )}
      <CardContent sx={{ padding: '20px' }}>
        <h2 style={{
          ...styles.title,
          '& svg': { color: themeColor }
        }}>
          <Icon size={24} />
          {title}
        </h2>
        {children}
      </CardContent>
    </Card>
  );
};

export default CardWrapper;