import React, { useState } from 'react';
import { Box } from '@mui/material';
import Header from './Header';
import ApplicationList from './ApplicationList';
import MainView from './MainView';
import { applications } from '../data/mockData';
import { PlaceholderView } from './PlaceholderView';

const ApplicationDashboard = () => {
  const [selectedApp, setSelectedApp] = useState(null);
  const [activeSection, setActiveSection] = useState('view');
  const [selectedMenuItem, setSelectedMenuItem] = useState('Applications');

  const handleMenuItemSelect = (menuItem) => {
    setSelectedMenuItem(menuItem);
    // Additional logic for handling menu item selection
  };

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      height: '100vh', 
      bgcolor: '#111318',
      overflow: 'hidden' // Prevent scrolling at the container level
    }}>
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
            <ApplicationList
              applications={applications}
              selectedApp={selectedApp}
              onSelectApp={setSelectedApp}
            />
            <Box sx={{ 
              flex: 1, 
              transition: 'margin-left 0.3s ease-in-out',
              position: 'relative',
              zIndex: 1
            }}>
              <MainView
                selectedApp={selectedApp}
                activeSection={activeSection}
                onSectionChange={setActiveSection}
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