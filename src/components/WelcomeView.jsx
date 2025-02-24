import React from 'react';
import { Box, Typography } from '@mui/material';
import { Compass } from 'lucide-react';
import { keyframes } from '@mui/system';

const float = keyframes`
  from {
    transform: translateY(0) rotate(0deg);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  to {
    transform: translateY(-20vh) rotate(360deg);
    opacity: 0;
  }
`;

const WelcomeView = ({ applications = [] }) => {
  // Calculate summary statistics
  const totalApps = applications.length;
  const appsWithErrors = applications.filter(app => app.status === 'Error').length;
  const appsInProgress = applications.filter(app => app.status === 'in progress').length;
  const profiledApps = applications.filter(app => app.status === 'Profiling complete').length;
  const completedApps = applications.filter(app => app.status === 'Analysis complete').length;

  return (
    <Box sx={{
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: 'linear-gradient(180deg, #000000 0%, #121212 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background effects */}
      <Box sx={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at 50% 50%, rgba(139,92,246,0.1), transparent 70%)',
        pointerEvents: 'none',
      }} />
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

      {/* Main centered content */}
      <Box sx={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 2,
      }}>
        <Box sx={{
          textAlign: 'center',
          maxWidth: '600px',
          px: 3,
        }}>
          <Compass
            size={80}
            style={{
              color: '#8b5cf6',
              marginBottom: '2rem',
              filter: 'drop-shadow(0 0 10px rgba(139,92,246,0.3))',
            }}
          />
          <Typography variant="h2" sx={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            mb: 3,
            background: 'linear-gradient(45deg, #8b5cf6, #6366f1)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Select an application
          </Typography>
          <Typography variant="body1" sx={{
            color: 'rgba(255,255,255,0.7)',
            fontSize: '1.125rem',
            lineHeight: 1.7,
          }}>
            Discover new perspectives on your software.
            Let us navigate the uncharted territories of your codebase together.
          </Typography>
        </Box>
      </Box>

      {/* Bottom statistics */}
      {/* <Box sx={{
        position: 'relative',
        zIndex: 2,
        p: 4,
      }}>
        <Typography sx={{
          color: 'rgba(255,255,255,0.5)',
          fontSize: '0.75rem',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          textAlign: 'center',
          mb: 3,
        }}>
          Current Statistics for the CAST Organization
        </Typography>
        
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: { xs: 4, md: 6 },
          opacity: 0.8,
        }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography sx={{
              fontSize: '1.5rem',
              fontWeight: '400',
              color: '#8b5cf6',
              mb: 0.5,
            }}>
              {totalApps}
            </Typography>
            <Typography sx={{ 
              color: 'rgba(255,255,255,0.5)', 
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Applications
            </Typography>
          </Box>

          <Box sx={{ textAlign: 'center' }}>
            <Typography sx={{
              fontSize: '1.5rem',
              fontWeight: '400',
              color: '#22c55e',
              mb: 0.5,
            }}>
              {completedApps}
            </Typography>
            <Typography sx={{ 
              color: 'rgba(255,255,255,0.5)', 
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Analyzed
            </Typography>
          </Box>

          <Box sx={{ textAlign: 'center' }}>
            <Typography sx={{
              fontSize: '1.5rem',
              fontWeight: '400',
              color: '#3b82f6',
              mb: 0.5,
            }}>
              {profiledApps}
            </Typography>
            <Typography sx={{ 
              color: 'rgba(255,255,255,0.5)', 
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Profiled
            </Typography>
          </Box>


          <Box sx={{ textAlign: 'center' }}>
            <Typography sx={{
              fontSize: '1.5rem',
              fontWeight: '400',
              color: 'white',
              mb: 0.5,
            }}>
              {appsInProgress}
            </Typography>
            <Typography sx={{ 
              color: 'rgba(255,255,255,0.5)', 
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              In Progress
            </Typography>
          </Box>

          <Box sx={{ textAlign: 'center' }}>
            <Typography sx={{
              fontSize: '1.5rem',
              fontWeight: '400',
              color: '#ef4444',
              mb: 0.5,
            }}>
              {appsWithErrors}
            </Typography>
            <Typography sx={{ 
              color: 'rgba(255,255,255,0.5)', 
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Errors
            </Typography>
          </Box>
        </Box>
      </Box> */}
    </Box>
  );
};

export default WelcomeView;