import { useState, useMemo } from 'react';
import { 
  Checkbox,
  Avatar,
  Box, 
  Typography, 
  Button, 
  InputBase,
  Dialog,
  styled
} from '@mui/material';
import { Add, Search } from '@mui/icons-material';
import { keyframes } from '@mui/system';
import { Compass } from 'lucide-react';

const float = keyframes`
  0%, 100% { transform: translateY(0) translateX(0); }
  25% { transform: translateY(-20px) translateX(10px); }
  50% { transform: translateY(-10px) translateX(-10px); }
  75% { transform: translateY(-30px) translateX(5px); }
`;


const getInitials = (name) => {
  return name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase();
};

const getAvatarColor = (initials) => {
  const colorMap = {
    'OB': '#9333ea',
    'default': {
      'A': '#4ade80',
      'B': '#60a5fa',
      'C': '#a78bfa',
      'E': '#f472b6',
      'D': '#13348f',
      'S': '#818cf8',
      'M': '#2dd4bf',
      'V': '#fb923c',
    }
  };
  
  return initials === 'OB' ? colorMap.OB : (colorMap.default[initials[0]] || '#6b7280');
};

export const StatusChip = styled(Box)(({ status }) => {
  const statusColors = {
    'analysis complete': {
      color: '#4ade80',
      bg: '#14532d1a',
      border: '#15803d33',
      shadow: '0 0 8px #4ade8040'
    },
    'profiling complete': {
      color: '#60a5fa',
      bg: '#1e3a8a1a',
      border: '#1d4ed833',
      shadow: '0 0 8px #60a5fa40'
    },
    'configuration pending': {
      color: '#fcd34d',
      bg: '#713f121a',
      border: '#854d0e33',
      shadow: '0 0 8px #fcd34d40'
    },
    'error': {
      color: '#f87171',
      bg: '#7f1d1d1a',
      border: '#b91c1c33',
      shadow: '0 0 8px #f8717140'
    }
  };

  const defaultColors = {
    color: '#9ca3af',
    bg: '#3741511a',
    border: '#4b556333',
    shadow: '0 0 8px #9ca3af40'
  };

  const colors = statusColors[status.toLowerCase()] || defaultColors;

  return {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '2px 10px 2px 16px',
    borderRadius: '99px',
    fontSize: '0.75rem',
    fontWeight: 500,
    letterSpacing: '0.01em',
    backgroundColor: colors.bg,
    color: colors.color,
    border: `1px solid ${colors.border}`,
    position: 'relative',
    boxShadow: colors.shadow,
    '&::before': {
      content: '""',
      width: '4px',
      height: '4px',
      borderRadius: '50%',
      backgroundColor: colors.color,
      position: 'absolute',
      left: '6px'
    }
  };
});

const StyledSearchInput = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  padding: '2px 10px',
  backgroundColor: 'rgba(30, 30, 30, 0.6)',
  borderRadius: '8px',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  transition: 'all 0.2s ease-in-out',
  
  '&:hover': {
    backgroundColor: 'rgba(40, 40, 40, 0.8)',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
  },

  '&:focus-within': {
    backgroundColor: 'rgba(45, 45, 45, 0.9)',
    border: '1px solid rgba(255, 255, 255, 0.16)',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.2)'
  }
}));

const StyledCard = styled(Box)(({ theme, selected }) => ({
  backgroundColor: theme.palette.grey[800],
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(1.5),
  marginBottom: theme.spacing(1),
  transition: 'all 0.2s ease',
  cursor: 'pointer',
  position: 'relative',
  ...(selected && {
    backgroundColor: theme.palette.primary.dark,
    boxShadow: `0 0 0 1px ${theme.palette.primary.main}`,
    '&::before': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: '3px',
      backgroundColor: theme.palette.primary.main,
      borderTopLeftRadius: theme.shape.borderRadius,
      borderBottomLeftRadius: theme.shape.borderRadius,
    }
  }),
  '&:hover': {
    backgroundColor: selected ? theme.palette.primary.dark : theme.palette.grey[750],
    transform: 'translateX(4px)',
  }
}));

