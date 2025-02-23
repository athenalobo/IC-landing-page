import React from 'react';
import { 
  Box, 
  Button, 
  Card, 
  CardContent, 
  Typography,
  Stack
} from '@mui/material';
import { 
  Compass,
  Settings,
  FolderTree,
  GitBranch,
  Trash2 
} from 'lucide-react';
import { keyframes } from '@mui/system';

const float = keyframes`
  0%, 100% { transform: translateY(0) translateX(0); }
  25% { transform: translateY(-20px) translateX(10px); }
  50% { transform: translateY(-10px) translateX(-10px); }
  75% { transform: translateY(-30px) translateX(5px); }
`;

const ConfigPage = () => {
  const handleAction = (action) => {
    console.log(`Action clicked: ${action}`);
  };

  return (
    <Box sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(180deg, #0a0a0a 0%, #121212 100%)',
      overflow: 'hidden',
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
            width: '3px',
            height: '3px',
            backgroundColor: 'rgba(139,92,246,0.9)',
            borderRadius: '50%',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `${float} ${Math.random() * 10 + 10}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      {/* Main content */}
      <Box sx={{
        position: 'relative',
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
        zIndex: 1,
      }}>
        {/* <Compass 
          size={48}
          style={{
            color: '#8b5cf6',
            marginBottom: '1rem',
            filter: 'drop-shadow(0 0 20px rgba(139,92,246,0.3))',
          }}
        />

        <Typography variant="h4" component="h1" sx={{
          color: 'white',
          fontWeight: 'bold',
          mb: 2,
          textAlign: 'center',
        }}>
          Configuration Settings
        </Typography> */}

        <Stack spacing={1.5} sx={{ width: '100%', maxWidth: '400px' }}>
          <Card sx={{
            backgroundColor: 'rgba(18, 18, 18, 0.6)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}>
            <CardContent sx={{ py: 1, '&:last-child': { pb: 1 } }}>
              <Button
                fullWidth
                startIcon={<FolderTree size={18} />}
                onClick={() => handleAction('root-path')}
                sx={{
                  color: 'white',
                  backgroundColor: 'rgba(30, 30, 30, 0.6)',
                  justifyContent: 'flex-start',
                  padding: '8px 16px',
                  '&:hover': {
                    backgroundColor: 'rgba(40, 40, 40, 0.8)',
                  },
                }}
              >
                Configure Root Path
              </Button>
            </CardContent>
          </Card>

          <Card sx={{
            backgroundColor: 'rgba(18, 18, 18, 0.6)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}>
            <CardContent sx={{ py: 1, '&:last-child': { pb: 1 } }}>
              <Button
                fullWidth
                startIcon={<Settings size={18} />}
                onClick={() => handleAction('gh-analysis')}
                sx={{
                  color: 'white',
                  backgroundColor: 'rgba(30, 30, 30, 0.6)',
                  justifyContent: 'flex-start',
                  padding: '8px 16px',
                  '&:hover': {
                    backgroundColor: 'rgba(40, 40, 40, 0.8)',
                  },
                }}
              >
                Configure GH Analysis
              </Button>
            </CardContent>
          </Card>

          <Card sx={{
            backgroundColor: 'rgba(18, 18, 18, 0.6)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}>
            <CardContent sx={{ py: 1, '&:last-child': { pb: 1 } }}>
              <Button
                fullWidth
                startIcon={<GitBranch size={18} />}
                onClick={() => handleAction('view-repos')}
                sx={{
                  color: 'white',
                  backgroundColor: 'rgba(30, 30, 30, 0.6)',
                  justifyContent: 'flex-start',
                  padding: '8px 16px',
                  '&:hover': {
                    backgroundColor: 'rgba(40, 40, 40, 0.8)',
                  },
                }}
              >
                View Repositories
              </Button>
            </CardContent>
          </Card>

          <Card sx={{
            backgroundColor: 'rgba(18, 18, 18, 0.6)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}>
            <CardContent sx={{ py: 1, '&:last-child': { pb: 1 } }}>
              <Button
                fullWidth
                startIcon={<Trash2 size={18} />}
                onClick={() => handleAction('delete')}
                sx={{
                  color: '#f87171',
                  backgroundColor: 'rgba(30, 30, 30, 0.6)',
                  justifyContent: 'flex-start',
                  padding: '8px 16px',
                  '&:hover': {
                    backgroundColor: 'rgba(40, 40, 40, 0.8)',
                    color: '#fca5a5',
                  },
                }}
              >
                Delete Options
              </Button>
            </CardContent>
          </Card>
        </Stack>
      </Box>
    </Box>
  );
};

export default ConfigPage;