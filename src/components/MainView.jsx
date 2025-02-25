import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Alert,
  AlertTitle,
  Typography,
  List,
  ListItem,
  Link,
  keyframes,
  Tooltip,
  Stack,
} from '@mui/material';
import { Compass, Loader2, Eye, GitBranch, Gauge, Search, Settings } from 'lucide-react';
import ImpactImg from '../assets/image.png';
import { StatusChip } from './ApplicationList';
import ConfigPage from './ConfigPage';
import { applications } from '../data/mockData';
import WelcomeView from './WelcomeView';
import ConfigPage1 from './ConfigPage1';
import DashboardGrid from './DashboardGrid';
import ImprovementGrid from './ImprovementGrid';
import {capitalize} from '@mui/material';

// Define blinking animation for the status chip
const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

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

const MainView = ({ selectedApp, activeSection, onSectionChange, onLoadingChange, onCardClick }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showBlankPage, setShowBlankPage] = useState(false); // New state for blank page

  // Update the parent component when loading state changes
  useEffect(() => {
    if (onLoadingChange) {
      onLoadingChange(isLoading);
    }
  }, [isLoading, onLoadingChange]);

  useEffect(() => {
    if (selectedApp) {
      setIsLoading(true);
      setShowContent(false);
      setShowBlankPage(false); // Reset blank page state when app changes
      
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

  // Handle loading state from dashboard grid
  const handleDashboardLoadingChange = (loadingState) => {
    setIsLoading(loadingState);
  };

  // Modified handleCardClick to also manage blank page state
  const handleCardClickFromDashboard = (isCardLoading, showBlank = false) => {
    if (onCardClick) {
      onCardClick(isCardLoading);
    }
    
    // If loading is complete and showBlank is true, show the blank page
    if (!isCardLoading && showBlank) {
      setShowBlankPage(true);
    } else {
      setShowBlankPage(false);
    }
  };

  const renderContent = () => {
    // Show blank white page if requested
    if (showBlankPage) {
      return (
        <Box sx={{
          width: '100%',
          height: '100%',
          backgroundColor: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {/* Intentionally left blank */}
        </Box>
      );
    }

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
          onLoadingChange={handleDashboardLoadingChange}
          onCardClick={handleCardClickFromDashboard} // Use the modified handler
        />;
      case 'configuration':
        return <ConfigPage selectedApp={selectedApp} />;
      case 'view':
        return <DashboardGrid 
          disabled={!isNavigationEnabled('view')} 
          visibleCards={visibleCards}
          onLoadingChange={handleDashboardLoadingChange}
          onCardClick={handleCardClickFromDashboard} // Use the modified handler
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
          onLoadingChange={handleDashboardLoadingChange}
          onCardClick={handleCardClickFromDashboard} // Use the modified handler
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

  // Check if the status is 'in progress' to apply blinking animation
  const isInProgress = selectedApp.status.toLowerCase() === 'in progress';

  return (
    <Box sx={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: showBlankPage ? '#ffffff' : '#1A1A22', // Change background to white when showing blank page
      overflow: 'hidden',
      width: '100%',
    }}>
      {/* Compact Header Section */}
      <Stack direction={'row'} sx={{
        borderBottom: '1px solid rgba(100,100,100,0.2)',
        p: 1.5,
        px: 3,
        position: 'sticky',
        top: 0,
        zIndex: 10,
        backgroundColor: '#1A1A22',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <Stack direction={'row'} alignItems={'center'} gap={2}>
         <Typography
            variant="h1"
            sx={{
              color: 'white',
              margin: 0,
              fontSize: '1.25rem',
              fontWeight: 'bold',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {selectedApp.name.length > 20 ? `${capitalize(selectedApp.name.substring(0, 20))}...` : capitalize(selectedApp.name)}
          </Typography>
          
          <CompactNavigationBar
            activeSection={activeSection}
            onSectionChange={onSectionChange}
            availableSections={getEnabledSections()}
            selectedApp={selectedApp}
          />
        </Stack>
        <StatusChip 
          status={selectedApp.status} 
          sx={{ 
            ml: 1,
            ...(isInProgress && {
              animation: `${blink} 1.5s ease-in-out infinite`
            })
          }}
        >
          {selectedApp.status}
        </StatusChip>
      </Stack>

      {/* Error Alert - Only show on error and not in blank page mode */}
      {selectedApp.status === 'Error' && !showBlankPage && (
        <Box sx={{ px: 1.5, pt: 1, pb: 1 }}>
          <Alert 
            severity="error"
            sx={{
              backgroundColor: 'rgba(211, 47, 47, 0.1)',
              color: '#ff4444',
              padding: '0.5rem 1rem',
              '& .MuiAlert-icon': {
                color: '#ff4444',
                padding: '0.5rem 0',
                marginRight: 1
              },
              '& .MuiAlert-message': {
                width: '100%',
                padding: '0.25rem 0'
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
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography sx={{ color: '#ff4444', fontWeight: 'bold', fontSize: '0.85rem' }}>
                Analysis Error
              </Typography>
            </Box>
            <Typography sx={{ fontSize: '0.8rem', mt: 1, mb: 1 }}>
              Deep Analysis encountered an error while generating the CSV computation. CAST Software has been informed and will contact you at the earliest. You can stay updated using - {' '}
              <Link 
                href="https://castsoftware.zendesk.com/tickets/99999"
                target="_blank"
                rel="noopener noreferrer"
              >
                Zendesk ticket
              </Link>
            </Typography>
          </Alert>
        </Box>
      )}
      
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
          backgroundColor: showBlankPage ? '#ffffff' : '#252531',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: showBlankPage ? '#e0e0e0' : '#252531',
          borderRadius: '4px',
          '&:hover': {
            backgroundColor: showBlankPage ? '#d0d0d0' : '#3a3a3a',
          },
        },
      }}>
        <Box sx={{
          opacity: showContent || showBlankPage ? 1 : 0,
          transition: 'opacity 0.2s ease-in-out',
          height: '100%',
          width: '100%',
          position: 'relative',
        }}>
          {renderContent()}
        </Box>
      </Box>
    </Box>
  );
};

export default MainView;