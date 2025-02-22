import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './theme/theme';
import ApplicationDashboard from './components/ApplicationDashboard';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ApplicationDashboard />
    </ThemeProvider>
  );
};

export default App;