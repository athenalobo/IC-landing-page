// src/components/MainView/styles.js
import { AppBar, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#0a0a0a',
    height: '100%',
    overflowY: 'auto',
  },
  card: {
    backgroundColor: '#1a1a1a',
    border: '1px solid #2a2a2a',
    borderRadius: '12px',
    transition: 'all 0.3s ease',
  },
  cardHover: {
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
    border: '1px solid #8b5cf6',
  },
  cardOverlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: '10px',
    color: '#8b5cf6',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    fontSize: '14px',
  },
  title: {
    color: 'white',
    fontSize: '20px',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  stat: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '12px',
    color: '#a0a0a0',
  },
  statValue: {
    color: 'white',
    fontWeight: 500,
  },
  
};

const style = document.createElement('style');
style.textContent = `
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;
document.head.appendChild(style);

export const StyledAppBar = styled(AppBar)(() => ({
  backgroundColor: 'black',
  backdropFilter: 'blur(10px)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
}));

export const NavButton = styled(Button)(({ active }) => ({
  color: active ? '#fff' : 'rgba(255, 255, 255, 0.7)',
  backgroundColor: active ? '#8b5cf6' : 'rgba(255, 255, 255, 0.15)',
  '&:hover': {
    backgroundColor: active ? '#7c3aed' : 'rgba(255, 255, 255, 0.05)'
  },
  textTransform: 'none',
  minWidth: 'auto',
  borderRadius: '8px',
  transition: 'all 0.2s ease'
}));