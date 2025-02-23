import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { AlertTriangle, Zap, Shield, Cloud, Box as BoxIcon, Leaf, ChevronRight } from 'lucide-react';

const ImprovementGrid = () => {
  const categories = [
    {
      title: 'Security',
      count: 12,
      icon: Shield,
      color: '#9333EA',
      progressWidth: '90%',
      items: [
        { name: 'SQL Injection', detail: '4 High Risk', detailColor: '#ef4444' },
        { name: 'Authentication', detail: '3 Medium Risk', detailColor: '#eab308' },
        { name: 'Data Encryption', detail: '5 Low Risk', detailColor: '#22c55e' }
      ]
    },
    {
      title: 'Performance',
      count: 8,
      icon: Zap,
      color: '#9333EA',
      progressWidth: '75%',
      items: [
        { name: 'Database Queries', detail: '3 N+1 Issues' },
        { name: 'Memory Management', detail: '2 Memory Leaks' },
        { name: 'Response Time', detail: '>2s in 3 APIs' }
      ]
    },
    {
      title: 'Technical Debt',
      count: 15,
      icon: AlertTriangle,
      color: '#9333EA',
      progressWidth: '85%',
      items: [
        { name: 'Dead Code', detail: '145 LOC' },
        { name: 'Code Duplication', detail: '8 Instances' },
        { name: 'Legacy Patterns', detail: '4 Components' }
      ]
    },
    {
      title: 'Cloud Architecture',
      count: 6,
      icon: Cloud,
      color: '#9333EA',
      progressWidth: '45%',
      items: [
        { name: 'Stateless Design', detail: '2 Violations' },
        { name: 'Scalability', detail: '3 Bottlenecks' },
        { name: 'Resilience', detail: '1 SPOF' }
      ]
    },
    {
      title: 'Best Practices',
      count: 9,
      icon: BoxIcon,
      color: '#9333EA',
      progressWidth: '65%',
      items: [
        { name: 'Coding Standards', detail: '5 Violations' },
        { name: 'Documentation', detail: '3 Missing' },
        { name: 'Test Coverage', detail: '72%' }
      ]
    },
    {
      title: 'Resource Usage',
      count: 7,
      icon: Leaf,
      color: '#9333EA',
      progressWidth: '55%',
      items: [
        { name: 'CPU Utilization', detail: '2 Hotspots' },
        { name: 'Memory Leaks', detail: '3 Detected' },
        { name: 'Thread Usage', detail: '2 Issues' }
      ]
    }
  ];

  return (
    <Box sx={{
      bgcolor: '#0A0A0A',
      minHeight: '100vh',
      p: 3
    }}>
      <Box sx={{
        maxWidth: 1400,
        mx: 'auto'
      }}>
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 2.5
        }}>
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Paper
                key={category.title}
                elevation={0}
                sx={{
                  bgcolor: '#141414',
                  borderRadius: 2,
                  overflow: 'hidden',
                  border: '1px solid #262626',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  position: 'relative',
                  '&:hover': {
                    border: '1px solid #9333EA',
                    '& .learn-more': {
                      opacity: 1,
                      transform: 'translateX(0)',
                    }
                  }
                }}
                onClick={() => console.log(`Navigating to ${category.title} details`)}
              >
                <Box sx={{ p: 2, borderBottom: '1px solid #262626' }}>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mb: 2
                  }}>
                    <Box sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.5,
                    }}>
                      <Box sx={{
                        bgcolor: 'rgba(147, 51, 234, 0.1)',
                        borderRadius: 1.5,
                        p: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <Icon size={20} color="#9333EA" />
                      </Box>
                      <Typography variant="subtitle1" sx={{ color: 'white', fontWeight: 500 }}>
                        {category.title}
                      </Typography>
                    </Box>
                    <Box sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2
                    }}>
                      <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                        color: '#9333EA',
                        opacity: 0,
                        transform: 'translateX(-10px)',
                        transition: 'all 0.3s ease',
                      }} className="learn-more">
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          Learn more
                        </Typography>
                        <ChevronRight size={16} />
                      </Box>
                      <Typography sx={{ 
                        color: '#9333EA',
                        fontSize: '1.5rem',
                        fontWeight: 600,
                        lineHeight: 1
                      }}>
                        {category.count}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{
                    width: '100%',
                    height: 4,
                    bgcolor: '#262626',
                    borderRadius: 1,
                    overflow: 'hidden'
                  }}>
                    <Box sx={{
                      width: category.progressWidth,
                      height: '100%',
                      bgcolor: '#9333EA',
                      borderRadius: 1,
                      transition: 'width 0.5s ease-in-out'
                    }} />
                  </Box>
                </Box>

                <Box>
                  {category.items.map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        px: 2,
                        py: 1.5,
                        borderBottom: index !== category.items.length - 1 ? '1px solid #262626' : 'none',
                        transition: 'background-color 0.2s ease',
                        '&:hover': {
                          bgcolor: 'rgba(255,255,255,0.03)'
                        }
                      }}
                    >
                      <Typography sx={{
                        color: 'rgba(255,255,255,0.7)',
                        fontSize: '0.875rem',
                        fontWeight: 500
                      }}>
                        {item.name}
                      </Typography>
                      <Typography sx={{
                        color: item.detailColor || 'rgba(255,255,255,0.5)',
                        fontSize: '0.875rem',
                        fontWeight: 500
                      }}>
                        {item.detail}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Paper>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default ImprovementGrid;