import React from 'react';
import { Box, Tooltip } from '@mui/material';
import { Eye, GitBranch, Gauge, Search, Settings } from 'lucide-react';

// Compact NavigationBar Component
const CompactNavigationBar = ({ activeSection, onSectionChange, availableSections, selectedApp }) => {
  // If status is Configuration Pending, only show configuration
  if (selectedApp?.status === 'Configuration pending') {
    return (
      <Box
        onClick={() => onSectionChange('configuration')}
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 0.75,
          color: 'white',
          cursor: 'pointer',
          padding: '0.3rem 0.6rem',
          borderRadius: '4px',
          backgroundColor: 'rgba(139,92,246,0.2)',
          height: '2rem',
        }}
      >
        <Settings size={14} />
        <span style={{ fontSize: '0.75rem', fontWeight: 500 }}>Configuration</span>
      </Box>
    );
  }

  const sections = [
    { id: 'view', label: 'View', icon: Eye, tooltip: 'View' },
    { id: 'impact', label: 'Impact', icon: GitBranch, tooltip: 'Run impact analysis' },
    { id: 'improve', label: 'Improve', icon: Gauge, tooltip: 'Improve' },
    { id: 'search', label: 'Search', icon: Search, tooltip: 'Search in CAST Imaging' },
    { id: 'configuration', label: 'Configuration', icon: Settings, tooltip: 'Application configuration' },
  ];

  return (
    <Box sx={{ display: 'flex', gap: 0.75 }}>
      {sections.map((section) => {
        const Icon = section.icon;
        const isActive = activeSection === section.id;
        const isEnabled = section.id === 'configuration' || availableSections.includes(section.id);
        
        if (!isEnabled) return null;
        
        return (
          <Tooltip key={section.id} title={section.tooltip} placement="bottom" arrow>
            <Box
              onClick={() => onSectionChange(section.id)}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.75,
                color: isActive ? 'white' : 'rgba(255,255,255,0.6)',
                cursor: 'pointer',
                padding: '0.3rem 0.6rem',
                borderRadius: '4px',
                transition: 'all 0.2s ease',
                position: 'relative',
                height: '2rem',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  color: 'white',
                },
                ...(isActive && {
                  backgroundColor: 'rgba(139,92,246,0.2)',
                  borderBottom: '2px solid #8b5cf6',
                })
              }}
            >
              <Icon size={14} />
              <span style={{ 
                fontSize: '0.75rem',
                fontWeight: isActive ? 600 : 500,
                whiteSpace: 'nowrap'
              }}>
                {section.label}
              </span>
            </Box>
          </Tooltip>
        );
      })}
    </Box>
  );
};

export default CompactNavigationBar;