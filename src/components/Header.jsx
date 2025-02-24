import { Box, Toolbar, Typography, IconButton, Avatar } from '@mui/material';
import { Settings as SettingsIcon } from '@mui/icons-material';
import { StyledAppBar } from './styles';
import Navigation from './Navigation';

const Header = ({ activeSection, setActiveSection, handleProfileClick }) => {
    return (
        <StyledAppBar position="fixed" elevation={0}>
            <Toolbar sx={{
                height: 64,
                px: 2,
                gap: 2,
                justifyContent: 'space-between'
            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5
                }}>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            fontWeight: 600,
                            fontSize: '1rem',
                            color: 'white',
                            letterSpacing: '-0.01em'
                        }}
                    >
                        CAST Imaging
                    </Typography>
                </Box>

                <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <IconButton
                        size="small"
                        sx={{
                            color: 'rgba(255, 255, 255, 0.7)',
                            '&:hover': {
                                color: 'white',
                                bgcolor: 'rgba(255, 255, 255, 0.05)'
                            }
                        }}
                    >
                        <SettingsIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                        size="small"
                        onClick={handleProfileClick}
                        sx={{
                            p: 0,
                            '&:hover': {
                                bgcolor: 'transparent'
                            }
                        }}
                    >
                        <Avatar sx={{
                            bgcolor: '#8b5cf6',
                            width: 32,
                            height: 32,
                            fontSize: '0.875rem',
                            fontWeight: 500
                        }}>
                            OB
                        </Avatar>
                    </IconButton>
                </Box>
            </Toolbar>
        </StyledAppBar>
    );
};

export default Header;