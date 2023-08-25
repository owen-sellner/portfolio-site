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
            <Box sx={{ position: 'fixed', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                <img src={compassIcon} style={{ width: '70px', height: '70px' }} />
                <Typography variant="navText">Home</Typography>
                <h2>About</h2>
                <h1 style={{ fontFamily: "Verdana", fontSize: 25}}>Projects</h1>
                <h1 style={{ fontFamily: "Verdana", fontSize: 25 }}>Resume</h1>
                <IconButton onClick={toggleTheme}>
                    {theme ? 
                        <img src={sunIcon} style={{ width: '40px', height: '40px' }} /> 
                        : <img src={moonIcon} style={{ width: '40px', height: '40px' }} />}
                </IconButton>
            </Box>
        </>
    );
};

export default NavBar;
