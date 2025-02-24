import { useState } from 'react';
import { Box, Menu, Typography } from '@mui/material';
import ApplicationList from './ApplicationList';
import MainView from './MainView';
import { applications } from '../data/mockData';
import { keyframes } from '@mui/system';
import Header from './Header';

// Define the floating animation
const float = keyframes`
  0%, 100% { transform: translateY(0) translateX(0); }
  25% { transform: translateY(-20px) translateX(10px); }
  50% { transform: translateY(-10px) translateX(-10px); }
  75% { transform: translateY(-30px) translateX(5px); }
`;

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

  const renderContent = () => {
    if (activeSection === 'applications') {
      return (
        <Box sx={{ display: 'flex', height: 'calc(100vh - 64px)' }}>
          <ApplicationList
            applications={applications}
            selectedApp={selectedApp}
            onSelectApp={setSelectedApp}
            isDrawerExpanded={isDrawerExpanded}
            setIsDrawerExpanded={setIsDrawerExpanded}
          />
          <MainView
            selectedApp={selectedApp}
            activeSection={activeSection}
            onSectionChange={setActiveSection}
          />
        </Box>
      );
    }

    // Pretty purple background with floating animation for non-applications sections
    return (
      <Box
        sx={{
          height: 'calc(100vh - 64px)',
          background: 'linear-gradient(180deg, #0a0a0a 0%, #121212 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Ambient glow */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at 50% 50%, rgba(139,92,246,0.1), transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <Box
            key={i}
            sx={{
              position: 'absolute',
              width: '4px',
              height: '4px',
              backgroundColor: 'rgba(139,92,246,0.9)',
              borderRadius: '50%',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `${float} ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}

        <Typography
          variant="h1"
          sx={{
            color: 'white',
            fontSize: '8rem',
            fontWeight: 'bold',
            position: 'relative',
            zIndex: 1,
            textShadow: '0 0 20px rgba(139,92,246,0.3)',
          }}
        >
          HI
        </Typography>
      </Box>
    );
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        handleProfileClick={handleProfileClick}
      />
      {renderContent()}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        onClick={handleClose}
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