import React from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  Avatar,
  Stack
} from '@mui/material';
import {
  Layers,
  Timeline,
  People,
  CreditCard,
  Lock,
  Settings,
  HelpOutline,
  MenuBook,
  Notifications
} from '@mui/icons-material';
import { SidebarContainer, LogoBox } from './styled/StyledComponents';

const Sidebar = ({
  isExpanded,
  onMouseEnter,
  onMouseLeave,
  selectedMenuItem,
  onMenuItemSelect
}) => {
  const mainMenuItems = [
    { icon: <Layers sx={{ fontSize: 18 }} />, text: 'Applications' },
    { icon: <Timeline sx={{ fontSize: 18 }} />, text: 'Analysis tools' },
    { icon: <People sx={{ fontSize: 18 }} />, text: 'Members' },
    { icon: <CreditCard sx={{ fontSize: 18 }} />, text: 'Subscription overview' },
    { icon: <Settings sx={{ fontSize: 18 }} />, text: 'Account settings' },
  ];

  const bottomMenuItems = [
    { icon: <HelpOutline sx={{ fontSize: 18 }} />, text: 'Contact expert' },
    { icon: <MenuBook sx={{ fontSize: 18 }} />, text: 'Documentation' },
    { icon: <Notifications sx={{ fontSize: 18 }} />, text: "What's new" }
  ];

  const listItemStyles = {
    minHeight: 36,
    justifyContent: 'center',
    px: 2,
    '&:hover': {
      bgcolor: 'rgba(255, 255, 255, 0.04)',
      cursor: 'pointer',
    }
  };

  const getListItemIconStyles = (selected) => ({
    minWidth: 0,
    mr: isExpanded ? 1.5 : 0,
    justifyContent: 'center',
    color: selected ? 'primary.main' : 'grey.500',
    transition: 'all 0.2s ease'
  });

  const getListItemTextStyles = (selected) => ({
    opacity: isExpanded ? 1 : 0,
    color: selected ? 'primary.main' : 'grey.300',
    ml: isExpanded ? 0 : -2,
    transition: 'all 0.2s ease',
    whiteSpace: 'nowrap',
    '& .MuiTypography-root': {
      fontSize: '0.9rem',
      fontWeight: selected ? 500 : 400,
      lineHeight: 1.2
    }
  });

  return (
    <SidebarContainer
      isexpanded={isExpanded.toString()}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      sx={{
        bgcolor: '#1a1f2b',
        borderRight: '1px solid rgba(255, 255, 255, 0.05)'
      }}
    >
      <Box sx={{ p: 1, pt: 2, pb:2 }}>
        <Stack direction="row" spacing={1.5} alignItems="center">
          <Avatar
            sx={{
              bgcolor: 'primary.main',
              width: 32,
              height: 32,
              fontSize: '0.875rem',
              fontWeight: 500
            }}
          >
            OB
          </Avatar>
          
          {isExpanded && (
            <Box sx={{ minWidth: 0, flex: 1 }}>
              <Typography
                variant="body2"
                sx={{
                  color: 'grey.100',
                  fontWeight: 500,
                  lineHeight: 1.3,
                  fontSize: '0.875rem'
                }}
              >
                Olivier Bonsignour
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: 'grey.500',
                  lineHeight: 1.3,
                  fontSize: '0.75rem',
                  display: 'block'
                }}
              >
                CAST Software
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: 'grey.500',
                  display: 'block',
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  fontSize: '0.75rem'
                }}
              >
                o.bonsignour@castsoftware.com
              </Typography>
            </Box>
          )}
        </Stack>
      </Box>

      <List sx={{ p: 0, mt: 1 }}>
        {mainMenuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            onClick={() => onMenuItemSelect(item.text)}
            sx={{
              ...listItemStyles,
              bgcolor: selectedMenuItem === item.text ? 'rgba(147, 51, 234, 0.08)' : 'transparent',
            }}
          >
            <ListItemIcon sx={getListItemIconStyles(selectedMenuItem === item.text)}>
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              sx={getListItemTextStyles(selectedMenuItem === item.text)}
            />
          </ListItem>
        ))}

        <Divider sx={{ my: 1, bgcolor: 'rgba(255, 255, 255, 0.04)' }} />

        {bottomMenuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            onClick={() => onMenuItemSelect(item.text)}
            sx={{
              ...listItemStyles,
              bgcolor: selectedMenuItem === item.text ? 'rgba(147, 51, 234, 0.08)' : 'transparent',
            }}
          >
            <ListItemIcon sx={getListItemIconStyles(selectedMenuItem === item.text)}>
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              sx={getListItemTextStyles(selectedMenuItem === item.text)}
            />
          </ListItem>
        ))}
      </List>
    </SidebarContainer>
  );
};

export default Sidebar;