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
  
  // App name generation with variety
  const prefixes = ['cool', 'super', 'awesome', 'smart', 'quick', 'mega', 'ultra', 'hyper', 'swift', 'rapid'];
  const domains = ['app', 'tool', 'service', 'system', 'platform', 'solution', 'hub', 'suite', 'core', 'base'];
  const suffixes = ['pro', 'plus', 'lite', 'cloud', 'x', 'ai', 'next', 'one', 'go', 'io'];
  
  // Additional descriptive words for longer names
  const descriptors = [
    'enterprise', 'professional', 'advanced', 'revolutionary', 'next-generation',
    'cutting-edge', 'innovative', 'integrated', 'distributed', 'containerized',
    'microservice', 'serverless', 'scalable', 'high-performance', 'cloud-native'
  ];
  
  // Decide if we want a short, medium, or really long name
  const nameType = Math.random();
  let appName = '';
  
  if (nameType < 0.2) {
    // 20% chance for a really long name
    appName += descriptors[Math.floor(Math.random() * descriptors.length)];
    appName += '-';
    appName += prefixes[Math.floor(Math.random() * prefixes.length)];
    appName += '-';
    appName += domains[Math.floor(Math.random() * domains.length)];
    appName += '-';
    
    // Add 1-3 more descriptors
    const extraDescriptors = Math.floor(Math.random() * 3) + 1;
    for (let i = 0; i < extraDescriptors; i++) {
      appName += descriptors[Math.floor(Math.random() * descriptors.length)];
      appName += '-';
    }
    
    appName += suffixes[Math.floor(Math.random() * suffixes.length)];
  } else if (nameType < 0.6) {
    // 40% chance for a medium name
    const usePrefix = Math.random() > 0.3;
    const useSuffix = Math.random() > 0.2; // Higher chance to use suffix
    
    if (usePrefix) {
      appName += prefixes[Math.floor(Math.random() * prefixes.length)];
      appName += '-';
    }
    
    // Add a descriptor sometimes
    if (Math.random() > 0.5) {
      appName += descriptors[Math.floor(Math.random() * descriptors.length)];
      appName += '-';
    }
    
    appName += domains[Math.floor(Math.random() * domains.length)];
    
    if (useSuffix) {
      appName += '-';
      appName += suffixes[Math.floor(Math.random() * suffixes.length)];
    }
  } else {
    // 40% chance for a short name
    appName += domains[Math.floor(Math.random() * domains.length)];
    
    if (Math.random() > 0.5) {
      appName += '-';
      appName += suffixes[Math.floor(Math.random() * suffixes.length)];
    }
  }
  
  // Add unique identifier to ensure uniqueness
  appName += `-${id}`;
  
  // Ensure name is within 64 characters
  if (appName.length > 64) {
    appName = appName.substring(0, 60 - id.toString().length) + `-${id}`;
  }

  return {
    id: id,
    name: appName,
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