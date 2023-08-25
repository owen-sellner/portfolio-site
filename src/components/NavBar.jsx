import { useContext } from 'react'
import ThemeContext from '../theme/ThemeContext';
import { Box, Link, IconButton, Typography, useTheme } from '@mui/material';
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
                    <Typography variant="navText">Home</Typography>
                    <Typography variant="navText">About</Typography>
                    <Typography variant="navText">Projects</Typography>
                    <Typography variant="navText">Resume</Typography>
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
