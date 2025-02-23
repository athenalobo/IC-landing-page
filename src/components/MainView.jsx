import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { Compass } from 'lucide-react';
import NavigationBar from './NavigationBar';
import DashboardGrid from './DashboardGrid';
import ImprovementGrid from './ImprovementGrid';

const MainView = ({ selectedApp, activeSection, onSectionChange }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (selectedApp) {
      setIsLoading(true);
      setShowContent(false);
      
      const loaderTimer = setTimeout(() => {
        setIsLoading(false);
        setShowContent(true);
      }, 500);

      return () => clearTimeout(loaderTimer);
    }
  }, [selectedApp?.name]);

  if (!selectedApp) {
    return (
      <Box sx={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(180deg, #000000 0%, #121212 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <Box sx={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(139,92,246,0.1), transparent 70%)',
          pointerEvents: 'none',
        }} />

        <Compass 
          size={80} 
          style={{
            color: '#8b5cf6',
            marginBottom: '2rem',
            filter: 'drop-shadow(0 0 10px rgba(139,92,246,0.3))',
          }}
        />
        
        <Box sx={{
          textAlign: 'center',
          maxWidth: '600px',
          px: 3,
        }}>
          <Box component="h2" sx={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            mb: 3,
            background: 'linear-gradient(45deg, #8b5cf6, #6366f1)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Navigate Your Code
          </Box>
          <Box component="p" sx={{
            color: 'rgba(255,255,255,0.7)',
            fontSize: '1.125rem',
            lineHeight: 1.7,
          }}>
            Choose an application to explore your software from new perspectives. 
            Let us guide you through your codebase's uncharted territories.
          </Box>
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{
      height: '100vh',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: 'linear-gradient(180deg, #000000 0%, #121212 100%)',
      overflow: 'hidden',
    }}>
      <Box sx={{
        width: '100%',
        borderBottom: 1,
        borderColor: 'grey.800',
        p: 3,
        position: 'sticky',
        top: 0,
        zIndex: 10,
        backgroundColor: 'rgba(0,0,0,0.7)',
        backdropFilter: 'blur(8px)',
      }}>
        <Box sx={{ mb: 2 }}>
          <Box component="h1" sx={{
            color: 'white',
            margin: 0,
            fontSize: '1.75rem',
            fontWeight: 'bold',
          }}>
            {selectedApp.name}
          </Box>
        </Box>
        <NavigationBar
          activeSection={activeSection}
          onSectionChange={onSectionChange}
        />
      </Box>

      <Box sx={{
        flex: 1,
        width: '100%',
        position: 'relative',
        overflowY: 'auto',
        overflowX: 'hidden',
        '&::-webkit-scrollbar': {
          width: '8px',
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: '#1a1a1a',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#2a2a2a',
          borderRadius: '4px',
          '&:hover': {
            backgroundColor: '#3a3a3a',
          },
        },
      }}>
        {isLoading ? (
          <Box sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Compass
              size={48}
              style={{
                color: '#8b5cf6',
                animation: 'spin 0.5s linear infinite',
              }}
            />
          </Box>
        ) : (
          <Box sx={{
            opacity: showContent ? 1 : 0,
            transition: 'opacity 0.2s ease-in-out',
            width: '100%',
            height: '100%',
          }}>
            {activeSection === 'improve' ? <ImprovementGrid /> : <DashboardGrid />}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default MainView;