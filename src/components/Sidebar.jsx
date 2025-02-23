import React from 'react';
import { 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  Divider, 
  Typography 
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
    { icon: <Layers />, text: 'Applications' },
    { icon: <Timeline />, text: 'Analysis tools' },
    { icon: <People />, text: 'Members' },
    { icon: <CreditCard />, text: 'Subscription overview' },
    { icon: <Settings />, text: 'Account settings' },
  ];

  const bottomMenuItems = [
    { icon: <HelpOutline />, text: 'Contact expert' },
    { icon: <MenuBook />, text: 'Documentation' },
    { icon: <Notifications />, text: "What's new" }
  ];

  const listItemStyles = {
    minHeight: 48,
    justifyContent: 'center',
    px: 2.5,
    '&:hover': {
      bgcolor: 'grey.800',
      cursor: 'pointer',
    }
  };

  const getListItemIconStyles = (selected) => ({
    minWidth: 0,
    mr: isExpanded ? 3 : 0,
    justifyContent: 'center',
    color: selected ? 'primary.main' : 'grey.400',
    transition: 'color 0.2s ease'
  });

  const getListItemTextStyles = (selected) => ({
    opacity: isExpanded ? 1 : 0,
    color: selected ? 'primary.main' : 'grey.400',
    ml: isExpanded ? 0 : -2,
    transition: 'color 0.2s ease',
    whiteSpace: 'nowrap'
  });

  return (
    <SidebarContainer
      isexpanded={isExpanded.toString()}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <LogoBox>
        <Typography color="white">{'OB'}</Typography>
      </LogoBox>
      <br/>
      <List sx={{ p: 0 }}>
        {mainMenuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            onClick={() => onMenuItemSelect(item.text)}
            sx={{
              ...listItemStyles,
              bgcolor: selectedMenuItem === item.text ? 'rgba(147, 51, 234, 0.1)' : 'transparent',
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
        <Divider sx={{ my: 2, bgcolor: 'grey.800' }} />
        {bottomMenuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            onClick={() => onMenuItemSelect(item.text)}
            sx={{
              ...listItemStyles,
              bgcolor: selectedMenuItem === item.text ? 'rgba(147, 51, 234, 0.1)' : 'transparent',
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