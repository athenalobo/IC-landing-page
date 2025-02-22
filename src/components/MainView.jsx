// src/components/MainView/MainView.jsx
import React from 'react';
import { Box } from '@mui/material';
import { Database } from 'lucide-react';
import NavigationBar from './NavigationBar';
import DashboardGrid from './DashboardGrid';

const MainView = ({ selectedApp, activeSection, onSectionChange }) => {
  if (!selectedApp) {
    return (
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        color: 'white',
        backgroundColor: '#0a0a0a',
        gap: 3
      }}>
        <Database size={64} color="#8b5cf6" />
        <Box sx={{
          textAlign: 'center',
          maxWidth: '500px',
          padding: '0 20px'
        }}>
          <h2 style={{ 
            fontSize: '2rem', 
            marginBottom: '1rem',
            background: 'linear-gradient(45deg, #8b5cf6, #6366f1)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Select an Application
          </h2>
          <p style={{ 
            color: '#a0a0a0',
            lineHeight: '1.6',
            fontSize: '1.1rem'
          }}>
            Choose an application from the sidebar to explore its architecture, analyze dependencies, and gain valuable insights into its structure.
          </p>
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{ 
      backgroundColor: '#0a0a0a',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden' // Prevent double scrollbars
    }}>
      <Box sx={{ 
        borderBottom: 1, 
        borderColor: 'grey.800', 
        p: 2,
        backgroundColor: '#0a0a0a',
        position: 'sticky',
        top: 0,
        zIndex: 1
      }}>
        <Box sx={{ mb: 2 }}>
          <h1 style={{ 
            color: 'white', 
            margin: 0,
            fontSize: '1.75rem'
          }}>{selectedApp.name}</h1>
        </Box>
        <NavigationBar 
          activeSection={activeSection} 
          onSectionChange={onSectionChange} 
        />
      </Box>
      <Box sx={{ 
        flex: 1,
        overflowY: 'auto',
        overflowX: 'hidden',
        '&::-webkit-scrollbar': {
          width: '8px',
        },
        '&::-webkit-scrollbar-track': {
          background: '#1a1a1a',
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#2a2a2a',
          borderRadius: '4px',
          '&:hover': {
            background: '#3a3a3a',
          },
        },
      }}>
        <DashboardGrid />
      </Box>
    </Box>
  );
};

export default MainView;