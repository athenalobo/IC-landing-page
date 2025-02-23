// NavigationBar.jsx
import React from 'react';
import { Box } from '@mui/material';

const NavigationBar = ({ activeSection, onSectionChange }) => {
  const sections = [
    { id: 'view', label: 'View' },
    { id: 'improve', label: 'Improve' },
    { id: 'monitor', label: 'Monitor' },
  ];

  return (
    <Box sx={{
      display: 'flex',
      gap: 2,
    }}>
      {sections.map((section) => (
        <Box
          key={section.id}
          onClick={() => onSectionChange(section.id)}
          sx={{
            color: activeSection === section.id ? 'white' : 'rgba(255,255,255,0.5)',
            cursor: 'pointer',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.1)',
            },
          }}
        >
          {section.label}
        </Box>
      ))}
    </Box>
  );
};

export default NavigationBar;