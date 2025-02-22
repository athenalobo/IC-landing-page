import React, { useState, useEffect } from 'react';
import { Card, CardContent, Box } from '@mui/material';
import { ChevronRight, Database, FileCode, FolderGit2, Layout, Share2, Activity, BookmarkIcon } from 'lucide-react';
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
  const THEME_COLOR = '#8b5cf6'; // Purple color
   const [animatedValue, setAnimatedValue] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredView, setHoveredView] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimatedValue(prev => (prev < 572.7 ? prev + 5 : 572.7));
    }, 20);
    return () => clearInterval(timer);
  }, []);

  

  // Styles
  const styles = {
    container: {
      padding: '20px',
      backgroundColor: '#0a0a0a',
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '20px',
      maxHeight: '100vh',
      overflowY: 'auto',
    },
    card: {
      backgroundColor: '#1a1a1a',
      border: '1px solid #2a2a2a',
      borderRadius: '12px',
      transition: 'all 0.3s ease',
    },
    cardHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
      border: `1px solid ${THEME_COLOR}`,
    },
    cardOverlay: {
      position: 'absolute',
      top: 0,
      right: 0,
      padding: '10px',
      color: THEME_COLOR,
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      fontSize: '14px',
    },
    title: {
      color: 'white',
      fontSize: '20px',
      marginBottom: '20px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    stat: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '12px',
      color: '#a0a0a0',
    },
    statValue: {
      color: 'white',
      fontWeight: 500,
    },
