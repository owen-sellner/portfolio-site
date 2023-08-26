import { useContext } from 'react';
import ThemeContext from '../theme/ThemeContext';
import { Box, IconButton, Typography } from '@mui/material';
import { Link } from 'react-scroll';
import compassIcon from '../icons/compass.svg';
import sunIcon from '../icons/sun.svg';
import moonIcon from '../icons/moon.svg';

function NavBar() {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <>
            <Box sx={{ height: '10vh', display: 'flex', alignItems: 'center' }}>
                <Box sx={{ position: 'fixed', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                    <img src={compassIcon} style={{ width: '70px', height: '70px' }} />
                    <Link activeStyle={{ color: '#45AAB8'}} style={{ cursor: 'pointer' }} smooth spy to="home">
                        <Typography variant="navText">Home</Typography>
                    </Link>
                    <Link activeStyle={{ color: '#45AAB8'}} style={{ cursor: 'pointer' }} smooth spy to="about">
                        <Typography variant="navText">About</Typography>
                    </Link>
                    <Link activeStyle={{ color: '#45AAB8'}} style={{ cursor: 'pointer' }} smooth spy to="experience">
                        <Typography variant="navText">Experience</Typography>
                    </Link>
                    <Link activeStyle={{ color: '#45AAB8'}} style={{ cursor: 'pointer' }} smooth spy to="projects">
                        <Typography variant="navText">Projects</Typography>
                    </Link>
                    <IconButton onClick={toggleTheme}>
                        {theme ?
                            <img src={sunIcon} style={{ width: '40px', height: '40px' }} />
                            : <img src={moonIcon} style={{ width: '40px', height: '40px' }} />}
                    </IconButton>
                </Box>
            </Box>
        </>
    );
};

export default NavBar;
