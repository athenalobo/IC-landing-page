import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#7B5CF0', // Purple color
    },
    background: {
      default: '#111318',
      paper: '#1a1f2b',
    },
    grey: {
      100: '#f5f5f5',
      300: '#e0e0e0',
      500: '#9e9e9e',
      700: '#616161',
      900: '#212129',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

export default theme;