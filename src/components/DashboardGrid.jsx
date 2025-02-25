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

const DashboardGrid = ({ disabled, visibleCards = 'all' }) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(false);
  const [contentLoading, setContentLoading] = useState(false);

  // Fixed shouldShowCard function to properly check if a card should be visible
  const shouldShowCard = (cardId) => {
    if (visibleCards === 'all') return true;
    return Array.isArray(visibleCards) && visibleCards.includes(cardId);
  };

  const handleCardClick = () => {
    // First phase: Full-screen loading with spinner
    setInitialLoading(true);
    setIsLoading(true);
    
    // After 1 second, transition to content-only loading without spinner
    setTimeout(() => {
      setInitialLoading(false);
      setContentLoading(true);
    }, 1000);
  };

  // Base props for all cards
  const cardProps = {
    hoveredCard,
    setHoveredCard,
    themeColor: '#8b5cf6',
    disabled: disabled || isLoading
  };

  // Wrap each card with a clickable Box to ensure clicks are captured
  const renderCard = (CardComponent, icon, id) => (
    <Box 
      onClick={handleCardClick} 
      sx={{ 
        cursor: 'pointer',
        '&:hover': {
          opacity: 0.9
        }
      }}
    >
      <CardComponent {...cardProps} icon={icon} id={id} />
    </Box>
  );

  return (
    <>
      {/* Full-screen loading overlay (covers everything including header) */}
      {initialLoading && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'white',
            zIndex: 10000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Box
            sx={{
              animation: 'spin 1s linear infinite',
              '@keyframes spin': {
                '0%': {
                  transform: 'rotate(0deg)'
                },
                '100%': {
                  transform: 'rotate(360deg)'
                }
              },
              color: '#8b5cf6',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Compass size={60} strokeWidth={2} />
          </Box>
        </Box>
      )}

      {/* Content-only white background (sits below header and navbar) */}
      {contentLoading && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            zIndex: 100, // Lower z-index so it stays below header/navbar
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        />
      )}

      {/* Original grid */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 3,
          p: 3,
          maxWidth: '100%',
          margin: '0 auto',
          paddingBottom: '80px',
          position: 'relative', // Ensure content-only overlay positions relative to this
          zIndex: (contentLoading ? -1 : 'auto') // Keep grid below white background when content loading
        }}
      >
        {shouldShowCard('summary') && renderCard(SummaryCard, Activity, 'summary')}
        
        {shouldShowCard('technologies') && renderCard(TechnologiesCard, FileCode, 'technologies')}
        
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
    </>
  );
};

export default DashboardGrid;