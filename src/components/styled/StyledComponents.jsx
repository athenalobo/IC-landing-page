import { styled } from '@mui/material';
import { Box, Paper, Button } from '@mui/material';

export const SidebarContainer = styled(Box)(({ theme, isexpanded }) => ({
  position: 'fixed',
  left: 0,
  top: 0,
  height: '100vh',
  width: isexpanded === 'true' ? '250px' : '50px',
  background: '#000000',
  borderRight: `1px solid ${theme.palette.grey[900]}`,
  transition: 'width 0.3s ease',
  zIndex: 1200,
  overflow: 'hidden'
}));

export const MainContent = styled(Box)(({ theme, sidebarexpanded }) => ({
  position: 'fixed',
  left: 0,
  top: 0,
  height: '100vh',
  background: '#000000',
  marginLeft: sidebarexpanded === 'true' ? '250px' : '50px',
  transition: 'margin-left 0.3s ease',
  width: `calc(100% - ${sidebarexpanded === 'true' ? '250px' : '50px'})`,
}));

export const LogoBox = styled(Box)(({ theme }) => ({
  width: 40,
  height: 40,
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: theme.spacing(2)
}));

export const SearchInput = styled(Paper)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: theme.palette.grey[900],
  borderRadius: theme.shape.borderRadius * 2,
  padding: theme.spacing(1),
  marginBottom: theme.spacing(3)
}));

export const AppCard = styled(Paper)(({ theme, selected }) => ({
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius * 2,
  backgroundColor: selected ? 'rgba(147, 51, 234, 0.2)' : theme.palette.grey[900],
  border: `1px solid ${selected ? 'rgba(147, 51, 234, 0.5)' : theme.palette.grey[800]}`,
  cursor: 'pointer',
  '&:hover': {
    borderColor: selected ? 'rgba(147, 51, 234, 0.5)' : 'rgba(147, 51, 234, 0.3)'
  }
}));

export const StatusChip = styled(Box)(({ theme, status }) => {
  const getStatusColor = () => {
    switch (status) {
      case 'Deep analysis': return '#22C55E';
      case 'Error': return '#EF4444';
      default: return '#EAB308';
    }
  };
  
  return {
    padding: '4px 8px',
    borderRadius: theme.shape.borderRadius * 4,
    backgroundColor: `${getStatusColor()}20`,
    color: getStatusColor(),
    fontSize: '0.75rem'
  };
});

export const NavButton = styled(Button)(({ theme, active }) => ({
  color: active ? theme.palette.primary.main : theme.palette.grey[400],
  backgroundColor: active ? 'rgba(147, 51, 234, 0.2)' : 'transparent',
  '&:hover': {
    backgroundColor: active ? 'rgba(147, 51, 234, 0.3)' : theme.palette.grey[800]
  }
}));

export const OptionCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius * 3,
  backgroundColor: theme.palette.grey[900],
  border: `1px solid ${theme.palette.grey[800]}`,
  '&:hover': {
    borderColor: 'rgba(147, 51, 234, 0.5)'
  },
  cursor: 'pointer'
}));