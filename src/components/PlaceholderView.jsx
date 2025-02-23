import React from 'react';
import { Box } from '@mui/material';
import { Compass } from 'lucide-react';

export const PlaceholderView = () => (
  <Box sx={{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(180deg, #0a0a0a 0%, #121212 100%)',
  }}>
    {/* Ambient glow */}
    <Box sx={{
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(circle at 50% 50%, rgba(139,92,246,0.1), transparent 70%)',
    }} />
    
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
      <Box sx={{
        fontSize: '2rem',
        fontWeight: 'bold',
        color: 'white',
        mb: 2,
      }}>
        Coming Soon
      </Box>
      <Box sx={{
        fontSize: '1.1rem',
        color: 'rgba(255,255,255,0.6)',
        maxWidth: '500px',
        px: 3,
      }}>
        We're working on something exciting. This feature will be available in the next update.
      </Box>
    </Box>
  </Box>
);