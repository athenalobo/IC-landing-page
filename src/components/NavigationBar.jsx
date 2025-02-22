// src/components/MainView/NavigationBar.jsx
import React from 'react';
import { Box } from '@mui/material';
import { Visibility, Timeline, FindInPage } from '@mui/icons-material';
import { NavButton } from './styled/StyledComponents';

const NavigationBar = ({ activeSection, onSectionChange }) => {
  const navigationItems = [
    { key: 'view', icon: <Visibility />, label: 'View' },
    { key: 'impact', icon: <Timeline />, label: 'Run Impact Analysis' },
    { key: 'improve', icon: <Timeline />, label: 'Improve' },
    { key: 'search', icon: <FindInPage />, label: 'Search in CAST Imaging' }
  ];

  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      {navigationItems.map(({ key, icon, label }) => (
        <NavButton
          key={key}
          active={activeSection === key}
          onClick={() => onSectionChange(key)}
          startIcon={icon}
        >
          {label}
        </NavButton>
      ))}
    </Box>
  );
};

export default NavigationBar;