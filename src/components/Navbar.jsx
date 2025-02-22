import React from 'react';
import { AppBar, Toolbar, Typography, Badge, IconButton } from '@mui/material';
import { Notifications } from '@mui/icons-material';

const Navbar = () => {
  return (
    <AppBar position="fixed" sx={{ background: '#18181B', zIndex: 1100 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>Application Dashboard</Typography>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <Notifications />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
