import { useState } from 'react';
import { Box, Menu } from '@mui/material';
import Header from './Header';
import ApplicationList from './ApplicationList';
import MainView from './MainView';
import { applications } from '../data/mockData';

const ApplicationDashboard = () => {
  const [isDrawerExpanded, setIsDrawerExpanded] = useState(false);
  const [selectedApp, setSelectedApp] = useState(null);
  const [activeSection, setActiveSection] = useState('applications');
  const [anchorEl, setAnchorEl] = useState(null);

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      bgcolor: '#000000',
      overflow: 'hidden'
    }}>
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        handleProfileClick={handleProfileClick}
      />

      <Box sx={{
        display: 'flex',
        pt: '64px',
        flex: 1,
        overflow: 'hidden'
      }}>
        <ApplicationList
          isDrawerExpanded={isDrawerExpanded}
          setIsDrawerExpanded={setIsDrawerExpanded}
          applications={applications}
          selectedApp={selectedApp}
          onSelectApp={setSelectedApp}
        />
        <Box component="main" sx={{
          flexGrow: 1,
          overflow: 'auto',
          position: 'relative'
        }}>
          <MainView
            selectedApp={selectedApp}
            activeSection={activeSection}
            onSectionChange={setActiveSection}
          />
        </Box>
      </Box>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          sx: {
            bgcolor: '#1a1f2b',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '12px',
            width: 250,
            mt: 1,
            '& .MuiMenuItem-root': {
              py: 1.5,
              px: 2,
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.05)'
              }
            }
          }
        }}
      >
        {/* Add your menu items here */}
      </Menu>
    </Box>
  );
};

export default ApplicationDashboard;