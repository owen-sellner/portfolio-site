import { useContext } from 'react';
import ThemeContext from '../theme/ThemeContext';
import { Box, IconButton, useMediaQuery, useTheme } from '@mui/material';
import compassIcon from '../icons/compass.svg';
import MenuIcon from '../icons/MenuIcon';
import NavLinks from './NavLinks';

function NavBar() {

    const { theme, toggleTheme } = useContext(ThemeContext);

    const isMobile = useMediaQuery(useTheme().breakpoints.down("sm"));

    return (
        <>
            <Box sx={{ height: '10vh', display: 'flex', alignItems: 'center' }}>
                {isMobile ?
                    <Box
                        style={{ zIndex: 99999 }}
                        sx={{
                            position: 'static',
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            px: 3
                        }}
                    >
                        <img src={compassIcon} style={{ width: '50px', height: '50px' }} />
                        <IconButton onClick={toggleTheme}>
                            <MenuIcon stroke={theme ? '#ffffff' : '#525252'} />
                        </IconButton>
                    </Box>
                    :
                    <Box
                        style={{ zIndex: 99999 }}
                        sx={{
                            position: 'fixed',
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-around'
                        }}
                    >
                        <img src={compassIcon} style={{ width: '70px', height: '70px' }} />
                        <NavLinks />
                    </Box>
                }
            </Box>
        </>
    );
};

export default NavBar;
