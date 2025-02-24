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

const Header = ({ isAdmin = false, onMenuItemSelect }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const handleMenuItemClick = (menuItem) => {
    onMenuItemSelect(menuItem);
    handleClose();
  };

  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: '#252531', 
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        height: '48px', // Fixed height
      }}
    >
      {/* Use a Box for more control over centering */}
      <Box 
        sx={{ 
          height: '100%', 
          display: 'flex', 
          alignItems: 'center' // This centers children vertically
        }}
      >
        <Toolbar 
          sx={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center', 
            minHeight: '48px !important', // Override MUI's default with !important
            padding: '0 16px', // Explicit padding
            width: '100%',
            height: '100%'
          }}
        >
          {/* Logo on the left */}
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ 
              fontWeight: 600,
              color: '#fff',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            CAST Imaging
          </Typography>
          
          {/* Right side icons */}
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 1
          }}>
            <Tooltip title="Applications">
              <IconButton 
                onClick={() => handleMenuItemClick('Applications')}
                sx={{ 
                  color: 'grey.500',
                  '&:hover': { color: 'primary.main' },
                  padding: '4px'
                }}
                size="small" // Use MUI's size prop for consistency
              >
                <Layers sx={{ fontSize: 20 }} />
              </IconButton>
            </Tooltip>
            
            <Tooltip title="Analysis tools">
              <IconButton 
                onClick={() => handleMenuItemClick('Analysis tools')}
                sx={{ 
                  color: 'grey.500',
                  '&:hover': { color: 'primary.main' },
                  padding: '4px'
                }}
                size="small"
              >
                <Timeline sx={{ fontSize: 20 }} />
              </IconButton>
            </Tooltip>
            
            <Tooltip title="Profile">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 1 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <Avatar 
                  sx={{ 
                    width: 28,
                    height: 28,
                    bgcolor: 'primary.main',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    color: 'white'
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
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                bgcolor: '#1a1f2b',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                color: 'grey.300',
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: '#1a1f2b',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                  borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                  borderLeft: '1px solid rgba(255, 255, 255, 0.05)',
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <Box sx={{ px: 2, py: 1 }}>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: 'grey.100',
                  fontWeight: 500
                }}
              >
                Olivier Bonsignour
              </Typography>
              <Typography 
                variant="caption" 
                sx={{ 
                  color: 'grey.500',
                  display: 'block'
                }}
              >
                o.bonsignour@castsoftware.com
              </Typography>
            </Box>
            
            <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.05)' }} />
            
            {isAdmin && (
              <>
                <Typography variant="caption" sx={{ px: 2, pt: 1, pb: 0.5, color: 'grey.500', display: 'block' }}>
                  Administration
                </Typography>
                
                <MenuItem onClick={() => handleMenuItemClick('Members')} sx={{
                  color: 'grey.300',
                  '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.04)' }
                }}>
                  <ListItemIcon sx={{ color: 'grey.500', minWidth: 36 }}>
                    <People fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Members" />
                </MenuItem>
                
                <MenuItem onClick={() => handleMenuItemClick('Subscription overview')} sx={{
                  color: 'grey.300',
                  '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.04)' }
                }}>
                  <ListItemIcon sx={{ color: 'grey.500', minWidth: 36 }}>
                    <CreditCard fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Subscription overview" />
                </MenuItem>
                
                <MenuItem onClick={() => handleMenuItemClick('Account settings')} sx={{
                  color: 'grey.300',
                  '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.04)' }
                }}>
                  <ListItemIcon sx={{ color: 'grey.500', minWidth: 36 }}>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Account settings" />
                </MenuItem>
                
                <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.05)' }} />
              </>
            )}
            
            <Typography variant="caption" sx={{ px: 2, pt: 1, pb: 0.5, color: 'grey.500', display: 'block' }}>
              Help & Resources
            </Typography>
            
            <MenuItem onClick={() => handleMenuItemClick('Help')} sx={{
              color: 'grey.300',
              '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.04)' }
            }}>
              <ListItemIcon sx={{ color: 'grey.500', minWidth: 36 }}>
                <HelpOutline fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Help" />
            </MenuItem>
            
            <MenuItem onClick={() => handleMenuItemClick('Documentation')} sx={{
              color: 'grey.300',
              '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.04)' }
            }}>
              <ListItemIcon sx={{ color: 'grey.500', minWidth: 36 }}>
                <MenuBook fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Documentation" />
            </MenuItem>
            
            <MenuItem onClick={() => handleMenuItemClick("What's new")} sx={{
              color: 'grey.300',
              '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.04)' }
            }}>
              <ListItemIcon sx={{ color: 'grey.500', minWidth: 36 }}>
                <Notifications fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="What's new" />
              <Box sx={{
                bgcolor: '#7B5CF0',
                borderRadius: '4px',
                px: 0.8,
                py: 0.2,
                fontSize: '0.65rem',
                color: 'white'
              }}>
                NEW
              </Box>
            </MenuItem>
            
            <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.05)' }} />
            
            {/* API token and logout at the bottom */}
            <MenuItem onClick={() => handleMenuItemClick('Generate API token')} sx={{
              color: 'grey.300',
              '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.04)' }
            }}>
              <ListItemIcon sx={{ color: 'grey.500', minWidth: 36 }}>
                <Key fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Generate API token" />
            </MenuItem>
            
            <MenuItem onClick={() => handleMenuItemClick('Log out')} sx={{
              color: 'grey.300',
              '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.04)' }
            }}>
              <ListItemIcon sx={{ color: 'grey.500', minWidth: 36 }}>
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