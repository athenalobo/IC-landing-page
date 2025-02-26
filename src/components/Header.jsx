import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  IconButton,
  Tooltip,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import {
  Layers,
  Timeline,
  Key,
  Logout,
  People,
  CreditCard,
  Settings,
  HelpOutline,
  MenuBook,
  Notifications
} from '@mui/icons-material';
import Logo from '../assets/Logo.svg';

const Header = ({ isAdmin = false, onMenuItemSelect, activePage = 'Applications' }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [activeIcon, setActiveIcon] = useState(activePage);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const handleMenuItemClick = (menuItem) => {
    onMenuItemSelect(menuItem);
    handleClose();
    
    // Update active icon when menu items are clicked
    if (menuItem === 'Applications') {
      setActiveIcon('Applications');
    } else if (menuItem === 'Analysis tools') {
      setActiveIcon('Analysis');
    } else if (menuItem === 'Help') {
      setActiveIcon('Help');
    }
    else {
      setActiveIcon(null)
    }
  };
  
  // Function to handle logo click
  const handleLogoClick = () => {
    onMenuItemSelect('Applications');
    setActiveIcon('Applications');
    window.location.reload(); // Reloads the entire page
  };

  // Define the active icon style - improved with better visual indicators
  const getIconStyle = (iconName) => ({
    color: activeIcon === iconName ? '#8E6BF8' : 'rgba(255, 255, 255, 0.7)',
    '&:hover': { 
      color: activeIcon === iconName ? '#A78DFF' : 'rgba(255, 255, 255, 0.9)',
      backgroundColor: 'rgba(142, 107, 248, 0.08)'
    },
    padding: '6px',
    borderRadius: '8px',
    transition: 'all 0.2s ease',
    margin: '0 2px',
    ...(activeIcon === iconName && {
      boxShadow: '0 2px 8px rgba(142, 107, 248, 0.3)',
      backgroundColor: 'rgba(142, 107, 248, 0.15)',
    })
  });

  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: '#1E1E2D', 
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.07)',
        height: '48px', // Fixed height
      }}
    >
      {/* Use a Box for more control over centering */}
      <Box 
        sx={{ 
          height: '100%', 
          display: 'flex', 
          alignItems: 'center', // This centers children vertically
          px: 0, // Remove any horizontal padding at Box level
        }}
      >
        <Toolbar 
          disableGutters // This removes the default padding
          sx={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center', 
            minHeight: '48px !important', // Override MUI's default with !important
            padding: '0 16px !important', // Slightly more padding for breathing room
            width: '100%',
            height: '100%',
            ml: 0, 
            mr: 0
          }}
        >
          {/* Logo on the left - replaced text with SVG */}
          <Box
            onClick={handleLogoClick}
            sx={{ 
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              '&:hover': {
                opacity: 0.9
              },
              ml: 0.5, // Reduced margin for better spacing
            }}
          >
            <img src={Logo} alt="Logo" />
          </Box>
          
          {/* Right side icons - improved styling */}
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 0.5, // Slight gap between icons
            mr: 0.5, // Reduced margin
            // backgroundColor: 'rgba(30, 30, 45, 0.6)', // Subtle background
            borderRadius: '10px',
            padding: '2px 6px',
            // boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.05)'
          }}>
            <Tooltip title="Applications" arrow>
              <IconButton 
                onClick={() => handleMenuItemClick('Applications')}
                sx={getIconStyle('Applications')}
                size="small" // Use MUI's size prop for consistency
              >
                <Layers sx={{ fontSize: 20 }} />
              </IconButton>
            </Tooltip>
            
            <Tooltip title="Analysis tools" arrow>
              <IconButton 
                onClick={() => handleMenuItemClick('Analysis tools')}
                sx={getIconStyle('Analysis')}
                size="small"
              >
                <Timeline sx={{ fontSize: 20 }} />
              </IconButton>
            </Tooltip>
            
            {/* Added Help icon to the header */}
            <Tooltip title="Help" arrow>
              <IconButton 
                onClick={() => handleMenuItemClick('Help')}
                sx={getIconStyle('Help')}
                size="small"
              >
                <HelpOutline sx={{ fontSize: 20 }} />
              </IconButton>
            </Tooltip>
            
            <Tooltip title="Profile" arrow>
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ 
                  ml: 0.5,
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 0 8px rgba(142, 107, 248, 0.3)',
                  } 
                }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <Avatar 
                  sx={{ 
                    width: 30,
                    height: 30,
                    bgcolor: '#8E6BF8',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: 'white',
                    border: '2px solid rgba(255, 255, 255, 0.2)'
                  }}
                >
                  OB
                </Avatar>
              </IconButton>
            </Tooltip>
          </Box>
          
          {/* Profile dropdown menu */}
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 3,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 4px 12px rgba(0,0,0,0.4))',
                mt: 1.5,
                bgcolor: '#1E1E2D',
                border: '1px solid rgba(255, 255, 255, 0.07)',
                borderRadius: '12px',
                color: 'grey.300',
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  // content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: '#1E1E2D',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                  borderTop: '1px solid rgba(255, 255, 255, 0.07)',
                  borderLeft: '1px solid rgba(255, 255, 255, 0.07)',
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <Box sx={{ px: 2, py: 1.5 }}>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: 'grey.100',
                  fontWeight: 600,
                  fontSize: '0.95rem'
                }}
              >
                Olivier Bonsignour
              </Typography>
              <Typography 
                variant="caption" 
                sx={{ 
                  color: '#8E6BF8',
                  display: 'block',
                  fontWeight: 500,
                  fontSize: '0.8rem'
                }}
              >
                CAST Software
              </Typography>
              <Typography 
                variant="caption" 
                sx={{ 
                  color: 'grey.500',
                  display: 'block',
                  mt: 0.5
                }}
              >
                o.bonsignour@castsoftware.com
              </Typography>
            </Box>
            
            <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.07)' }} />
            
            {isAdmin && (
              <>
                <Typography variant="caption" sx={{ 
                  px: 2, 
                  pt: 1.5, 
                  pb: 0.5, 
                  color: 'grey.400', 
                  display: 'block',
                  fontWeight: 600,
                  fontSize: '0.7rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  Administration
                </Typography>
                
                <MenuItem onClick={() => handleMenuItemClick('Members')} sx={{
                  color: 'grey.200',
                  mx: 1,
                  my: 0.5,
                  borderRadius: '8px',
                  '&:hover': { 
                    bgcolor: 'rgba(142, 107, 248, 0.1)',
                    '& .MuiListItemIcon-root': {
                      color: '#8E6BF8'
                    }
                  }
                }}>
                  <ListItemIcon sx={{ color: 'grey.400', minWidth: 36 }}>
                    <People fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Members" />
                </MenuItem>
                
                <MenuItem onClick={() => handleMenuItemClick('Subscription overview')} sx={{
                  color: 'grey.200',
                  mx: 1,
                  my: 0.5,
                  borderRadius: '8px',
                  '&:hover': { 
                    bgcolor: 'rgba(142, 107, 248, 0.1)',
                    '& .MuiListItemIcon-root': {
                      color: '#8E6BF8'
                    }
                  }
                }}>
                  <ListItemIcon sx={{ color: 'grey.400', minWidth: 36 }}>
                    <CreditCard fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Subscription overview" />
                </MenuItem>
                
                <MenuItem onClick={() => handleMenuItemClick('Account settings')} sx={{
                  color: 'grey.200',
                  mx: 1,
                  my: 0.5,
                  borderRadius: '8px',
                  '&:hover': { 
                    bgcolor: 'rgba(142, 107, 248, 0.1)',
                    '& .MuiListItemIcon-root': {
                      color: '#8E6BF8'
                    }
                  }
                }}>
                  <ListItemIcon sx={{ color: 'grey.400', minWidth: 36 }}>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Account settings" />
                </MenuItem>
                
                <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.07)', my: 1 }} />
              </>
            )}
            
            <Typography variant="caption" sx={{ 
              px: 2, 
              pt: 1.5, 
              pb: 0.5, 
              color: 'grey.400', 
              display: 'block',
              fontWeight: 600,
              fontSize: '0.7rem',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Documentation & Resources
            </Typography>
            
            <MenuItem onClick={() => handleMenuItemClick('Documentation')} sx={{
              color: 'grey.200',
              mx: 1,
              my: 0.5,
              borderRadius: '8px',
              '&:hover': { 
                bgcolor: 'rgba(142, 107, 248, 0.1)',
                '& .MuiListItemIcon-root': {
                  color: '#8E6BF8'
                }
              }
            }}>
              <ListItemIcon sx={{ color: 'grey.400', minWidth: 36 }}>
                <MenuBook fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Documentation" />
            </MenuItem>
            
            <MenuItem onClick={() => handleMenuItemClick("What's new")} sx={{
              color: 'grey.200',
              mx: 1,
              my: 0.5,
              borderRadius: '8px',
              '&:hover': { 
                bgcolor: 'rgba(142, 107, 248, 0.1)',
                '& .MuiListItemIcon-root': {
                  color: '#8E6BF8'
                }
              }
            }}>
              <ListItemIcon sx={{ color: 'grey.400', minWidth: 36 }}>
                <Notifications fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="What's new" />
              <Box sx={{
                bgcolor: '#8E6BF8',
                borderRadius: '6px',
                px: 0.8,
                py: 0.2,
                fontSize: '0.65rem',
                fontWeight: '600',
                color: 'white',
                boxShadow: '0 2px 5px rgba(142, 107, 248, 0.3)'
              }}>
                NEW
              </Box>
            </MenuItem>
            
            <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.07)', my: 1 }} />
            
            {/* API token and logout at the bottom */}
            <MenuItem onClick={() => handleMenuItemClick('Generate API token')} sx={{
              color: 'grey.200',
              mx: 1,
              my: 0.5,
              borderRadius: '8px',
              '&:hover': { 
                bgcolor: 'rgba(142, 107, 248, 0.1)',
                '& .MuiListItemIcon-root': {
                  color: '#8E6BF8'
                }
              }
            }}>
              <ListItemIcon sx={{ color: 'grey.400', minWidth: 36 }}>
                <Key fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Generate API token" />
            </MenuItem>
            
            <MenuItem onClick={() => handleMenuItemClick('Log out')} sx={{
              color: 'grey.200',
              mx: 1,
              my: 0.5,
              borderRadius: '8px',
              '&:hover': { 
                bgcolor: 'rgba(255, 100, 100, 0.1)',
                '& .MuiListItemIcon-root': {
                  color: 'rgb(255, 100, 100)'
                }
              }
            }}>
              <ListItemIcon sx={{ color: 'grey.400', minWidth: 36 }}>
                <Logout fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Log out" />
            </MenuItem>
          </Menu>
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default Header;