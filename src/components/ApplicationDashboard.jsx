// In ApplicationDashboard.jsx
import React, { useState, useEffect } from 'react';
import { Box, Stack } from '@mui/material';
import { Compass } from 'lucide-react';
import Header from './Header';
import ApplicationList from './ApplicationList';
import MainView from './MainView';
import { applications } from '../data/mockData';
import { PlaceholderView } from './PlaceholderView';
import CompactNavigationBar from './CompactNavigationBar';
import { keyframes } from '@mui/material';
import {Typography, capitalize} from '@mui/material';
import { StatusChip } from './ApplicationList';

const ApplicationDashboard = () => {
  const spin = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  `;
  const [selectedApp, setSelectedApp] = useState(null);
  const [activeSection, setActiveSection] = useState('view');
  const [selectedMenuItem, setSelectedMenuItem] = useState('Applications');
  const [isLoading, setIsLoading] = useState(false);
  const [appSwitchLoading, setAppSwitchLoading] = useState(false);
  const [cardClickLoading, setCardClickLoading] = useState(false);
  const [shouldCollapseAppList, setShouldCollapseAppList] = useState(false);

  const handleLoadingChange = (loadingState) => {
    setIsLoading(loadingState);
  };

  // Modified handler for card clicks
  const handleCardClick = (isLoading) => {
    // Show full-screen loading overlay
    setCardClickLoading(isLoading);
    
    // If loading is starting (isLoading is true), wait until it's done to switch the menu
    if (isLoading) {
      // Short timeout to ensure the loading spinner is visible before changing views
      setTimeout(() => {
        // Change to 'Viewer' menu item when loading completes
        setSelectedMenuItem('Viewer');
      }, 300);
    }
  };

  const handleMenuItemSelect = (menuItem) => {
    // If switching back to Applications from Viewer, reset the view
    if (menuItem === 'Applications' && selectedMenuItem === 'Viewer') {
      setActiveSection('view');
    }
    setSelectedMenuItem(menuItem);
  };

  const handleAppSelect = (app) => {
    setAppSwitchLoading(true);
    setShouldCollapseAppList(false);
    setSelectedApp(app);
    
    setTimeout(() => {
      setAppSwitchLoading(false);
      setShouldCollapseAppList(true);
    }, 500);
  };

  // Helper function to determine what sections should be available in viewer mode
  const getEnabledSections = () => {
    if (!selectedApp) return ['view', 'configuration'];
    
    switch (selectedApp.status) {
      case 'Analysis complete':
        return ['view', 'improve', 'impact', 'search', 'configuration'];
      case 'Profiling complete':
      case 'in progress':
      case 'Error':
        return ['view', 'configuration'];
      case 'Configuration pending':
      default:
        return ['configuration'];
    }
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      bgcolor: '#111318',
      overflow: 'hidden',
      position: 'relative'
    }}>
      {/* Full-screen loading overlay for card clicks */}
      {cardClickLoading && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: '#1A1A22',
            zIndex: 10000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Box
            sx={{
              animation: `${spin} 0.5s linear infinite`,
              color: '#8b5cf6',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '48px',
              height: '48px',
              transformOrigin: 'center',
            }}
          >
            <Compass size={48} />
          </Box>
        </Box>
      )}

      <Header
        isAdmin={true}
        onMenuItemSelect={handleMenuItemSelect}
      />
      
      <Box sx={{
        display: 'flex',
        flex: 1,
        height: 'calc(100vh - 48px)',
        overflow: 'hidden',
        position: 'relative'
      }}>
        {selectedMenuItem === 'Applications' ? (
          <>
            <ApplicationList
              applications={applications}
              selectedApp={selectedApp}
              onSelectApp={handleAppSelect}
              preventAutoCollapse={appSwitchLoading}
              shouldCollapseAfterLoading={shouldCollapseAppList}
            />
            <Box sx={{
              flex: 1,
              transition: 'margin-left 0.3s ease-in-out',
              position: 'relative',
              zIndex: 1
            }}>
              {appSwitchLoading && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#1A1A22',
                    zIndex: 1000,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <Box
                    sx={{
                      animation: `${spin} 0.5s linear infinite`,
                      color: '#8b5cf6',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '48px',
                      height: '48px',
                      transformOrigin: 'center',
                    }}
                  >
                    <Compass size={48} />
                  </Box>
                </Box>
              )}
              <MainView
                selectedApp={selectedApp}
                activeSection={activeSection}
                onSectionChange={setActiveSection}
                onLoadingChange={handleLoadingChange}
                onCardClick={handleCardClick}
              />
            </Box>
          </>
        ) : selectedMenuItem === 'Viewer' ? (
          // Viewer mode - only shows a blank screen with the header
          <Box sx={{ width: '100%', position: 'relative', backgroundColor: '#1A1A22' }}>
            <Box sx={{
              width: '100%',
              height: '100%',
              backgroundColor: '#1A1A22',
              display: 'flex',
              flexDirection: 'column'
            }}>
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
                  onSectionChange={setActiveSection}
                  availableSections={getEnabledSections()}
                  selectedApp={selectedApp}
                />
        </Stack>
        <StatusChip 
          status={selectedApp.status} 
          
        >
          {selectedApp.status}
        </StatusChip>
      </Stack>
              
              {/* Content area */}
              <Box sx={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                p: 3,
                backgroundColor: 'white',
              }}>
                {/* Blank space - you can customize this as needed */}
              </Box>
            </Box>
          </Box>
        ) : (
          // Other menu items (Reports, Settings, etc.)
          <Box sx={{ width: '100%', position: 'relative' }}>
            <PlaceholderView menuItem={selectedMenuItem} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ApplicationDashboard;