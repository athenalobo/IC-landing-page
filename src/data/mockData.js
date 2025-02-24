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

const statuses = ["Profiling complete", "Analysis complete", "Configuration pending", "Error", "In progress"];
const statusColors = ["blue", "green", "yellow", "red", "white"];
const ownerNames = ["Olivier Bonsignour", "Shanshan Kan", "Damien Charlemagne", "Christophe Gufflet"];

const generateUniqueApp = (id) => {
  const randomStatusIndex = Math.floor(Math.random() * statuses.length);
  const randomOwnerIndex = Math.floor(Math.random() * ownerNames.length);
  const randomStatusColorIndex = Math.floor(Math.random() * statusColors.length);

  return {
    id: id,
    name: `app-${id}`,
    ownerName: ownerNames[randomOwnerIndex],
    status: statuses[randomStatusIndex],
    statusColor: statusColors[randomStatusColorIndex],
    linesOfCode: Math.floor(Math.random() * 10_000_000),
    lastAction: new Date().toLocaleString(),
    version: `${Math.floor(Math.random() * 4)}.${Math.floor(Math.random() * 10)}.${Math.floor(Math.random() * 10)}`,
    canNavigate: true,
    metrics: {
      security: Math.floor(Math.random() * 16),
      performance: Math.floor(Math.random() * 16),
      reliability: Math.floor(Math.random() * 16),
      cloud: Math.floor(Math.random() * 16),
      container: Math.floor(Math.random() * 16),
      green: Math.floor(Math.random() * 16)
    }
  };
};

export const applications = Array.from({ length: 100 }, (_, index) => generateUniqueApp(index + 1));

  export const viewOptions = [
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

  export const improveOptions = [
    { id: 'security', label: 'Security Flaws', icon: Add },
    { id: 'performance', label: 'Performance Issues', icon: Add },
    { id: 'reliability', label: 'Reliability Flaws', icon: Add },
    { id: 'cloud', label: 'Cloud Maturity', icon: Add },
    { id: 'container', label: 'Containerization', icon: Box },
    { id: 'green', label: 'Green Computing', icon: Add }
  ];