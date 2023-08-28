import { useContext } from 'react';
import ThemeContext from '../theme/ThemeContext';
import { Drawer, IconButton, Typography, Box } from '@mui/material';
import { Link } from 'react-scroll';
import sunIcon from '../icons/sun.svg';
import moonIcon from '../icons/moon.svg';

function NavDrawer({ isOpen, toggleOpen }) {

    const { theme, toggleTheme } = useContext(ThemeContext);

    const BACKGROUND = theme ? '#000000' : '#ffffff';

    const handleClose = () => {
        toggleOpen();
    };

    const handleToggle = () => {
        toggleTheme();
        toggleOpen();
    };

    return (
        <>
            <Drawer anchor='right' open={isOpen} onClose={handleClose} PaperProps={{ sx: { width: '50%', backgroundColor: BACKGROUND } }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', mt: '10vh', height: '80vh', justifyContent: 'space-around', alignItems: 'center' }}>
                    <Link onClick={handleClose} activeStyle={{ color: '#45AAB8' }} style={{ cursor: 'pointer' }} smooth spy to="home">
                        <Typography variant="navText">Home</Typography>
                    </Link>
                    <Link onClick={handleClose} activeStyle={{ color: '#45AAB8' }} style={{ cursor: 'pointer' }} smooth spy to="about">
                        <Typography variant="navText">About</Typography>
                    </Link>
                    <Link onClick={handleClose} activeStyle={{ color: '#45AAB8' }} style={{ cursor: 'pointer' }} smooth spy to="experience">
                        <Typography variant="navText">Experience</Typography>
                    </Link>
                    <Link onClick={handleClose} activeStyle={{ color: '#45AAB8' }} style={{ cursor: 'pointer' }} smooth spy to="projects">
                        <Typography variant="navText">Projects</Typography>
                    </Link>
                    <IconButton onClick={handleToggle}>
                        {theme ?
                            <img src={sunIcon} style={{ width: '40px', height: '40px' }} />
                            : <img src={moonIcon} style={{ width: '40px', height: '40px' }} />}
                    </IconButton>
                </Box>
            </Drawer >
        </>
    );
};

export default NavDrawer;
