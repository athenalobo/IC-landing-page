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

export const applications = [
  {
    "id": 1,
    "name": "smart-brain_1",
    "ownerName": "Olivier Bonsignour",
    "status": "Profiling complete",
    "statusColor": "blue",
    "linesOfCode": 8_765_432,
    "lastAction": "2/20/2025, 8:28 PM",
    "version": "1.1.9",
    "canNavigate": true,
    "metrics": {
      "security": 12,
      "performance": 8,
      "reliability": 5,
      "cloud": 3,
      "container": 0,
      "green": 4
    }
  },
  {
    "id": 2,
    "name": "vision-ai_2",
    "ownerName": "Shanshan Kan",
    "status": "Analysis complete",
    "statusColor": "green",
    "linesOfCode": 12_345_678,
    "lastAction": "2/19/2025, 3:15 PM",
    "version": "2.0.1",
    "canNavigate": true,
    "metrics": {
      "security": 15,
      "performance": 10,
      "reliability": 7,
      "cloud": 6,
      "container": 3,
      "green": 5
    }
  },
  {
    "id": 3,
    "name": "neo-netwo sds sdf",
    "ownerName": "Damien Charlemagne",
    "status": "Configuration pending",
    "statusColor": "yellow",
    "linesOfCode": 3_456_789,
    "lastAction": "2/18/2025, 5:47 AM",
    "version": "1.2.5",
    "canNavigate": true,
    "metrics": {
      "security": 10,
      "performance": 9,
      "reliability": 8,
      "cloud": 4,
      "container": 2,
      "green": 7
    }
  },
  {
    "id": 4,
    "name": "quantum-matrix_4",
    "ownerName": "Christophe Gufflet",
    "status": "Error",
    "statusColor": "red",
    "linesOfCode": 987_654,
    "lastAction": "2/17/2025, 9:22 PM",
    "version": "3.4.2",
    "canNavigate": true,
    "metrics": {
      "security": 8,
      "performance": 12,
      "reliability": 5,
      "cloud": 7,
      "container": 4,
      "green": 6
    }
  },
  {
    "id": 5,
    "name": "deep-track_5",
    "ownerName": "Olivier Bonsignour",
    "status": "Analysis Complete",
    "statusColor": "blue",
    "linesOfCode": 2_134_567,
    "lastAction": "2/16/2025, 10:30 AM",
    "version": "1.5.8",
    "canNavigate": true,
    "metrics": {
      "security": 14,
      "performance": 6,
      "reliability": 7,
      "cloud": 2,
      "container": 1,
      "green": 9
    }
  },
  {
    "id": 6,
    "name": "cloud-sync_6",
    "ownerName": "Shanshan Kan",
    "status": "Analysis complete",
    "statusColor": "green",
    "linesOfCode": 11_223_344,
    "lastAction": "2/15/2025, 2:45 PM",
    "version": "2.1.0",
    "canNavigate": true,
    "metrics": {
      "security": 13,
      "performance": 10,
      "reliability": 4,
      "cloud": 5,
      "container": 3,
      "green": 8
    }
  },
  {
    "id": 7,
    "name": "cyber-guardian efr erf 7",
    "ownerName": "Damien Charlemagne",
    "status": "Profiling complete",
    "statusColor": "yellow",
    "linesOfCode": 9_876_543,
    "lastAction": "2/14/2025, 11:55 AM",
    "version": "1.8.4",
    "canNavigate": true,
    "metrics": {
      "security": 9,
      "performance": 11,
      "reliability": 6,
      "cloud": 4,
      "container": 2,
      "green": 7
    }
  },
  {
    "id": 8,
    "name": "neural-grid_8",
    "ownerName": "Christophe Gufflet",
    "status": "Configuration pending",
    "statusColor": "red",
    "linesOfCode": 765_432,
    "lastAction": "2/13/2025, 7:10 AM",
    "version": "3.2.9",
    "canNavigate": true,
    "metrics": {
      "security": 11,
      "performance": 7,
      "reliability": 8,
      "cloud": 6,
      "container": 5,
      "green": 6
    }
  },
  {
    "id": 1,
    "name": "smart-brain_1",
    "ownerName": "Olivier Bonsignour",
    "status": "Profiling complete",
    "statusColor": "blue",
    "linesOfCode": 8_765_432,
    "lastAction": "2/20/2025, 8:28 PM",
    "version": "1.1.9",
    "canNavigate": true,
    "metrics": {
      "security": 12,
      "performance": 8,
      "reliability": 5,
      "cloud": 3,
      "container": 0,
      "green": 4
    }
  },
  {
    "id": 2,
    "name": "vision-ai_2",
    "ownerName": "Shanshan Kan",
    "status": "Analysis complete",
    "statusColor": "green",
    "linesOfCode": 12_345_678,
    "lastAction": "2/19/2025, 3:15 PM",
    "version": "2.0.1",
    "canNavigate": true,
    "metrics": {
      "security": 15,
      "performance": 10,
      "reliability": 7,
      "cloud": 6,
      "container": 3,
      "green": 5
    }
  },
  {
    "id": 3,
    "name": "neo-netwo sds sdf",
    "ownerName": "Damien Charlemagne",
    "status": "Configuration pending",
    "statusColor": "yellow",
    "linesOfCode": 3_456_789,
    "lastAction": "2/18/2025, 5:47 AM",
    "version": "1.2.5",
    "canNavigate": true,
    "metrics": {
      "security": 10,
      "performance": 9,
      "reliability": 8,
      "cloud": 4,
      "container": 2,
      "green": 7
    }
  },
  {
    "id": 4,
    "name": "quantum-matrix_4",
    "ownerName": "Christophe Gufflet",
    "status": "Error",
    "statusColor": "red",
    "linesOfCode": 987_654,
    "lastAction": "2/17/2025, 9:22 PM",
    "version": "3.4.2",
    "canNavigate": true,
    "metrics": {
      "security": 8,
      "performance": 12,
      "reliability": 5,
      "cloud": 7,
      "container": 4,
      "green": 6
    }
  },
  {
    "id": 5,
    "name": "deep-track_5",
    "ownerName": "Olivier Bonsignour",
    "status": "In progress",
    "statusColor": "blue",
    "linesOfCode": 2_134_567,
    "lastAction": "2/16/2025, 10:30 AM",
    "version": "1.5.8",
    "canNavigate": true,
    "metrics": {
      "security": 14,
      "performance": 6,
      "reliability": 7,
      "cloud": 2,
      "container": 1,
      "green": 9
    }
  },
  {
    "id": 6,
    "name": "cloud-sync_6",
    "ownerName": "Shanshan Kan",
    "status": "Analysis complete",
    "statusColor": "green",
    "linesOfCode": 11_223_344,
    "lastAction": "2/15/2025, 2:45 PM",
    "version": "2.1.0",
    "canNavigate": true,
    "metrics": {
      "security": 13,
      "performance": 10,
      "reliability": 4,
      "cloud": 5,
      "container": 3,
      "green": 8
    }
  },
  {
    "id": 7,
    "name": "cyber-guardian efr erf 7",
    "ownerName": "Damien Charlemagne",
    "status": "Profiling complete",
    "statusColor": "yellow",
    "linesOfCode": 9_876_543,
    "lastAction": "2/14/2025, 11:55 AM",
    "version": "1.8.4",
    "canNavigate": true,
    "metrics": {
      "security": 9,
      "performance": 11,
      "reliability": 6,
      "cloud": 4,
      "container": 2,
      "green": 7
    }
  },
  {
    "id": 8,
    "name": "neural-grid_8",
    "ownerName": "Christophe Gufflet",
    "status": "Configuration pending",
    "statusColor": "red",
    "linesOfCode": 765_432,
    "lastAction": "2/13/2025, 7:10 AM",
    "version": "3.2.9",
    "canNavigate": true,
    "metrics": {
      "security": 11,
      "performance": 7,
      "reliability": 8,
      "cloud": 6,
      "container": 5,
      "green": 6
    }
  },
  {
    "id": 9,
    "name": "art-brain_1",
    "ownerName": "Olivier Bonsignour",
    "status": "Profiling complete",
    "statusColor": "blue",
    "linesOfCode": 8_765_432,
    "lastAction": "2/20/2025, 8:28 PM",
    "version": "1.1.9",
    "canNavigate": true,
    "metrics": {
      "security": 12,
      "performance": 8,
      "reliability": 5,
      "cloud": 3,
      "container": 0,
      "green": 4
    }
  },
  {
    "id": 10,
    "name": "ion-ai_2",
    "ownerName": "Shanshan Kan",
    "status": "Analysis complete",
    "statusColor": "green",
    "linesOfCode": 12_345_678,
    "lastAction": "2/19/2025, 3:15 PM",
    "version": "2.0.1",
    "canNavigate": true,
    "metrics": {
      "security": 15,
      "performance": 10,
      "reliability": 7,
      "cloud": 6,
      "container": 3,
      "green": 5
    }
  },
  {
    "id": 11,
    "name": "netwo sds sdf",
    "ownerName": "Damien Charlemagne",
    "status": "Configuration pending",
    "statusColor": "yellow",
    "linesOfCode": 3_456_789,
    "lastAction": "2/18/2025, 5:47 AM",
    "version": "1.2.5",
    "canNavigate": true,
    "metrics": {
      "security": 10,
      "performance": 9,
      "reliability": 8,
      "cloud": 4,
      "container": 2,
      "green": 7
    }
  },
  {
    "id": 12,
    "name": "um-matrix_4",
    "ownerName": "Christophe Gufflet",
    "status": "Error",
    "statusColor": "red",
    "linesOfCode": 987_654,
    "lastAction": "2/17/2025, 9:22 PM",
    "version": "3.4.2",
    "canNavigate": true,
    "metrics": {
      "security": 8,
      "performance": 12,
      "reliability": 5,
      "cloud": 7,
      "container": 4,
      "green": 6
    }
  },
  {
    "id": 13,
    "name": "eep-track_5",
    "ownerName": "Olivier Bonsignour",
    "status": "Analysis Complete",
    "statusColor": "blue",
    "linesOfCode": 2_134_567,
    "lastAction": "2/16/2025, 10:30 AM",
    "version": "1.5.8",
    "canNavigate": true,
    "metrics": {
      "security": 14,
      "performance": 6,
      "reliability": 7,
      "cloud": 2,
      "container": 1,
      "green": 9
    }
  },
  {
    "id": 14,
    "name": "loud-sync_6",
    "ownerName": "Shanshan Kan",
    "status": "Analysis complete",
    "statusColor": "green",
    "linesOfCode": 11_223_344,
    "lastAction": "2/15/2025, 2:45 PM",
    "version": "2.1.0",
    "canNavigate": true,
    "metrics": {
      "security": 13,
      "performance": 10,
      "reliability": 4,
      "cloud": 5,
      "container": 3,
      "green": 8
    }
  },
  {
    "id": 15,
    "name": "yber-guardian efr erf 7",
    "ownerName": "Damien Charlemagne",
    "status": "Profiling complete",
    "statusColor": "yellow",
    "linesOfCode": 9_876_543,
    "lastAction": "2/14/2025, 11:55 AM",
    "version": "1.8.4",
    "canNavigate": true,
    "metrics": {
      "security": 9,
      "performance": 11,
      "reliability": 6,
      "cloud": 4,
      "container": 2,
      "green": 7
    }
  },
  {
    "id": 16,
    "name": "zeural-grid_8",
    "ownerName": "Christophe Gufflet",
    "status": "Configuration pending",
    "statusColor": "red",
    "linesOfCode": 765_432,
    "lastAction": "2/13/2025, 7:10 AM",
    "version": "3.2.9",
    "canNavigate": true,
    "metrics": {
      "security": 11,
      "performance": 7,
      "reliability": 8,
      "cloud": 6,
      "container": 5,
      "green": 6
    }
  },
  {
    "id": 17,
    "name": "mart-brain_1",
    "ownerName": "Olivier Bonsignour",
    "status": "Profiling complete",
    "statusColor": "blue",
    "linesOfCode": 8_765_432,
    "lastAction": "2/20/2025, 8:28 PM",
    "version": "1.1.9",
    "canNavigate": true,
    "metrics": {
      "security": 12,
      "performance": 8,
      "reliability": 5,
      "cloud": 3,
      "container": 0,
      "green": 4
    }
  },
  {
    "id": 18,
    "name": "ision-ai_2",
    "ownerName": "Shanshan Kan",
    "status": "Analysis complete",
    "statusColor": "green",
    "linesOfCode": 12_345_678,
    "lastAction": "2/19/2025, 3:15 PM",
    "version": "2.0.1",
    "canNavigate": true,
    "metrics": {
      "security": 15,
      "performance": 10,
      "reliability": 7,
      "cloud": 6,
      "container": 3,
      "green": 5
    }
  },
  {
    "id": 19,
    "name": "eo-netwo sds sdf",
    "ownerName": "Damien Charlemagne",
    "status": "Configuration pending",
    "statusColor": "yellow",
    "linesOfCode": 3_456_789,
    "lastAction": "2/18/2025, 5:47 AM",
    "version": "1.2.5",
    "canNavigate": true,
    "metrics": {
      "security": 10,
      "performance": 9,
      "reliability": 8,
      "cloud": 4,
      "container": 2,
      "green": 7
    }
  },
  {
    "id": 20,
    "name": "um-matrix_4",
    "ownerName": "Christophe Gufflet",
    "status": "Error",
    "statusColor": "red",
    "linesOfCode": 987_654,
    "lastAction": "2/17/2025, 9:22 PM",
    "version": "3.4.2",
    "canNavigate": true,
    "metrics": {
      "security": 8,
      "performance": 12,
      "reliability": 5,
      "cloud": 7,
      "container": 4,
      "green": 6
    }
  },
  {
    "id": 21,
    "name": "rep-track_5",
    "ownerName": "Olivier Bonsignour",
    "status": "Analysis Complete",
    "statusColor": "blue",
    "linesOfCode": 2_134_567,
    "lastAction": "2/16/2025, 10:30 AM",
    "version": "1.5.8",
    "canNavigate": true,
    "metrics": {
      "security": 14,
      "performance": 6,
      "reliability": 7,
      "cloud": 2,
      "container": 1,
      "green": 9
    }
  },
  {
    "id": 22,
    "name": "joud-sync_6",
    "ownerName": "Shanshan Kan",
    "status": "Analysis complete",
    "statusColor": "green",
    "linesOfCode": 11_223_344,
    "lastAction": "2/15/2025, 2:45 PM",
    "version": "2.1.0",
    "canNavigate": true,
    "metrics": {
      "security": 13,
      "performance": 10,
      "reliability": 4,
      "cloud": 5,
      "container": 3,
      "green": 8
    }
  },
  {
    "id": 23,
    "name": "er-guardian efr erf 7",
    "ownerName": "Damien Charlemagne",
    "status": "Profiling complete",
    "statusColor": "yellow",
    "linesOfCode": 9_876_543,
    "lastAction": "2/14/2025, 11:55 AM",
    "version": "1.8.4",
    "canNavigate": true,
    "metrics": {
      "security": 9,
      "performance": 11,
      "reliability": 6,
      "cloud": 4,
      "container": 2,
      "green": 7
    }
  },
  {
    "id": 24,
    "name": "kmkral-grid_8",
    "ownerName": "Christophe Gufflet",
    "status": "Configuration pending",
    "statusColor": "red",
    "linesOfCode": 765_432,
    "lastAction": "2/13/2025, 7:10 AM",
    "version": "3.2.9",
    "canNavigate": true,
    "metrics": {
      "security": 11,
      "performance": 7,
      "reliability": 8,
      "cloud": 6,
      "container": 5,
      "green": 6
    }
  }
]



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