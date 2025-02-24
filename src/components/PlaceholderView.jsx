import React from 'react';
import { Compass } from 'lucide-react';
import { Box, Typography, keyframes } from '@mui/material';

const float = keyframes`
  0%, 100% { transform: translateY(0) translateX(0); }
  25% { transform: translateY(-20px) translateX(10px); }
  50% { transform: translateY(-10px) translateX(-10px); }
  75% { transform: translateY(-30px) translateX(5px); }
`;

export const PlaceholderView = ({ menuItem }) => (
  <Box sx={{
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(180deg, #0a0a0a 0%, #121212 100%)',
    position: 'relative', // Changed from absolute to relative
  }}>
    <Box sx={{
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(circle at 50% 50%, rgba(139,92,246,0.1), transparent 70%)',
      pointerEvents: 'none',
    }} />

    {/* Floating particles */}
    {[...Array(20)].map((_, i) => (
      <Box
        key={i}
        sx={{
          position: 'absolute',
          width: '4px',
          height: '4px',
          backgroundColor: 'rgba(139,92,246,0.9)',
          borderRadius: '50%',
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animation: `${float} ${Math.random() * 10 + 10}s linear infinite`,
          animationDelay: `${Math.random() * 5}s`,
        }}
      />
    ))}
    
    {/* Content */}
    <Box sx={{
      position: 'relative',
      textAlign: 'center',
      zIndex: 1,
    }}>
      <Compass 
        size={100}
        style={{
          color: '#8b5cf6',
          marginBottom: '2rem',
          filter: 'drop-shadow(0 0 20px rgba(139,92,246,0.3))',
        }}
      />
      <Typography variant="h4" sx={{
        fontWeight: 'bold',
        color: 'white',
        mb: 2,
      }}>
        {menuItem}
      </Typography>
      <Typography variant="body1" sx={{
        color: 'rgba(255,255,255,0.6)',
        maxWidth: '500px',
        px: 3,
      }}>
        We're working on something exciting. This feature will be available in the next update.
      </Typography>
    </Box>
  </Box>
);