import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { Compass } from 'lucide-react';
import Header from './Header';
import ApplicationList from './ApplicationList';
import MainView from './MainView';
import { applications } from '../data/mockData';
import { PlaceholderView } from './PlaceholderView';

const ApplicationDashboard = () => {
  const [selectedApp, setSelectedApp] = useState(null);
  const [activeSection, setActiveSection] = useState('view');
  const [selectedMenuItem, setSelectedMenuItem] = useState('Applications');
  const [isLoading, setIsLoading] = useState(false);
  const [appSwitchLoading, setAppSwitchLoading] = useState(false);
  const [cardClickLoading, setCardClickLoading] = useState(false);
  // Add state to control when to collapse the app list
  const [shouldCollapseAppList, setShouldCollapseAppList] = useState(false);

  // This function will be passed down to DashboardGrid
  const handleLoadingChange = (loadingState) => {
    setIsLoading(loadingState);
  };

  // This function will be passed down to MainView and then to DashboardGrid
  const handleCardClick = (isLoading) => {
    setCardClickLoading(isLoading);
  };

  const handleMenuItemSelect = (menuItem) => {
    setSelectedMenuItem(menuItem);
    // Additional logic for handling menu item selection
  };

  // App switching loading - only affects the main view
  // In the handleAppSelect function
const handleAppSelect = (app) => {
  // Show loading animation when switching apps
  setAppSwitchLoading(true);
  // We want to keep the app list expanded during loading
  setShouldCollapseAppList(false);
  
  // Hide loading after 500ms and then collapse the app list
  setTimeout(() => {
    setAppSwitchLoading(false);
    setSelectedApp(app);
    // Now that loading is complete, allow the app list to collapse
    setShouldCollapseAppList(true);
  }, 500);
};

  // Determine if we should hide the application list
  // Hide when:
  // 1. Not on Applications menu item
  // 2. When loading is active
  const shouldHideApplicationList = selectedMenuItem !== 'Applications' || isLoading;

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      bgcolor: '#111318',
      overflow: 'hidden', // Prevent scrolling at the container level
      position: 'relative' // For absolute positioning of loading overlay
    }}>
      {/* Full-screen loading overlay for card clicks - covers EVERYTHING */}
      {cardClickLoading && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: '#1A1A22',
            zIndex: 10000, // Ensure it covers everything including headers
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Box
            sx={{
              animation: 'spin 1s linear infinite',
              '@keyframes spin': {
                '0%': {
                  transform: 'rotate(0deg)'
                },
                '100%': {
                  transform: 'rotate(360deg)'
                }
              },
              color: '#8b5cf6'
            }}
          >
            <Compass size={48} />
          </Box>
        </Box>
      )}

      <Header
        isAdmin={true} // Add this if needed for admin menu items
        onMenuItemSelect={handleMenuItemSelect}
      />
      
      <Box sx={{
        display: 'flex',
        flex: 1,
        height: 'calc(100vh - 48px)', // Adjust for the header height
        overflow: 'hidden', // Prevent scrolling at this level as well
        position: 'relative' // Added for positioning context
      }}>
        {selectedMenuItem === 'Applications' ? (
          <>
            {!isLoading && (
              <ApplicationList
                applications={applications}
                selectedApp={selectedApp}
                onSelectApp={handleAppSelect}
                preventAutoCollapse={appSwitchLoading} // Pass loading state to prevent auto-collapse
                shouldCollapseAfterLoading={shouldCollapseAppList} // Pass flag to control when to collapse
              />
            )}
            <Box sx={{
              flex: 1,
              transition: 'margin-left 0.3s ease-in-out',
              position: 'relative',
              zIndex: 1
            }}>
              {/* App switch loading overlay - only covers the main view area */}
              {appSwitchLoading && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#1A1A22',
                    zIndex: 1000, // Lower than the full-screen loader but above content
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <Box
                    sx={{
                      animation: 'spin 1s linear infinite',
                      '@keyframes spin': {
                        '0%': {
                          transform: 'rotate(0deg)'
                        },
                        '100%': {
                          transform: 'rotate(360deg)'
                        }
                      },
                      color: '#8b5cf6'
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
                onCardClick={handleCardClick} // Pass the card click handler
              />
            </Box>
          </>
        ) : (
          <Box sx={{ width: '100%', position: 'relative' }}>
            <PlaceholderView menuItem={selectedMenuItem} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ApplicationDashboard;