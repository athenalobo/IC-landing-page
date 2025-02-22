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
    { icon: <Layers />, text: 'My applications' },
    { icon: <Timeline />, text: 'Analyzer' },
    { icon: <People />, text: 'Members' },
    { icon: <CreditCard />, text: 'Subscription overview' },
    { icon: <Lock />, text: 'Authentication configuration' },
    { icon: <Settings />, text: 'Organizations' }
  ];

  const bottomMenuItems = [
    { icon: <HelpOutline />, text: 'Contact expert' },
    { icon: <MenuBook />, text: 'Documentation' },
    { icon: <Notifications />, text: "What's new" }
  ];

  return (
    <SidebarContainer
      isexpanded={isExpanded.toString()}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <LogoBox>
        <Typography color="white">{'OB'}</Typography>
      </LogoBox>
      <List>
        {mainMenuItems.map((item, index) => (
          <ListItem
            button
            key={index}
            sx={{
              minHeight: 48,
              justifyContent: isExpanded ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                color: 'grey.400',
                minWidth: 0,
                mr: isExpanded ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              sx={{
                opacity: isExpanded ? 1 : 0,
                color: 'grey.400'
              }}
            />
          </ListItem>
        ))}
        <Divider sx={{ my: 2, bgcolor: 'grey.800' }} />
        {bottomMenuItems.map((item, index) => (
          <ListItem
            button
            key={index}
            sx={{
              minHeight: 48,
              justifyContent: isExpanded ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                color: 'grey.400',
                minWidth: 0,
                mr: isExpanded ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              sx={{
                opacity: isExpanded ? 1 : 0,
                color: 'grey.400'
              }}
            />
          </ListItem>
        ))}
      </List>
    </SidebarContainer>
  );
};

export default Sidebar;