const ApplicationList = ({ applications = [], selectedApp, onSelectApp, isDrawerExpanded, setIsDrawerExpanded }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showOnlyMine, setShowOnlyMine] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const filteredApps = useMemo(() => {
    if (!applications) return [];
    
    return applications.filter(app => {
      // Check if the app name matches the search query (case insensitive)
      const nameMatches = searchQuery 
        ? app.name.toLowerCase().includes(searchQuery.toLowerCase())
        : true;

      // Check if it's the user's app (Olivier Bonsignour)
      const isMyApp = showOnlyMine 
        ? app.ownerName === "Olivier Bonsignour"
        : true;

      return nameMatches && isMyApp;
    });
  }, [applications, searchQuery, showOnlyMine]);

  const displayCount = useMemo(() => {
    if (showOnlyMine) {
      return applications.filter(app => app.ownerName === "Olivier Bonsignour").length;
    }
    return applications.length;
  }, [applications, showOnlyMine]);

  return (
    <Box
          sx={{
            width: isDrawerExpanded ? 450 : 64,
            flexShrink: 0,
            transition: 'width 0.2s ease',
            bgcolor: '#1a1f2b',
            borderRight: '1px solid rgba(255, 255, 255, 0.05)',
            overflow: 'hidden',
            zIndex: (theme) => theme.zIndex.drawer
          }}
          onMouseEnter={() => setIsDrawerExpanded(true)}
          onMouseLeave={() => setIsDrawerExpanded(false)}
        >
     <Box sx={{ 
      width: '450px',  // Fixed width to 584px
      bgcolor: 'grey.900',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      flexShrink: 0, // Prevent shrinking
    }}>
      <Box sx={{ p: 2, borderBottom: '1px solid', borderColor: 'grey.800' }}>
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          mb: 2
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Typography variant="h6" color="white">Applications</Typography>
            <Box sx={{
              bgcolor: '#8b5cf6',
              color: 'white',
              borderRadius: '50%',
              width: 24,
              height: 24,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.75rem',
              fontWeight: 600,
            }}>
              {displayCount}
            </Box>
          </Box>
           <Button
              variant="contained"
              color="primary"
              startIcon={<Add />}
              size="small"
              onClick={() => setIsDialogOpen(true)}
              sx={{
                borderRadius: 1,
                textTransform: 'none',
                px: 2,
              }}
            >
              New App
            </Button>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Checkbox
            size="small"
            checked={showOnlyMine}
            onChange={(e) => setShowOnlyMine(e.target.checked)}
            sx={{
              color: 'grey.600',
              '&.Mui-checked': {
                color: 'primary.main',
              },
              p: 0.5,
              mr: 1,
            }}
          />
          <Typography variant="body2" color="grey.300">
            Show only my applications
          </Typography>
        </Box>

        <StyledSearchInput>
          <Search sx={{ color: 'grey.400', mr: 1, fontSize: 20 }} />
          <InputBase
            placeholder="Search applications..."
            sx={{ flex: 1, color: 'white', fontSize: '0.875rem' }}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </StyledSearchInput>
      </Box>

      <Box sx={{ 
        overflowY: 'auto',
        flex: 1,
        p: 2,
      }}>
        {filteredApps.map((app) => (
          <StyledCard
            key={app.id}
            onClick={() => onSelectApp(app)}
            selected={selectedApp?.id === app.id}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Avatar 
                sx={{ 
                  color: 'white',
                  width: 32, 
                  height: 32, 
                  fontSize: '0.875rem',
                  bgcolor: getAvatarColor(getInitials(app.ownerName)),
                }}
              >
                {getInitials(app.ownerName)}
              </Avatar>
              
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 0.5 }}>
                  <Typography 
                    color="white" 
                    variant="subtitle2" 
                    noWrap 
                    sx={{ flex: 1 }}
                  >
                    {app.name}
                  </Typography>
                  <StatusChip status={app.status}>
                    {app.status}
                  </StatusChip>
                </Box>
                
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                  <Typography variant="caption" color="grey.400">
                    {app.linesOfCode.toLocaleString()} LOC
                  </Typography>
                  <Typography variant="caption" color="grey.500">
                    {app.lastAction}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </StyledCard>
        ))}
      </Box>
    </Box>
     <Dialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            bgcolor: 'transparent',
            boxShadow: 'none',
            overflow: 'hidden',
          }
        }}
      >
        <Box sx={{
          background: 'linear-gradient(180deg, #0a0a0a 0%, #121212 100%)',
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          minHeight: '400px',
        }}>
          {/* Ambient glow */}
          <Box sx={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at 50% 50%, rgba(139,92,246,0.1), transparent 70%)',
            pointerEvents: 'none',
          }} />
          
          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <Box
              key={i}
              sx={{
                position: 'absolute',
                width: '4px',
                height: '4px',
                backgroundColor: 'rgba(139,92,246,0.9)',
                borderRadius: '50%',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `${float} ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}

          <Box sx={{ position: 'relative', textAlign: 'center', zIndex: 1 }}>
            <Compass 
              size={100}
              style={{
                color: '#8b5cf6',
                marginBottom: '2rem',
                filter: 'drop-shadow(0 0 20px rgba(139,92,246,0.3))',
              }}
            />
            <Typography variant="h4" sx={{
              color: 'white',
              mb: 2,
              fontWeight: 'bold',
            }}>
              Coming Soon
            </Typography>
            <Typography sx={{
              color: 'rgba(255,255,255,0.6)',
              maxWidth: '500px',
              fontSize: '1.1rem',
            }}>
              We're working on something exciting. This feature will be available in the next update.
            </Typography>
          </Box>
        </Box>
      </Dialog>
    </Box>
  );
};

export default ApplicationList;