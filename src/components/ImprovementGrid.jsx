import React from 'react';
import { Box } from '@mui/material';
import { AlertTriangle, Zap, Shield, Cloud, Box as BoxIcon, Leaf } from 'lucide-react';
import CardWrapper from './CardWrapper';

const ImprovementGrid = () => {
  const categories = [
    {
      title: 'Security',
      count: 12,
      icon: Shield,
      color: '#8b5cf6',
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
      color: '#eab308',
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
      color: '#ef4444',
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
      color: '#6366f1',
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
      color: '#ec4899',
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
      color: '#22c55e',
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
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 3,
      p: 3,
      maxWidth: '100%',
      margin: '0 auto'
    }}>
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <Box
            key={category.title}
            sx={{
              backgroundColor: 'rgba(15, 23, 42, 0.3)',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.05)',
              backdropFilter: 'blur(10px)',
              position: 'relative',
            }}
          >
            <Box sx={{
              p: 3,
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              position: 'sticky',
              top: 0,
              backgroundColor: 'rgba(15, 23, 42, 0.95)',
              backdropFilter: 'blur(10px)',
              zIndex: 1,
            }}>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                mb: 2,
              }}>
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                }}>
                  <Icon size={24} color={category.color} />
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: 2,
                  }}>
                    <Box component="span" sx={{
                      color: 'white',
                      fontSize: '1.1rem',
                      fontWeight: 600,
                    }}>
                      {category.title}
                    </Box>
                    <Box component="span" sx={{
                      color: category.color,
                      fontSize: '1.5rem',
                      fontWeight: 700,
                    }}>
                      {category.count}
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box sx={{
                width: '100%',
                height: '4px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderRadius: '4px',
              }}>
                <Box sx={{
                  width: category.progressWidth,
                  height: '100%',
                  backgroundColor: category.color,
                  borderRadius: '4px',
                  transition: 'width 0.5s ease-in-out',
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
                    p: 2.5,
                    borderBottom: index !== category.items.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.02)',
                    },
                  }}
                >
                  <Box component="span" sx={{
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                  }}>
                    {item.name}
                  </Box>
                  <Box component="span" sx={{
                    color: item.detailColor || 'rgba(255,255,255,0.5)',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                  }}>
                    {item.detail}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default ImprovementGrid;