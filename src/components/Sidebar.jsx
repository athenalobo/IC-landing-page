import React from 'react';
import { 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  Divider, 
  Badge, 
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

const Sidebar = ({ isExpanded, onMouseEnter, onMouseLeave }) => {
  const mainMenuItems = [
    { icon: <Layers />, text: 'Applications', selected: true },
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
        {mainMenuItems.map((item, index) => (
          <ListItem
            button
            key={index}
            sx={{
              ...listItemStyles,
              bgcolor: item.selected ? 'rgba(147, 51, 234, 0.1)' : 'transparent',
            }}
          >
            <ListItemIcon sx={getListItemIconStyles(item.selected)}>
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              sx={getListItemTextStyles(item.selected)}
            />
          </ListItem>
        ))}
        <Divider sx={{ my: 2, bgcolor: 'grey.800' }} />
        {bottomMenuItems.map((item, index) => (
          <ListItem
            button
            key={index}
            sx={listItemStyles}
          >
            <ListItemIcon sx={getListItemIconStyles(false)}>
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              sx={getListItemTextStyles(false)}
            />
          </ListItem>
        ))}
      </List>
    </SidebarContainer>
  );
};

export default Sidebar;