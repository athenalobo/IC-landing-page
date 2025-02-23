import React, { useState } from 'react';
import { Box } from '@mui/material';
import { MainContent } from './styled/StyledComponents';
import Sidebar from './Sidebar';
import ApplicationList from './ApplicationList';
import MainView from './MainView';
import { applications } from '../data/mockData';
import { PlaceholderView } from './PlaceholderView';

const ApplicationDashboard = () => {
  const [isDrawerExpanded, setIsDrawerExpanded] = useState(false);
  const [selectedApp, setSelectedApp] = useState(null);
  const [activeSection, setActiveSection] = useState('view');
  const [selectedMenuItem, setSelectedMenuItem] = useState('Applications');

  return (
    <Box sx={{ display: 'flex', height: '100vh', bgcolor: '#000000' }}>
      <Sidebar
        isExpanded={isDrawerExpanded}
        onMouseEnter={() => setIsDrawerExpanded(true)}
        onMouseLeave={() => setIsDrawerExpanded(false)}
        selectedMenuItem={selectedMenuItem}
        onMenuItemSelect={setSelectedMenuItem}
      />
      <MainContent sidebarexpanded={isDrawerExpanded.toString()}>
        <Box sx={{ display: 'flex', flex: 1, height: '100vh' }}>
          {selectedMenuItem === 'Applications' ? (
            <>
              <ApplicationList
                applications={applications}
                selectedApp={selectedApp}
                onSelectApp={setSelectedApp}
              />
              <MainView
                selectedApp={selectedApp}
                activeSection={activeSection}
                onSectionChange={setActiveSection}
              />
            </>
          ) : (
            <PlaceholderView/>
          )}
        </Box>
      </MainContent>
    </Box>
  );
};

export default ApplicationDashboard;