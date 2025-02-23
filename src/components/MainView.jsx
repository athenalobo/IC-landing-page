import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Alert,
  AlertTitle,
  Typography,
  List,
  ListItem,
  Link,
  keyframes 
} from '@mui/material';
import { Compass, Loader2 } from 'lucide-react';
import NavigationBar from './NavigationBar';
import DashboardGrid from './DashboardGrid';
import ImprovementGrid from './ImprovementGrid';
import ImpactImg from '../assets/image.png';
import { StatusChip } from './ApplicationList';
import ConfigPage from './ConfigPage';
import { applications } from '../data/mockData';
import WelcomeView from './WelcomeView';
import ConfigPage1 from './ConfigPage1';

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
    if (section === 'configuration') return true;
    
    switch (selectedApp.status) {
      case 'Analysis complete':
        return true;
      case 'Profiling complete':
      case 'in progress':
      case 'Error':
        return section === 'view';
      case 'Configuration pending':
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
      case 'Configuration pending':
      default:
        return [];
    }
  };

  // Welcome screen when no app is selected
  if (!selectedApp) {
    return <WelcomeView applications={applications} />;
  }

  const renderContent = () => {
    if (activeSection === 'configuration') {
      return <ConfigPage selectedApp={selectedApp}/>;
    }

    if (selectedApp.status === 'Configuration pending' && activeSection !== 'configuration') {
      return <ConfigPage1 />;
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
      case 'configuration':
        return <ConfigPage selectedApp={selectedApp} />;
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
                src={ImpactImg}
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
      return ['view', 'improve', 'impact', 'search', 'configuration'];
    }
    return ['view', 'configuration'];
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
        <Box sx={{ mb: selectedApp?.status === 'Error' ? 3 : 2 }}>
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
            <StatusChip status={selectedApp.status}>
              {selectedApp.status}
            </StatusChip>
          </Typography>
          
          {selectedApp.status === 'Error' && (
            <Alert 
              severity="error"
              sx={{
                mt: 2,
                backgroundColor: 'rgba(211, 47, 47, 0.1)',
                color: '#ff4444',
                '& .MuiAlert-icon': {
                  color: '#ff4444'
                },
                '& .MuiAlert-message': {
                  width: '100%'
                },
                '& a': {
                  color: '#ff8a80',
                  textDecoration: 'underline',
                  '&:hover': {
                    color: '#ff5252'
                  }
                }
              }}
            >
              <AlertTitle sx={{ color: '#ff4444', fontWeight: 'bold' }}>
                Analysis Error
              </AlertTitle>
              Deep Analysis encountered an error while generating the CSV computation. CAST Software has been informed and will contact you at the earliest. You can stay updated using - {' '}
              <Link 
                href="https://castsoftware.zendesk.com/tickets/99999"
                target="_blank"
                rel="noopener noreferrer"
              >
                Zendesk ticket
              </Link>
            </Alert>
          )}
        </Box>
        <NavigationBar
          activeSection={activeSection}
          onSectionChange={onSectionChange}
          availableSections={getEnabledSections()}
          selectedApp={selectedApp}
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