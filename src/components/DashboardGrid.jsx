// src/components/MainView/DashboardGrid.jsx
import React, { useState } from 'react';
import { Box, Stack } from '@mui/material';
import { Activity, FileCode, Layout, BookmarkIcon, FolderGit2, Database, Share2 } from 'lucide-react';
import SummaryCard from './cards/SummaryCard';
import TechnologiesCard from './cards/TechnologiesCard';
import ArchitectureCard from './cards/ArchitectureCard';
import SavedViewsCard from './cards/SavedViewsCard';
import ObjectTypeCard from './cards/ObjectTypeCard';
import DataManagementCard from './cards/DataManagementCard';
import CallGraphsCard from './cards/CallGraphsCard';

const DashboardGrid = ({ disabled, visibleCards }) => {

  const shouldShowCard = (cardId) => {
    if (visibleCards !== 'all') return true;
  };

  const [hoveredCard, setHoveredCard] = useState(null);

  const cardProps = {
    hoveredCard,
    setHoveredCard,
    themeColor: '#8b5cf6'
  };

  return (
    <Box sx={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 3,
      p: 3,
      maxWidth: '100%',
      margin: '0 auto',
      paddingBottom: '80px'
    }}>
      {shouldShowCard('summary') ? (
      <SummaryCard {...cardProps} icon={Activity} />) : (<>
        <SummaryCard {...cardProps} icon={Activity} />
      <TechnologiesCard {...cardProps} icon={FileCode} />      
      <SavedViewsCard {...cardProps} icon={BookmarkIcon} />
      <Stack gap={3}>
      <ArchitectureCard {...cardProps} icon={Layout} />
      <ObjectTypeCard {...cardProps} icon={FolderGit2} />
      </Stack>
      <DataManagementCard {...cardProps} icon={Database} />
      <CallGraphsCard {...cardProps} icon={Share2} /></>)}
      {/* ) */}
    </Box>
  );
};

export default DashboardGrid;