techBar: {
      height: '30px',
      backgroundColor: '#2a2a2a',
      borderRadius: '15px',
      overflow: 'hidden',
      display: 'flex',
      marginBottom: '20px',
    },
    techLegend: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '12px',
      marginTop: '16px',
    },
    legendItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      color: '#a0a0a0',
      fontSize: '14px',
    },
    savedView: {
      padding: '12px',
      borderRadius: '8px',
      backgroundColor: '#2a2a2a',
      marginBottom: '12px',
      transition: 'all 0.2s ease',
      cursor: 'pointer',
    },
    savedViewHover: {
      backgroundColor: '#3a3a3a',
      transform: 'translateX(8px)',
    },
    objectTypeItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px',
      borderRadius: '8px',
      marginBottom: '8px',
      transition: 'background-color 0.3s ease',
    },
  };

  const objectTypes = [
    { name: 'Controllers', count: 125 },
    { name: 'Services', count: 243 },
    { name: 'Repositories', count: 98 }
  ];

  const technologies = [
    { name: 'Java', percentage: 45.8, color: '#f97316' },
    { name: 'JavaScript', percentage: 22.3, color: '#eab308' },
    { name: 'XML', percentage: 12.7, color: '#a855f7' },
    { name: 'SQL', percentage: 8.4, color: '#ec4899' },
    { name: 'HTML', percentage: 6.2, color: '#06b6d4' },
    { name: 'CSS', percentage: 4.6, color: '#3b82f6' },
  ];

  const savedViews = [
    { 
      name: 'DCH view',
      author: 'Damien Charlemagne',
      date: 'Feb 21, 2025 15:30',
    },
    {
      name: 'OBO architecture graph',
      author: 'Olivier Bonsignour',
      date: 'Feb 20, 2025 11:45',
    },
    {
      name: 'SKN cloud boosters',
      author: 'Shanshan Kan',
      date: 'Feb 19, 2025 09:15',
    },
  ];

  const improveOptions = [
    { id: 'security', label: 'Security Flaws', icon: Add },
    { id: 'performance', label: 'Performance Issues', icon: Add },
    { id: 'reliability', label: 'Reliability Flaws', icon: Add },
    { id: 'cloud', label: 'Cloud Maturity', icon: Add },
    { id: 'container', label: 'Containerization', icon: BoxIcon },
    { id: 'green', label: 'Green Computing', icon: Add }
  ];

    const CardWrapper = ({ children, index, title, icon: Icon, isClickable = true }) => (
    <div
      style={{
        ...styles.card,
        ...(isClickable && hoveredCard === index ? styles.cardHover : {}),
        cursor: isClickable ? 'pointer' : 'default',
      }}
      onMouseEnter={() => isClickable && setHoveredCard(index)}
      onMouseLeave={() => isClickable && setHoveredCard(null)}
    >
      {isClickable && (
        <div style={styles.cardOverlay}>
          <span>View Details</span>
          <ChevronRight size={16} />
        </div>
      )}
      <CardContent style={{ padding: '20px' }}>
        <h2 style={styles.title}>
          <Icon size={24} color={THEME_COLOR} />
          {title}
        </h2>
        {children}
      </CardContent>
    </div>
  );

  return (
    <div style={styles.container}>
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
      {/* Summary Card */}
      <CardWrapper index={0} title="Summary" icon={Activity}>
        <div>
          <div style={styles.stat}>
            <span>Total Files</span>
            <span style={styles.statValue}>5,610</span>
          </div>
          <div style={styles.stat}>
            <span>Lines of Code</span>
            <span style={styles.statValue}>{animatedValue.toFixed(1)}K</span>
          </div>
          <div style={styles.stat}>
            <span>CAST Coverage</span>
            <span style={styles.statValue}>92.3%</span>
          </div>
          <div style={styles.stat}>
            <span>File Size</span>
            <span style={styles.statValue}>847 MB</span>
          </div>
          <div style={styles.stat}>
            <span>Application Size</span>
            <span style={styles.statValue}>XXL</span>
          </div>
        </div>
      </CardWrapper>
      
      {/* Programming Technologies Card */}
      <CardWrapper index={1} title="Programming Technologies" icon={FileCode}>
        <div style={styles.techBar}>
        {technologies.map((tech, i) => (
          <div
            key={i}
            style={{
              width: `${tech.percentage}%`,
              backgroundColor: tech.color,
                transition: 'width 0.5s ease',
            }}
          />
          ))}
        </div>
            <div style={styles.techLegend}>
          {technologies.map((tech, i) => (
            <div key={i} style={styles.legendItem}>
              <div style={{ 
                width: '12px', 
                height: '12px', 
                borderRadius: '50%', 
                backgroundColor: tech.color 
              }} />
              <span>{tech.name} ({tech.percentage}%)</span>
          </div>
        ))}
      </div>
      </CardWrapper>

 <CardWrapper index={2} title="Architecture Layer" icon={Layout}>
        <div style={{ color: '#a0a0a0' }}>
          {['Presentation Layer', 'Business Layer', 'Data Access Layer', 'Integration Layer'].map((layer, i) => (
            <div
              key={i}
              style={{
                padding: '10px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderRadius: '8px',
                marginBottom: '10px',
                backgroundColor: hoveredCard === 1 ? '#2a2a2a' : 'transparent',
                transition: 'background-color 0.3s ease',
              }}
            >
              <span>{layer}</span>
              <ChevronRight size={20} />
            </div>
          ))}
        </div>
      </CardWrapper>
      

      {/* Saved Views Card - Now with individually clickable items */}
      <CardWrapper index={3} title="Saved Views" icon={BookmarkIcon} isClickable={false}>
        {savedViews.map((view, i) => (
          <div
            key={i}
            style={{
              ...styles.savedView,
              ...(hoveredView === i ? styles.savedViewHover : {}),
            }}
            onMouseEnter={() => setHoveredView(i)}
            onMouseLeave={() => setHoveredView(null)}
            onClick={() => console.log(`Opening view: ${view.name}`)}
          >
            <div style={{ color: 'white', marginBottom: '4px' }}>
              {view.name}
              <ChevronRight 
                size={16} 
                style={{ 
                  display: 'inline-block',
                  marginLeft: '8px',
                  color: THEME_COLOR,
                  transition: 'transform 0.2s ease',
                  transform: hoveredView === i ? 'translateX(4px)' : 'none'
                }} 
              />
            </div>
            <div style={{ color: '#a0a0a0', fontSize: '14px' }}>
              Saved by {view.author} on {view.date}
            </div>
          </div>
        ))}
      </CardWrapper>

      <CardWrapper index={4} title="Object Type Taxonomy" icon={FolderGit2}>
        {objectTypes.map((type, i) => (
          <div
            key={i}
            style={{
              ...styles.objectTypeItem,
              backgroundColor: hoveredCard === 1 ? '#2a2a2a' : 'transparent',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ 
                width: '8px', 
                height: '8px', 
                borderRadius: '50%', 
                backgroundColor: THEME_COLOR 
              }} />
              <span style={{ color: '#a0a0a0' }}>{type.name}</span>
            </div>
            <span style={{ color: 'white', fontWeight: 500 }}>{type.count}</span>
          </div>
        ))}
      </CardWrapper>
      
      {/* Data Management Card */}
      <CardWrapper index={5} title="Data Management" icon={Database}>
        <div style={{ color: '#a0a0a0' }}>
          {['Data Model', 'Data Access'].map((item, i) => (
            <div
              key={i}
              style={{
                padding: '10px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderRadius: '8px',
                marginBottom: '10px',
                backgroundColor: hoveredCard === 4 ? '#2a2a2a' : 'transparent',
                transition: 'background-color 0.3s ease',
              }}
            >
              <span>{item}</span>
              <ChevronRight size={20} />
            </div>
          ))}
        </div>
      </CardWrapper>

      {/* End to End Call Graphs Card */}
      <CardWrapper index={6} title="End to End Call Graphs" icon={Share2}>
        <div style={{ color: '#a0a0a0' }}>
          {['Transactions', 'Data Call Graphs'].map((item, i) => (
            <div
              key={i}
              style={{
                padding: '10px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderRadius: '8px',
                marginBottom: '10px',
                backgroundColor: hoveredCard === 5 ? '#2a2a2a' : 'transparent',
                transition: 'background-color 0.3s ease',
              }}
            >
              <span>{item}</span>
              <ChevronRight size={20} />
            </div>
          ))}
        </div>
      </CardWrapper>
    </div>
  );
};

export default MainView;