import React, { useState, useEffect } from 'react';
import { Box, Stack } from '@mui/material';
import { Activity, FileCode, Layout, BookmarkIcon, FolderGit2, Database, Share2, Compass } from 'lucide-react';
import SummaryCard from './cards/SummaryCard';
import TechnologiesCard from './cards/TechnologiesCard';
import ArchitectureCard from './cards/ArchitectureCard';
import SavedViewsCard from './cards/SavedViewsCard';
import ObjectTypeCard from './cards/ObjectTypeCard';
import DataManagementCard from './cards/DataManagementCard';
import CallGraphsCard from './cards/CallGraphsCard';

const DashboardGrid = ({ disabled, visibleCards = 'all', onLoadingChange, onCardClick }) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [contentLoading, setContentLoading] = useState(false);

  // Update parent component with loading state whenever it changes
  useEffect(() => {
    if (onLoadingChange) {
      onLoadingChange(contentLoading);
    }
  }, [contentLoading, onLoadingChange]);

  // Fixed shouldShowCard function to properly check if a card should be visible
  const shouldShowCard = (cardId) => {
    if (visibleCards === 'all') return true;
    return Array.isArray(visibleCards) && visibleCards.includes(cardId);
  };

  const handleCardClick = () => {
    // Use the full screen loading from parent component
    if (onCardClick) {
      onCardClick(true);
    }
    
    // For demo purposes, simulate ending the content loading after 3 seconds
    setTimeout(() => {
      if (onCardClick) {
        onCardClick(false);
      }
      setContentLoading(false);
      setIsLoading(false);
    }, 3000);
  };

  // Base props for all cards
  const cardProps = {
    hoveredCard,
    setHoveredCard,
    themeColor: '#8b5cf6',
    disabled: disabled || isLoading
  };

  // Wrap each card with a clickable Box to ensure clicks are captured
  const renderCard = (CardComponent, icon, id, height = 'auto') => (
    <Box 
      onClick={handleCardClick} 
      sx={{ 
        cursor: 'pointer',
        height: height,
        display: 'flex',
        '& > *': { // Make child component fill the container
          flexGrow: 1
        },
        '&:hover': {
          opacity: 0.9
        }
      }}
    >
      <CardComponent {...cardProps} icon={icon} id={id} />
    </Box>
  );

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 3,
        p: 3,
        maxWidth: '100%',
        margin: '0 auto',
        paddingBottom: '80px',
        position: 'relative',
        zIndex: 'auto'
      }}
    >
      {/* Use a ref to get the actual height of the summary card for matching */}
      <Box 
        sx={{ 
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        {shouldShowCard('summary') && (
          <Box sx={{ height: '100%' }}>
            {renderCard(SummaryCard, Activity, 'summary', '100%')}
          </Box>
        )}
      </Box>
      
      <Box 
        sx={{ 
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        {shouldShowCard('technologies') && (
          <Box sx={{ height: '100%' }}>
            {renderCard(TechnologiesCard, FileCode, 'technologies', '100%')}
          </Box>
        )}
      </Box>
      
      {shouldShowCard('savedViews') && renderCard(SavedViewsCard, BookmarkIcon, 'savedViews')}
      
      {shouldShowCard('architecture') && shouldShowCard('objectType') && (
        <Stack gap={3}>
          <Box onClick={handleCardClick} sx={{ cursor: 'pointer' }}>
            <ArchitectureCard {...cardProps} icon={Layout} id="architecture" />
          </Box>
          <Box onClick={handleCardClick} sx={{ cursor: 'pointer' }}>
            <ObjectTypeCard {...cardProps} icon={FolderGit2} id="objectType" />
          </Box>
        </Stack>
      )}
      
      {shouldShowCard('dataManagement') && renderCard(DataManagementCard, Database, 'dataManagement')}
      
      {shouldShowCard('callGraphs') && renderCard(CallGraphsCard, Share2, 'callGraphs')}
    </Box>
  );
};

export default DashboardGrid;