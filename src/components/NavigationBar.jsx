import React from 'react';
import { Box } from '@mui/material';
import { 
  Eye, 
  GitBranch, 
  Gauge, 
  Search,
  Settings,
} from 'lucide-react';

const NavigationBar = ({ activeSection, onSectionChange, availableSections}) => {
  const sections = [
    { 
      id: 'view', 
      label: 'View',
      icon: Eye,
    },
    { 
      id: 'impact', 
      label: 'Run impact analysis',
      icon: GitBranch,
    },
    { 
      id: 'improve', 
      label: 'Improve',
      icon: Gauge,
    },
    { 
      id: 'search', 
      label: 'Search in CAST Imaging',
      icon: Search,
    },
    { 
      id: 'configuration', 
      label: 'Application configuration',
      icon: Settings,
    },
  ];

  return (
    <Box sx={{
      display: 'flex',
      gap: 1,
    }}>
      {sections.map((section) => {
        const Icon = section.icon;
        const isActive = activeSection === section.id;
        const isEnabled = section.id === 'configuration' || availableSections.includes(section.id);
        
        if (!isEnabled) return null;
        
        return (
          <Box
            key={section.id}
            onClick={() => onSectionChange(section.id)}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              color: isActive ? 'white' : 'rgba(255,255,255,0.5)',
              cursor: 'pointer',
              padding: '0.5rem 1rem',
              borderRadius: '6px',
              transition: 'all 0.2s ease',
              position: 'relative',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.1)',
                color: 'white',
              },
              ...(isActive && {
                backgroundColor: 'rgba(139,92,246,0.15)',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-1px',
                  left: '0',
                  right: '0',
                  height: '2px',
                  backgroundColor: '#8b5cf6',
                  borderRadius: '2px',
                }
              })
            }}
          >
            <Icon size={18} />
            <span style={{ 
              fontSize: '0.875rem',
              fontWeight: isActive ? 500 : 400,
            }}>
              {section.label}
            </span>
          </Box>
        );
      })}
    </Box>
  );
};

export default NavigationBar;