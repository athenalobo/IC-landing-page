import React, { useState, useEffect } from 'react';
import { Box, keyframes } from '@mui/material';
import { Compass, Loader2 } from 'lucide-react';
import NavigationBar from './NavigationBar';
import DashboardGrid from './DashboardGrid';

// Define animations
const float = keyframes`
  0%, 100% { transform: translateY(0) translateX(0); }
  25% { transform: translateY(-20px) translateX(10px); }
  50% { transform: translateY(-10px) translateX(-10px); }
  75% { transform: translateY(-30px) translateX(5px); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
`;

const MainView = ({ selectedApp, activeSection, onSectionChange }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (selectedApp) {
      setIsLoading(true);
      setShowContent(false);
      
      // Show loader for 500ms
      const loaderTimer = setTimeout(() => {
        setIsLoading(false);
        setShowContent(true);
      }, 500);

      return () => {
        clearTimeout(loaderTimer);
      };
    }
  }, [selectedApp?.name]); // Only trigger on app name change

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
        {/* Ambient glow effect */}
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
              backgroundColor: 'rgba(139,92,246,0.2)',
              borderRadius: '50%',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `${float} ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}

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
            Select an application
          </Box>
          <Box component="p" sx={{
            color: 'rgba(255,255,255,0.7)',
            fontSize: '1.125rem',
            lineHeight: 1.7,
          }}>
            Discover new perspectives on your software.
Let us navigate the uncharted territories of your codebase together.
          </Box>
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: 'linear-gradient(180deg, #000000 0%, #121212 100%)',
      overflow: 'hidden',
    }}>
      {/* Header */}
      <Box sx={{
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

      {/* Main content area */}
      <Box sx={{
        flex: 1,
        overflowY: 'auto',
        overflowX: 'hidden',
        position: 'relative',
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
        {isLoading && (
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}>
            <Compass
              size={48}
              style={{
                color: '#8b5cf6',
                animation: 'spin 0.5s linear infinite',
              }}
            />
          </Box>
        )}
        <Box sx={{
          opacity: showContent ? 1 : 0,
          transition: 'opacity 0.2s ease-in-out',
        }}>
          <DashboardGrid />
        </Box>
      </Box>
    </Box>
  );
};

export default MainView;