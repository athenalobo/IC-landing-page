import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Alert,
  AlertTitle,
  Typography,
  List,
  ListItem,
  keyframes 
} from '@mui/material';
import { Compass, Loader2 } from 'lucide-react';
import NavigationBar from './NavigationBar';
import DashboardGrid from './DashboardGrid';
import ImprovementGrid from './ImprovementGrid';

const float = keyframes`
  0%, 100% { transform: translateY(0) translateX(0); }
  25% { transform: translateY(-20px) translateX(10px); }
  50% { transform: translateY(-10px) translateX(-10px); }
  75% { transform: translateY(-30px) translateX(5px); }
`;

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

  // Helper function to determine if navigation should be enabled
  const isNavigationEnabled = (section) => {
    if (!selectedApp) return false;
    
    switch (selectedApp.status) {
      case 'Analysis complete':
        return true;
      case 'Profiling complete':
      case 'in progress':
      case 'Error':
        return section === 'view';
      case 'Configuration Pending':
        return false;
      default:
        return false;
    }
  };

  // Helper function to determine what cards should be visible
  const getVisibleCards = () => {
    if (!selectedApp) return [];
    
    switch (selectedApp.status) {
      case 'Analysis complete':
        return 'all';
      case 'Profiling complete':
      case 'in progress':
      case 'Error':
        return ['summary'];
      case 'Configuration Pending':
      default:
        return [];
    }
  };

  // Configuration pending placeholder
  const ConfigurationPlaceholder = () => (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      p: 4
    }}>
      <Alert severity="info" sx={{ maxWidth: '600px' }}>
        <AlertTitle>Configuration Required</AlertTitle>
        <Typography variant="body1" paragraph>
          To analyze your application, please complete the following steps in GitHub:
        </Typography>
        <List sx={{ pl: 2 }}>
          <ListItem>1. Navigate to your repository settings</ListItem>
          <ListItem>2. Enable GitHub Actions</ListItem>
          <ListItem>3. Add the required configuration file to your repository</ListItem>
          <ListItem>4. Trigger the initial analysis</ListItem>
        </List>
      </Alert>
    </Box>
  );

  // Welcome screen when no app is selected
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
          <Typography variant="h2" sx={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            mb: 3,
            background: 'linear-gradient(45deg, #8b5cf6, #6366f1)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Select an application
          </Typography>
          <Typography variant="body1" sx={{
            color: 'rgba(255,255,255,0.7)',
            fontSize: '1.125rem',
            lineHeight: 1.7,
          }}>
            Discover new perspectives on your software.
            Let us navigate the uncharted territories of your codebase together.
          </Typography>
        </Box>
      </Box>
    );
  }

  const renderContent = () => {
    if (selectedApp.status === 'Configuration Pending') {
      return <ConfigurationPlaceholder />;
    }

    if (!isNavigationEnabled(activeSection)) {
      return (
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%'
        }}>
          <Alert severity="warning" color='#8b5cf6' sx={{ maxWidth: '500px', color: '#8b5cf6', backgroundColor: 'rgba(139,92,246,0.15)' }}>
            This section is not available until deep analysis is complete.
          </Alert>
        </Box>
      );
    }

    const visibleCards = getVisibleCards();

    switch (activeSection) {
      case 'improve':
        return <ImprovementGrid 
          disabled={!isNavigationEnabled('improve')} 
          visibleCards={visibleCards}
        />;
      case 'view':
        return <DashboardGrid 
          disabled={!isNavigationEnabled('view')} 
          visibleCards={visibleCards}
        />;
      case 'impact':
      case 'search':
        if (visibleCards === 'all') {
          return (
            <Box sx={{ p: 2 }}>
              <img 
                width="100%" 
                src="/api/placeholder/800/600" 
                alt="Impact View"
              />
            </Box>
          );
        }
        return null;
      default:
        return <DashboardGrid 
          disabled={!isNavigationEnabled('view')} 
          visibleCards={visibleCards}
        />;
    }
  };

  // Get only the enabled sections for the navigation
  const getEnabledSections = () => {
    const visibleCards = getVisibleCards();
    if (visibleCards === 'all') {
      return ['view', 'improve', 'impact', 'search'];
    }
    return ['view'];
  };

  return (
    <Box sx={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: 'linear-gradient(180deg, #000000 0%, #121212 100%)',
      overflow: 'hidden',
      width: '100%',
    }}>
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
          <Typography variant="h1" sx={{
            color: 'white',
            margin: 0,
            fontSize: '1.75rem',
            fontWeight: 'bold',
          }}>
            {selectedApp.name}
          </Typography>
          <Typography variant="body2" sx={{
            color: 'grey.500',
            mt: 1
          }}>
            Status: {selectedApp.status}
          </Typography>
        </Box>
        <NavigationBar
          activeSection={activeSection}
          onSectionChange={onSectionChange}
          availableSections={getEnabledSections()}
        />
      </Box>

      <Box sx={{
        flex: 1,
        position: 'relative',
        overflowY: 'auto',
        overflowX: 'hidden',
        width: '100%',
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
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}>
            <Compass
              size={48}
              style={{
                color: '#8b5cf6',
                animation: 'spin 1s linear infinite',
              }}
            />
          </Box>
        ) : (
          <Box sx={{
            opacity: showContent ? 1 : 0,
            transition: 'opacity 0.2s ease-in-out',
            height: '100%',
            width: '100%',
            position: 'relative',
          }}>
            {renderContent()}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default MainView;