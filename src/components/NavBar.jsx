import { useContext, useEffect } from 'react';
import ThemeContext from '../theme/ThemeContext';
import { Box, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-scroll';
import compassIcon from '../icons/compass.svg';
import sunIcon from '../icons/sun.svg';
import moonIcon from '../icons/moon.svg';
import MenuIcon from '../icons/MenuIcon';

function NavBar() {

    const { theme, toggleTheme } = useContext(ThemeContext);

    const isMobile = useMediaQuery(useTheme().breakpoints.down("md"));

    useEffect(() => {
        console.log(isMobile);
    }, [isMobile])

    return (
        <>
            <Box sx={{ height: '10vh', display: 'flex', alignItems: 'center' }}>
                <Box style={{ zIndex: 99999 }} sx={{ position: 'fixed', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                    <img src={compassIcon} style={{ width: '70px', height: '70px' }} />
                    <Link activeStyle={{ color: '#45AAB8' }} style={{ cursor: 'pointer' }} smooth spy to="home">
                        <Typography variant="navText">Home</Typography>
                    </Link>
                    <Link activeStyle={{ color: '#45AAB8' }} style={{ cursor: 'pointer' }} smooth spy to="about">
                        <Typography variant="navText">About</Typography>
                    </Link>
                    <Link activeStyle={{ color: '#45AAB8' }} style={{ cursor: 'pointer' }} smooth spy to="experience">
                        <Typography variant="navText">Experience</Typography>
                    </Link>
                    <Link activeStyle={{ color: '#45AAB8' }} style={{ cursor: 'pointer' }} smooth spy to="projects">
                        <Typography variant="navText">Projects</Typography>
                    </Link>
                    <IconButton onClick={toggleTheme}>
                        {theme ?
                            <img src={sunIcon} style={{ width: '40px', height: '40px' }} />
                            : <img src={moonIcon} style={{ width: '40px', height: '40px' }} />}
                    </IconButton>
                    <IconButton onClick={toggleTheme}>
                        <MenuIcon stroke={theme ? '#ffffff' : '#525252'} />
                    </IconButton>

                </Box>
            </Box>
        </>
    );
};

export default NavBar;
