import React, { useState } from 'react';
import { Box } from '@mui/material';
import { MainContent } from './styled/StyledComponents';
import Sidebar from './Sidebar';
import ApplicationList from './ApplicationList';
import MainView from './MainView';
import { applications } from '../data/mockData';

const ApplicationDashboard = () => {
  const [isDrawerExpanded, setIsDrawerExpanded] = useState(false);
  const [selectedApp, setSelectedApp] = useState(null);
  const [activeSection, setActiveSection] = useState('view');

  return (
    <Box sx={{ display: 'flex', height: '100vh', bgcolor: '#000000' }}>
      <Sidebar
        isExpanded={isDrawerExpanded}
        onMouseEnter={() => setIsDrawerExpanded(true)}
        onMouseLeave={() => setIsDrawerExpanded(false)}
      />
      <MainContent sidebarexpanded={isDrawerExpanded.toString()}>
        <Box sx={{ display: 'flex', flex: 1, height: '100vh' }}>
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
        </Box>
      </MainContent>
    </Box>
  );
};

export default ApplicationDashboard;