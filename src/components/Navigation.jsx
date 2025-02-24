import PropTypes from 'prop-types';
import { ButtonGroup } from '@mui/material';
import { NavButton } from './styles';

const Navigation = ({ activeSection, setActiveSection }) => {
    const sections = ['Applications', 'Analysis tools', 'Members'];

    return (
        <ButtonGroup
            sx={{
                // bgcolor: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '12px',
                padding: '4px',
                // border: '1px solid rgba(255, 255, 255, 0.05)'
            }}
        >
            {sections.map((section) => (
                <NavButton
                    key={section}
                    active={activeSection === section.toLowerCase()}
                    onClick={() => setActiveSection(section.toLowerCase())}
                    sx={{
                        px: 2,
                        py: 1,
                        minHeight: 36,
                        fontSize: '0.875rem',
                        fontWeight: 500
                    }}
                >
                    {section}
                </NavButton>
            ))}
        </ButtonGroup>
    );
};

Navigation.propTypes = {
    activeSection: PropTypes.string.isRequired,
    setActiveSection: PropTypes.func.isRequired,
};

export default Navigation;