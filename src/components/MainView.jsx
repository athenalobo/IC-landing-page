import React from 'react';
import { Box, Grid, Typography, LinearProgress } from '@mui/material';
import { 
  Visibility, 
  Timeline, 
  FindInPage,
  Add,
  Layers,
  Add as BoxIcon
} from '@mui/icons-material';
import { NavButton, OptionCard } from './styled/StyledComponents';

const MainView = ({ selectedApp, activeSection, onSectionChange }) => {
  const viewOptions = [
    { id: 'summary', label: 'Summary', icon: Add },
    { id: 'architecture', label: 'Architecture Layer', icon: Layers },
    { id: 'technologies', label: 'Programming Technologies', icon: Add },
    { id: 'taxonomy', label: 'Object Type Taxonomy', icon: Add },
    { 
      id: 'data',
      label: 'Data Management',
      icon: Add,
      subOptions: [
        { id: 'data-model', label: 'Data Model' },
        { id: 'data-access', label: 'Data Access' }
      ]
    },
    {
      id: 'callgraphs',
      label: 'End to End Call Graphs',
      icon: Add,
      subOptions: [
        { id: 'transactions', label: 'Transactions' },
        { id: 'data-calls', label: 'Data Call Graphs' }
      ]
    },
    { id: 'saved', label: 'Saved Views', icon: Add }
  ];

  const improveOptions = [
    { id: 'security', label: 'Security Flaws', icon: Add },
    { id: 'performance', label: 'Performance Issues', icon: Add },
    { id: 'reliability', label: 'Reliability Flaws', icon: Add },
    { id: 'cloud', label: 'Cloud Maturity', icon: Add },
    { id: 'container', label: 'Containerization', icon: BoxIcon },
    { id: 'green', label: 'Green Computing', icon: Add }
  ];

  return (
    <Box sx={{ flex: 1, bgcolor: 'grey.900' }}>
      {selectedApp?.canNavigate && (
        <Box sx={{ borderBottom: 1, borderColor: 'grey.800', p: 2 }}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            {[
              { key: 'view', icon: <Visibility />, label: 'View' },
              { key: 'impact', icon: <Timeline />, label: 'Run Impact Analysis' },
              { key: 'improve', icon: <Timeline />, label: 'Improve' },
              { key: 'search', icon: <FindInPage />, label: 'Search in CAST Imaging' }
            ].map(({ key, icon, label }) => (
              <NavButton
                key={key}
                active={activeSection === key}
                onClick={() => onSectionChange(key)}
                startIcon={icon}
              >
                {label}
              </NavButton>
            ))}
          </Box>
        </Box>
      )}

      <Box sx={{ p: 4 }}>
        {selectedApp?.canNavigate === true && activeSection === 'view' && (
          <Grid container spacing={3}>
            {viewOptions.map((option) => (
              <Grid item xs={6} key={option.id}>
                <OptionCard>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <option.icon sx={{ color: 'primary.main' }} />
                    <Typography color="white">{option.label}</Typography>
                  </Box>
                  {option.subOptions && (
                    <Box sx={{ pl: 4 }}>
                      {option.subOptions.map((sub) => (
                        <Typography
                          key={sub.id}
                          variant="body2"
                          color="grey.400"
                          sx={{ py: 0.5, '&:hover': { color: 'white' } }}
                        >
                          {sub.label}
                        </Typography>
                      ))}
                    </Box>
                  )}
                </OptionCard>
              </Grid>
            ))}
          </Grid>
        )}

        {selectedApp?.canNavigate === true && activeSection === 'improve' && (
          <Grid container spacing={3}>
            {improveOptions.map((section) => {
              const count = selectedApp.metrics[section.id] || 0;
              const isDisabled = count === 0;
              return (
                <Grid item xs={6} key={section.id}>
                  <OptionCard sx={{ opacity: isDisabled ? 0.5 : 1 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <section.icon sx={{ color: isDisabled ? 'grey.500' : 'primary.main' }} />
                        <Typography color="white">{section.label}</Typography>
                      </Box>
                      <Typography 
                        variant="h6" 
                        sx={{ color: isDisabled ? 'grey.500' : 'primary.main' }}
                      >
                        {count}
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={Math.min((count / 15) * 100, 100)}
                      sx={{
                        bgcolor: 'grey.800',
                        '& .MuiLinearProgress-bar': {
                          bgcolor: isDisabled ? 'grey.700' : 'primary.main'
                        }
                      }}
                    />
                  </OptionCard>
                </Grid>
              );
            })}
          </Grid>
        )}

        {!selectedApp && (
          <Box sx={{ 
            height: '100%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center' 
          }}>
            <Box sx={{ textAlign: 'center', color: 'grey.500' }}>
              <Visibility sx={{ fontSize: 48, opacity: 0.5, mb: 2 }} />
              <Typography>Select an application to view analysis options</Typography>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default MainView;