
// ImprovementGrid.jsx
import React from 'react';
import { Box } from '@mui/material';

const ImprovementGrid = () => {
  const categories = [
    {
      title: 'Security Flaws',
      count: 12,
      color: '#8b5cf6',
      progressWidth: '90%',
      items: [
        { name: 'SQL Injection Vulnerabilities', status: 'Critical', detail: '4 issues', statusColor: '#ef4444' },
        { name: 'Insecure Authentication', status: null, detail: null },
        { name: 'XSS Exposures', status: null, detail: '3 cases', detailColor: '#eab308' },
        { name: 'CSRF Protections', status: null, detail: 'Missing', detailColor: '#eab308' }
      ]
    },
    {
      title: 'Performance Issues',
      count: 8,
      color: '#eab308',
      progressWidth: '75%',
      items: [
        { name: 'N+1 Query Problems', detail: '3 found' },
        { name: 'Memory Leaks', detail: '2 potential' },
        { name: 'Connection Pooling', detail: 'Inefficient', detailColor: '#eab308' },
        { name: 'Cache Usage', detail: 'Suboptimal' }
      ]
    },
    {
      title: 'Reliability Flaws',
      count: 5,
      color: '#3b82f6',
      progressWidth: '45%',
      items: [
        { name: 'Exception Handling', detail: '2 issues' },
        { name: 'Transaction Management', detail: '1 flaw' },
        { name: 'Resource Cleanup', detail: '2 cases' },
        { name: 'Error Recovery', detail: 'Partial' }
      ]
    },
    {
      title: 'Cloud Maturity',
      count: 3,
      color: '#6366f1',
      progressWidth: '65%',
      items: [
        { name: 'Cloud-Native Features', detail: 'Limited' },
        { name: 'Scalability Readiness', detail: 'Moderate', detailColor: '#eab308' },
        { name: 'Service Discovery', detail: 'Missing', detailColor: '#ef4444' },
        { name: 'Load Balancing', detail: 'Basic' }
      ]
    },
    {
      title: 'Containerization',
      count: 0,
      color: '#ec4899',
      progressWidth: '0%',
      items: [
        { name: 'Docker Support', detail: 'Not Found', detailColor: '#ef4444' },
        { name: 'Container Config', detail: 'Missing', detailColor: '#ef4444' },
        { name: 'Resource Limits', detail: 'Undefined', detailColor: '#eab308' },
        { name: 'Image Security', detail: 'Not Checked', detailColor: '#eab308' }
      ]
    },
    {
      title: 'Green Computing',
      count: 4,
      color: '#22c55e',
      progressWidth: '35%',
      items: [
        { name: 'Resource Efficiency', detail: 'Moderate', detailColor: '#eab308' },
        { name: 'Energy Optimization', detail: '2 issues' },
        { name: 'Idle Resource Usage', detail: 'High', detailColor: '#ef4444' },
        { name: 'Code Efficiency', detail: 'Fair' }
      ]
    }
  ];

  return (
    <Box sx={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 3,
      p: 3,
      width: '100%',
      boxSizing: 'border-box',
      backgroundColor: '#0a0a0a',
    }}>
      {categories.map((category) => (
        <Box
          key={category.title}
          sx={{
            backgroundColor: 'rgba(15, 23, 42, 0.3)',
            borderRadius: '8px',
            overflow: 'hidden',
          }}
        >
          <Box sx={{
            p: 2,
            borderBottom: '1px solid rgba(255,255,255,0.1)',
          }}>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mb: 1.5,
            }}>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                color: 'white',
                fontSize: '0.9rem',
                fontWeight: 500,
              }}>
                <Box component="span">{category.title}</Box>
                <Box component="span" sx={{
                  color: category.color,
                  fontSize: '0.9rem',
                }}>{category.count}</Box>
              </Box>
            </Box>
            <Box sx={{
              width: '100%',
              height: '3px',
              backgroundColor: 'rgba(255,255,255,0.1)',
              borderRadius: '4px',
            }}>
              <Box sx={{
                width: category.progressWidth,
                height: '100%',
                backgroundColor: category.color,
                borderRadius: '4px',
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
                  p: 2,
                  borderBottom: index !== category.items.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                }}
              >
                <Box component="span" sx={{
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: '0.9rem',
                }}>
                  {item.name}
                </Box>
                <Box sx={{
                  display: 'flex',
                  gap: 2,
                  alignItems: 'center',
                }}>
                  {item.status && (
                    <Box component="span" sx={{
                      color: item.statusColor || 'white',
                      fontSize: '0.9rem',
                    }}>
                      {item.status}
                    </Box>
                  )}
                  {item.detail && (
                    <Box component="span" sx={{
                      color: item.detailColor || 'rgba(255,255,255,0.5)',
                      fontSize: '0.9rem',
                    }}>
                      {item.detail}
                    </Box>
                  )}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ImprovementGrid;