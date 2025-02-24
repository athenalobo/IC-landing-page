import { Box, Toolbar, Typography, IconButton, Avatar } from '@mui/material';
import { Settings as SettingsIcon } from '@mui/icons-material';
import Navigation from './Navigation';

const Header = ({ activeSection, setActiveSection, handleProfileClick }) => {
    return (
        <Box
            component="header"
            sx={{
                bgcolor: '#1a1f2b',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                position: 'sticky',
                top: 0,
                zIndex: 1100,
            }}
        >
            <Toolbar sx={{ minHeight: '64px !important' }}>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ color: 'white', fontWeight: 600, mr: 4 }}
                >
                    CAST Imaging
                </Typography>

                <Navigation
                    activeSection={activeSection}
                    setActiveSection={setActiveSection}
                />

                <Box sx={{ flexGrow: 1 }} />

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <IconButton
                        size="small"
                        edge="end"
                        aria-label="settings"
                        sx={{ color: 'grey.400' }}
                    >
                        <SettingsIcon />
                    </IconButton>
                    <IconButton
                        size="small"
                        edge="end"
                        onClick={handleProfileClick}
                        sx={{ ml: 1 }}
                    >
                        <Avatar
                            sx={{
                                width: 32,
                                height: 32,
                                bgcolor: '#9333ea',
                                fontSize: '0.875rem',
                            }}
                        >
                            OB
                        </Avatar>
                    </IconButton>
                </Box>
            </Toolbar>
        </Box>
    );
};

export default Header;